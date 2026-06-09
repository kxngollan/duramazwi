import { Suspense } from "react";
import { Metadata } from "next/types";
import SearchBar from "@/component/search-bar.component";
import BrowseClient from "./browse-client";
import { createBreadcrumbs } from "@/utils/breadcrumbs";
import BreadcrumbStructuredData from "@/components/BreadcrumbStructuredData";

export const metadata: Metadata = {
  title: "Browse All Entries - Duramazwi",
  description: "Browse all dictionary entries alphabetically",
};

export default function BrowsePage() {
  return (
    <div>
      <BreadcrumbStructuredData breadcrumbs={createBreadcrumbs.browse()} />
      <header>
        <div id="search-bar">
          <Suspense fallback={<div className="mb-6" />}>
            <SearchBar />
          </Suspense>
        </div>
      </header>
      <BrowseClient />
    </div>
  );
}
