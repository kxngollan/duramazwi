import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Time Challenges in Shona | Duramazwi",
  description:
    "Practice talking about time, dates, seasons, days, months, and special occasions in Shona through interactive challenges.",
});

export default function TimeChallengesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
