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
import { useRouter, useSearchParams } from "next/navigation"

export default function ProgramRegistrationPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    program: "",
    experience: "",
    expectations: "",
    emergencyContact: "",
    emergencyPhone: "",
    medicalConditions: "",
    agreedToTerms: false,
    agreedToContact: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const programId = searchParams.get("program")

  const programs = [
    "Community Therapy Circles",
    "Youth Empowerment Workshops",
    "Mental Health First Aid",
    "Rural Outreach Missions",
    "Family Support Groups",
    "Addiction Recovery Support",
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.program || !formData.agreedToTerms) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Redirect with success message
    router.push("/programs?registered=true")
  }

  return (
    <div className="min-h-screen bg-[#FFFFF8] pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/programs" className="inline-flex items-center text-[#31960F] hover:text-[#2A7F0C] mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Programs
        </Link>

        <Card className="border-0 shadow-2xl rounded-3xl bg-white">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-playfair">Program Registration</CardTitle>
            <CardDescription className="text-lg">
              Join our mental health programs and start your journey towards wellness
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  Personal Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="rounded-full"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="rounded-full"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+251-xxx-xxx-xxx"
                      className="rounded-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      name="age"
                      type="number"
                      value={formData.age}
                      onChange={handleInputChange}
                      placeholder="Your age"
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Program Selection */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">Program Selection</h3>

                <div className="space-y-2">
                  <Label htmlFor="program">Which program would you like to join? *</Label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-full"
                    required
                  >
                    <option value="">Select a program</option>
                    {programs.map((program) => (
                      <option key={program} value={program}>
                        {program}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Previous mental health support experience (optional)</Label>
                  <Textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="Tell us about any previous therapy, counseling, or support group experience..."
                    rows={3}
                    className="rounded-2xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="expectations">What do you hope to gain from this program?</Label>
                  <Textarea
                    id="expectations"
                    name="expectations"
                    value={formData.expectations}
                    onChange={handleInputChange}
                    placeholder="Share your goals and expectations..."
                    rows={3}
                    className="rounded-2xl"
                  />
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">Emergency Contact</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
                    <Input
                      id="emergencyContact"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleInputChange}
                      placeholder="Full name"
                      className="rounded-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
                    <Input
                      id="emergencyPhone"
                      name="emergencyPhone"
                      value={formData.emergencyPhone}
                      onChange={handleInputChange}
                      placeholder="+251-xxx-xxx-xxx"
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Medical Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  Medical Information (Optional)
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="medicalConditions">
                    Any medical conditions or medications we should be aware of?
                  </Label>
                  <Textarea
                    id="medicalConditions"
                    name="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={handleInputChange}
                    placeholder="This information helps us provide better support and ensure your safety..."
                    rows={3}
                    className="rounded-2xl"
                  />
                </div>
              </div>

              {/* Agreements */}
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreedToTerms}
                    onCheckedChange={(checked) => setFormData({ ...formData, agreedToTerms: checked as boolean })}
                  />
                  <Label htmlFor="terms" className="text-sm leading-relaxed">
                    I agree to the{" "}
                    <Link href="/terms" className="text-[#31960F] hover:underline">
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-[#31960F] hover:underline">
                      Privacy Policy
                    </Link>
                    . I understand that this program is for support and education, not a substitute for professional
                    medical treatment.
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="contact"
                    checked={formData.agreedToContact}
                    onCheckedChange={(checked) => setFormData({ ...formData, agreedToContact: checked as boolean })}
                  />
                  <Label htmlFor="contact" className="text-sm">
                    I consent to being contacted by AURA team members regarding this program and related mental health
                    resources.
                  </Label>
                </div>
              </div>

              {/* Privacy Notice */}
              <div className="bg-blue-50 rounded-2xl p-6">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div className="text-sm text-blue-800">
                    <p className="font-medium mb-2">Your Privacy Matters</p>
                    <p>
                      All information provided will be kept strictly confidential and used only for program coordination
                      and support. We follow strict privacy protocols to protect your personal information.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={
                  isSubmitting ||
                  !formData.fullName.trim() ||
                  !formData.email.trim() ||
                  !formData.program ||
                  !formData.agreedToTerms
                }
                className="w-full bg-gradient-to-r from-[#31960F] to-[#3284FC] hover:from-[#2A7F0C] hover:to-[#2A73E3] text-white rounded-full py-4 font-semibold text-lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting Registration...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="w-5 h-5 mr-2" />
                    Submit Registration
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
