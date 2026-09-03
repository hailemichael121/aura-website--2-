const STORAGE_KEY = "aura-campaign-dismiss";
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

export type CampaignDismissState = {
  campaignId: string;
  dismissedAt: number;
};

export function getCampaignDismissState(): CampaignDismissState | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CampaignDismissState;
  } catch {
    return null;
  }
}

export function setCampaignDismissed(campaignId: string): void {
  if (typeof window === "undefined") return;

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      campaignId,
      dismissedAt: Date.now(),
    } satisfies CampaignDismissState),
  );
}

/**
 * Show the popup only when:
 * - User has never dismissed a campaign, or
 * - Active campaign is new (different id) AND at least 24h since last dismiss.
 * Never re-show the same campaign id once dismissed.
 */
export function shouldShowCampaignPopup(campaignId: string): boolean {
  const state = getCampaignDismissState();
  if (!state) return true;

  if (state.campaignId === campaignId) return false;

  return Date.now() - state.dismissedAt >= ONE_DAY_MS;
}
