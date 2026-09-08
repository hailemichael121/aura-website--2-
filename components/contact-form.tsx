"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface ContactFormProps {
  accessKey?: string;
}

export default function ContactForm({
  accessKey = "3d128a47-d696-46ef-8dc1-8094ee35f175",
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Ensure access key is attached
    formData.set("access_key", accessKey);
    // Include website metadata
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

      // 1. Try first-party server route (avoids localhost CORS domain mismatch & adblockers)
      try {
        response = await fetch("/api/contact", {
          method: "POST",
          body: formData,
        });
      } catch {
        response = null;
      }

      // 2. Fallback to direct Web3Forms API if server route is unavailable
      if (!response || !response.ok) {
        response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
      }

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        form.reset();
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
        <div className="mt-6 flex justify-center">
          <Button
            type="button"
            variant="outline"
            onClick={() => setStatus("idle")}
            className="border-border hover:bg-background"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Send another message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Botcheck honeypot for spam protection */}
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
          <AlertTitle>Submission Error</AlertTitle>
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

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto px-8"
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
    </form>
  );
}
