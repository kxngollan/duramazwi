import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Shona Dictionary Blog | Duramazwi",
  description:
    "Read Duramazwi articles on Shona language, music, culture, and practical learning insights from Zimbabwean life.",
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
