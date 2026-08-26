"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { X, CheckCircle, ArrowRight } from "lucide-react"

interface GroundingExerciseProps {
  isOpen: boolean
  onClose: () => void
}

const steps = [
  { number: 5, sense: "See", prompt: "Name 5 things you can see around you", icon: "👁️" },
  { number: 4, sense: "Touch", prompt: "Name 4 things you can touch", icon: "✋" },
  { number: 3, sense: "Hear", prompt: "Name 3 things you can hear", icon: "👂" },
  { number: 2, sense: "Smell", prompt: "Name 2 things you can smell", icon: "👃" },
  { number: 1, sense: "Taste", prompt: "Name 1 thing you can taste", icon: "👅" },
]

export default function GroundingExercise({ isOpen, onClose }: GroundingExerciseProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [responses, setResponses] = useState<string[]>([])
  const [currentResponse, setCurrentResponse] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  const handleAddResponse = () => {
    if (currentResponse.trim()) {
      const newResponses = [...responses, currentResponse.trim()]
      setResponses(newResponses)
      setCurrentResponse("")

      if (newResponses.length === steps[currentStep].number) {
        if (currentStep < steps.length - 1) {
          setCurrentStep(currentStep + 1)
        } else {
          setIsComplete(true)
        }
      }
    }
  }

  const handleReset = () => {
    setCurrentStep(0)
    setResponses([])
    setCurrentResponse("")
    setIsComplete(false)
  }

  const getCurrentStepResponses = () => {
    const previousStepsTotal = steps.slice(0, currentStep).reduce((sum, step) => sum + step.number, 0)
    return responses.slice(previousStepsTotal, previousStepsTotal + steps[currentStep].number)
  }

  const progress = isComplete ? 100 : (responses.length / 15) * 100

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-lg">
        <CardHeader className="text-center relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute right-2 top-2 text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </Button>
          <CardTitle className="text-xl font-semibold">5-4-3-2-1 Grounding</CardTitle>
          <p className="text-sm text-muted-foreground">Focus on your senses to stay present</p>
        </CardHeader>
        <CardContent className="space-y-6">
          {!isComplete ? (
            <>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Progress</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              <div className="text-center">
                <div className="text-5xl mb-3">{steps[currentStep].icon}</div>
                <h3 className="text-lg font-semibold mb-1">
                  {steps[currentStep].sense} - {steps[currentStep].number} things
                </h3>
                <p className="text-sm text-muted-foreground">{steps[currentStep].prompt}</p>
              </div>

              <div className="space-y-2">
                {getCurrentStepResponses().map((response, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-primary/10 p-3 rounded-md">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">{response}</span>
                  </div>
                ))}
              </div>

              {getCurrentStepResponses().length < steps[currentStep].number && (
                <div className="space-y-3">
                  <Input
                    value={currentResponse}
                    onChange={(e) => setCurrentResponse(e.target.value)}
                    placeholder={`What can you ${steps[currentStep].sense.toLowerCase()}?`}
                    onKeyDown={(e) => e.key === "Enter" && handleAddResponse()}
                  />
                  <Button
                    onClick={handleAddResponse}
                    disabled={!currentResponse.trim()}
                    className="w-full"
                  >
                    Add Response
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              )}

              <div className="flex justify-center space-x-2">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full ${
                      index === currentStep
                        ? "bg-primary"
                        : index < currentStep
                          ? "bg-primary/50"
                          : "bg-muted"
                    }`}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center space-y-6">
              <div className="text-5xl">🎉</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Well Done!</h3>
                <p className="text-sm text-muted-foreground">
                  You&apos;ve completed the 5-4-3-2-1 grounding exercise. Take a moment to notice how you feel now.
                </p>
              </div>

              <div className="rounded-md border border-border bg-muted/50 p-4 text-left">
                <h4 className="font-medium mb-2">Benefits of Grounding:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Reduces anxiety and stress</li>
                  <li>• Brings you back to the present moment</li>
                  <li>• Interrupts negative thought patterns</li>
                  <li>• Helps manage overwhelming emotions</li>
                </ul>
              </div>

              <div className="flex space-x-3">
                <Button onClick={handleReset} variant="outline" className="flex-1">
                  Try Again
                </Button>
                <Button onClick={onClose} className="flex-1">
                  Finish
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
