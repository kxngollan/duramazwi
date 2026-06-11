import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Pronunciation Challenges in Shona | Duramazwi",
  description:
    "Sharpen your Shona pronunciation with challenges on the alphabet, spelling patterns, rules, and tone.",
});

export default function PronunciationChallengesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
