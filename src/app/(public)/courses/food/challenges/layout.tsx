import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Food Challenges in Shona | Duramazwi",
  description:
    "Practice Shona words for traditional foods, ingredients, cooking, hospitality, and ordering meals with quizzes and challenges.",
});

export default function FoodChallengesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
