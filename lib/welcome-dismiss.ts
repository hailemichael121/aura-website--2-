const STORAGE_KEY = "aura-welcome-shown";

export function hasSeenWelcome(): boolean {
  if (typeof window === "undefined") return true;

  try {
    return localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return true;
  }
}

export function setWelcomeSeen(): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(STORAGE_KEY, "true");
  } catch {
    // ignore quota / private mode
  }
}
