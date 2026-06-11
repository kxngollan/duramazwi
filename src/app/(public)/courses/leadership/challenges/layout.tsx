import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Leadership Challenges in Shona | Duramazwi",
  description:
    "Practice Shona language for chiefs, headmen, governance, and conflict resolution through interactive course challenges.",
});

export default function LeadershipChallengesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
