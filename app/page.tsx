"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, RotateCcw, Sparkles } from "lucide-react"

interface Question {
  id: number
  question: string
  emoji: string
  options: {
    text: string
    type: "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P"
    emoji: string
    gradient: string
  }[]
}

const questions: Question[] = [
  {
    id: 1,
    question: "파티에서 당신은 어떤 사람인가요?",
    emoji: "🎉",
    options: [
      {
        text: "많은 사람들과 대화하며 에너지를 얻는다",
        type: "E",
        emoji: "🗣️",
        gradient: "from-pink-400 via-rose-400 to-orange-400",
      },
      {
        text: "소수의 친한 사람들과 깊은 대화를 나눈다",
        type: "I",
        emoji: "💭",
        gradient: "from-orange-400 via-amber-400 to-yellow-400",
      },
    ],
  },
  {
    id: 2,
    question: "새로운 정보를 받아들일 때 당신은?",
    emoji: "🧠",
    options: [
      {
        text: "구체적인 사실과 세부사항에 집중한다",
        type: "S",
        emoji: "🔍",
        gradient: "from-orange-400 via-yellow-400 to-amber-400",
      },
      {
        text: "전체적인 패턴과 가능성을 본다",
        type: "N",
        emoji: "✨",
        gradient: "from-red-400 via-rose-400 to-pink-400",
      },
    ],
  },
  {
    id: 3,
    question: "중요한 결정을 내릴 때 당신은?",
    emoji: "⚖️",
    options: [
      {
        text: "논리적 분석과 객관적 사실을 중시한다",
        type: "T",
        emoji: "🤔",
        gradient: "from-amber-400 via-orange-400 to-red-400",
      },
      {
        text: "사람들의 감정과 가치를 고려한다",
        type: "F",
        emoji: "❤️",
        gradient: "from-pink-400 via-rose-400 to-red-400",
      },
    ],
  },
  {
    id: 4,
    question: "일상생활에서 당신은?",
    emoji: "📅",
    options: [
      {
        text: "계획을 세우고 체계적으로 진행한다",
        type: "J",
        emoji: "📋",
        gradient: "from-red-400 via-orange-400 to-yellow-400",
      },
      {
        text: "유연하게 상황에 맞춰 적응한다",
        type: "P",
        emoji: "🌊",
        gradient: "from-pink-400 via-rose-400 to-orange-400",
      },
    ],
  },
]

const mbtiDescriptions: Record<
  string,
  {
    title: string
    description: string
    traits: string[]
    emoji: string
    color: string
    gradient: string
  }
