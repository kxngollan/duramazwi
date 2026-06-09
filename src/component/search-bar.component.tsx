"use client";

import Loading from "@/component/atom/loader.component";
import SvgIcon from "@/component/icons/svg-icon";
import { useSearch } from "@/context/search-context";
import { useRouter, useSearchParams, usePathname} from "next/navigation";
import React from "react";

const searchFieldClassName =
  "flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-4 py-3 text-[var(--color-text)] shadow-[var(--shadow-card)] transition-colors focus-within:border-[var(--color-primary)] focus-within:ring-2 focus-within:ring-[color-mix(in_srgb,var(--color-primary)_18%,transparent)]";

const searchInputClassName =
  "w-full bg-transparent text-[var(--color-text)] outline-none placeholder:text-sm placeholder:text-[var(--color-placeholder)]";

/**
 * Search bar
 *
 */
export default function SearchBar({}:
{
  className?: string;
}) {
  const { status, query } = useSearch();
  const [keyword, setKeyword] = React.useState<string>(query);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();


  const search = function (e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    globalThis.gtag?.("event", "search_requested", {
      search_term: keyword,
    });

    // Shallow routing to avoid RSC
    if (pathname === "/") {
      const params = new URLSearchParams(searchParams.toString())
      params.set('q', keyword)
      window.history.pushState(null, '', `?${params.toString()}`)
    } else {
    // Complete routing
      router.push(`/?q=${keyword}`);
    }
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // If input is already focused, trigger search
    e.preventDefault();
    if (keyword.trim()) {
      search(e);
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
      search(e as any);
    }
  };

  React.useEffect(() => {
    setKeyword(query);
  }, [query]);

  return (
    <>
    <form onSubmit={search} className="mb-6" role="search">
      <label htmlFor="search-input" className="sr-only">
        Search Shona dictionary
      </label>
      <div className={searchFieldClassName}>
        <input
          id="search-input"
          ref={inputRef}
          type="search"
          className={searchInputClassName}
          placeholder="Search Shona meanings or get translations."
          required={true}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          enterKeyHint="search"
          value={keyword}
          aria-label="Search Shona dictionary"
        />
        {
          status === "loading"
            ?
          <div
            role="status"
            aria-label="Searching..."
            className="flex h-8 w-8 items-center justify-center text-[var(--color-primary)]"
          >
            <Loading className="h-6 w-6"/>
            <span className="sr-only">Searching...</span>
          </div>
            :
          (
            <button
              type="submit"
              className="flex h-8 w-8 select-none items-center justify-center rounded-full text-[var(--color-primary)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-accent)]"
              title="Search dictionary"
              aria-label="Search dictionary"
              onClick={handleButtonClick}
            >
              <SvgIcon icon={"Search"}/>
            </button>
          )
        }
      </div>
    </form>
    <hr className="h-px my-4 bg-[var(--color-border)] border-0"></hr>
    </>
  );
}
