#!/usr/bin/env python3
"""
AURA Media Optimization Script
==============================
Traverses directories to:
1. Convert all JPG, PNG, and JPEG images to lightweight WebP format.
2. Optimize MP4/MOV videos for web streaming using FFmpeg (H.264, CRF 28, faststart).
3. Optionally update source code file references (.jpg/.png -> .webp).

Usage:
  python3 scripts/optimize-media.py
  python3 scripts/optimize-media.py --images-dir public/images --videos-dir public/videos
  python3 scripts/optimize-media.py --quality 82 --update-code
"""

import argparse
import glob
import os
import shutil
import subprocess
import sys

try:
    from PIL import Image
except ImportError:
    print("[Error] Pillow is required. Install it using: pip install pillow")
    sys.exit(1)


def format_bytes(size_bytes: int) -> str:
    """Format bytes into a human-readable string."""
    if size_bytes < 1024:
        return f"{size_bytes} B"
    elif size_bytes < 1024 * 1024:
        return f"{size_bytes / 1024:.1f} KB"
    else:
        return f"{size_bytes / (1024 * 1024):.2f} MB"


def convert_images(images_dir: str, quality: int = 82, keep_originals: bool = False, update_code: bool = True):
    """Scan and convert images to WebP format."""
    if not os.path.exists(images_dir):
        print(f"[Warn] Images directory not found: {images_dir}")
        return []

    print(f"\nScanning images in '{images_dir}'...")
    image_extensions = {".jpg", ".jpeg", ".png", ".bmp", ".tiff"}
    converted_records = []
    total_orig = 0
    total_new = 0

    for root, _, files in os.walk(images_dir):
        for file in files:
            ext = os.path.splitext(file)[1].lower()
            if ext in image_extensions:
                src_path = os.path.join(root, file)
                out_path = os.path.splitext(src_path)[0] + ".webp"

                orig_size = os.path.getsize(src_path)
                total_orig += orig_size

                try:
                    with Image.open(src_path) as img:
                        # Preserve transparency for RGBA / paletted images
                        if img.mode in ("RGBA", "LA") or (img.mode == "P" and "transparency" in img.info):
                            img.save(out_path, "WEBP", quality=quality, method=6)
                        else:
                            img_rgb = img.convert("RGB")
                            img_rgb.save(out_path, "WEBP", quality=quality, method=6)

                    new_size = os.path.getsize(out_path)
                    total_new += new_size
                    pct = ((orig_size - new_size) / orig_size) * 100 if orig_size > 0 else 0

                    rel_src = os.path.relpath(src_path)
                    rel_out = os.path.relpath(out_path)
                    print(f"  ✓ {rel_src} -> {os.path.basename(rel_out)}: {format_bytes(orig_size)} -> {format_bytes(new_size)} (-{pct:.1f}%)")

                    if not keep_originals and src_path != out_path:
                        os.remove(src_path)

                    converted_records.append((src_path, out_path))

                except Exception as e:
                    print(f"  ✗ Failed to convert {src_path}: {e}")

    if converted_records:
        overall_pct = ((total_orig - total_new) / total_orig) * 100 if total_orig > 0 else 0
        print(f"\nImages Total: {format_bytes(total_orig)} -> {format_bytes(total_new)} (Saved {format_bytes(total_orig - total_new)} / {overall_pct:.1f}%)")
    else:
        print("  No unoptimized images found.")

    if update_code and converted_records:
        update_code_references(converted_records)

    return converted_records


