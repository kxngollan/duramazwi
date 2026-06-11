import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Greetings Challenges in Shona | Duramazwi",
  description:
    "Practice Shona greetings, introductions, elder etiquette, and polite expressions with interactive challenge rounds.",
});

export default function GreetingsChallengesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
