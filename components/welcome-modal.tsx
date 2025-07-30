"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Heart, Users, Shield } from "lucide-react"

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if modal has been shown in this session
    const hasShownWelcome = sessionStorage.getItem("aura-welcome-shown")

    if (!hasShownWelcome) {
      // Show modal after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    // Mark as shown for this session
    sessionStorage.setItem("aura-welcome-shown", "true")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg bg-white dark:bg-gray-800 border-0 shadow-2xl animate-fade-in">
        <CardHeader className="text-center relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="w-4 h-4" />
          </Button>
          <div className="w-16 h-16 bg-gradient-to-br from-[#31960F] to-[#3284FC] rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Welcome to AURA</CardTitle>
          <p className="text-gray-600 dark:text-gray-300">Alliance for Understanding Recovery & Awareness</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We're here to support your mental wellness journey. Our community provides safe spaces, professional
              resources, and peer support for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
              <div>
                <h4 className="font-semibold text-green-900 dark:text-green-100">Safe & Confidential</h4>
                <p className="text-sm text-green-800 dark:text-green-200">Your privacy is our priority</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <div>
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Community Support</h4>
                <p className="text-sm text-blue-800 dark:text-blue-200">Connect with others who understand</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <Heart className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <div>
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">Professional Care</h4>
                <p className="text-sm text-purple-800 dark:text-purple-200">Access to licensed therapists</p>
              </div>
            </div>
          </div>

          <div className="flex space-x-3">
            <Button onClick={handleClose} variant="outline" className="flex-1 bg-transparent dark:bg-gray-700">
              Explore Later
            </Button>
            <Button onClick={handleClose} className="flex-1 bg-[#31960F] hover:bg-[#2A7F0C] text-white">
              Get Started
            </Button>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            This message will only show once per session
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
