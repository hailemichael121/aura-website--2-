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

  const handleStart = () => setIsActive(true)
  const handlePause = () => setIsActive(false)

  const handleReset = () => {
    setIsActive(false)
    setPhase("inhale")
    setTimeLeft(4)
    setCycle(0)
    setProgress(0)
  }

  const getPhaseLabel = () => {
    switch (phase) {
      case "inhale": return "Breathe In"
      case "hold": return "Hold"
      case "exhale": return "Breathe Out"
      default: return "Ready"
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute right-2 top-2 text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </Button>
          <CardTitle className="text-xl font-semibold">4-7-8 Breathing</CardTitle>
          <p className="text-sm text-muted-foreground">A calming breathing technique</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-center">
            <div className="relative">
              <div
                className="w-40 h-40 rounded-full bg-primary flex items-center justify-center transition-all duration-1000"
                style={{
                  transform: `scale(${isActive ? (phase === "inhale" ? 1.2 : phase === "exhale" ? 0.9 : 1.1) : 1})`,
                }}
              >
                <div className="text-center text-primary-foreground">
                  <div className="text-3xl font-bold mb-1">{timeLeft}</div>
                  <div className="text-sm font-medium">{getPhaseLabel()}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Cycle Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="rounded-md border border-border bg-muted/50 p-2">
              <div className="text-lg font-semibold text-primary">{cycle}</div>
              <div className="text-xs text-muted-foreground">Cycles</div>
            </div>
            <div className="rounded-md border border-border bg-muted/50 p-2">
              <div className="text-lg font-semibold">{phase}</div>
              <div className="text-xs text-muted-foreground">Phase</div>
            </div>
            <div className="rounded-md border border-border bg-muted/50 p-2">
              <div className="text-lg font-semibold">{cycle * 19}s</div>
              <div className="text-xs text-muted-foreground">Total</div>
            </div>
          </div>

          <div className="flex justify-center space-x-3">
            {!isActive ? (
              <Button onClick={handleStart} className="px-6">
                <Play className="w-4 h-4 mr-2" />
                Start
              </Button>
            ) : (
              <Button onClick={handlePause} variant="outline" className="px-6">
                <Pause className="w-4 h-4 mr-2" />
                Pause
              </Button>
            )}
            <Button onClick={handleReset} variant="outline" className="px-6">
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>

          <div className="rounded-md border border-border bg-muted/50 p-4">
            <h4 className="font-medium text-sm mb-2">How it works:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
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
