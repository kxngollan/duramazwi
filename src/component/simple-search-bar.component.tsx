"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import SvgIcon from "@/component/icons/svg-icon";

interface SimpleSearchBarProps {
  placeholder?: string;
  className?: string;
  initialQuery?: string;
}

const searchFieldClassName =
  "flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-4 py-3 text-[var(--color-text)] shadow-[var(--shadow-card)] transition-colors focus-within:border-[var(--color-primary)] focus-within:ring-2 focus-within:ring-[color-mix(in_srgb,var(--color-primary)_18%,transparent)]";

const searchInputClassName =
  "w-full bg-transparent text-[var(--color-text)] outline-none placeholder:text-sm placeholder:text-[var(--color-placeholder)]";

export default function SimpleSearchBar({
  placeholder = "Search Shona meanings or get translations.",
  className = "",
  initialQuery = ""
}: SimpleSearchBarProps) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // Update local state when initialQuery changes
  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    // If input is already focused, trigger search
    e.preventDefault();
    if (query.trim()) {
      router.push(`/?q=${encodeURIComponent(query.trim())}`);
    } else {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Handle Enter key and iOS "Done" button
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch(e as any);
    }
  };

  return (
    <form onSubmit={handleSearch} className={`mb-6 ${className}`}>
      <div className={searchFieldClassName}>
        <input
          ref={inputRef}
          type="search"
          className={searchInputClassName}
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          enterKeyHint="search"
          required
        />
        <button
          type="submit"
          onClick={handleButtonClick}
          className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--color-primary)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-accent)]"
          title="Search word"
          aria-label="Search word"
        >
          <SvgIcon icon="Search" />
        </button>
      </div>
    </form>
  );
}
