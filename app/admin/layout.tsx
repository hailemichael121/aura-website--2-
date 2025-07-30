"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import type { User } from "@supabase/supabase-js"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        router.push("/auth/signin")
        return
      }

      setUser(user)

      // Check if user is admin (you can implement your own admin check logic)
      // For now, we'll check if the user's email is in a list of admin emails
      const adminEmails = ["admin@auraethiopia.org", "red8_fe@example.com"] // Add actual admin emails
      setIsAdmin(adminEmails.includes(user.email || ""))

      setLoading(false)
    }

    checkAuth()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session?.user) {
        router.push("/auth/signin")
      }
    })

    return () => subscription.unsubscribe()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#00B089]" />
      </div>
    )
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="max-w-md">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h2>
            <p className="text-gray-600 mb-6">You don't have permission to access the admin panel.</p>
            <Button onClick={() => router.push("/")} className="bg-gradient-to-r from-[#00B089] to-[#3284FC]">
              Return to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return <div className="min-h-screen bg-gray-50">{children}</div>
}