def optimize_videos(videos_dir: str, crf: int = 28):
    """Scan and optimize MP4/MOV videos with FFmpeg for web streaming."""
    if not os.path.exists(videos_dir):
        print(f"[Warn] Videos directory not found: {videos_dir}")
        return

    # Check ffmpeg
    if not shutil.which("ffmpeg"):
        print("[Warn] FFmpeg not found in PATH. Skipping video optimization.")
        return

    print(f"\nScanning videos in '{videos_dir}'...")
    video_extensions = {".mp4", ".mov", ".m4v"}
    total_orig = 0
    total_new = 0
    count = 0

    for root, _, files in os.walk(videos_dir):
        for file in files:
            ext = os.path.splitext(file)[1].lower()
            if ext in video_extensions and not file.endswith(".tmp.mp4"):
                src_path = os.path.join(root, file)
                tmp_path = src_path + ".tmp.mp4"
                orig_size = os.path.getsize(src_path)
                total_orig += orig_size

                # FFmpeg optimization command:
                # -crf 28: high visual quality for web background/hero
                # -preset slow: better compression efficiency
                # -pix_fmt yuv420p: universal browser/mobile playback
                # -movflags +faststart: enables instant playback before full download
                cmd = [
                    "ffmpeg", "-y", "-i", src_path,
                    "-c:v", "libx264", "-crf", str(crf), "-preset", "slow",
                    "-pix_fmt", "yuv420p", "-movflags", "+faststart",
                    "-an", tmp_path
                ]

                try:
                    subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
                    new_size = os.path.getsize(tmp_path)

                    # Only replace if the optimized video is smaller
                    if new_size < orig_size:
                        os.replace(tmp_path, src_path)
                        total_new += new_size
                        pct = ((orig_size - new_size) / orig_size) * 100
                        print(f"  ✓ {os.path.relpath(src_path)}: {format_bytes(orig_size)} -> {format_bytes(new_size)} (-{pct:.1f}%)")
                    else:
                        if os.path.exists(tmp_path):
                            os.remove(tmp_path)
                        total_new += orig_size
                        print(f"  • {os.path.relpath(src_path)}: Already optimal ({format_bytes(orig_size)})")
                    count += 1
                except Exception as e:
                    if os.path.exists(tmp_path):
                        os.remove(tmp_path)
                    print(f"  ✗ Failed to optimize {src_path}: {e}")

    if count > 0 and total_orig > 0:
        overall_pct = ((total_orig - total_new) / total_orig) * 100
        print(f"\nVideos Total: {format_bytes(total_orig)} -> {format_bytes(total_new)} (Saved {format_bytes(total_orig - total_new)} / {overall_pct:.1f}%)")
    else:
        print("  No unoptimized videos found.")


def update_code_references(converted_records):
    """Automatically update file extensions in source code from .jpg/.png to .webp."""
    print("\nChecking code references to update...")
    code_extensions = [".ts", ".tsx", ".js", ".jsx", ".css", ".md", ".json"]
    code_files = []

    for ext in code_extensions:
        for f in glob.glob(f"**/*{ext}", recursive=True):
            if not any(f.startswith(skip) for skip in ["node_modules", ".next", ".git"]):
                code_files.append(f)

    replacements = []
    for src, out in converted_records:
        old_name = os.path.basename(src)
        new_name = os.path.basename(out)
        if old_name != new_name:
            replacements.append((old_name, new_name))

    updated_files_count = 0
    for cf in code_files:
        try:
            with open(cf, "r", encoding="utf-8", errors="ignore") as f:
                content = f.read()

            new_content = content
            changed = False
            for old_name, new_name in replacements:
                if old_name in new_content:
                    new_content = new_content.replace(old_name, new_name)
                    changed = True

            if changed:
                with open(cf, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"  ✓ Updated references in {cf}")
                updated_files_count += 1
        except Exception as e:
            print(f"  ✗ Error updating {cf}: {e}")

    if updated_files_count == 0:
        print("  All source code references already up to date.")


def main():
    parser = argparse.ArgumentParser(description="Optimize images and videos for AURA website")
    parser.add_argument("--images-dir", default="public/images", help="Path to images folder (default: public/images)")
    parser.add_argument("--videos-dir", default="public/videos", help="Path to videos folder (default: public/videos)")
    parser.add_argument("--quality", type=int, default=82, help="WebP quality 1-100 (default: 82)")
    parser.add_argument("--crf", type=int, default=28, help="Video CRF quality factor (default: 28)")
    parser.add_argument("--keep-originals", action="store_true", help="Keep original JPG/PNG image files")
    parser.add_argument("--no-code-update", action="store_true", help="Skip updating source code references")
    parser.add_argument("--skip-videos", action="store_true", help="Skip video optimization")

    args = parser.parse_args()

    print("=" * 60)
    print("        AURA Media Optimization & Conversion Tool")
    print("=" * 60)

    # 1. Convert images
    convert_images(
        images_dir=args.images_dir,
        quality=args.quality,
        keep_originals=args.keep_originals,
        update_code=not args.no_code_update,
    )

    # 2. Optimize videos
    if not args.skip_videos:
        optimize_videos(videos_dir=args.videos_dir, crf=args.crf)

    print("\n✨ Media optimization complete!\n")


if __name__ == "__main__":
    main()
