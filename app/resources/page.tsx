import type { Metadata } from "next";
import resourceCatalog from "../../public/Resource_pdfs/metadata.json";
import ResourceLibrary from "@/components/resource-library";
import type { ResourceRecord } from "@/lib/resource-catalog";

export const metadata: Metadata = {
  title: "Mental Health Resources",
  description:
    "Trusted mental health guides, practical learning, and professional references—with clear source and sharing information.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return <ResourceLibrary resources={resourceCatalog.resources as ResourceRecord[]} />;
}
