"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { AlertCircle, ArrowLeft, Send, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

const categories = [
  "General Support",
  "Youth Corner",
  "Family & Relationships",
  "Recovery Stories",
  "Anxiety & Depression",
  "Addiction Support",
  "Trauma & Healing",
]

export default function NewPostPage() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    isAnonymous: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionError, setSubmissionError] = useState<string | null>(null)
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmissionError(null)

    if (!formData.title.trim() || !formData.content.trim() || !formData.category) {
      setSubmissionError("Please complete all required fields before submitting.")
      return
    }

    try {
      setIsSubmitting(true)
      await new Promise((resolve) => setTimeout(resolve, 1400))
      router.push("/forum?posted=true")
    } catch {
      setSubmissionError("We could not submit your post right now. Please try again.")
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="mx-auto max-w-4xl px-4 pb-14 sm:px-6 lg:px-8">
        <Link href="/forum" className="mb-6 inline-flex items-center text-primary hover:text-primary/80">
          <ArrowLeft className="mr-2 size-4" />Back to Forum
        </Link>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-3xl">Start a New Discussion</CardTitle>
            <CardDescription>Share your thoughts, ask questions, or support the community in a respectful way.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Discussion title *</Label>
                <Input id="title" name="title" value={formData.title} onChange={handleInputChange} placeholder="What would you like to discuss?" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Your message *</Label>
                <Textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  placeholder="Share your experience or question. Keep details safe and avoid posting personal identifiers."
                  rows={8}
                  maxLength={2000}
                  required
                />
                <div className="text-right text-sm text-muted-foreground">{formData.content.length}/2000 characters</div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="anonymous" checked={formData.isAnonymous} onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, isAnonymous: checked as boolean }))} />
                <Label htmlFor="anonymous" className="text-sm">Post anonymously (your identity will be hidden)</Label>
              </div>

              <div className="rounded-lg border border-border p-5">
                <div className="flex items-start gap-3">
                  <Shield className="mt-0.5 size-5 text-muted-foreground" />
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p className="font-medium text-foreground">Community safety reminder</p>
                    <p>Be respectful, avoid personal attacks, and do not share sensitive personal information.</p>
                  </div>
                </div>
              </div>

              {submissionError && (
                <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
                  <p className="flex items-center"><AlertCircle className="mr-2 size-4" />{submissionError}</p>
                </div>
              )}

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Posting discussion..." : <span className="inline-flex items-center"><Send className="mr-2 size-4" />Post Discussion</span>}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
