import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Community Challenges in Shona | Duramazwi",
  description:
    "Test your Shona on friendship, neighbours, community support, and social obligations with guided practice challenges.",
});

export default function CommunityChallengesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
