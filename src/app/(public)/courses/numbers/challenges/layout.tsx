import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Numbers Challenges in Shona | Duramazwi",
  description:
    "Improve your Shona number skills with challenges covering counting, money, higher numbers, and bargaining vocabulary.",
});

export default function NumbersChallengesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
