import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Bell } from "lucide-react"
import Link from "next/link"

interface ComingSoonProps {
  title: string
  description: string
  expectedDate?: string
  notifyLink?: string
}

export default function ComingSoon({ title, description, expectedDate, notifyLink }: ComingSoonProps) {
  return (
    <div className="min-h-[400px] flex items-center justify-center p-4">
      <Card className="border-0 shadow-xl rounded-3xl bg-white/80 backdrop-blur-sm max-w-md w-full">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-[#FFE066] to-[#FF9500] rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="w-8 h-8 text-white" />
          </div>

          <h2 className="font-playfair text-2xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

          {expectedDate && (
            <div className="bg-gradient-to-r from-[#31960F] to-[#3284FC] rounded-2xl p-4 mb-6 text-white">
              <p className="text-sm">
                <strong>Expected Launch:</strong>
                <br />
                {expectedDate}
              </p>
            </div>
          )}

          <div className="space-y-3">
            {notifyLink && (
              <Link href={notifyLink}>
                <Button className="w-full bg-[#FFE066] text-black hover:bg-[#FFD700] rounded-full">
                  <Bell className="w-4 h-4 mr-2" />
                  Notify Me
                </Button>
              </Link>
            )}

            <Link href="/">
              <Button variant="outline" className="w-full rounded-full bg-transparent">
                Return Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
