export function resourceCoverTransitionName(id: string) {
  return `resource-cover-${id.replace(/[^a-zA-Z0-9-_]/g, "-")}`;
}
