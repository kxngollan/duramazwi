import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Respect Challenges in Shona | Duramazwi",
  description:
    "Practice Shona etiquette, elder respect, gift giving, body language, and visiting customs with interactive challenges.",
});

export default function RespectChallengesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
