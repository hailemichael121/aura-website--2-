import type { LucideIcon } from "lucide-react";
import { BadgeCheck, Instagram, MessageCircle } from "lucide-react";

interface TeamMemberCardProps {
  initials: string;
  name: string;
  title: string;
  bio: string;
  tags: string[];
  instagram?: string;
  telegram?: string;
  icon?: LucideIcon;
  highlight?: boolean;
}

export default function TeamMemberCard({
  initials,
  name,
  title,
  bio,
  tags,
  instagram,
  telegram,
  icon: Icon,
  highlight = false,
}: TeamMemberCardProps) {
  return (
    <article
      className={`rounded-3xl border p-6 backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-lg md:p-7 ${
        highlight
          ? "border-primary/30 bg-gradient-to-br from-primary/15 via-card to-[#0096ff]/10 shadow-lg"
          : "border-border bg-card/80"
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#0096ff] text-xl font-semibold text-white shadow-md">
          {initials}
        </div>
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">{name}</h3>
          <p className="mt-1 text-sm text-primary">{title}</p>
        </div>
      </div>

      {Icon ? (
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-1 text-sm text-muted-foreground">
          <Icon className="h-4 w-4 text-primary" />
          Community mental health leadership
        </div>
      ) : null}

      <p className="mt-5 leading-relaxed text-muted-foreground">{bio}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {instagram ? (
          <a
            href={`https://instagram.com/${instagram.replace("@", "")}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground hover:border-primary hover:text-foreground"
          >
            <Instagram className="h-4 w-4" />
            {instagram}
          </a>
        ) : null}
        {telegram ? (
          <a
            href={`https://t.me/${telegram.replace("@", "")}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground hover:border-primary hover:text-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            {telegram}
          </a>
        ) : null}
      </div>

      {highlight ? (
        <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
          <BadgeCheck className="h-4 w-4" />
          Recognized for outstanding contributions to community mental health
        </div>
      ) : null}
    </article>
  );
}
