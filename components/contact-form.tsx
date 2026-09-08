"use client";

import { useState, useEffect } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, RefreshCw, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import ModernCaptcha from "@/components/modern-captcha";

interface ContactFormProps {
  accessKey?: string;
}

const COOLDOWN_SECONDS = 60;
const STORAGE_KEY = "aura_contact_cooldown_until";

export default function ContactForm({
  accessKey = "3d128a47-d696-46ef-8dc1-8094ee35f175",
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [captchaVerified, setCaptchaVerified] = useState<boolean>(false);
  const [cooldownRemaining, setCooldownRemaining] = useState<number>(0);

  // Check and countdown cooldown timer
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
      } catch {
        // localStorage unavailable
      }
      setCooldownRemaining(0);
    };

    updateCooldown();
    const interval = setInterval(updateCooldown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (cooldownRemaining > 0) {
      setErrorMessage(
        `Anti-spam cooldown active. Please wait ${cooldownRemaining} second(s) before sending another message.`
      );
      setStatus("error");
      return;
    }

    if (!captchaVerified) {
      setErrorMessage("Please complete the anti-abuse verification before sending.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Ensure access key is attached
    formData.set("access_key", accessKey);
    formData.set("from_name", "AURA Website Contact Form");

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

      // 1. Submit through internal server route (enforces server IP rate limiting & bypasses browser CORS)
      try {
        response = await fetch("/api/contact", {
          method: "POST",
          body: formData,
        });
      } catch {
        response = null;
      }

      // 2. Fallback to direct Web3Forms endpoint if server route was unavailable
      if (!response || (!response.ok && response.status !== 429)) {
        response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
      }

      const data = await response.json();

      if (response.status === 429) {
        setStatus("error");
        setErrorMessage(
          data.message || "Rate limit reached. Please wait before submitting again."
        );
        const retrySec = data.cooldownRemaining || 60;
        setCooldownRemaining(retrySec);
        try {
          localStorage.setItem(STORAGE_KEY, String(Date.now() + retrySec * 1000));
        } catch {}
        return;
      }

      if (response.ok && data.success) {
        setStatus("success");
        setCaptchaVerified(false);
        form.reset();

        // Activate 60s cooldown in browser
        setCooldownRemaining(COOLDOWN_SECONDS);
        try {
          localStorage.setItem(
            STORAGE_KEY,
            String(Date.now() + COOLDOWN_SECONDS * 1000)
          );
        } catch {}
      } else {
        setStatus("error");
        setErrorMessage(
          data.message || "Unable to send your message at this time. Please try again."
        );
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(
        "A network error occurred while submitting the form. If testing locally, Web3Forms may restrict submissions to the registered production domain (auramentalhealth.org). You can also email us directly at info@auramentalhealth.org."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-emerald-500/30 bg-emerald-50/70 p-8 text-center dark:bg-emerald-950/20">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
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
            onClick={() => setStatus("idle")}
            className="border-border hover:bg-background"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Send another message
          </Button>
          {cooldownRemaining > 0 && (
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" />
              Cooldown active: {cooldownRemaining}s before next submission
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Botcheck honeypot for automated spam bots */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      {status === "error" && (
        <Alert variant="destructive" className="border-destructive/40 bg-destructive/10">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Submission Notice</AlertTitle>
          <AlertDescription className="text-xs sm:text-sm">
            {errorMessage}
          </AlertDescription>
        </Alert>
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
            className="border-border bg-background"
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
            className="border-border bg-background"
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
            className="border-border bg-background"
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
            className="border-border bg-background"
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
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
          className="min-h-[140px] border-border bg-background resize-y"
        />
      </div>

      {/* Anti-Abuse Human Verification Captcha */}
      <div className="pt-1">
        <ModernCaptcha onVerified={setCaptchaVerified} />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2">
        <Button
          type="submit"
          disabled={status === "submitting" || !captchaVerified || cooldownRemaining > 0}
          className="w-full sm:w-auto px-8 transition-all"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending Message...
            </>
          ) : cooldownRemaining > 0 ? (
            <>
              <Clock className="mr-2 h-4 w-4 animate-pulse" />
              Cooldown ({cooldownRemaining}s)
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </>
          )}
        </Button>

        {cooldownRemaining > 0 ? (
          <p className="text-xs text-amber-600 dark:text-amber-400 flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            Please wait {cooldownRemaining}s before sending another message.
          </p>
        ) : !captchaVerified ? (
          <p className="text-xs text-muted-foreground">
            Complete the verification above to enable the submit button.
          </p>
        ) : null}
      </div>
    </form>
  );
}
