"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { X, ArrowRight, ArrowLeft, Lightbulb } from "lucide-react"

interface ThoughtReframingProps {
  isOpen: boolean
  onClose: () => void
}

const steps = [
  {
    title: "Identify the Thought",
    prompt: "What negative thought is bothering you right now?",
    placeholder: "Example: 'I'm going to fail this exam and disappoint everyone'",
    icon: "🤔",
  },
  {
    title: "Notice the Emotions",
    prompt: "What emotions does this thought bring up for you?",
    placeholder: "Example: 'Anxious, scared, overwhelmed, disappointed'",
    icon: "😰",
  },
  {
    title: "Examine the Evidence",
    prompt: "What evidence do you have that this thought is true? What evidence suggests it might not be true?",
    placeholder: "Example: 'I've studied hard, I've passed exams before, one exam doesn't define me'",
    icon: "🔍",
  },
  {
    title: "Consider Alternatives",
    prompt: "What are some more balanced or realistic ways to think about this situation?",
    placeholder: "Example: 'I've prepared as best I can. Even if I don't do perfectly, I can learn from it'",
    icon: "💡",
  },
  {
    title: "Create a Balanced Thought",
    prompt: "Write a more balanced, realistic thought to replace the negative one:",
    placeholder: "Example: 'I'm prepared and will do my best. Whatever happens, I can handle it and learn from it'",
    icon: "✨",
  },
]

export default function ThoughtReframing({ isOpen, onClose }: ThoughtReframingProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [responses, setResponses] = useState<string[]>(Array(steps.length).fill(""))
  const [isComplete, setIsComplete] = useState(false)

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setIsComplete(true)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleResponseChange = (value: string) => {
    const newResponses = [...responses]
    newResponses[currentStep] = value
    setResponses(newResponses)
  }

  const handleReset = () => {
    setCurrentStep(0)
    setResponses(Array(steps.length).fill(""))
    setIsComplete(false)
  }

  const progress = isComplete ? 100 : ((currentStep + 1) / steps.length) * 100

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white dark:bg-gray-800 border-0 shadow-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="text-center relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="w-4 h-4" />
          </Button>
          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Thought Reframing</CardTitle>
          <p className="text-gray-600 dark:text-gray-300">Transform negative thoughts into balanced perspectives</p>
        </CardHeader>
        <CardContent className="space-y-6">
          {!isComplete ? (
            <>
              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                  <span>
                    Step {currentStep + 1} of {steps.length}
                  </span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              {/* Current Step */}
              <div className="text-center space-y-4">
                <div className="text-6xl">{steps[currentStep].icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{steps[currentStep].title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{steps[currentStep].prompt}</p>
              </div>

              {/* Response Input */}
              <div className="space-y-3">
                <Label htmlFor="response" className="text-gray-700 dark:text-gray-300">
                  Your Response:
                </Label>
                <Textarea
                  id="response"
                  value={responses[currentStep]}
                  onChange={(e) => handleResponseChange(e.target.value)}
                  placeholder={steps[currentStep].placeholder}
                  rows={4}
                  className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 resize-none"
                />
              </div>

              {/* Tips */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Tip:</h4>
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      {currentStep === 0 && "Be specific about the exact thought that's troubling you."}
                      {currentStep === 1 && "Name the emotions without judgment - all feelings are valid."}
                      {currentStep === 2 && "Look for facts vs. assumptions. What would you tell a friend?"}
                      {currentStep === 3 && "Consider multiple perspectives. What else could be true?"}
                      {currentStep === 4 && "Create a thought that's realistic but more compassionate."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between">
                <Button
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  variant="outline"
                  className="bg-transparent dark:bg-gray-700"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!responses[currentStep].trim()}
                  className="bg-[#31960F] hover:bg-[#2A7F0C] text-white"
                >
                  {currentStep === steps.length - 1 ? "Complete" : "Next"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Step Indicators */}
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
            /* Completion Summary */
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Reframing Complete!</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  You've successfully worked through the thought reframing process.
                </p>
              </div>

              {/* Summary */}
              <div className="space-y-4">
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Original Thought:</h4>
                  <p className="text-red-800 dark:text-red-200 italic">"{responses[0]}"</p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Balanced Thought:</h4>
                  <p className="text-green-800 dark:text-green-200 italic">"{responses[4]}"</p>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Remember:</h4>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• Practice makes this process easier over time</li>
                  <li>• It's normal for negative thoughts to return - be patient with yourself</li>
                  <li>• You can use this balanced thought whenever the negative one appears</li>
                  <li>• Consider writing it down to reference later</li>
                </ul>
              </div>

              <div className="flex space-x-3">
                <Button onClick={handleReset} variant="outline" className="flex-1 bg-transparent dark:bg-gray-700">
                  Reframe Another Thought
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
