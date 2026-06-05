"use client";

import Link from "next/link";
import { useState, useCallback } from "react";
import { Challenge, ChallengeSession, ChallengeResult } from "@/types/challenge";
import { familyChallenges } from "@/components/challenge/family-challenges";
import { shuffleArray } from "@/utils/shuffle";
import ChallengeProgress from "@/components/challenge/ChallengeProgress";
import MultipleChoiceChallenge from "@/components/challenge/MultipleChoiceChallenge";
import TranslationChallenge from "@/components/challenge/TranslationChallenge";
import ChallengeComplete from "@/components/challenge/ChallengeComplete";

type Mode = "easy" | "medium" | "hard" | "mixed";

const MODE_CONFIG: Record<
  Mode,
  { label: string; description: string; difficulty?: string; count: number; icon: string }
> = {
  easy: {
    label: "Easy",
    description: "40 beginner challenges. Vocabulary and basic recognition.",
    difficulty: "beginner",
    count: 40,
    icon: "🌱",
  },
  medium: {
    label: "Medium",
    description: "30 intermediate challenges. Context and grammar.",
    difficulty: "intermediate",
    count: 30,
    icon: "🔥",
  },
  hard: {
    label: "Hard",
    description: "20 advanced challenges. Cultural nuance and full sentences.",
    difficulty: "advanced",
    count: 20,
    icon: "⚡",
  },
  mixed: {
    label: "Mixed",
    description: "10 random challenges across all difficulties.",
    count: 10,
    icon: "🎯",
  },
};

function prepareChallenge(raw: (typeof familyChallenges)[0]): Challenge {
  return {
    id: raw.id,
    type: raw.type as Challenge["type"],
    question: raw.question,
    correctAnswer: raw.correctAnswer,
    options: raw.options ? shuffleArray([...raw.options]) : undefined,
    distractors: raw.distractors ? shuffleArray([...raw.distractors]) : undefined,
    explanation: raw.explanation,
    difficulty: raw.difficulty as Challenge["difficulty"],
    points: raw.points,
    labels: raw.labels,
  };
}

function buildSet(mode: Mode): Challenge[] {
  const cfg = MODE_CONFIG[mode];
  const pool = cfg.difficulty
    ? familyChallenges.filter((c) => c.difficulty === cfg.difficulty)
    : shuffleArray([...familyChallenges]);
  const selected = pool.slice(0, cfg.count);
  return selected.map(prepareChallenge);
}

function makeSession(challenges: Challenge[]): ChallengeSession {
  return {
    date: "family-course",
    challenges,
    results: [],
    currentChallengeIndex: 0,
    startTime: Date.now(),
    isComplete: false,
    totalScore: 0,
  };
}

// ── Selection screen ──────────────────────────────────────────────────────────

function SelectionScreen({ onStart }: { onStart: (mode: Mode) => void }) {
  const [selected, setSelected] = useState<Mode | null>(null);

  return (
    <div className="min-h-screen pb-20">
      <div className="bg-[var(--color-primary)] py-12 px-6">
        <div className="max-w-xl mx-auto">
          <Link
            href="/courses/family"
            className="text-sm text-[var(--color-accent)] hover:underline mb-4 inline-block"
          >
            ← Back to Family Course
          </Link>
          <h1 className="text-4xl font-bold text-[var(--color-hero-text)] mb-2">
            Family Challenges
          </h1>
          <p className="text-[var(--color-hero-text)] opacity-80">
            Pick a difficulty to begin
          </p>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-6 mt-10">
        <div className="grid gap-4">
          {(Object.entries(MODE_CONFIG) as [Mode, (typeof MODE_CONFIG)[Mode]][]).map(
            ([mode, cfg]) => (
              <button
                type="button"
                key={mode}
                onClick={() => setSelected(mode)}
                className={[
                  "flex items-center gap-4 w-full text-left rounded-2xl border p-5 transition-all",
                  selected === mode
                    ? "border-[var(--color-primary)] bg-[var(--color-surface-raised)] shadow-md"
                    : "border-[var(--color-border)] bg-[var(--color-surface-raised)] hover:shadow-md",
                ].join(" ")}
              >
                <span className="text-3xl">{cfg.icon}</span>
                <div className="flex-1">
                  <p className="font-bold text-[var(--color-text)]">
                    {cfg.label}
                    <span className="ml-2 text-xs font-normal text-[var(--color-muted)]">
                      {cfg.count} challenges
                    </span>
                  </p>
                  <p className="text-sm text-[var(--color-muted)] mt-0.5">
                    {cfg.description}
                  </p>
                </div>
                <div
                  className={[
                    "w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center",
                    selected === mode
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)]"
                      : "border-[var(--color-border)]",
                  ].join(" ")}
                >
                  {selected === mode && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </button>
            ),
          )}
        </div>

        <button
          type="button"
          disabled={!selected}
          onClick={() => selected && onStart(selected)}
          className="mt-6 w-full py-4 rounded-xl font-semibold text-lg transition-all theme-button-accent hover:brightness-95 disabled:opacity-40 disabled:cursor-not-allowed border-b-4 shadow-lg"
        >
          Start Challenge
        </button>
      </div>
    </div>
  );
}

