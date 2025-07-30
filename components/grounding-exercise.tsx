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
      <Card className="w-full max-w-lg bg-white dark:bg-gray-800 border-0 shadow-2xl">
        <CardHeader className="text-center relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="w-4 h-4" />
          </Button>
          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">5-4-3-2-1 Grounding</CardTitle>
          <p className="text-gray-600 dark:text-gray-300">Focus on your senses to stay present</p>
        </CardHeader>
        <CardContent className="space-y-6">
          {!isComplete ? (
            <>
              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                  <span>Progress</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              {/* Current Step */}
              <div className="text-center">
                <div className="text-6xl mb-4">{steps[currentStep].icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {steps[currentStep].sense} - {steps[currentStep].number} things
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{steps[currentStep].prompt}</p>
              </div>

              {/* Current Responses */}
              <div className="space-y-2">
                {getCurrentStepResponses().map((response, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span className="text-gray-900 dark:text-white">{response}</span>
                  </div>
                ))}
              </div>

              {/* Input */}
              {getCurrentStepResponses().length < steps[currentStep].number && (
                <div className="space-y-3">
                  <Input
                    value={currentResponse}
                    onChange={(e) => setCurrentResponse(e.target.value)}
                    placeholder={`What can you ${steps[currentStep].sense.toLowerCase()}?`}
                    onKeyPress={(e) => e.key === "Enter" && handleAddResponse()}
                    className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                  />
                  <Button
                    onClick={handleAddResponse}
                    disabled={!currentResponse.trim()}
                    className="w-full bg-[#31960F] hover:bg-[#2A7F0C] text-white"
                  >
                    Add Response
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              )}

              {/* Step Navigation */}
              <div className="flex justify-center space-x-2">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === currentStep
                        ? "bg-[#31960F]"
                        : index < currentStep
                          ? "bg-green-400"
                          : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </>
          ) : (
            /* Completion Screen */
            <div className="text-center space-y-6">
              <div className="text-6xl">🎉</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Well Done!</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  You've completed the 5-4-3-2-1 grounding exercise. Take a moment to notice how you feel now.
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Benefits of Grounding:</h4>
                <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                  <li>• Reduces anxiety and stress</li>
                  <li>• Brings you back to the present moment</li>
                  <li>• Interrupts negative thought patterns</li>
                  <li>• Helps manage overwhelming emotions</li>
                </ul>
              </div>

              <div className="flex space-x-3">
                <Button onClick={handleReset} variant="outline" className="flex-1 bg-transparent dark:bg-gray-700">
                  Try Again
                </Button>
                <Button onClick={onClose} className="flex-1 bg-[#31960F] hover:bg-[#2A7F0C] text-white">
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
