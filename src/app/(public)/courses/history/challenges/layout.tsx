import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "History Challenges in Shona | Duramazwi",
  description:
    "Review Shona history, origins, kingdoms, Great Zimbabwe, and modern historical context through interactive challenges.",
});

export default function HistoryChallengesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
