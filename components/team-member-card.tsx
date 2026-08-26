import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { InstagramIcon, TelegramIcon } from "@/components/brand-icons";

interface TeamMemberCardProps {
  initials: string;
  name: string;
  title: string;
  bio: string;
  tags?: string[];
  photo?: string;
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
  tags = [],
  photo,
  instagram,
  telegram,
  icon: Icon,
  highlight = false,
}: TeamMemberCardProps) {
  return (
    <article
      className={`rounded-lg border p-6 transition ${
        highlight
          ? "border-primary bg-muted"
          : "border-border bg-card"
      }`}
    >
      <div className="flex items-start gap-4">
        {photo ? (
          <Image
            src={photo}
            alt={name}
            width={56}
            height={56}
            className="h-14 w-14 shrink-0 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-base font-semibold text-primary-foreground">
            {initials}
          </div>
        )}
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="mt-0.5 text-sm text-primary">{title}</p>
        </div>
      </div>

      {Icon ? (
        <div className="mt-4 inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-1 text-sm text-muted-foreground">
          <Icon className="h-4 w-4 text-muted-foreground" />
          Community mental health leadership
        </div>
      ) : null}

      <p className="mt-4 leading-relaxed text-muted-foreground">{bio}</p>

      {tags.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-background px-2.5 py-0.5 text-xs font-medium text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-3">
        {instagram ? (
          <a
            href={`https://instagram.com/${instagram.replace("@", "")}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1.5 text-sm text-muted-foreground hover:border-primary hover:text-foreground"
          >
            <InstagramIcon className="h-3.5 w-3.5" />
            {instagram}
          </a>
        ) : null}
        {telegram ? (
          <a
            href={`https://t.me/${telegram.replace("@", "")}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1.5 text-sm text-muted-foreground hover:border-primary hover:text-foreground"
          >
            <TelegramIcon className="h-3.5 w-3.5" />
            {telegram}
          </a>
        ) : null}
      </div>

      {highlight ? (
        <div className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
          <BadgeCheck className="h-3.5 w-3.5" />
          Recognized for outstanding contributions to community mental health
        </div>
      ) : null}
    </article>
  );
}
