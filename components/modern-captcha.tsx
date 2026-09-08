"use client";

import { useState, useEffect, useCallback } from "react";
import { ShieldCheck, RotateCw,  AlertCircle, Bot } from "lucide-react";

export interface CaptchaData {
  token: string;
  answer: string;
  isFilled: boolean;
}

interface ModernCaptchaProps {
  onChange: (data: CaptchaData) => void;
  compact?: boolean;
  theme?: "light" | "dark" | "transparent";
  highlight?: boolean;
}

export default function ModernCaptcha({
  onChange,
  compact = false,
  theme = "light",
  highlight = false,
}: ModernCaptchaProps) {
  const [questionText, setQuestionText] = useState<string>("Loading security check...");
  const [token, setToken] = useState<string>("");
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const fetchChallenge = useCallback(async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch("/api/captcha", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        setQuestionText(data.questionText);
        setToken(data.token);
        setUserAnswer("");
        onChange({ token: data.token, answer: "", isFilled: false });
        return;
      }
    } catch {
      // Fallback local challenge
    }

    // Fallback if network issue fetching API
    const n1 = Math.floor(Math.random() * 6) + 3;
    const n2 = Math.floor(Math.random() * 5) + 2;
    const dummyToken = `local.${Date.now()}.${n1 + n2}`;
    setQuestionText(`Calculate: ${n1} + ${n2} = ?`);
    setToken(dummyToken);
    setUserAnswer("");
    onChange({ token: dummyToken, answer: "", isFilled: false });
    setIsRefreshing(false);
  }, [onChange]);

  useEffect(() => {
    fetchChallenge().finally(() => setIsRefreshing(false));
  }, [fetchChallenge]);

  const handleInputChange = (val: string) => {
    setUserAnswer(val);
    onChange({
      token,
      answer: val.trim(),
      isFilled: val.trim().length > 0,
    });
  };

  const isDark = theme === "dark" || theme === "transparent";

  if (compact) {
    return (
      <div
        className={`rounded-xl border p-2.5 transition-all duration-300 ${
          highlight && !userAnswer
            ? "border-amber-400/80 bg-amber-500/15 shadow-sm ring-1 ring-amber-400/50"
            : isDark
            ? "border-white/20 bg-white/5 text-white"
            : "border-border bg-card text-foreground"
        }`}
      >
        <div className="flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1.5 font-medium truncate">
            <Bot className="h-3.5 w-3.5 text-pearl-white shrink-0 opacity-85" />
            <span className="truncate">{questionText}</span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={3}
              value={userAnswer}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder="Answer"
              aria-label="Security verification answer"
              className={`h-7 w-14 rounded-lg border px-2 text-center text-xs font-semibold focus:outline-none transition-all ${
                isDark
                  ? "border-white/30 bg-white/10 text-white placeholder:text-white/40 focus:border-white focus:ring-1 focus:ring-white/30"
                  : "border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-primary"
              }`}
            />
            <button
              type="button"
              onClick={fetchChallenge}
              disabled={isRefreshing}
              title="Get another question"
              className="p-1 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition"
            >
              <RotateCw
                className={`h-3.5 w-3.5 ${isRefreshing ? "animate-spin" : ""}`}
              />
            </button>
          </div>
        </div>

        {highlight && !userAnswer && (
          <p className="mt-1.5 text-[11px] text-amber-200 flex items-center gap-1">
            <AlertCircle className="h-3 w-3 shrink-0" />
            Please answer this security check to subscribe
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl border p-4 transition-all duration-300 ${
        highlight && !userAnswer
          ? "border-amber-500/60 bg-amber-500/10 shadow-sm ring-1 ring-amber-500/40"
          : "border-border bg-card/60"
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground">
Verify you are human            </p>
            <p className="text-sm font-medium text-foreground mt-0.5">
              {questionText}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-center">
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={3}
            value={userAnswer}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="Answer"
            aria-label="Enter security check answer"
            className="h-10 w-24 rounded-xl border border-input bg-background px-3 text-center text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          />
          <button
            type="button"
            onClick={fetchChallenge}
            disabled={isRefreshing}
            title="Get another question"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground hover:bg-accent hover:text-foreground transition"
          >
            <RotateCw
              className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`}
            />
          </button>
        </div>
      </div>

      {highlight && !userAnswer && (
        <div className="mt-3 flex items-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 p-2 text-xs text-amber-800 dark:text-amber-300">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>Please enter the answer above before sending your message.</span>
        </div>
      )}
    </div>
  );
}
