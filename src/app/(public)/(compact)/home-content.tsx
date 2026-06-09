"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { IoLanguage } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import SimpleSearchBar from "@/component/simple-search-bar.component";
import ResultsPage from "@/app/ResultsPage";

interface RandomHeroWord {
  definition: string;
  word: string;
}

function HomeSearchResults() {
  return <ResultsPage />;
}

export default function HomeContent({
  children,
  randomHeroWord,
}: {
  children: React.ReactNode;
  randomHeroWord: RandomHeroWord | null;
}) {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") || "";

  return (
    <>
      <header
        className={`transition-all duration-500 ease-in-out ${searchQuery ? "py-0 mb-0" : "mb-10"}`}
      >
        {searchQuery ? (
          <div className="mx-auto w-full transition-all duration-500 ease-in-out">
            <div id="search-bar">
              <SimpleSearchBar initialQuery={searchQuery} />
            </div>
          </div>
        ) : (
          <div className="overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-soft)]">
            <div className="relative overflow-hidden bg-[var(--color-primary)] px-6 py-8 text-[var(--color-hero-text)] sm:px-8 sm:py-10">
              <div className="absolute right-0 top-0 h-36 w-36 rounded-bl-full bg-[var(--color-accent)]" />
              <div className="absolute bottom-0 left-0 h-20 w-20 rounded-tr-full bg-[var(--color-danger)]" />

              <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div className="text-left">
                  <div className="theme-hero-pill mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium backdrop-blur">
                    <span aria-hidden="true">
                      <IoLanguage />
                    </span>
                    <span>English ↔ ChiShona</span>
                  </div>
                  <h1 className="text-4xl font-black tracking-normal md:text-6xl capitalize">
                    Shona dictionary
                  </h1>
                  <p className="mt-3 max-w-xl text-lg leading-relaxed text-[var(--color-hero-text)]/90">
                    Explore the meanings of Shona words or find Shona
                    equivalents for English words.
                  </p>
                </div>

                {randomHeroWord && (
                  <Link
                    href={`/word/${encodeURIComponent(randomHeroWord.word)}`}
                    className="w-full max-w-sm rotate-[-2deg] rounded-3xl border border-[var(--color-border)] bg-[var(--color-background)] p-5 text-[var(--color-text)] shadow-[var(--shadow-card)] transition-transform duration-300 hover:rotate-0 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] dark:bg-[var(--color-surface)] md:w-72"
                    title={`View definition of "${randomHeroWord.word}"`}
                    aria-label={`View random word "${randomHeroWord.word}"`}
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] text-[var(--color-primary)]">
                      <span aria-hidden="true" className="text-xl">
                        <CiBookmark />
                      </span>
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-muted)] dark:text-[var(--color-primary)]">
                      Random word
                    </p>
                    <p className="text-3xl font-black text-[var(--color-primary)] dark:text-[var(--color-text)]">
                      {randomHeroWord.word}
                    </p>
                    <p className="mt-1 line-clamp-2 text-[var(--color-muted)]">
                      {randomHeroWord.definition}
                    </p>
                    <p className="mt-4 inline-flex rounded-full text-[var(--color-accent)] px-3 py-1 text-sm font-semibold ">
                      Refreshes every 2 hours
                    </p>
                  </Link>
                )}
              </div>
            </div>

            <div className="px-4 pb-6 pt-5 sm:px-8">
              <div className="mx-auto max-w-2xl">
                <div id="search-bar">
                  <SimpleSearchBar className="mb-4" />
                </div>
              </div>

              <div className="flex flex-row flex-wrap items-center justify-center gap-1 text-base sm:gap-2">
                <Link
                  href="/browse"
                  className="rounded-md px-2 py-1 text-[var(--color-primary)] transition-colors duration-200 hover:bg-[var(--color-primary)] hover:text-[var(--color-accent)]"
                  title="Browse all dictionary entries"
                  aria-label="Browse all dictionary entries"
                >
                  Browse all entries
                </Link>
                <span className="text-sm text-[var(--color-border)]">•</span>
                <Link
                  href="/random"
                  className="rounded-md px-2 py-1 text-[var(--color-primary)] transition-colors duration-200 hover:bg-[var(--color-primary)] hover:text-[var(--color-accent)]"
                  title="Get a random Shona word"
                  aria-label="Get a random Shona word"
                >
                  Random word
                </Link>
                <span className="text-sm text-[var(--color-border)]">•</span>
                <Link
                  href="/suggest"
                  className="rounded-md px-2 py-1 text-[var(--color-primary)] transition-colors duration-200 hover:bg-[var(--color-primary)] hover:text-[var(--color-accent)]"
                  title="Suggest a new word for the dictionary"
                  aria-label="Suggest a new word for the dictionary"
                >
                  Suggest a word
                </Link>
                <span className="text-sm text-[var(--color-border)]">•</span>
                <Link
                  href="/challenge/daily"
                  className="rounded-md px-2 py-1 text-[var(--color-primary)] transition-colors duration-200 hover:bg-[var(--color-primary)] hover:text-[var(--color-accent)]"
                  title="Take the daily challenge"
                  aria-label="Take the daily challenge"
                >
                  Daily Shona Challenge
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {searchQuery && (
        <>
          <hr className="my-4 h-px border-0 bg-[var(--color-border)]" />
          <Suspense
            fallback={
              <div
                className="flex items-center justify-center py-12"
                role="status"
                aria-label="Loading search results"
              >
                <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-[var(--color-primary)]" />
                <span className="sr-only">Loading search results...</span>
              </div>
            }
          >
            <HomeSearchResults />
          </Suspense>
        </>
      )}

      {!searchQuery && children}
    </>
  );
}
