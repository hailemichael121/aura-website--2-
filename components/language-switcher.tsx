"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Languages } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"
import type { Language } from "@/lib/i18n"

const languages = [
  { code: "en" as Language, name: "English", nativeName: "English" },
  { code: "am" as Language, name: "Amharic", nativeName: "አማርኛ" },
  { code: "om" as Language, name: "Afan Oromo", nativeName: "Afaan Oromoo" },
]

export function LanguageSwitcher({ overHero = false }: { overHero?: boolean }) {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "h-9 w-9 rounded-full px-0 transition-colors",
            overHero
              ? "text-white hover:bg-white/15 hover:text-white"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          )}
        >
          <Languages className="h-4 w-4" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={cn(
              "flex items-center justify-between",
              language === lang.code && "bg-accent font-medium text-accent-foreground"
            )}
          >
            <span>{lang.name}</span>
            <span className="text-xs text-muted-foreground">{lang.nativeName}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
