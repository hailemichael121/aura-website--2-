import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-5">
          <span className="text-primary-foreground font-bold text-lg">A</span>
        </div>
        <Loader2 className="w-6 h-6 animate-spin text-primary mx-auto mb-3" />
        <p className="text-muted-foreground text-sm">Loading AURA...</p>
      </div>
    </div>
  );
}
