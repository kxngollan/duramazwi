export interface Challenge {
  id: string;
  type: "multiple_choice" | "audio_recognition" | "translation_builder";
  question: string;
  correctAnswer: string | string[];
  options?: string[];
  distractors?: string[];
  audioUrl?: string;
  explanation?: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  points: number;
  labels?: string[];
}

export interface DailyChallenge {
  date: string;
  challenges: Challenge[];
  totalPoints: number;
  estimatedTime: number;
  status: "draft" | "published";
}

export interface ChallengeResult {
  challengeId: string;
  userAnswer: string | string[];
  isCorrect: boolean;
  pointsEarned: number;
  timeSpent: number;
}

export interface ChallengeSession {
  date: string;
  challenges: Challenge[];
  results: ChallengeResult[];
  currentChallengeIndex: number;
  totalScore: number;
  isComplete: boolean;
  startTime: number;
  endTime?: number;
}
