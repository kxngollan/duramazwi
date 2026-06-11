import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Verbs Challenges in Shona | Duramazwi",
  description:
    "Strengthen your Shona sentence-building skills with verb challenges on everyday actions, conjugation, and tenses.",
});

export default function VerbsChallengesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
