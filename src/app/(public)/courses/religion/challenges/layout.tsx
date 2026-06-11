import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Religion Challenges in Shona | Duramazwi",
  description:
    "Practice Shona language for spirituality, ancestors, Christianity, and traditional beliefs with guided challenges.",
});

export default function ReligionChallengesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
