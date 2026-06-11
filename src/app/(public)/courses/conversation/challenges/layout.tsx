import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Conversation Challenges in Shona | Duramazwi",
  description:
    "Build practical speaking confidence with Shona conversation challenges for home, school, church, work, and village life.",
});

export default function ConversationChallengesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
