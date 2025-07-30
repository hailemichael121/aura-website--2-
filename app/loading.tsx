import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#FFFFF8] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-[#31960F] to-[#3284FC] rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse">
          <div className="text-white font-bold text-2xl">A</div>
        </div>
        <Loader2 className="w-8 h-8 animate-spin text-[#31960F] mx-auto mb-4" />
        <h2 className="font-playfair text-2xl font-bold text-gray-900 mb-2">Loading AURA</h2>
        <p className="text-gray-600">Preparing your mental wellness journey...</p>
      </div>
    </div>
  )
}
