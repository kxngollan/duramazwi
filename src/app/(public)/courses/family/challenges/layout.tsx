import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Family Challenges in Shona | Duramazwi",
  description:
    "Review Shona family vocabulary, in-laws, totems, and kinship language with focused challenge sessions.",
});

export default function FamilyChallengesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
