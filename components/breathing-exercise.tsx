"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Play, Pause, RotateCcw, X } from "lucide-react"

interface BreathingExerciseProps {
  isOpen: boolean
  onClose: () => void
}

export default function BreathingExercise({ isOpen, onClose }: BreathingExerciseProps) {
  const [isActive, setIsActive] = useState(false)
  const [phase, setPhase] = useState<"inhale" | "hold" | "exhale">("inhale")
  const [timeLeft, setTimeLeft] = useState(4)
  const [cycle, setCycle] = useState(0)
  const [progress, setProgress] = useState(0)

  const phaseDurations = {
    inhale: 4,
    hold: 7,
    exhale: 8,
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isActive) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            // Move to next phase
            if (phase === "inhale") {
              setPhase("hold")
              return phaseDurations.hold
            } else if (phase === "hold") {
              setPhase("exhale")
              return phaseDurations.exhale
            } else {
              setPhase("inhale")
              setCycle((c) => c + 1)
              return phaseDurations.inhale
            }
          }
          return prev - 1
        })
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isActive, phase])

  useEffect(() => {
    const totalDuration = phaseDurations.inhale + phaseDurations.hold + phaseDurations.exhale
    const currentPhaseProgress = ((phaseDurations[phase] - timeLeft) / phaseDurations[phase]) * 100
    let phaseOffset = 0

    if (phase === "hold") phaseOffset = (phaseDurations.inhale / totalDuration) * 100
    if (phase === "exhale") phaseOffset = ((phaseDurations.inhale + phaseDurations.hold) / totalDuration) * 100

    const totalProgress = phaseOffset + (currentPhaseProgress / totalDuration) * (100 / 3)
    setProgress(totalProgress)
  }, [phase, timeLeft])

  const handleStart = () => {
    setIsActive(true)
  }

  const handlePause = () => {
    setIsActive(false)
  }

  const handleReset = () => {
    setIsActive(false)
    setPhase("inhale")
    setTimeLeft(4)
    setCycle(0)
    setProgress(0)
  }

  const getPhaseColor = () => {
    switch (phase) {
      case "inhale":
        return "from-blue-400 to-blue-600"
      case "hold":
        return "from-yellow-400 to-orange-500"
      case "exhale":
        return "from-green-400 to-green-600"
      default:
        return "from-gray-400 to-gray-600"
    }
  }

  const getPhaseInstruction = () => {
    switch (phase) {
      case "inhale":
        return "Breathe In"
      case "hold":
        return "Hold"
      case "exhale":
        return "Breathe Out"
      default:
        return "Ready"
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white dark:bg-gray-800 border-0 shadow-2xl">
        <CardHeader className="text-center relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="w-4 h-4" />
          </Button>
          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">4-7-8 Breathing</CardTitle>
          <p className="text-gray-600 dark:text-gray-300">A calming breathing technique</p>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Breathing Circle */}
          <div className="flex justify-center">
            <div className="relative">
              <div
                className={`w-48 h-48 rounded-full bg-gradient-to-br ${getPhaseColor()} flex items-center justify-center transition-all duration-1000 ${
                  isActive ? "scale-110" : "scale-100"
                } shadow-2xl`}
                style={{
                  transform: `scale(${isActive ? (phase === "inhale" ? 1.2 : phase === "exhale" ? 0.9 : 1.1) : 1})`,
                }}
              >
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">{timeLeft}</div>
                  <div className="text-lg font-medium">{getPhaseInstruction()}</div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-white/30"></div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
              <span>Cycle Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{cycle}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Cycles</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">{phase}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Phase</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{cycle * 19}s</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Total</div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center space-x-4">
            {!isActive ? (
              <Button onClick={handleStart} className="bg-[#31960F] hover:bg-[#2A7F0C] text-white px-8">
                <Play className="w-4 h-4 mr-2" />
                Start
              </Button>
            ) : (
              <Button onClick={handlePause} variant="outline" className="px-8 bg-transparent dark:bg-gray-700">
                <Pause className="w-4 h-4 mr-2" />
                Pause
              </Button>
            )}
            <Button onClick={handleReset} variant="outline" className="px-8 bg-transparent dark:bg-gray-700">
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">How it works:</h4>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li>• Inhale for 4 seconds</li>
              <li>• Hold your breath for 7 seconds</li>
              <li>• Exhale slowly for 8 seconds</li>
              <li>• Repeat for 4-8 cycles</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
