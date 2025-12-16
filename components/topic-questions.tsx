"use client"

import { useState } from "react"
import { Check, X, HelpCircle } from "lucide-react"

interface Question {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

interface TopicQuestionsProps {
  questions: Question[]
}

export default function TopicQuestions({ questions }: TopicQuestionsProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number | null>>({})
  const [showExplanations, setShowExplanations] = useState<Record<number, boolean>>({})

  const handleSelectAnswer = (questionIndex: number, optionIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: optionIndex,
    }))
  }

  const handleShowExplanation = (questionIndex: number) => {
    setShowExplanations((prev) => ({
      ...prev,
      [questionIndex]: !prev[questionIndex],
    }))
  }

  const handleAskQuestion = (question: string) => {
    const event = new CustomEvent("askQuestion", { detail: { question } })
    window.dispatchEvent(event)

    const chatButton = document.querySelector("[aria-label='Open chat']") as HTMLButtonElement
    if (chatButton) {
      chatButton.click()
    }
  }

  return (
    <div className="mt-16 pt-12 border-t border-border">
      <h2 className="text-2xl font-bold text-foreground mb-2">Bu mavzu haqida qo'shimcha savollar</h2>
      <p className="text-muted-foreground mb-8">O'zingizni sinab ko'ring - har bir savolga to'g'ri javob toping</p>

      <div className="space-y-6">
        {questions.map((questionData, qIndex) => {
          const isAnswered = selectedAnswers[qIndex] !== undefined && selectedAnswers[qIndex] !== null
          const isCorrect = selectedAnswers[qIndex] === questionData.correctAnswer
          const showExplanation = showExplanations[qIndex]

          return (
            <div key={qIndex} className="p-6 rounded-lg border border-border bg-card">
              {/* Question */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground mb-4">{questionData.question}</h3>

                {/* Answer Options */}
                <div className="space-y-2">
                  {questionData.options.map((option, oIndex) => {
                    const isSelected = selectedAnswers[qIndex] === oIndex
                    const isOptionCorrect = oIndex === questionData.correctAnswer

                    let buttonClasses = "w-full p-3 text-left rounded-md border-2 transition-all duration-200 "

                    if (!isAnswered) {
                      buttonClasses +=
                        "border-border bg-background hover:border-primary hover:bg-primary/5 cursor-pointer"
                    } else if (isSelected && isCorrect) {
                      buttonClasses += "border-green-500 bg-green-500/10"
                    } else if (isSelected && !isCorrect) {
                      buttonClasses += "border-destructive bg-destructive/10"
                    } else if (isOptionCorrect && !isSelected) {
                      buttonClasses += "border-green-500 bg-green-500/10"
                    } else {
                      buttonClasses += "border-border bg-background opacity-60"
                    }

                    return (
                      <button
                        key={oIndex}
                        onClick={() => !isAnswered && handleSelectAnswer(qIndex, oIndex)}
                        disabled={isAnswered}
                        className={buttonClasses}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center flex-shrink-0">
                            {isSelected && isCorrect && <Check className="w-4 h-4 text-green-600" />}
                            {isSelected && !isCorrect && <X className="w-4 h-4 text-destructive" />}
                            {!isSelected && isOptionCorrect && isAnswered && (
                              <Check className="w-4 h-4 text-green-600" />
                            )}
                          </div>
                          <span className="text-foreground">{option}</span>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Result and Explanation */}
              {isAnswered && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    {isCorrect ? (
                      <div className="flex items-center gap-2 text-green-600">
                        <Check className="w-5 h-5" />
                        <span className="font-semibold">To'g'ri javob!</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-destructive">
                        <X className="w-5 h-5" />
                        <span className="font-semibold">Noto'g'ri javob</span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => handleShowExplanation(qIndex)}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                  >
                    <HelpCircle className="w-4 h-4" />
                    {showExplanation ? "Izohni yashirish" : "Izohni ko'rish"}
                  </button>

                  {showExplanation && (
                    <div className="p-3 rounded-md bg-muted border border-border">
                      <p className="text-sm text-foreground">{questionData.explanation}</p>
                    </div>
                  )}

                  <button
                    onClick={() => handleAskQuestion(questionData.question)}
                    className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    💬 Chatda so'rash
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
