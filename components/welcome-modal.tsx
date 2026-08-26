"use client"

import { useEffect, useState } from "react"
import { HeartHandshake, ShieldCheck, Users, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hasShownWelcome = sessionStorage.getItem("aura-welcome-shown")
    if (!hasShownWelcome) {
      const timer = setTimeout(() => setIsOpen(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    sessionStorage.setItem("aura-welcome-shown", "true")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <Card className="w-full max-w-xl border-border bg-card shadow-lg">
        <CardHeader className="relative space-y-3 pb-2 text-center">
          <Button variant="ghost" size="sm" onClick={handleClose} className="absolute right-2 top-2 text-muted-foreground hover:text-foreground">
            <X className="size-4" />
          </Button>
          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <HeartHandshake className="size-6" />
          </div>
          <CardTitle className="text-xl font-semibold">Welcome to AURA</CardTitle>
          <p className="text-sm text-muted-foreground">Alliance for Understanding Recovery & Awareness</p>
        </CardHeader>

        <CardContent className="space-y-5">
          <p className="text-center text-muted-foreground">
            We provide safe spaces, practical tools, and trusted support for your mental wellness journey.
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-md border border-border bg-background p-3">
              <ShieldCheck className="mt-0.5 size-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">Private and respectful</p>
                <p className="text-sm text-muted-foreground">Your privacy and wellbeing are protected.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-md border border-border bg-background p-3">
              <Users className="mt-0.5 size-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">Peer community support</p>
                <p className="text-sm text-muted-foreground">Connect with people who understand your experience.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-md border border-border bg-background p-3">
              <HeartHandshake className="mt-0.5 size-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">Professional resources</p>
                <p className="text-sm text-muted-foreground">Access trusted guidance from trained contributors.</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button onClick={handleClose} variant="outline" className="flex-1">Explore Later</Button>
            <Button onClick={handleClose} className="flex-1">Get Started</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
