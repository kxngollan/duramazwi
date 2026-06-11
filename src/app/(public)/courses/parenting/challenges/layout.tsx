import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Parenting Challenges in Shona | Duramazwi",
  description:
    "Practice Shona vocabulary around raising children, family roles, and respect for elders with focused challenges.",
});

export default function ParentingChallengesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
