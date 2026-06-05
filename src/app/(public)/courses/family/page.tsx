import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mhuri — Family in Shona | Duramazwi",
  description:
    "Learn how family works in Shona culture — immediate family, extended family, in-laws and marriage, and the clan totem system (mutupo).",
};

const modules = [
  {
    href: "/courses/family/immediate",
    title: "Immediate Family",
    shona: "Mhuri Yepedyo",
    description:
      "Mother, father, siblings, and children — the core vocabulary and the Shona concept of multiple fathers.",
    icon: "🏠",
    tag: "Start here",
  },
  {
    href: "/courses/family/extended",
    title: "Extended Family",
    shona: "Hama dzose",
    description:
      "Grandparents, aunts, uncles, cousins, and nephews — and why Vatete and Muzukuru hold such special roles.",
    icon: "👨‍👩‍👧‍👦",
    tag: "Module 2",
  },
  {
    href: "/courses/family/in-laws",
    title: "In-Laws & Marriage",
    shona: "Varoora neVaruwe",
    description:
      "How roora (lobola) creates the family bond, why you call in-laws Baba and Amai, and how a wife becomes Muroora to the whole family.",
    icon: "💍",
    tag: "Module 3",
  },
  {
    href: "/courses/family/totems",
    title: "Mutupo — Clan & Totem",
    shona: "Mutupo neMusvo",
    description:
      "Every Shona person belongs to a totem clan. Learn common totems, why you cannot marry within your mutupo, and how zvidao connect you to your ancestors.",
    icon: "🦁",
    tag: "Module 4",
  },
];

export default function FamilyCoursePage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero */}
      <div className="py-16 px-6 text-center bg-[var(--color-primary)]">
        <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-[var(--color-accent)]">
          Shona Language Course
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[var(--color-hero-text)]">
          Mhuri
        </h1>
        <p className="text-xl md:text-2xl font-light mb-2 text-[var(--color-hero-text)] opacity-85">
          Family in Shona
        </p>
        <p className="max-w-2xl mx-auto mt-6 text-base md:text-lg leading-relaxed text-[var(--color-hero-text)] opacity-75">
          In Shona culture, family is not a household — it is a village. Cousins
          are siblings, aunts are mothers, and your ancestors speak through your
          totem. This course unpacks how family works in Shona and gives you the
          words to navigate it.
        </p>
      </div>

      {/* Modules */}
      <div className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold mb-8 text-[var(--color-text)]">
          Course Modules
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {modules.map((mod) => (
            <Link
              key={mod.href}
              href={mod.href}
              className="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] transition-all hover:shadow-lg overflow-hidden"
            >
              <div className="p-6 flex-1">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{mod.icon}</span>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-[var(--color-surface)] text-[var(--color-primary)]">
                    {mod.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1 text-[var(--color-text)] group-hover:underline">
                  {mod.title}
                </h3>
                <p className="text-sm font-medium mb-3 italic text-[var(--color-accent)]">
                  {mod.shona}
                </p>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                  {mod.description}
                </p>
              </div>
              <div className="px-6 py-3 border-t border-[var(--color-border)] flex items-center justify-between">
                <span className="text-sm font-medium text-[var(--color-primary)]">
                  Start lesson →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Challenges CTA */}
        <div className="mt-10">
          <Link
            href="/courses/family/challenges"
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6 transition-all hover:shadow-lg group"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">📝</span>
                <h3 className="text-xl font-bold text-[var(--color-text)] group-hover:underline">
                  Family Challenges
                </h3>
              </div>
              <p className="text-sm text-[var(--color-muted)]">
                90 challenges — 40 easy, 30 medium, 20 hard — covering all four
                modules. Study the full list or use it to review before the
                daily challenge.
              </p>
            </div>
            <span className="text-sm font-semibold whitespace-nowrap text-[var(--color-primary)]">
              View challenges →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
