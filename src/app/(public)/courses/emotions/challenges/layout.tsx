import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Emotions Challenges in Shona | Duramazwi",
  description:
    "Practice how to express joy, sadness, gratitude, anger, and other feelings in Shona through interactive challenges.",
});

export default function EmotionsChallengesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
