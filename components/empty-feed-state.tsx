import ComingSoonPanel from "@/components/coming-soon-panel";

type EmptyFeedStateProps = {
  title: "Coming soon" | "Nothing found";
  message?: string;
  eyebrow?: string;
};

export default function EmptyFeedState({
  title,
  eyebrow,
}: EmptyFeedStateProps) {
  return (
    <div className="border border-border bg-muted/10">
      <ComingSoonPanel variant="section" eyebrow={eyebrow} title={title} />
    </div>
  );
}
