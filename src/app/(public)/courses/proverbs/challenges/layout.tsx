import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Proverbs Challenges in Shona | Duramazwi",
  description:
    "Test your understanding of Shona proverbs, meanings, cultural lessons, and real-life usage with interactive challenges.",
});

export default function ProverbsChallengesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
