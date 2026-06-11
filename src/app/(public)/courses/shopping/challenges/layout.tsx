import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Shopping Challenges in Shona | Duramazwi",
  description:
    "Build confidence in Shona market language with challenges on products, prices, negotiation, and shopping etiquette.",
});

export default function ShoppingChallengesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
