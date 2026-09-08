"use client";

import { useState, useEffect } from "react";
import { Loader2, CheckCircle2, Clock, Info, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ModernCaptcha, { CaptchaData } from "@/components/modern-captcha";

interface NewsletterFormProps {
  accessKey?: string;
}

const COOLDOWN_SECONDS = 45;
const STORAGE_KEY = "aura_newsletter_cooldown_until";

export default function NewsletterForm({
  accessKey = "3d128a47-d696-46ef-8dc1-8094ee35f175",
}: NewsletterFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [notice, setNotice] = useState<{ message: string; type: "info" | "warning" | "error" } | null>(null);
  const [captchaData, setCaptchaData] = useState<CaptchaData>({ token: "", answer: "", isFilled: false });
  const [highlightCaptcha, setHighlightCaptcha] = useState<boolean>(false);
  const [cooldownRemaining, setCooldownRemaining] = useState<number>(0);

  // Monitor client cooldown timer
  useEffect(() => {
    const updateCooldown = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const expiresAt = parseInt(stored, 10);
          const remaining = Math.ceil((expiresAt - Date.now()) / 1000);
          if (remaining > 0) {
            setCooldownRemaining(remaining);
            return;
          } else {
            localStorage.removeItem(STORAGE_KEY);
          }
        }
      } catch {}
      setCooldownRemaining(0);
    };

    updateCooldown();
    const interval = setInterval(updateCooldown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 1. If cooldown is active, show smooth notice instead of silently blocking
    if (cooldownRemaining > 0) {
      setNotice({
        type: "warning",
        message: `Anti-spam cooldown: please wait ${cooldownRemaining}s before subscribing again.`,
      });
      return;
    }

    // 2. If captcha is empty, guide user directly to solve the puzzle
    if (!captchaData.isFilled || !captchaData.answer) {
      setHighlightCaptcha(true);
      setNotice({
        type: "info",
        message: "Please enter the answer to the security check above to complete your subscription.",
      });
      return;
    }

    setHighlightCaptcha(false);
    setStatus("submitting");
    setNotice(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.set("access_key", accessKey);
    formData.set("from_name", "AURA Newsletter Subscription");
    formData.set("captchaAnswer", captchaData.answer);
    formData.set("captchaToken", captchaData.token);

    const firstName = (formData.get("firstName") as string) || "";
    const lastName = (formData.get("lastName") as string) || "";
    const email = (formData.get("email") as string) || "";
    const fullName = [firstName, lastName].filter(Boolean).join(" ");

    formData.set(
      "subject",
      `[AURA Newsletter Application] New Subscriber: ${fullName ? `${fullName} (${email})` : email}`
    );

    formData.set(
      "message",
      `New Newsletter Subscription Application\n\nSubscriber Name: ${fullName || "Not provided"}\nEmail Address: ${email}\nDate: ${new Date().toISOString()}`
    );

    try {
      let res: Response | null = null;

      try {
        res = await fetch("/api/newsletter", {
          method: "POST",
          body: formData,
        });
      } catch {
        res = null;
      }

      if (!res) {
        res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
      }

      const data = await res.json();

      if (res.status === 429) {
        setStatus("idle");
        const retrySec = data.cooldownRemaining || COOLDOWN_SECONDS;
        setCooldownRemaining(retrySec);
        try {
          localStorage.setItem(STORAGE_KEY, String(Date.now() + retrySec * 1000));
        } catch {}
        setNotice({
          type: "warning",
          message: data.message || `Rate limit reached. Please wait ${retrySec}s.`,
        });
        return;
      }

      if (res.status === 400) {
        setStatus("idle");
        setHighlightCaptcha(true);
        setNotice({
          type: "warning",
          message: data.message || "Incorrect security check answer. Please try again.",
        });
        return;
      }

      if (res.ok && data.success) {
        setStatus("success");
        form.reset();

        setCooldownRemaining(COOLDOWN_SECONDS);
        try {
          localStorage.setItem(
            STORAGE_KEY,
            String(Date.now() + COOLDOWN_SECONDS * 1000)
          );
        } catch {}
      } else {
        setStatus("idle");
        setNotice({
          type: "error",
          message: data.message || "Failed to subscribe. Please try again.",
        });
      }
    } catch {
      setStatus("idle");
      setNotice({
        type: "error",
        message: "Connection error. Please try again in a moment.",
      });
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-white/30 bg-white/10 p-5 text-center transition-all duration-300">
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-white">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <p className="mt-2 text-sm font-semibold text-white">
          Subscribed Successfully!
        </p>
        <p className="mt-1 text-xs text-white/80 leading-relaxed">
          Thank you for subscribing to the AURA community newsletter.
        </p>
        <div className="mt-4 flex flex-col items-center gap-1.5">
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setNotice(null);
            }}
            className="text-xs text-white/80 underline underline-offset-2 hover:text-white transition"
          >
            Subscribe another email
          </button>
          {cooldownRemaining > 0 && (
            <span className="text-[11px] text-white/60 flex items-center gap-1">
              <Clock className="h-3 w-3" />
              Cooldown: {cooldownRemaining}s
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2.5">
      {/* Honeypot spam protection */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Smooth rounded notice banner */}
      {notice && (
        <div
          className={`flex items-start gap-2 rounded-xl p-2.5 text-xs transition-all duration-300 ${
            notice.type === "warning"
              ? "border border-amber-300/40 bg-amber-500/20 text-amber-100"
              : notice.type === "info"
              ? "border border-pearl-white/30 bg-white/10 text-white"
              : "border border-rose-300/40 bg-rose-500/20 text-rose-100"
          }`}
        >
          {notice.type === "warning" ? (
            <Clock className="h-3.5 w-3.5 shrink-0 mt-0.5 text-amber-200" />
          ) : notice.type === "info" ? (
            <Info className="h-3.5 w-3.5 shrink-0 mt-0.5 text-pearl-white" />
          ) : (
            <AlertCircle className="h-3.5 w-3.5 shrink-0 mt-0.5 text-rose-200" />
          )}
          <span className="leading-snug">{notice.message}</span>
        </div>
      )}

      <Input
        type="email"
        name="email"
        required
        aria-label="Email"
        placeholder="your.email@example.com"
        disabled={status === "submitting"}
        className="h-10 rounded-xl border-white/20 bg-white/10 text-sm text-white placeholder:text-white/50 focus:border-white focus:bg-white/15"
      />

      <div className="grid grid-cols-2 gap-2">
        <Input
          name="firstName"
          aria-label="First name"
          placeholder="First name"
          disabled={status === "submitting"}
          className="h-9 rounded-xl border-white/20 bg-white/10 text-xs text-white placeholder:text-white/50"
        />
        <Input
          name="lastName"
          aria-label="Last name"
          placeholder="Last name"
          disabled={status === "submitting"}
          className="h-9 rounded-xl border-white/20 bg-white/10 text-xs text-white placeholder:text-white/50"
        />
      </div>

      {/* Compact dynamic security check */}
      <ModernCaptcha
        onChange={setCaptchaData}
        compact={true}
        theme="dark"
        highlight={highlightCaptcha}
      />

      {/* Submit button is NOT permanently disabled; shows smooth guidance on click */}
      <Button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-xl bg-pearl-white font-medium text-primary hover:bg-pearl-white/90 transition-all shadow-sm"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Subscribing...
          </>
        ) : cooldownRemaining > 0 ? (
          <>
            <Clock className="mr-2 h-4 w-4 animate-pulse" />
            Subscribe ({cooldownRemaining}s)
          </>
        ) : (
          "Subscribe"
        )}
      </Button>
    </form>
  );
}