// ── Active challenge screen ───────────────────────────────────────────────────

function ActiveChallenge({
  session,
  onAnswer,
  onAnswerChecked,
}: {
  session: ChallengeSession;
  onAnswer: (answer: string | string[], isCorrect: boolean) => void;
  onAnswerChecked: (isCorrect: boolean) => void;
}) {
  const challenge = session.challenges[session.currentChallengeIndex];

  const handleComplete = useCallback(
    (answer: string | string[], isCorrect: boolean) => {
      onAnswer(answer, isCorrect);
    },
    [onAnswer],
  );

  if (!challenge) return null;

  return (
    <>
      {challenge.type === "multiple_choice" && (
        <MultipleChoiceChallenge
          key={challenge.id}
          challenge={challenge}
          onComplete={(a, ok) => handleComplete(a, ok)}
          onAnswerChecked={onAnswerChecked}
        />
      )}
      {challenge.type === "translation_builder" && (
        <TranslationChallenge
          key={challenge.id}
          challenge={challenge}
          onComplete={(a, ok) => handleComplete(a, ok)}
          onAnswerChecked={onAnswerChecked}
        />
      )}
    </>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function FamilyChallengesPage() {
  const [mode, setMode] = useState<Mode | null>(null);
  const [session, setSession] = useState<ChallengeSession | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [currentAnswerCorrect, setCurrentAnswerCorrect] = useState<boolean | null>(null);
  const [justCompleted, setJustCompleted] = useState(false);

  const handleStart = useCallback((m: Mode) => {
    const challenges = buildSet(m);
    setMode(m);
    setSession(makeSession(challenges));
    setHasAnswered(false);
    setCurrentAnswerCorrect(null);
    setJustCompleted(false);
  }, []);

  const handleAnswer = useCallback(
    (answer: string | string[], isCorrect: boolean) => {
      if (!session) return;
      const challenge = session.challenges[session.currentChallengeIndex];
      const isLast = session.currentChallengeIndex === session.challenges.length - 1;

      const result: ChallengeResult = {
        challengeId: challenge.id,
        userAnswer: answer,
        isCorrect,
        pointsEarned: isCorrect ? challenge.points : 0,
        timeSpent: Math.floor((Date.now() - session.startTime) / 1000),
      };

      setSession((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          results: [...prev.results, result],
          totalScore: prev.totalScore + result.pointsEarned,
          currentChallengeIndex: isLast
            ? prev.currentChallengeIndex
            : prev.currentChallengeIndex + 1,
          isComplete: isLast,
          endTime: isLast ? Date.now() : prev.endTime,
        };
      });

      setHasAnswered(false);
      setCurrentAnswerCorrect(null);
      if (isLast) setJustCompleted(true);
    },
    [session],
  );

  const handleAnswerChecked = useCallback((isCorrect: boolean) => {
    setHasAnswered(true);
    setCurrentAnswerCorrect(isCorrect);
  }, []);

  const handleRestart = useCallback(() => {
    if (!mode) return;
    handleStart(mode);
  }, [mode, handleStart]);

  const handleNewSet = useCallback(() => {
    setMode(null);
    setSession(null);
  }, []);

  // ── No mode selected yet
  if (!mode || !session) {
    return <SelectionScreen onStart={handleStart} />;
  }

  // ── Complete screen
  if (session.isComplete) {
    return (
      <div className="py-8 px-4 max-w-xl mx-auto">
        <ChallengeComplete
          session={session}
          onRestart={handleRestart}
          playCompletionSound={justCompleted}
        />
        <div className="mt-4 flex gap-3">
          <button
            type="button"
            onClick={handleNewSet}
            className="flex-1 py-3 rounded-xl border border-[var(--color-border)] text-sm font-medium text-[var(--color-text)] bg-[var(--color-surface-raised)] hover:shadow-md transition-all"
          >
            ← Choose difficulty
          </button>
          <button
            type="button"
            onClick={handleRestart}
            className="flex-1 py-3 rounded-xl border-b-4 text-sm font-medium theme-button-accent hover:brightness-95 transition-all shadow"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  // ── Active challenge
  return (
    <div className="py-8 px-4 max-w-xl mx-auto">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-6">
        <button
          type="button"
          onClick={handleNewSet}
          className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:underline"
        >
          ← Change difficulty
        </button>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--color-surface)] text-[var(--color-primary)]">
          {MODE_CONFIG[mode].label}
        </span>
      </div>

      <ChallengeProgress
        current={session.currentChallengeIndex + 1}
        completed={
          hasAnswered
            ? session.currentChallengeIndex + 1
            : session.currentChallengeIndex
        }
        total={session.challenges.length}
        score={session.totalScore}
        results={session.results}
        currentAnswerCorrect={currentAnswerCorrect}
      />

      <div className="mt-8">
        <ActiveChallenge
          session={session}
          onAnswer={handleAnswer}
          onAnswerChecked={handleAnswerChecked}
        />
      </div>
    </div>
  );
}
