import Appbar from "@/component/appbar.component";
import { SearchProvider } from "@/context/search-context";
import { Suspense } from "react";

// Public layout - clean layout with just navbar
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={null}>
      <SearchProvider>
        <div className="flex flex-col min-h-screen">
          <Appbar />
          {children}
        </div>
      </SearchProvider>
    </Suspense>
  );
}
