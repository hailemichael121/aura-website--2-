"use client";

import { useState, useEffect } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, RefreshCw, Clock, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import ModernCaptcha, { CaptchaData } from "@/components/modern-captcha";

interface ContactFormProps {
  accessKey?: string;
}

const COOLDOWN_SECONDS = 45;
const STORAGE_KEY = "aura_contact_cooldown_until";

export default function ContactForm({
  accessKey = "3d128a47-d696-46ef-8dc1-8094ee35f175",
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [notice, setNotice] = useState<{ message: string; type: "info" | "error" | "warning" } | null>(null);
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // 1. If cooldown is active, inform user with smooth rounded info
    if (cooldownRemaining > 0) {
      setNotice({
        type: "warning",
        message: `Anti-spam cooldown active. Please wait ${cooldownRemaining} second(s) before sending another inquiry.`,
      });
      return;
    }

    // 2. If captcha is not answered, highlight it and show helpful guidance
    if (!captchaData.isFilled || !captchaData.answer) {
      setHighlightCaptcha(true);
      setNotice({
        type: "info",
        message: "Please complete the quick security check above to verify your submission.",
      });
      return;
    }

    setHighlightCaptcha(false);
    setStatus("submitting");
    setNotice(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.set("access_key", accessKey);
    formData.set("from_name", "AURA Website Contact Form");
    formData.set("captchaAnswer", captchaData.answer);
    formData.set("captchaToken", captchaData.token);

    const firstName = (formData.get("firstName") as string) || "";
    const lastName = (formData.get("lastName") as string) || "";
    const topic = (formData.get("topic") as string) || "General Inquiry";
    const fullName = [firstName, lastName].filter(Boolean).join(" ");
    if (fullName) {
      formData.set("name", fullName);
      formData.set("subject", `[AURA Contact] ${topic} - ${fullName}`);
    }

    try {
      let response: Response | null = null;

      try {
        response = await fetch("/api/contact", {
          method: "POST",
          body: formData,
        });
      } catch {
        response = null;
      }

      if (!response) {
        response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
      }

      const data = await response.json();

      if (response.status === 429) {
        setStatus("idle");
        const retrySec = data.cooldownRemaining || COOLDOWN_SECONDS;
        setCooldownRemaining(retrySec);
        try {
          localStorage.setItem(STORAGE_KEY, String(Date.now() + retrySec * 1000));
        } catch {}
        setNotice({
          type: "warning",
          message: data.message || `Please wait ${retrySec}s before submitting again.`,
        });
        return;
      }

      if (response.status === 400) {
        setStatus("idle");
        setHighlightCaptcha(true);
        setNotice({
          type: "warning",
          message: data.message || "Security verification was incorrect. Please try again.",
        });
        return;
      }

      if (response.ok && data.success) {
        setStatus("success");
        form.reset();

        setCooldownRemaining(COOLDOWN_SECONDS);
        try {
          localStorage.setItem(STORAGE_KEY, String(Date.now() + COOLDOWN_SECONDS * 1000));
        } catch {}
      } else {
        setStatus("idle");
        setNotice({
          type: "error",
          message: data.message || "Unable to send your message. Please try again or contact info@auramentalhealth.org.",
        });
      }
    } catch {
      setStatus("idle");
      setNotice({
        type: "error",
        message: "A network issue occurred. Please check your connection or email info@auramentalhealth.org directly.",
      });
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-emerald-500/30 bg-emerald-50/70 p-8 text-center dark:bg-emerald-950/20 shadow-sm transition-all duration-300">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mt-4 text-2xl font-semibold text-foreground">
          Message Sent Successfully!
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          Thank you for reaching out to AURA. Our team has received your submission and will review it and reply as soon as possible.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setStatus("idle");
              setNotice(null);
            }}
            className="rounded-xl border-border hover:bg-background"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Send another message
          </Button>
          {cooldownRemaining > 0 && (
            <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-1">
              <Clock className="h-3.5 w-3.5" />
              Cooldown active: {cooldownRemaining}s before next submission
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Botcheck honeypot for automated scrapers */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Smooth rounded feedback notice */}
      {notice && (
        <div
          className={`flex items-start gap-3 rounded-2xl border p-4 text-sm transition-all duration-300 ${
            notice.type === "warning"
              ? "border-amber-500/30 bg-amber-50/80 text-amber-900 dark:bg-amber-950/25 dark:text-amber-200"
              : notice.type === "info"
              ? "border-primary/25 bg-primary/5 text-foreground"
              : "border-rose-500/30 bg-rose-50/80 text-rose-900 dark:bg-rose-950/25 dark:text-rose-200"
          }`}
        >
          {notice.type === "warning" ? (
            <Clock className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
          ) : notice.type === "info" ? (
            <Info className="h-4 w-4 shrink-0 text-primary mt-0.5" />
          ) : (
            <AlertCircle className="h-4 w-4 shrink-0 text-rose-600 dark:text-rose-400 mt-0.5" />
          )}
          <p className="text-xs sm:text-sm leading-relaxed">{notice.message}</p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="firstName" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            First Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            required
            placeholder="Abebe"
            disabled={status === "submitting"}
            className="border-border bg-background rounded-xl"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="lastName" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Last Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            required
            placeholder="Kebede"
            disabled={status === "submitting"}
            className="border-border bg-background rounded-xl"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Email Address <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="abebe@example.com"
            disabled={status === "submitting"}
            className="border-border bg-background rounded-xl"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Phone Number <span className="text-xs font-normal text-muted-foreground">(Optional)</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+251 91 234 5678"
            disabled={status === "submitting"}
            className="border-border bg-background rounded-xl"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="topic" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Inquiry Topic
        </Label>
        <select
          id="topic"
          name="topic"
          disabled={status === "submitting"}
          className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          defaultValue="General Inquiry"
        >
          <option value="General Inquiry">General Inquiry</option>
          <option value="Community & Peer Support">Community &amp; Peer Support</option>
          <option value="Volunteering">Volunteering &amp; Mentorship</option>
          <option value="Partnership & Collaboration">Partnership &amp; Collaboration</option>
          <option value="Media & Speaking">Media &amp; Speaking Request</option>
          <option value="Feedback">Website / Program Feedback</option>
        </select>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Your Message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="How can we assist you or collaborate with you? Share details here..."
          disabled={status === "submitting"}
          className="min-h-[140px] border-border bg-background rounded-xl resize-y"
        />
      </div>

      {/* Dynamic Security Verification Card */}
      <div className="pt-1">
        <ModernCaptcha
          onChange={setCaptchaData}
          highlight={highlightCaptcha}
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2">
        <Button
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-auto px-8 rounded-xl transition-all"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </>
          )}
        </Button>

        {cooldownRemaining > 0 && (
          <span className="text-xs text-amber-700 dark:text-amber-400 flex items-center gap-1.5 font-medium">
            <Clock className="h-3.5 w-3.5" />
            Cooldown: {cooldownRemaining}s remaining
          </span>
        )}
      </div>
    </form>
  );
}
