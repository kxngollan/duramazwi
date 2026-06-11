import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Visiting Challenges in Shona | Duramazwi",
  description:
    "Practice Shona for travel and visits, including arriving, hosting guests, navigating, and village interactions.",
});

export default function VisitingChallengesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
