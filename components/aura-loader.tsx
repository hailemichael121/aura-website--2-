import Image from "next/image";

type AuraLoaderProps = {
  message?: string;
  fullScreen?: boolean;
};

function DotLoader() {
  return (
    <div className="flex items-center justify-center gap-1.5" aria-hidden>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-2 w-2 rounded-full bg-primary animate-bounce"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}

export default function AuraLoader({
  message = "Loading...",
  fullScreen = false,
}: AuraLoaderProps) {
  return (
    <div
      className={
        fullScreen
          ? "flex min-h-screen items-center justify-center bg-background px-4"
          : "flex min-h-[400px] items-center justify-center px-4"
      }
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex flex-col items-center text-center">
        <Image
          src="/images/aura-logo.webp"
          alt="AURA logo"
          width={56}
          height={56}
          className="h-14 w-14 object-cover"
          priority
        />
        <div className="mt-6">
          <DotLoader />
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{message}</p>
      </div>
    </div>
  );
}
