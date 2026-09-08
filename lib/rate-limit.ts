interface TokenBucket {
  tokens: number;
  lastLeak: number;
  lastRequest: number;
}

// Global IP token bucket registry
const bucketStore = new Map<string, TokenBucket>();

const CLEANUP_INTERVAL_MS = 5 * 60 * 1000; // 5 minutes
let lastStoreCleanup = Date.now();

function cleanupStaleBuckets() {
  const now = Date.now();
  if (now - lastStoreCleanup < CLEANUP_INTERVAL_MS) return;
  lastStoreCleanup = now;

  for (const [key, bucket] of bucketStore.entries()) {
    // If inactive for > 1 hour, safely delete
    if (now - bucket.lastRequest > 60 * 60 * 1000) {
      bucketStore.delete(key);
    }
  }
}

export interface LeakyBucketOptions {
  /** Maximum burst capacity of tokens */
  capacity?: number;
  /** Seconds needed to replenish 1 token */
  refillSecondsPerToken?: number;
  /** Absolute minimum seconds between consecutive requests */
  minSpacingSeconds?: number;
}

export interface RateLimitResult {
  allowed: boolean;
  remainingSeconds?: number;
  message?: string;
}

/**
 * Token Bucket with continuous linear refill.
 * Solves fixed window reset bursts, sliding log memory leaks, and boundary spikes.
 */
export function checkRateLimit(
  ip: string,
  scope: string = "general",
  options: LeakyBucketOptions = {}
): RateLimitResult {
  cleanupStaleBuckets();

  const key = `${scope}:${ip}`;
  const capacity = options.capacity ?? 3; // Max tokens that can be accumulated
  const refillSeconds = options.refillSecondsPerToken ?? 45; // 1 token every 45 seconds
  const minSpacing = options.minSpacingSeconds ?? 30; // Minimum 30s between consecutive submissions
  const now = Date.now();

  let bucket = bucketStore.get(key);

  if (!bucket) {
    bucket = {
      tokens: capacity - 1, // First request consumes 1 token
      lastLeak: now,
      lastRequest: now,
    };
    bucketStore.set(key, bucket);
    return { allowed: true };
  }

  // 1. Check strict spacing cooldown (prevents rapid double-clicks/sub-second spam)
  const elapsedSinceLast = (now - bucket.lastRequest) / 1000;
  if (elapsedSinceLast < minSpacing) {
    const remaining = Math.ceil(minSpacing - elapsedSinceLast);
    return {
      allowed: false,
      remainingSeconds: remaining,
      message: `Anti-spam cooldown active. Please wait ${remaining} second${remaining === 1 ? "" : "s"} before submitting again.`,
    };
  }

  // 2. Continuous refill of tokens based on elapsed time (no abrupt window drops)
  const elapsedSinceRefill = (now - bucket.lastLeak) / 1000;
  const tokensToAdd = elapsedSinceRefill / refillSeconds;
  bucket.tokens = Math.min(capacity, bucket.tokens + tokensToAdd);
  bucket.lastLeak = now;

  // 3. Check if we have at least 1 token
  if (bucket.tokens < 1) {
    // Time until at least 1 full token is available
    const tokensNeeded = 1 - bucket.tokens;
    const waitSeconds = Math.ceil(tokensNeeded * refillSeconds);
    return {
      allowed: false,
      remainingSeconds: waitSeconds,
      message: `Rate limit active. Please wait ${waitSeconds} second${waitSeconds === 1 ? "" : "s"} before trying again.`,
    };
  }

  // Deduct 1 token and update request timestamp
  bucket.tokens -= 1;
  bucket.lastRequest = now;

  return { allowed: true };
}

export function getClientIp(request: Request): string {
  const cfIp = request.headers.get("cf-connecting-ip");
  if (cfIp) return cfIp.trim();

  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  return "127.0.0.1";
}
