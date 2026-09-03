"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { getActiveCampaign } from "@/lib/site-campaigns";
import { shouldShowCampaignPopup } from "@/lib/campaign-dismiss";
import { hasSeenWelcome } from "@/lib/welcome-dismiss";
import CampaignBanner from "@/components/campaign-banner";
import WelcomeModal from "@/components/welcome-modal";

/** Home-page only: campaign popup when eligible, otherwise welcome once ever. */
export default function SiteEntryOverlay() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const activeCampaign = useMemo(() => getActiveCampaign(), []);
  const [showCampaign, setShowCampaign] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setShowCampaign(false);
      setShowWelcome(false);
      setReady(true);
      return;
    }

    if (activeCampaign && shouldShowCampaignPopup(activeCampaign.id)) {
      setShowCampaign(true);
      setShowWelcome(false);
      setReady(true);
      return;
    }

    setShowCampaign(false);
    setShowWelcome(!hasSeenWelcome());
    setReady(true);
  }, [isHome, activeCampaign]);

  if (!isHome || !ready) return null;

  if (showCampaign && activeCampaign) {
    return <CampaignBanner campaign={activeCampaign} />;
  }

  if (showWelcome) {
    return <WelcomeModal />;
  }

  return null;
}
