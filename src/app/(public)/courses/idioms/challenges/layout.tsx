import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Idioms Challenges in Shona | Duramazwi",
  description:
    "Test your knowledge of Shona idioms, figurative language, common sayings, and modern expressions with practice challenges.",
});

export default function IdiomsChallengesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
