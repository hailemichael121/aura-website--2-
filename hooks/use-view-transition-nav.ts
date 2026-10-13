"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

export function useViewTransitionNav() {
  const router = useRouter();

  const push = useCallback(
    (href: string) => {
      if (
        typeof document !== "undefined" &&
        "startViewTransition" in document &&
        typeof document.startViewTransition === "function"
      ) {
        document.startViewTransition(() => {
          router.push(href);
        });
        return;
      }
      router.push(href);
    },
    [router],
  );

  return { push };
}
