import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Workplace Challenges in Shona | Duramazwi",
  description:
    "Practice professional Shona for classrooms, offices, teamwork, and workplace communication with interactive challenges.",
});

export default function WorkplaceChallengesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
