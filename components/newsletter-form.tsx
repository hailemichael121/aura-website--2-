"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface NewsletterFormProps {
  accessKey?: string;
}

export default function NewsletterForm({
  accessKey = "3d128a47-d696-46ef-8dc1-8094ee35f175",
}: NewsletterFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.set("access_key", accessKey);
    formData.set("from_name", "AURA Newsletter Subscription");

    const firstName = (formData.get("firstName") as string) || "";
    const lastName = (formData.get("lastName") as string) || "";
    const email = (formData.get("email") as string) || "";
    const fullName = [firstName, lastName].filter(Boolean).join(" ");

    // Subject explicitly identifies this as a Newsletter Application
    formData.set(
      "subject",
      `[AURA Newsletter Application] New Subscriber: ${fullName ? `${fullName} (${email})` : email}`
    );

    // Message payload describing the subscription application
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

      if (!res || !res.ok) {
        res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
      }

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setMessage(data.message || "Failed to subscribe. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-md border border-white/30 bg-white/10 p-4 text-center">
        <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white">
          <CheckCircle2 className="h-5 w-5" />
        </div>
        <p className="mt-2 text-sm font-medium text-white">
          Subscribed Successfully!
        </p>
        <p className="mt-1 text-xs text-white/80">
          Thank you for subscribing to the AURA community newsletter.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-3 text-xs text-white/70 underline underline-offset-2 hover:text-white"
        >
          Subscribe another email
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      {/* Honeypot spam prevention */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      {status === "error" && (
        <div className="flex items-center gap-1.5 rounded border border-red-300/40 bg-red-950/50 p-2 text-xs text-red-200">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
          <span>{message}</span>
        </div>
      )}

      <Input
        type="email"
        name="email"
        required
        aria-label="Email"
        placeholder="your.email@example.com"
        disabled={status === "submitting"}
        className="h-10 rounded-md border-white/20 bg-white/10 text-sm text-white placeholder:text-white/50 focus:border-white focus:bg-white/15"
      />

      <div className="grid grid-cols-2 gap-2">
        <Input
          name="firstName"
          aria-label="First name"
          placeholder="First name"
          disabled={status === "submitting"}
          className="h-9 rounded-md border-white/20 bg-white/10 text-xs text-white placeholder:text-white/50"
        />
        <Input
          name="lastName"
          aria-label="Last name"
          placeholder="Last name"
          disabled={status === "submitting"}
          className="h-9 rounded-md border-white/20 bg-white/10 text-xs text-white placeholder:text-white/50"
        />
      </div>

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-pearl-white font-medium text-primary hover:bg-pearl-white/90 transition-opacity disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Subscribing...
          </>
        ) : (
          "Subscribe"
        )}
      </Button>
    </form>
  );
}
