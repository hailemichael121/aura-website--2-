"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
      <body className="bg-[#FFFFF8] font-sans antialiased">
        <div className="min-h-screen flex items-center justify-center p-4">
          <Card className="border-0 shadow-2xl rounded-3xl bg-white/80 backdrop-blur-sm max-w-md w-full">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Error</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We're experiencing technical difficulties. Our team has been notified and is working to resolve this
                issue.
              </p>

              <Button
                onClick={reset}
                className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white rounded-full mb-4"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>

              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl text-white">
                <p className="text-sm">
                  <strong>Crisis Support Available 24/7</strong>
                  <br />
                  Call: <strong>922</strong> or <strong>+251-911-123-456</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </body>
    </html>
  )
}
