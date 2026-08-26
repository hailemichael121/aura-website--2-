"use client"

import { Button } from "@/components/ui/button"
import { AlertTriangle, RefreshCw } from "lucide-react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body className="bg-background font-sans antialiased">
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="max-w-md w-full text-center">
            <div className="w-14 h-14 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-5">
              <AlertTriangle className="w-7 h-7 text-destructive" />
            </div>

            <h2 className="text-xl font-semibold mb-3">Application Error</h2>
            <p className="text-muted-foreground mb-6">
              We&apos;re experiencing technical difficulties. Our team has been
              notified and is working to resolve this issue.
            </p>

            <Button onClick={reset} className="w-full mb-4">
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>

            <p className="text-sm text-muted-foreground">
              <strong>Crisis Support Available 24/7</strong>
              <br />
              Call: <strong>922</strong> or <strong>+251-911-123-456</strong>
            </p>
          </div>
        </div>
      </body>
    </html>
  )
}
