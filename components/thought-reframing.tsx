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
      <Card className="w-full max-w-2xl shadow-lg max-h-[90vh] overflow-y-auto">
        <CardHeader className="text-center relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute right-2 top-2 text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </Button>
          <CardTitle className="text-xl font-semibold">Thought Reframing</CardTitle>
          <p className="text-sm text-muted-foreground">Transform negative thoughts into balanced perspectives</p>
        </CardHeader>
        <CardContent className="space-y-6">
          {!isComplete ? (
            <>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Step {currentStep + 1} of {steps.length}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              <div className="text-center space-y-3">
                <div className="text-5xl">{steps[currentStep].icon}</div>
                <h3 className="text-lg font-semibold">{steps[currentStep].title}</h3>
                <p className="text-sm text-muted-foreground">{steps[currentStep].prompt}</p>
              </div>

              <div className="space-y-3">
                <Label htmlFor="response">Your Response:</Label>
                <Textarea
                  id="response"
                  value={responses[currentStep]}
                  onChange={(e) => handleResponseChange(e.target.value)}
                  placeholder={steps[currentStep].placeholder}
                  rows={4}
                />
              </div>

              <div className="rounded-md border border-border bg-muted/50 p-4">
                <div className="flex items-start space-x-2">
                  <Lightbulb className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-sm mb-1">Tip:</h4>
                    <p className="text-sm text-muted-foreground">
                      {currentStep === 0 && "Be specific about the exact thought that's troubling you."}
                      {currentStep === 1 && "Name the emotions without judgment - all feelings are valid."}
                      {currentStep === 2 && "Look for facts vs. assumptions. What would you tell a friend?"}
                      {currentStep === 3 && "Consider multiple perspectives. What else could be true?"}
                      {currentStep === 4 && "Create a thought that's realistic but more compassionate."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Button onClick={handlePrevious} disabled={currentStep === 0} variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                <Button onClick={handleNext} disabled={!responses[currentStep].trim()}>
                  {currentStep === steps.length - 1 ? "Complete" : "Next"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

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
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-5xl mb-3">🎯</div>
                <h3 className="text-xl font-semibold mb-2">Reframing Complete!</h3>
                <p className="text-sm text-muted-foreground">
                  You&apos;ve successfully worked through the thought reframing process.
                </p>
              </div>

              <div className="space-y-3">
                <div className="rounded-md border border-border bg-muted/50 p-4">
                  <h4 className="font-medium text-sm mb-1">Original Thought:</h4>
                  <p className="text-sm italic text-muted-foreground">&ldquo;{responses[0]}&rdquo;</p>
                </div>
                <div className="rounded-md border border-primary/20 bg-primary/5 p-4">
                  <h4 className="font-medium text-sm mb-1 text-primary">Balanced Thought:</h4>
                  <p className="text-sm italic">&ldquo;{responses[4]}&rdquo;</p>
                </div>
              </div>

              <div className="rounded-md border border-border bg-muted/50 p-4">
                <h4 className="font-medium text-sm mb-2">Remember:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Practice makes this process easier over time</li>
                  <li>It&apos;s normal for negative thoughts to return - be patient with yourself</li>
                  <li>• You can use this balanced thought whenever the negative one appears</li>
                  <li>• Consider writing it down to reference later</li>
                </ul>
              </div>

              <div className="flex space-x-3">
                <Button onClick={handleReset} variant="outline" className="flex-1">
                  Reframe Another Thought
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
