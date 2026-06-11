import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Health Challenges in Shona | Duramazwi",
  description:
    "Strengthen your Shona health vocabulary with challenges on body parts, symptoms, clinics, and traditional healing.",
});

export default function HealthChallengesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
