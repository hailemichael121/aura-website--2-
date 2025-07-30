"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { X, ArrowRight, ArrowLeft } from "lucide-react"

interface MentalHealthQuizProps {
  isOpen: boolean
  onClose: () => void
}

const questions = [
  {
    id: 1,
    question: "Over the past 2 weeks, how often have you felt down, depressed, or hopeless?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" },
    ],
  },
  {
    id: 2,
    question: "How often have you had little interest or pleasure in doing things?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" },
    ],
  },
  {
    id: 3,
    question: "How often have you felt nervous, anxious, or on edge?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" },
    ],
  },
  {
    id: 4,
    question: "How often have you had trouble falling or staying asleep?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" },
    ],
  },
  {
    id: 5,
    question: "How would you rate your overall stress level recently?",
    options: [
      { value: 0, label: "Very low" },
      { value: 1, label: "Low" },
      { value: 2, label: "Moderate" },
      { value: 3, label: "High" },
    ],
  },
  {
    id: 6,
    question: "How often do you feel overwhelmed by daily responsibilities?",
    options: [
      { value: 0, label: "Never" },
      { value: 1, label: "Sometimes" },
      { value: 2, label: "Often" },
      { value: 3, label: "Always" },
    ],
  },
]

export default function MentalHealthQuiz({ isOpen, onClose }: MentalHealthQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [currentAnswer, setCurrentAnswer] = useState<number | null>(null)
  const [isComplete, setIsComplete] = useState(false)

  const handleNext = () => {
    if (currentAnswer !== null) {
      const newAnswers = [...answers]
      newAnswers[currentQuestion] = currentAnswer
      setAnswers(newAnswers)

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setCurrentAnswer(newAnswers[currentQuestion + 1] ?? null)
      } else {
        setIsComplete(true)
      }
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setCurrentAnswer(answers[currentQuestion - 1] ?? null)
    }
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setCurrentAnswer(null)
    setIsComplete(false)
  }

  const getTotalScore = () => {
    return answers.reduce((sum, answer) => sum + answer, 0)
  }

  const getResultInfo = () => {
    const score = getTotalScore()
    if (score <= 6) {
      return {
        level: "Low",
        color: "text-green-600 dark:text-green-400",
        bgColor: "bg-green-50 dark:bg-green-900/20",
        description: "Your responses suggest you're managing well overall.",
        recommendations: [
          "Continue your current self-care practices",
          "Stay connected with supportive people",
          "Maintain healthy lifestyle habits",
        ],
      }
    } else if (score <= 12) {
      return {
        level: "Moderate",
        color: "text-yellow-600 dark:text-yellow-400",
        bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
        description: "You may be experiencing some challenges that could benefit from attention.",
        recommendations: [
          "Consider talking to a counselor or therapist",
          "Practice stress management techniques",
          "Reach out to AURA's support programs",
        ],
      }
    } else {
      return {
        level: "High",
        color: "text-red-600 dark:text-red-400",
        bgColor: "bg-red-50 dark:bg-red-900/20",
        description: "Your responses suggest you may benefit from professional support.",
        recommendations: [
          "Consider seeking professional help immediately",
          "Contact AURA's crisis support line",
          "Reach out to trusted friends or family",
        ],
      }
    }
  }

  const progress = isComplete ? 100 : ((currentQuestion + 1) / questions.length) * 100

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white dark:bg-gray-800 border-0 shadow-2xl">
        <CardHeader className="text-center relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="w-4 h-4" />
          </Button>
          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Mental Health Check-In</CardTitle>
          <p className="text-gray-600 dark:text-gray-300">A brief assessment to understand how you're feeling</p>
        </CardHeader>
        <CardContent className="space-y-6">
          {!isComplete ? (
            <>
              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                  <span>
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              {/* Question */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {questions[currentQuestion].question}
                </h3>

                <RadioGroup
                  value={currentAnswer?.toString()}
                  onValueChange={(value) => setCurrentAnswer(Number.parseInt(value))}
                  className="space-y-3"
                >
                  {questions[currentQuestion].options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-3">
                      <RadioGroupItem
                        value={option.value.toString()}
                        id={`option-${option.value}`}
                        className="border-gray-300 dark:border-gray-600"
                      />
                      <Label
                        htmlFor={`option-${option.value}`}
                        className="text-gray-700 dark:text-gray-300 cursor-pointer flex-1 py-2"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Navigation */}
              <div className="flex justify-between">
                <Button
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  variant="outline"
                  className="bg-transparent dark:bg-gray-700"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={currentAnswer === null}
                  className="bg-[#31960F] hover:bg-[#2A7F0C] text-white"
                >
                  {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </>
          ) : (
            /* Results */
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Your Results</h3>
                <p className="text-gray-600 dark:text-gray-300">Based on your responses</p>
              </div>

              {(() => {
                const result = getResultInfo()
                return (
                  <div className={`${result.bgColor} rounded-lg p-6 space-y-4`}>
                    <div className="text-center">
                      <div className={`text-3xl font-bold ${result.color} mb-2`}>{result.level} Concern Level</div>
                      <div className={`text-lg ${result.color} mb-2`}>Score: {getTotalScore()}/18</div>
                      <p className="text-gray-700 dark:text-gray-300">{result.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Recommendations:</h4>
                      <ul className="space-y-2">
                        {result.recommendations.map((rec, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-[#31960F] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 dark:text-gray-300">{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })()}

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Important Note:</h4>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  This is a screening tool and not a diagnostic assessment. If you're experiencing thoughts of self-harm
                  or suicide, please seek immediate professional help or contact emergency services.
                </p>
              </div>

              <div className="flex space-x-3">
                <Button onClick={handleReset} variant="outline" className="flex-1 bg-transparent dark:bg-gray-700">
                  Take Again
                </Button>
                <Button onClick={onClose} className="flex-1 bg-[#31960F] hover:bg-[#2A7F0C] text-white">
                  Get Support
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
