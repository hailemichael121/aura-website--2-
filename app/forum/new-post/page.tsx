"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Send, Shield } from "lucide-react"
import { useRouter } from "next/navigation"

export default function NewPostPage() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    isAnonymous: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const categories = [
    "General Support",
    "Youth Corner",
    "Family & Relationships",
    "Recovery Stories",
    "Anxiety & Depression",
    "Addiction Support",
    "Trauma & Healing",
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.title.trim() || !formData.content.trim() || !formData.category) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Redirect to forum with success message
    router.push("/forum?posted=true")
  }

  return (
    <div className="min-h-screen bg-[#FFFFF8] pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/forum" className="inline-flex items-center text-[#31960F] hover:text-[#2A7F0C] mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Forum
        </Link>

        <Card className="border-0 shadow-2xl rounded-3xl bg-white">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-playfair">Start a New Discussion</CardTitle>
            <CardDescription className="text-lg">
              Share your thoughts, ask questions, or offer support to the community
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title">Discussion Title *</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="What would you like to discuss?"
                  className="rounded-full"
                  required
                />
              </div>

              {/* Category */}
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-full"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <Label htmlFor="content">Your Message *</Label>
                <Textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  placeholder="Share your thoughts, experiences, or questions. Remember, this is a safe space for everyone."
                  rows={8}
                  className="rounded-2xl"
                  required
                />
                <div className="text-right text-sm text-gray-500">{formData.content.length}/2000 characters</div>
              </div>

              {/* Anonymous Option */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="anonymous"
                  checked={formData.isAnonymous}
                  onCheckedChange={(checked) => setFormData({ ...formData, isAnonymous: checked as boolean })}
                />
                <Label htmlFor="anonymous" className="text-sm">
                  Post anonymously (your identity will be hidden)
                </Label>
              </div>

              {/* Community Guidelines */}
              <div className="bg-blue-50 rounded-2xl p-6">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div className="text-sm text-blue-800">
                    <p className="font-medium mb-2">Community Guidelines Reminder</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Be respectful and supportive to all community members</li>
                      <li>• No personal attacks, discrimination, or harmful content</li>
                      <li>• Respect privacy - don't share personal information</li>
                      <li>• Posts are moderated to ensure a safe environment</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting || !formData.title.trim() || !formData.content.trim() || !formData.category}
                className="w-full bg-gradient-to-r from-[#31960F] to-[#3284FC] hover:from-[#2A7F0C] hover:to-[#2A73E3] text-white rounded-full py-4 font-semibold text-lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Posting...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="w-5 h-5 mr-2" />
                    Post Discussion
                  </div>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
