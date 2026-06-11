import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Folktales Challenges in Shona | Duramazwi",
  description:
    "Test your understanding of Shona folktales, storytelling traditions, and moral lessons with interactive challenges.",
});

export default function FolktalesChallengesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
