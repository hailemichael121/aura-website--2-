import { MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface FounderCardProps {
  initials: string;
  name: string;
  role: string;
  bio: string;
  tags: string[];
  accent?: "green" | "blue";
  handle?: string;
}

const accentStyles = {
  green: {
    avatar: "from-[#3CB043] to-[#0096FF]",
    role: "text-[#1d6f40] dark:text-[#6de388]",
  },
  blue: {
    avatar: "from-[#0096FF] to-[#3CB043]",
    role: "text-[#0e67ab] dark:text-[#7bc8ff]",
  },
};

export function FounderCard({ initials, name, role, bio, tags, accent = "green", handle }: FounderCardProps) {
  const theme = accentStyles[accent];

  return (
    <article className="rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${theme.avatar} text-xl font-semibold text-white`}>
        {initials}
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className={`mt-1 text-sm font-medium ${theme.role}`}>{role}</p>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{bio}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="rounded-full">
            {tag}
          </Badge>
        ))}
      </div>
      {handle ? (
        <Button variant="outline" size="sm" className="mt-5 rounded-full bg-transparent" asChild>
          <a href={`https://instagram.com/${handle.replace("@", "")}`} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-4 w-4" />
            {handle}
          </a>
        </Button>
      ) : null}
    </article>
  );
}
