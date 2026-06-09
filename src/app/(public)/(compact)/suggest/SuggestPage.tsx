"use client";

import { useState } from "react";

type SuggestionPayload = {
  word: string;
  definition: string;
  example: string;
  contributorEmail: string;
};

const fieldClassName =
  "w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-4 py-3 text-[var(--color-text)] shadow-[var(--shadow-card)] outline-none transition-colors placeholder:text-sm placeholder:text-[var(--color-placeholder)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--color-primary)_18%,transparent)]";

const fieldLabelClassName =
  "mb-2 block text-sm font-semibold text-[var(--color-text)]";

export default function SuggestPage() {
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error" | "";
  }>({ text: "", type: "" });

  return (
    <>
      <h1 className="text-3xl font-bold text-[var(--color-text)] mb-2">
        Make a suggestion
      </h1>
      <p className="text-base text-[var(--color-muted)] mb-4">
        We rely on community contributions to ensure our dictionary is accurate
        and comprehensive. Share your suggestions for new words, corrections, or
        additional details below.
      </p>

      {message.text && (
        <div
          className={`mb-4 rounded-xl border px-4 py-3 text-sm shadow-[var(--shadow-card)] ${
            message.type === "success"
              ? "border-[var(--color-primary)] bg-[var(--color-surface-raised)] text-[var(--color-text)]"
              : message.type === "error"
                ? "border-[var(--color-danger)] bg-[var(--color-surface-raised)] text-[var(--color-text)]"
                : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)]"
          }`}
        >
          {message.text}
        </div>
      )}
      <SuggestionForm
        onSubmit={async (
          suggestion: SuggestionPayload,
          resetForm: () => void,
        ) => {
          setMessage({ text: "Submitting your suggestion...", type: "" });
          try {
            const response = await fetch("/api/suggestions", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(suggestion),
            });

            if (response.ok) {
              setMessage({
                text: "Thank you! Your suggestion was submitted successfully. Our team will review it, and we’ll inform you of the outcome via email.",
                type: "success",
              });
              resetForm(); // Clear the form after success
            } else {
              const errorData = await response.json();
              setMessage({
                text: `We encountered an error. ${errorData.message || "An unknown error occurred."}`,
                type: "error",
              });
            }
          } catch {
            setMessage({
              text: "An error occurred while submitting your suggestion. Please try again.",
              type: "error",
            });
          }
        }}
      />
    </>
  );
}

function SuggestionForm({
  onSubmit,
}: {
  onSubmit: (
    suggestion: SuggestionPayload,
    resetForm: () => void,
  ) => Promise<void>;
}) {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");
  const [example, setExample] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const suggestion = {
      word,
      definition,
      example,
      contributorEmail: email,
    };

    // Send the suggestion to the API
    await onSubmit(suggestion, () => {
      setWord("");
      setDefinition("");
      setExample("");
      setEmail("");
    });
  };

  // Basic validation - require at least word and definition
  const isFormValid = word.trim() && definition.trim();
  return (
    <form onSubmit={handleSubmit} className="mb-4 rounded-xl">
      <div className="mb-4">
        <label className={fieldLabelClassName}>
          Word <span className="text-[var(--color-danger)]">*</span>
        </label>
        <input
          type="text"
          value={word}
          placeholder="E.g. Chikafu"
          onChange={(e) => setWord(e.target.value)}
          className={fieldClassName}
          required
        />
      </div>
      <div className="mb-4">
        <label className={fieldLabelClassName}>
          Definition/s <span className="text-[var(--color-danger)]">*</span>
        </label>
        <textarea
          value={definition}
          placeholder="Provide the definition of the word, including any relevant details like part of speech (e.g. verb/noun) etc."
          onChange={(e) => setDefinition(e.target.value)}
          className={`${fieldClassName} min-h-32 resize-y`}
          required
        />
      </div>
      <div className="mb-4">
        <label className={fieldLabelClassName}>
          Example/s
        </label>
        <textarea
          value={example}
          placeholder="Provide an example sentence using the word, if applicable."
          onChange={(e) => setExample(e.target.value)}
          className={`${fieldClassName} min-h-28 resize-y`}
        />
      </div>
      <div className="mb-4">
        <label className={fieldLabelClassName}>
          Your Email
        </label>
        <input
          type="email"
          value={email}
          placeholder="Your email address (optional)"
          onChange={(e) => setEmail(e.target.value)}
          className={fieldClassName}
        />
      </div>
      <button
        type="submit"
        disabled={!isFormValid}
        title={
          isFormValid
            ? "Submit your word suggestion"
            : "Please fill in all required fields"
        }
        className={`rounded-xl border px-6 py-3 font-semibold transition-colors ${
          isFormValid
            ? "border-[var(--color-primary)] bg-[var(--color-accent)] text-[#1b1b1b] hover:brightness-95"
            : "cursor-not-allowed border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)]"
        }`}
      >
        Send it over!
      </button>
    </form>
  );
}
