export type FeedStatus = "live" | "upcoming" | "in-progress";

export type HomeFeedItem = {
  id: string;
  title: string;
  description: string;
  status?: FeedStatus;
  href: string;
  dateLabel?: string;
};

export const FORUM_FEED: HomeFeedItem[] = [
  {
    id: "telegram-hub",
    title: "Telegram community hub",
    description:
      "Daily conversation, event reminders, and peer connection on @AURA_MHP.",
    status: "live",
    href: "https://t.me/AURA_MHP",
  },
];

export const PROGRAMS_FEED: HomeFeedItem[] = [
  {
    id: "family-time",
    title: "Weekly Family Time",
    description:
      "Open sessions for families to talk about stress and connection at home.",
    status: "live",
    href: "/programs#family-time",
    dateLabel: "Every week",
  },
  {
    id: "virtual-trainings",
    title: "Virtual trainings",
    description:
      "Online workshops on wellbeing, communication, and stigma reduction.",
    href: "/programs#virtual-trainings",
  },
  {
    id: "in-person",
    title: "In-person trainings",
    description:
      "Facilitated community sessions across Ethiopian neighborhoods.",
    href: "/programs#in-person-trainings",
  },
];

export function statusLabel(status: FeedStatus): string {
  switch (status) {
    case "live":
      return "Live";
    case "upcoming":
      return "Upcoming";
    case "in-progress":
      return "In progress";
  }
}
