import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Transport Challenges in Shona | Duramazwi",
  description:
    "Practice Shona travel vocabulary for directions, public transport, asking for help, and village-to-city journeys.",
});

export default function TransportChallengesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
