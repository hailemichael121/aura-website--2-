"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, RefreshCw, Home } from "lucide-react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-[#FFFFF8] flex items-center justify-center p-4">
      <Card className="border-0 shadow-2xl rounded-3xl bg-white/80 backdrop-blur-sm max-w-md w-full">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>

          <h2 className="font-playfair text-2xl font-bold text-gray-900 mb-4">Something went wrong</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We encountered an unexpected error. Don't worry - our team has been notified and we're working to fix it.
          </p>

          <div className="space-y-3">
            <Button
              onClick={reset}
              className="w-full bg-gradient-to-r from-[#31960F] to-[#3284FC] hover:from-[#2A7F0C] hover:to-[#2A73E3] text-white rounded-full"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>

            <Link href="/">
              <Button variant="outline" className="w-full rounded-full bg-transparent">
                <Home className="w-4 h-4 mr-2" />
                Return Home
              </Button>
            </Link>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-[#31960F] to-[#3284FC] rounded-2xl text-white">
            <p className="text-sm">
              <strong>Need immediate support?</strong>
              <br />
              Call our crisis line: <strong>+251-911-123-456</strong>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
