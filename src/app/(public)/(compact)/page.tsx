import { Suspense } from "react";
import { Metadata } from "next/types";
import Link from "next/link";
import WebsiteStructuredData from "@/component/website-structured-data.component";
import SvgIcon from "@/component/icons/svg-icon";
import dataService from "@/services/dataService";
import { createMetadata } from "@/utils/metadata";
import SocialLinks from "@/components/SocialLinks";
import InlineIcon from "@/components/InlineIcon";
import HomeContent from "./home-content";

function getTwoHourRandomWord() {
  const words = dataService.getAllWords();

  if (words.length === 0) {
    return null;
  }

  const twoHourBucket = Math.floor(Date.now() / (1000 * 60 * 60 * 2));
  const index = ((twoHourBucket * 2654435761) >>> 0) % words.length;
  const word = words[index];
  const details = dataService.getWordDetails(word);
  const firstEntry = Array.isArray(details) ? details[0] : null;
  const definition = firstEntry?.meanings?.[0]?.definitions?.[0]?.definition;

  return {
    definition: definition || "Explore this Shona word",
    word,
  };
}

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata({});
}

export default async function HomePage() {
  const randomHeroWord = getTwoHourRandomWord();

  return (
    <div>
      <WebsiteStructuredData />
      <Suspense fallback={<div className="mb-10 py-8" />}>
        <HomeContent randomHeroWord={randomHeroWord}>
          <WelcomeContent />
        </HomeContent>
      </Suspense>
    </div>
  );
}

function WelcomeContent() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Daily Challenge Card - Prominent and Inviting */}
      <Link
        href="/challenge/daily"
        className="block mb-8 group hover:underline hover:text-[--color-accent] text-white"
      >
        <div className="relative overflow-hidden bg-[var(--color-primary)] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.3),transparent)]"></div>
          </div>

          <div className="relative flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-[#1B1B1B] shadow-[var(--shadow-card)]"
                >
                  <SvgIcon className="h-8 w-8" icon="Trophy" />
                </span>
                <div>
                  <h2 className="text-3xl font-bold  mb-1">
                    Daily Shona Challenge
                  </h2>
                  <p className=" text-lg">Test your Shona knowledge today!</p>
                </div>
              </div>
              <p className="text-lg mb-4 max-w-xl">
                Take on fun challenges to improve your vocabulary. New
                challenges every day!
              </p>
              <div className="inline-flex items-center gap-2 theme-button-accent px-4 py-2 rounded-lg font-semibold group-hover:brightness-95 transition-colors border">
                <span>Start Challenge</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="hidden md:block">
              <InlineIcon
                className="h-20 w-20 opacity-20 transform rotate-12 text-[var(--color-hero-text)]"
                name="flash"
              />
            </div>
          </div>
        </div>
      </Link>

      <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
        Explore the Shona Dictionary
      </h2>

      <div className="space-y-6 text-lg text-[var(--color-muted)] mb-8 leading-relaxed">
        <p>
          Welcome to our growing repository of words from the rich and vibrant
          Shona lexicon. This project is a community-driven effort to document
          and celebrate the language.
        </p>
        {/* Social Media Links */}
        <div className="mb-6 text-center">
          <div className="flex justify-center  mb-2">
            <SocialLinks variant="compact" />
          </div>
          <h3 className="text-sm font-medium text-[var(--color-muted)] underline">
            Follow us for daily Shona content
          </h3>
        </div>
        <p>
          Our ambition is to build the most comprehensive dataset of Shona
          words, making it a valuable resource for speakers and learners alike.
        </p>
        <p>
          <Link
            href="/suggest"
            className="text-[var(--color-primary)] hover:text-[var(--color-accent)] underline font-medium"
            title="Contribute to the dictionary"
            aria-label="Contribute to the dictionary"
          >
            Your suggestions
          </Link>{" "}
          play a vital role in shaping this project. Contribute today and be
          part of the journey!
        </p>
      </div>

      {/* Featured Words Preview */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6 shadow-[var(--shadow-card)]">
        <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">
          Featured Words
        </h3>
        <p className="text-lg text-[var(--color-muted)] mb-4">
          Discover some words from our dictionary:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {/* Sample featured words - you can make this dynamic later */}
          {[
            "adhiresi",
            "aina",
            "aini",
            "aisi",
            "bako",
            "chitima",
            "gumbeze",
            "mweya",
          ].map((word) => (
            <Link
              key={word}
              href={`/word/${encodeURIComponent(word)}`}
              className="text-lg text-[var(--color-primary)] hover:underline hover:text-[var(--color-accent)] font-medium transition-colors"
              title={`View definition of "${word}"`}
              aria-label={`View definition of "${word}"`}
            >
              {word}
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/browse"
            className="inline-flex items-center px-4 py-2 theme-button-accent hover:brightness-95 rounded-md transition-colors hover:text-[var(--color-accent)] hover:bg-[var(--color-primary)]"
            title="Browse all dictionary entries"
            aria-label="Browse all dictionary entries"
          >
            Browse All Words
          </Link>
        </div>
      </div>
    </div>
  );
}
