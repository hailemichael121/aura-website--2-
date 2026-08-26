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
      <Card className="max-w-md w-full">
        <CardContent className="p-8 text-center">
          <div className="w-14 h-14 bg-muted rounded-full flex items-center justify-center mx-auto mb-5">
            <Clock className="w-7 h-7 text-muted-foreground" />
          </div>

          <h2 className="text-xl font-semibold mb-3">{title}</h2>
          <p className="text-muted-foreground mb-6">{description}</p>

          {expectedDate && (
            <div className="bg-muted rounded-md p-4 mb-6">
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
                <Button className="w-full">
                  <Bell className="w-4 h-4 mr-2" />
                  Notify Me
                </Button>
              </Link>
            )}

            <Link href="/">
              <Button variant="outline" className="w-full">
                Return Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
