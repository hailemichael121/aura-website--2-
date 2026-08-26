import { Loader2 } from "lucide-react"

interface PageLoaderProps {
  message?: string
}

export default function PageLoader({ message = "Loading..." }: PageLoaderProps) {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
          <span className="text-primary-foreground font-bold">A</span>
        </div>
        <Loader2 className="w-5 h-5 animate-spin text-primary mx-auto mb-3" />
        <p className="text-muted-foreground text-sm">{message}</p>
      </div>
    </div>
  )
}
