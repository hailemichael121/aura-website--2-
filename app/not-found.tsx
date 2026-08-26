import { Button } from "@/components/ui/button";
import { Home, Heart } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-lg w-full text-center">
        <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-6">
          <span className="text-primary-foreground font-bold text-2xl">A</span>
        </div>

        <h1 className="text-7xl font-bold text-muted/60 mb-2">404</h1>
        <h2 className="text-2xl font-semibold mb-3">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you&apos;re looking for doesn&apos;t exist. Sometimes we all
          need to find a new path.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <Button>
              <Home className="w-4 h-4 mr-2" />
              Return Home
            </Button>
          </Link>
          <Link href="/get-help">
            <Button variant="outline">
              <Heart className="w-4 h-4 mr-2" />
              Get Support
            </Button>
          </Link>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          <strong>Need immediate help?</strong> Call our crisis line:{" "}
          <strong>+251-911-123-456</strong> or Ethiopian Mental Health Hotline:{" "}
          <strong>922</strong>
        </p>
      </div>
    </div>
  );
}