> = {
  ENFJ: {
    title: "선도자",
    description: "타인의 성장을 돕는 카리스마 있는 리더",
    traits: ["공감능력이 뛰어남", "영감을 주는 리더십", "타인 중심적 사고"],
    emoji: "👑",
    color: "from-pink-500 to-orange-500",
    gradient: "from-pink-400 via-rose-400 to-orange-400",
  },
  ENFP: {
    title: "활동가",
    description: "열정적이고 창의적인 자유로운 영혼",
    traits: ["창의적이고 열정적", "사교적이고 친근함", "새로운 가능성 추구"],
    emoji: "🌟",
    color: "from-orange-500 to-yellow-500",
    gradient: "from-orange-400 via-amber-400 to-yellow-400",
  },
  ENTJ: {
    title: "통솔자",
    description: "대담하고 상상력이 풍부한 강력한 리더",
    traits: ["천연 리더십", "전략적 사고", "목표 지향적"],
    emoji: "⚡",
    color: "from-red-500 to-pink-500",
    gradient: "from-red-400 via-rose-400 to-pink-400",
  },
  ENTP: {
    title: "토론가",
    description: "똑똑하고 호기심 많은 사상가",
    traits: ["혁신적이고 창의적", "논리적 사고", "도전을 즐김"],
    emoji: "💡",
    color: "from-yellow-500 to-orange-500",
    gradient: "from-yellow-400 via-orange-400 to-red-400",
  },
  ESFJ: {
    title: "집정관",
    description: "매우 배려심 많고 사교적인 사람",
    traits: ["협력적이고 친근함", "책임감이 강함", "전통을 중시"],
    emoji: "🤝",
    color: "from-rose-500 to-pink-500",
    gradient: "from-rose-400 via-pink-400 to-red-400",
  },
  ESFP: {
    title: "연예인",
    description: "자발적이고 열정적인 연예인",
    traits: ["활발하고 친근함", "현재를 즐김", "실용적 접근"],
    emoji: "🎭",
    color: "from-pink-500 to-rose-500",
    gradient: "from-pink-400 via-rose-400 to-red-400",
  },
  ESTJ: {
    title: "경영자",
    description: "뛰어난 관리자, 질서와 체계를 중시",
    traits: ["체계적이고 효율적", "책임감이 강함", "현실적 접근"],
    emoji: "📊",
    color: "from-orange-500 to-red-500",
    gradient: "from-orange-400 via-red-400 to-rose-400",
  },
  ESTP: {
    title: "사업가",
    description: "똑똑하고 에너지 넘치는 인식가",
    traits: ["행동력이 뛰어남", "현실적이고 실용적", "적응력이 좋음"],
    emoji: "🚀",
    color: "from-red-500 to-orange-500",
    gradient: "from-red-400 via-orange-400 to-yellow-400",
  },
  INFJ: {
    title: "옹호자",
    description: "선의의 옹호자, 조용하지만 매우 영감을 주는 이상주의자",
    traits: ["직관력이 뛰어남", "이상주의적", "깊이 있는 사고"],
    emoji: "🔮",
    color: "from-rose-500 to-orange-500",
    gradient: "from-rose-400 via-pink-400 to-orange-400",
  },
  INFP: {
    title: "중재자",
    description: "이상주의적이고 충성심 있는 자유로운 영혼",
    traits: ["창의적이고 이상주의적", "개인의 가치 중시", "조화를 추구"],
    emoji: "🌸",
    color: "from-pink-500 to-rose-500",
    gradient: "from-pink-400 via-rose-400 to-red-400",
  },
  INTJ: {
    title: "건축가",
    description: "상상력이 풍부하고 전략적인 사상가",
    traits: ["독립적이고 전략적", "미래 지향적", "완벽주의 성향"],
    emoji: "🏗️",
    color: "from-amber-500 to-orange-500",
    gradient: "from-amber-400 via-orange-400 to-red-400",
  },
  INTP: {
    title: "논리술사",
    description: "혁신적인 발명가, 지식에 대한 끝없는 갈증",
    traits: ["논리적이고 분석적", "독창적 사고", "지적 호기심"],
    emoji: "🧪",
    color: "from-yellow-500 to-amber-500",
    gradient: "from-yellow-400 via-amber-400 to-orange-400",
  },
  ISFJ: {
    title: "수호자",
    description: "따뜻하고 헌신적인 수호자",
    traits: ["배려심이 깊음", "책임감이 강함", "안정을 추구"],
    emoji: "🛡️",
    color: "from-orange-500 to-amber-500",
    gradient: "from-orange-400 via-amber-400 to-yellow-400",
  },
  ISFP: {
    title: "모험가",
    description: "유연하고 매력적인 예술가",
    traits: ["온화하고 친근함", "예술적 감각", "개인의 자유 중시"],
    emoji: "🎨",
    color: "from-rose-500 to-pink-500",
    gradient: "from-rose-400 via-pink-400 to-orange-400",
  },
  ISTJ: {
    title: "현실주의자",
    description: "사실에 근거한 믿을 수 있는 실용주의자",
    traits: ["신뢰할 수 있음", "체계적이고 꼼꼼함", "전통을 중시"],
    emoji: "📚",
    color: "from-amber-500 to-yellow-500",
    gradient: "from-amber-400 via-yellow-400 to-orange-400",
  },
  ISTP: {
    title: "만능재주꾼",
    description: "대담하고 실용적인 실험가",
    traits: ["실용적이고 현실적", "문제 해결 능력", "독립적 성향"],
    emoji: "🔧",
    color: "from-red-500 to-rose-500",
    gradient: "from-red-400 via-rose-400 to-pink-400",
  },
}

