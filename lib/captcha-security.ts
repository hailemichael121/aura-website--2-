import crypto from "crypto";

const SECRET_KEY =
  process.env.CAPTCHA_SECRET || "aura-anti-abuse-secret-key-2026-wellness";

// Replay prevention: store used tokens for 10 minutes
const usedTokens = new Map<string, number>();

function cleanupUsedTokens() {
  const now = Date.now();
  for (const [token, expiry] of usedTokens.entries()) {
    if (now > expiry) {
      usedTokens.delete(token);
    }
  }
}

export interface CaptchaChallenge {
  challengeId: string;
  questionText: string;
  token: string;
  timestamp: number;
}

/**
 * Generates a dynamic, tamper-proof security challenge.
 * Answer is never exposed to the client; verified via HMAC signature.
 */
export function generateChallenge(): CaptchaChallenge {
  cleanupUsedTokens();

  const words = [
    { val: 2, word: "two" },
    { val: 3, word: "three" },
    { val: 4, word: "four" },
    { val: 5, word: "five" },
    { val: 6, word: "six" },
    { val: 7, word: "seven" },
    { val: 8, word: "eight" },
    { val: 9, word: "nine" },
  ];

  const pick1 = words[Math.floor(Math.random() * words.length)];
  const pick2 = words[Math.floor(Math.random() * words.length)];
  const sum = pick1.val + pick2.val;

  const challengeId = crypto.randomBytes(8).toString("hex");
  const timestamp = Date.now();

  // Varied natural language phrasing to prevent regex scraping
  const phrasing = [
    `What is ${pick1.word} plus ${pick2.word}?`,
    `Solve: ${pick1.val} + ${pick2.word} = ?`,
    `What is ${pick1.word} + ${pick2.val}?`,
    `Calculate: ${pick1.val} + ${pick2.val}`,
  ];
  const questionText = phrasing[Math.floor(Math.random() * phrasing.length)];

  // Create HMAC signature over challengeId + answer + timestamp
  const signature = crypto
    .createHmac("sha256", SECRET_KEY)
    .update(`${challengeId}:${sum}:${timestamp}`)
    .digest("hex");

  const token = `${challengeId}.${timestamp}.${signature}`;

  return {
    challengeId,
    questionText,
    token,
    timestamp,
  };
}

export interface VerificationResult {
  valid: boolean;
  reason?: string;
}

/**
 * Cryptographically verifies the challenge solution with replay protection,
 * speed analysis (blocking sub-second bot submits), and time expiry.
 */
export function verifyChallenge(
  userAnswer: string | number | undefined,
  token: string | undefined
): VerificationResult {
  cleanupUsedTokens();

  if (!token || userAnswer === undefined || userAnswer === "") {
    return {
      valid: false,
      reason: "Please answer the security verification question above.",
    };
  }

  // 1. Replay attack check
  if (usedTokens.has(token)) {
    return {
      valid: false,
      reason: "This verification was already used. Please solve the new question.",
    };
  }

  const parts = token.split(".");
  if (parts.length !== 3) {
    return {
      valid: false,
      reason: "Verification token is malformed. Please refresh the question.",
    };
  }

  const [challengeId, tsString, signature] = parts;
  const timestamp = parseInt(tsString, 10);
  const now = Date.now();

  if (isNaN(timestamp)) {
    return { valid: false, reason: "Invalid verification timestamp." };
  }

  // 2. Expiration check (valid for 5 minutes)
  if (now - timestamp > 5 * 60 * 1000) {
    return {
      valid: false,
      reason: "Verification expired. Please click the refresh icon to get a new question.",
    };
  }

  // 3. Human interaction timing check (bots submit instantaneously in < 800ms)
  if (now - timestamp < 800) {
    return {
      valid: false,
      reason: "Verification submitted too quickly. Please try again as a human.",
    };
  }

  // 4. Validate numeric answer
  const parsedAnswer = parseInt(String(userAnswer).trim(), 10);
  if (isNaN(parsedAnswer)) {
    return {
      valid: false,
      reason: "Please enter a valid numeric answer.",
    };
  }

  // 5. Verify HMAC signature
  const expectedSignature = crypto
    .createHmac("sha256", SECRET_KEY)
    .update(`${challengeId}:${parsedAnswer}:${timestamp}`)
    .digest("hex");

  if (signature !== expectedSignature) {
    return {
      valid: false,
      reason: "Incorrect security answer. Please check your math and try again.",
    };
  }

  // Register token in replay blacklist for 10 minutes
  usedTokens.set(token, now + 10 * 60 * 1000);

  return { valid: true };
}
