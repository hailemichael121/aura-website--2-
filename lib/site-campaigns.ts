export type PromotionKind = "campaign" | "event";

export type SitePromotion = {
  id: string;
  kind: PromotionKind;
  enabled: boolean;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href?: string;
  startsAt?: string;
  endsAt?: string;
  popup?: boolean;
};

export const SITE_PROMOTIONS: SitePromotion[] = [
  {
    id: "suicide-prevention-awareness-month-2026",
    kind: "campaign",
    enabled: true,
    popup: true,
    title: "Suicide Prevention Awareness Month",
    description:
      "September campaign with AURA — awareness ribbon, Amharic outreach, and a call to change the narrative on suicide across Ethiopian communities.",
    image: "/images/campaigns/campaign-suicide-prevention-awareness-month.jpg",
    imageAlt:
      "AURA September Suicide Prevention Awareness Month banner with awareness ribbon",
    href: "/campaign",
    startsAt: "2026-09-01",
    endsAt: "2026-09-30",
  },
  {
    id: "monday-reminder-pause",
    kind: "campaign",
    enabled: true,
    title: "Monday Reminder",
    description:
      "A gentle weekly reminder: you are allowed to pause without feeling guilty. Part of AURA’s Mental Wellness for All message.",
    image: "/images/campaigns/campaign-monday-reminder-pause.jpg",
    imageAlt:
      "AURA Monday Reminder campaign — Mental Wellness for All tagline",
    href: "/campaign",
  },
  {
    id: "volunteers-mental-health-action-lab-2026",
    kind: "campaign",
    enabled: true,
    title: "Call for Volunteers — Mental Health Action Lab",
    description:
      "Volunteers needed for the National Mental Health Action Lab this October at Kuriftu Resort, Entoto. Apply by September 9, 2026.",
    image: "/images/campaigns/campaign-volunteers-mental-health-action-lab.jpg",
    imageAlt:
      "AURA call for volunteers for the National Mental Health Action Lab",
    href: "/campaign",
    startsAt: "2026-09-01",
    endsAt: "2026-10-31",
  },
  {
    id: "family-time-hidden-weight-sep-4-2026",
    kind: "event",
    enabled: true,
    title: "Family Time — The Hidden Weight of Carrying Everything Alone",
    description:
      "AURA Family Time session on September 4, 2026 at 9:00 PM (3:00 ምሽት), moderated by Sosina Adane. Join on Telegram @AURA_MHP.",
    image: "/images/campaigns/event-family-time-hidden-weight-sep-4-2026.jpg",
    imageAlt:
      "AURA Family Time event poster with moderator Sosina Adane, September 4 2026",
    href: "/programs",
    startsAt: "2026-09-04",
    endsAt: "2026-09-04",
  },
  {
    id: "virtual-changing-suicide-narrative-sept-6-2026",
    kind: "event",
    enabled: true,
    title: "Virtual Event — Changing the Narrative on Suicide",
    description:
      "Live on Google Meet, September 6, 2026 at 7:00 PM EAT. Panel discussion on changing the narrative on suicide.",
    image: "/images/campaigns/event-virtual-changing-suicide-narrative-sept-6-2026.jpg",
    imageAlt:
      "Virtual event poster — Changing the Narrative on Suicide",
    href: "/programs",
    startsAt: "2026-09-06",
    endsAt: "2026-09-06",
  },
  {
    id: "virtual-suicide-narrative-register",
    kind: "event",
    enabled: true,
    title: "Register — Changing the Narrative on Suicide",
    description:
      "Registration for the September 6 virtual event with AURA. Live on Google Meet, 7:00 PM EAT.",
    image: "/images/campaigns/event-virtual-suicide-narrative-register.jpg",
    imageAlt:
      "Register now banner for the virtual event Changing the Narrative on Suicide",
    href: "/programs",
    startsAt: "2026-09-01",
    endsAt: "2026-09-06",
  },
];

function isWithinDates(item: SitePromotion, now: Date): boolean {
  if (item.startsAt) {
    const start = new Date(`${item.startsAt}T00:00:00`);
    if (now < start) return false;
  }
  if (item.endsAt) {
    const end = new Date(`${item.endsAt}T23:59:59.999`);
    if (now > end) return false;
  }
  return true;
}

export function getActivePromotions(
  kind?: PromotionKind,
  now = new Date(),
): SitePromotion[] {
  return SITE_PROMOTIONS.filter((item) => {
    if (!item.enabled) return false;
    if (kind && item.kind !== kind) return false;
    return isWithinDates(item, now);
  });
}

export function getActiveCampaign(now = new Date()): SitePromotion | null {
  for (const item of SITE_PROMOTIONS) {
    if (!item.enabled || !item.popup) continue;
    if (!isWithinDates(item, now)) continue;
    return item;
  }
  return null;
}

export type SiteCampaign = SitePromotion;
