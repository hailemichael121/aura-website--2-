"use client";

import { usePathname } from "next/navigation";

export default function ResourcesTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="resource-route-in">
      {children}
    </div>
  );
}
