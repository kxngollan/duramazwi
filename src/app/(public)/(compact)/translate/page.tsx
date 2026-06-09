import { Suspense } from "react";
import { Metadata } from "next/types";
import SearchBar from "@/component/search-bar.component";
import TranslateClient from "./translate-client";

export const metadata: Metadata = {
  title: "Translate - Duramazwi",
  description: "Translate text between Shona and English",
};

export default function TranslatePage() {
  return (
    <div>
      <div id="search-bar">
        <Suspense fallback={<div className="mb-6" />}>
          <SearchBar />
        </Suspense>
      </div>
      <div className="">
        <TranslateClient />
      </div>
    </div>
  );
}
