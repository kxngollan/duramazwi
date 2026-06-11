import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Ceremonies Challenges in Shona | Duramazwi",
  description:
    "Practice Shona vocabulary for weddings, funerals, birth customs, and memorial ceremonies with interactive challenges.",
});

export default function CeremoniesChallengesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
