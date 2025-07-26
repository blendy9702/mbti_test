export interface Question {
  id: number;
  question: string;
  emoji: string;
  options: {
    text: string;
    type: "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";
    emoji: string;
    gradient: string;
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: "E vs I 밸런스 게임",
    emoji: "🎉",
    options: [
      {
        text: "동성로에서 춤추기",
        type: "E",
        emoji: "🗣️",
        gradient: "from-pink-400 via-rose-400 to-orange-400",
      },
      {
        text: "유니클로 창고에서 폰없이 3시간 있기",
        type: "I",
        emoji: "💭",
        gradient: "from-orange-400 via-amber-400 to-yellow-400",
      },
    ],
  },
  {
    id: 2,
    question: "N vs S 밸런스 게임",
    emoji: "🧠",
    options: [
      {
        text: "남이 못하는 상상하기",
        type: "S",
        emoji: "✨",
        gradient: "from-orange-400 via-yellow-400 to-amber-400",
      },
      {
        text: "남이 모르는 사실 캐치하기",
        type: "N",
        emoji: "🔍",
        gradient: "from-red-400 via-rose-400 to-pink-400",
      },
    ],
  },
  {
    id: 3,
    question: "T vs F 밸런스 게임",
    emoji: "⚖️",
    options: [
      {
        text: "T 한테 팩폭당하기",
        type: "T",
        emoji: "🤔",
        gradient: "from-amber-400 via-orange-400 to-red-400",
      },
      {
        text: "F 감성팔이 1시간 들어주기",
        type: "F",
        emoji: "❤️",
        gradient: "from-pink-400 via-rose-400 to-red-400",
      },
    ],
  },
  {
    id: 4,
    question: "J vs P 밸런스 게임",
    emoji: "📅",
    options: [
      {
        text: "분단위로 계획짜고 여행가기",
        type: "J",
        emoji: "📋",
        gradient: "from-red-400 via-orange-400 to-yellow-400",
      },
      {
        text: "무계획 여행가기",
        type: "P",
        emoji: "🌊",
        gradient: "from-pink-400 via-rose-400 to-orange-400",
      },
    ],
  },
];

export const mbtiDescriptions: Record<
  string,
  {
    title: string;
    description: string;
    traits: string[];
    emoji: string;
    color: string;
    gradient: string;
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
};
