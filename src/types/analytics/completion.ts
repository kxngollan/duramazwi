export interface ChallengeCompletionEvent {
  date: string;
  totalScore: number;
  correctAnswers: number;
  totalChallenges: number;
  accuracy: number;
  timeSpent: number;
  city?: string;
  country?: string;
  region?: string;
  latitude?: string;
  longitude?: string;
  userAgent?: string;
  timestamp: number;
  userId?: string;
}

export interface ChallengeCompletionResponse {
  success: boolean;
  id?: string;
  error?: string;
}
