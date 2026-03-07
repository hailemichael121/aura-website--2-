"use client"

import type React from "react"

import { useState } from "react"
import { Clock, Heart, Lock, Send, Shield } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

const recentConfessions = [
  {
    id: 1,
    content: "I've been struggling with anxiety for months but finally decided to seek help. Taking that first step felt impossible.",
    timeAgo: "2 hours ago",
    hearts: 23,
    category: "Anxiety",
  },
  {
    id: 2,
    content: "Some days I feel overwhelmed, but today I gave myself permission to rest and ask for support.",
    timeAgo: "5 hours ago",
    hearts: 45,
    category: "Self-Care",
  },
  {
    id: 3,
    content: "I lost my job and it triggered depression. This community helped me stay grounded and keep trying.",
    timeAgo: "1 day ago",
    hearts: 67,
    category: "Depression",
  },
]

export default function ConfessionsPage() {
  const [confession, setConfession] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!confession.trim()) return

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 900))
    setConfession("")
    setIsSubmitting(false)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2500)
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="border-b border-border/60 bg-card/30 py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Lock className="size-7" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">Anonymous Confessions</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Share safely and anonymously. Sometimes speaking honestly is the first step toward healing.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center rounded-full border border-border px-3 py-1"><Shield className="mr-1 size-4 text-primary" />100% Anonymous</span>
            <span className="inline-flex items-center rounded-full border border-border px-3 py-1"><Heart className="mr-1 size-4 text-primary" />Judgment-Free</span>
            <span className="inline-flex items-center rounded-full border border-border px-3 py-1"><Lock className="mr-1 size-4 text-primary" />Secure & Private</span>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="share" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 rounded-xl bg-muted p-1">
              <TabsTrigger value="share" className="rounded-lg">Share</TabsTrigger>
              <TabsTrigger value="read" className="rounded-lg">Read & Support</TabsTrigger>
            </TabsList>

            <TabsContent value="share">
              <Card className="mx-auto max-w-3xl border-border bg-card shadow-sm">
                <CardHeader>
                  <CardTitle>Share anonymously</CardTitle>
                  <CardDescription>Your identity remains private. Keep details safe and avoid personal identifiers.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Textarea
                      value={confession}
                      onChange={(event) => setConfession(event.target.value)}
                      placeholder="Write what you are carrying today..."
                      rows={7}
                      maxLength={1200}
                      className="rounded-xl"
                    />
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{confession.length}/1200 characters</span>
                      {submitted && <span className="text-primary">Confession submitted safely.</span>}
                    </div>
                    <Button type="submit" disabled={!confession.trim() || isSubmitting} className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                      {isSubmitting ? "Submitting..." : <span className="inline-flex items-center"><Send className="mr-2 size-4" />Submit confession</span>}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="read" className="space-y-4">
              {recentConfessions.map((item) => (
                <Card key={item.id} className="border-border bg-card shadow-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{item.category}</Badge>
                      <span className="inline-flex items-center text-sm text-muted-foreground"><Clock className="mr-1 size-4" />{item.timeAgo}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 leading-7 text-foreground">{item.content}</p>
                    <Button variant="outline" className="rounded-full">
                      <Heart className="mr-2 size-4" />Send support ({item.hearts})
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
