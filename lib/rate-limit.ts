interface RateLimitRecord {
  lastSubmission: number;
  count: number;
  resetTime: number;
}

// Global in-memory cache for IP tracking
const ipCache = new Map<string, RateLimitRecord>();

const CLEANUP_INTERVAL_MS = 5 * 60 * 1000; // 5 minutes
let lastCleanup = Date.now();

function cleanupStaleRecords() {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
  lastCleanup = now;

  for (const [ip, record] of ipCache.entries()) {
    if (now > record.resetTime && now - record.lastSubmission > 60 * 60 * 1000) {
      ipCache.delete(ip);
    }
  }
}

export interface RateLimitOptions {
  /** Minimum seconds between consecutive requests from the same IP */
  cooldownSeconds?: number;
  /** Maximum allowed requests in window */
  maxRequests?: number;
  /** Window duration in seconds */
  windowSeconds?: number;
}

export interface RateLimitResult {
  allowed: boolean;
  remainingSeconds?: number;
  message?: string;
}

export function checkRateLimit(
  ip: string,
  scope: string = "general",
  options: RateLimitOptions = {}
): RateLimitResult {
  cleanupStaleRecords();

  const key = `${scope}:${ip}`;
  const cooldownSeconds = options.cooldownSeconds ?? 60; // 60s cooldown between requests
  const maxRequests = options.maxRequests ?? 5; // max 5 submissions in 10 mins
  const windowSeconds = options.windowSeconds ?? 600; // 10 minutes window
  const now = Date.now();

  const record = ipCache.get(key);

  if (!record) {
    ipCache.set(key, {
      lastSubmission: now,
      count: 1,
      resetTime: now + windowSeconds * 1000,
    });
    return { allowed: true };
  }

  // 1. Check per-request cooldown
  const elapsedSinceLast = (now - record.lastSubmission) / 1000;
  if (elapsedSinceLast < cooldownSeconds) {
    const remaining = Math.ceil(cooldownSeconds - elapsedSinceLast);
    return {
      allowed: false,
      remainingSeconds: remaining,
      message: `Anti-spam cooldown active. Please wait ${remaining} second${remaining === 1 ? "" : "s"} before submitting again.`,
    };
  }

  // 2. Check sliding window limit
  if (now > record.resetTime) {
    record.count = 1;
    record.resetTime = now + windowSeconds * 1000;
    record.lastSubmission = now;
    return { allowed: true };
  }

  if (record.count >= maxRequests) {
    const remaining = Math.ceil((record.resetTime - now) / 1000);
    const mins = Math.max(1, Math.ceil(remaining / 60));
    return {
      allowed: false,
      remainingSeconds: remaining,
      message: `Too many submissions from your connection. Please wait ${mins} minute${mins === 1 ? "" : "s"} before trying again.`,
    };
  }

  record.count += 1;
  record.lastSubmission = now;
  return { allowed: true };
}

export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }
  const cfIp = request.headers.get("cf-connecting-ip");
  if (cfIp) {
    return cfIp.trim();
  }
  return "127.0.0.1";
}
