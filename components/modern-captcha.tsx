"use client";

import { useState, useEffect, useCallback } from "react";
import { ShieldCheck, RotateCw, Check, ShieldAlert } from "lucide-react";

interface ModernCaptchaProps {
  onVerified: (isVerified: boolean) => void;
  compact?: boolean;
  theme?: "light" | "dark" | "transparent";
}

export default function ModernCaptcha({
  onVerified,
  compact = false,
  theme = "light",
}: ModernCaptchaProps) {
  const [num1, setNum1] = useState<number>(3);
  const [num2, setNum2] = useState<number>(4);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const generateChallenge = useCallback(() => {
    const n1 = Math.floor(Math.random() * 8) + 1;
    const n2 = Math.floor(Math.random() * 7) + 1;
    setNum1(n1);
    setNum2(n2);
    setUserAnswer("");
    setIsVerified(false);
    setError(false);
    onVerified(false);
  }, [onVerified]);

  useEffect(() => {
    generateChallenge();
  }, [generateChallenge]);

  const handleInputChange = (val: string) => {
    setUserAnswer(val);
    setError(false);

    const parsed = parseInt(val.trim(), 10);
    if (!isNaN(parsed) && parsed === num1 + num2) {
      setIsVerified(true);
      setError(false);
      onVerified(true);
    } else if (val.trim().length >= String(num1 + num2).length) {
      setError(true);
      setIsVerified(false);
      onVerified(false);
    }
  };

  const isDark = theme === "dark" || theme === "transparent";

  if (isVerified) {
    return (
      <div
        className={`flex items-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-600 dark:text-emerald-400 ${
          compact ? "text-[11px] py-1.5" : ""
        }`}
      >
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
          <Check className="h-3.5 w-3.5 stroke-[3]" />
        </div>
        <span>Human verification passed</span>
        <ShieldCheck className="ml-auto h-4 w-4 opacity-80" />
      </div>
    );
  }

  if (compact) {
    return (
      <div
        className={`flex items-center justify-between gap-2 rounded-md border p-2 text-xs ${
          isDark
            ? "border-white/20 bg-white/5 text-white"
            : "border-border bg-card text-foreground"
        }`}
      >
        <div className="flex items-center gap-1.5 font-medium">
          <ShieldAlert className="h-3.5 w-3.5 text-pearl-white opacity-80" />
          <span>
            Security check: {num1} + {num2} =
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={3}
            value={userAnswer}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="?"
            aria-label="Human verification answer"
            className={`h-7 w-11 rounded border text-center font-bold text-xs focus:outline-none focus:ring-1 focus:ring-pearl-white ${
              error
                ? "border-red-400 bg-red-500/20 text-red-200"
                : isDark
                ? "border-white/30 bg-white/10 text-white"
                : "border-input bg-background text-foreground"
            }`}
          />
          <button
            type="button"
            onClick={generateChallenge}
            aria-label="Refresh security question"
            className="text-white/60 hover:text-white transition p-0.5"
          >
            <RotateCw className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-card/60 p-3.5 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground">
Verify you are human            </p>
            <p className="text-[11px] text-muted-foreground">
              Solve to verify you are human: <strong>{num1} + {num2} = ?</strong>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={3}
            value={userAnswer}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="Answer"
            aria-label="Enter security check answer"
            className={`h-9 w-20 rounded-md border px-2 text-center text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary ${
              error
                ? "border-destructive bg-destructive/10 text-destructive"
                : "border-input bg-background text-foreground"
            }`}
          />
          <button
            type="button"
            onClick={generateChallenge}
            title="Get another math challenge"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-muted-foreground hover:bg-accent hover:text-foreground transition"
          >
            <RotateCw className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
      {error && (
        <p className="mt-2 text-[11px] text-destructive">
          Incorrect answer. Please calculate {num1} + {num2} or click refresh.
        </p>
      )}
    </div>
  );
}
