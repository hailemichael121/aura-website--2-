"use client"

import { useMemo, useState } from "react"
import { Bot, MessageCircle, Send, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type ChatMessage = {
  id: number
  role: "user" | "assistant"
  text: string
}

const cannedReplies: Record<string, string> = {
  forum: "You can join the forum from Community → Forum and start a new discussion safely.",
  therapy: "For direct support, visit Get Help to review counseling and emergency options.",
  resource: "Our Resource Library includes articles, podcast episodes, and downloadable guides.",
  hello: "Hello. I am your AURA Help Bot. How can I support you today?",
}

export default function FloatingTelegram() {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, role: "assistant", text: "Hi, I’m AURA Help Bot. Ask me about resources, forum support, or getting help." },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const nextId = useMemo(() => (messages.length ? messages[messages.length - 1].id + 1 : 1), [messages])

  const handleSend = async () => {
    if (!inputValue.trim()) return

    const userMessage = inputValue.trim()
    setMessages((prev) => [...prev, { id: nextId, role: "user", text: userMessage }])
    setInputValue("")
    setErrorMessage(null)
    setIsTyping(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 700))
      if (userMessage.toLowerCase().includes("error")) {
        throw new Error("simulated")
      }

      const normalized = userMessage.toLowerCase()
      const reply = Object.entries(cannedReplies).find(([key]) => normalized.includes(key))?.[1] ??
        "Thanks for sharing. For immediate options, use Get Help or browse Resources for practical tools."

      setMessages((prev) => [...prev, { id: nextId + 1, role: "assistant", text: reply }])
    } catch {
      setErrorMessage("Message could not be sent. Please try again.")
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <Card className="w-[340px] border-border bg-card shadow-2xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-base">AURA Help Bot</CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close Help Bot">
              <X className="size-4" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="max-h-64 space-y-2 overflow-y-auto rounded-xl border border-border bg-background p-3">
              {messages.map((message) => (
                <div key={message.id} className={`rounded-lg px-3 py-2 text-sm ${message.role === "assistant" ? "bg-muted text-foreground" : "ml-10 bg-primary text-primary-foreground"}`}>
                  {message.text}
                </div>
              ))}
              {isTyping && <p className="text-sm text-muted-foreground">Help Bot is typing...</p>}
            </div>
            {errorMessage && <p className="text-xs text-destructive">{errorMessage}</p>}
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="Ask for support..."
                onKeyDown={(event) => event.key === "Enter" && handleSend()}
              />
              <Button onClick={handleSend} className="bg-primary text-primary-foreground hover:bg-primary/90" aria-label="Send message">
                <Send className="size-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="size-14 rounded-full bg-primary text-primary-foreground shadow-xl hover:bg-primary/90"
          aria-label="Open Help Bot"
        >
          <MessageCircle className="size-6" />
        </Button>
      )}
      {!isOpen && (
        <div className="pointer-events-none absolute -left-44 top-2 hidden rounded-md bg-card px-3 py-2 text-xs text-muted-foreground shadow md:block">
          <span className="inline-flex items-center"><Bot className="mr-1 size-3" />Need help? Chat now.</span>
        </div>
      )}
    </div>
  )
}

export { FloatingTelegram }
