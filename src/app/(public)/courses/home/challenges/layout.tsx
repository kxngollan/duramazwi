import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Home Challenges in Shona | Duramazwi",
  description:
    "Practice household Shona vocabulary for rooms, furniture, chores, and daily routines with guided challenge sessions.",
});

export default function HomeChallengesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