export default function MBTITest() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const progress = ((currentQuestion + (selectedOption !== null ? 1 : 0)) / questions.length) * 100

  const handleAnswer = (optionIndex: number) => {
    setSelectedOption(optionIndex)

    setTimeout(() => {
      const newAnswers = [...answers, questions[currentQuestion].options[optionIndex].type]
      setAnswers(newAnswers)

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedOption(null)
      } else {
        setShowResult(true)
      }
    }, 600)
  }

  const getMBTIResult = () => {
    const counts: Record<string, number> = {}
    answers.forEach((answer) => {
      counts[answer] = (counts[answer] || 0) + 1
    })

    const result =
      (counts["E"] > counts["I"] ? "E" : "I") +
      (counts["S"] > counts["N"] ? "S" : "N") +
      (counts["T"] > counts["F"] ? "T" : "F") +
      (counts["J"] > counts["P"] ? "J" : "P")

    return result
  }

  const resetTest = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
    setSelectedOption(null)
  }

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setAnswers(answers.slice(0, -1))
      setSelectedOption(null)
    }
  }

  if (showResult) {
    const result = getMBTIResult()
    const resultInfo = mbtiDescriptions[result]

    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-600 via-orange-500 to-yellow-400 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-red-400/20 to-pink-400/20 rounded-full blur-lg"
          />
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-md"
          >
            <Card className="backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl">
              <CardHeader className="text-center pb-6">
                <motion.div
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <div className="text-6xl mb-4">{resultInfo.emoji}</div>
                  <CardTitle className="text-2xl font-bold text-white mb-3">당신의 MBTI는</CardTitle>
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, duration: 0.8, type: "spring", bounce: 0.6 }}
                    className="inline-block"
                  >
                    <Badge
                      className={`text-3xl font-bold px-6 py-3 bg-gradient-to-r ${resultInfo.color} text-white shadow-lg border-0`}
                    >
                      {result}
                    </Badge>
                  </motion.div>
                </motion.div>
              </CardHeader>

              <CardContent className="space-y-6">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="text-center"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{resultInfo.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{resultInfo.description}</p>
                </motion.div>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="backdrop-blur-sm bg-white/5 rounded-2xl p-5 border border-white/10"
                >
                  <h4 className="font-semibold text-white mb-4 flex items-center">
                    <Sparkles className="w-4 h-4 mr-2" />
                    주요 특징
                  </h4>
                  <div className="space-y-3">
                    {resultInfo.traits.map((trait, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.1 + index * 0.15, duration: 0.4 }}
                        className="flex items-center space-x-3"
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: index * 0.2,
                          }}
                          className={`w-2 h-2 bg-gradient-to-r ${resultInfo.gradient} rounded-full`}
                        />
                        <span className="text-white/90 text-sm">{trait}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  className="flex justify-center pt-2"
                >
                  <Button
                    onClick={resetTest}
                    className={`bg-gradient-to-r ${resultInfo.color} hover:scale-105 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 border-0`}
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    다시 테스트하기
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-32 left-10 w-32 h-32 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [-30, 30, -30],
            x: [-15, 15, -15],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-1/4 w-28 h-28 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full blur-lg"
        />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl opacity-100">
            <CardHeader className="pb-4 opacity-100">
              <div className="flex justify-between mb-6 items-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={goBack}
                  disabled={currentQuestion === 0}
                  className="text-white/70 hover:text-white hover:bg-white/10 rounded-xl"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  이전
                </Button>
                <span className="text-sm text-white/70 font-medium">
                  {currentQuestion + 1} / {questions.length}
                </span>
              </div>

              <motion.div
                key={`progress-${currentQuestion}`}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                className="w-full"
              >
                <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 rounded-full shadow-lg"
                  />
                </div>
              </motion.div>
            </CardHeader>

            <CardContent className="space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 100, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className="text-center mb-8">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                      className="text-5xl mb-4"
                    >
                      {questions[currentQuestion].emoji}
                    </motion.div>
                    <h2 className="text-xl font-bold text-white leading-relaxed px-2">
                      {questions[currentQuestion].question}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {questions[currentQuestion].options.map((option, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                      >
                        <Button
                          variant="ghost"
                          className={`w-full p-6 text-left justify-start h-auto whitespace-normal transition-all duration-500 rounded-2xl border-2 ${
                            selectedOption === index
                              ? `bg-gradient-to-r ${option.gradient} text-white shadow-2xl scale-105 border-white/30`
                              : "hover:bg-white/10 border-white/20 text-white/90 hover:border-white/40 hover:scale-102"
                          }`}
                          onClick={() => handleAnswer(index)}
                          disabled={selectedOption !== null}
                        >
                          <motion.div
                            whileHover={{ scale: selectedOption === null ? 1.02 : 1 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full flex items-center space-x-4"
                          >
                            <motion.span
                              className="text-2xl"
                              animate={
                                selectedOption === index
                                  ? {
                                      rotate: [0, 10, -10, 0],
                                      scale: [1, 1.2, 1],
                                    }
                                  : {}
                              }
                              transition={{ duration: 0.6 }}
                            >
                              {option.emoji}
                            </motion.span>
                            <span className="text-base font-medium leading-relaxed flex-1">{option.text}</span>
                          </motion.div>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
