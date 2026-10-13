import resourceCatalog from "../public/Resource_pdfs/metadata.json";

export type ResourceChapter = {
  title: string;
  page?: string;
};

export type ResourceCreator = {
  name: string;
  role: string;
};

export type ResourceRecord = {
  id: string;
  hosting_status: "host" | "link" | "permission-pending" | string;
  category: string;
  cover_image: string | null;
  cover_alt: string | null;
  title: string;
  creators: ResourceCreator[];
  publication_year: number | null;
  pages: number | null;
  language?: string;
  description: string;
  summary: string;
  audience: string[];
  relevance: string;
  chapters: ResourceChapter[];
  subjects: string[];
  source_url: string;
  source_label?: string;
  source_attribution?: string;
  highlights?: string[];
  highlights_citation?: string;
  local_file?: string;
  content_notice?: string;
  edition?: string;
  rights: {
    license: string;
    license_summary: string | null;
    license_url: string | null;
    suggested_citation: string | null;
    hosting_recommendation: string;
  };
};

export function getAllResources(): ResourceRecord[] {
  return resourceCatalog.resources as ResourceRecord[];
}

export function getResourceById(id: string): ResourceRecord | undefined {
  return getAllResources().find((resource) => resource.id === id);
}

export function getResourceCategories(): string[] {
  return [...new Set(getAllResources().map((resource) => resource.category))];
}

export type HostingStatus = "host" | "link" | "permission-pending";

export function getHostingStatus(status: string): HostingStatus {
  if (status === "host" || status === "permission-pending") return status;
  return "link";
}

export function getPrimaryCreators(resource: ResourceRecord): string {
  const authors = resource.creators.filter(
    (creator) => creator.role === "author" || creator.role === "editor",
  );

  if (authors.length > 0) {
    return authors.map((creator) => creator.name).join(", ");
  }

  return resource.creators[0]?.name ?? "Contributor details unavailable";
}

export function getResourceAccess(resource: ResourceRecord) {
  const status = getHostingStatus(resource.hosting_status);
  const localFile =
    status === "host" && resource.local_file
      ? `/Resource_pdfs/${encodeURIComponent(resource.local_file)}`
      : undefined;
  const officialUrl = resource.source_url;
  const hasDownload = Boolean(localFile);

  return {
    status,
    localFile,
    officialUrl,
    hasDownload,
    primaryHref: localFile ?? officialUrl ?? "#",
  };
}
