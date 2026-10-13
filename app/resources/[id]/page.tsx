import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ResourceDetail from "@/components/resource-detail";
import { getAllResources, getResourceById } from "@/lib/resource-catalog";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return getAllResources().map((resource) => ({ id: resource.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const resource = getResourceById(id);

  if (!resource) {
    return { title: "Resource not found" };
  }

  return {
    title: resource.title,
    description: resource.summary,
    alternates: { canonical: `/resources/${resource.id}` },
  };
}

export default async function ResourceDetailPage({ params }: PageProps) {
  const { id } = await params;
  const resource = getResourceById(id);

  if (!resource) {
    notFound();
  }

  return <ResourceDetail resource={resource} />;
}
