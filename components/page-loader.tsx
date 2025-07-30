import { Loader2 } from "lucide-react"

interface PageLoaderProps {
  message?: string
}

export default function PageLoader({ message = "Loading..." }: PageLoaderProps) {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 bg-gradient-to-br from-[#31960F] to-[#3284FC] rounded-xl flex items-center justify-center mx-auto mb-4 animate-pulse">
          <div className="text-white font-bold text-lg">A</div>
        </div>
        <Loader2 className="w-6 h-6 animate-spin text-[#31960F] mx-auto mb-3" />
        <p className="text-gray-600 text-sm">{message}</p>
      </div>
    </div>
  )
}
