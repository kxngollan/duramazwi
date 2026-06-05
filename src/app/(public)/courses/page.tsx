import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shona Language Courses | Duramazwi",
  description:
    "Learn Shona through structured courses — family, greetings, numbers, and more. Free, cultural, and built for real understanding.",
};

const IconHome = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-7 h-7"
  >
    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
  </svg>
);

const IconChat = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-7 h-7"
  >
    <path
      fillRule="evenodd"
      d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z"
      clipRule="evenodd"
    />
  </svg>
);

const IconHashtag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-7 h-7"
  >
    <path
      fillRule="evenodd"
      d="M11.097 1.515a.75.75 0 0 1 .589.882L10.666 7.5h4.47l1.079-5.397a.75.75 0 1 1 1.47.294L16.665 7.5h3.585a.75.75 0 0 1 0 1.5h-3.885l-1.2 6h3.585a.75.75 0 0 1 0 1.5h-3.885l-1.08 5.397a.75.75 0 1 1-1.47-.294l1.02-5.103h-4.47l-1.08 5.397a.75.75 0 1 1-1.47-.294l1.02-5.103H3.75a.75.75 0 0 1 0-1.5h3.885l1.2-6H5.25a.75.75 0 0 1 0-1.5h3.885l1.08-5.397a.75.75 0 0 1 .882-.588ZM10.365 9l-1.2 6h4.47l1.2-6h-4.47Z"
      clipRule="evenodd"
    />
  </svg>
);

const IconCake = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-7 h-7"
  >
    <path d="M15 1.784l-.796.796a1.125 1.125 0 1 0 1.591 0L15 1.784ZM12 1.784l-.796.796a1.125 1.125 0 1 0 1.591 0L12 1.784ZM9 1.784l-.796.796a1.125 1.125 0 1 0 1.591 0L9 1.784ZM9.75 7.547c.498-.021.998-.035 1.5-.042V6.75a.75.75 0 0 1 1.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 0 1 1.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 0 0-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 0 1 1.5 0v.797ZM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 0 1 2.585.364 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 2.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0 0 12 12.75ZM21.75 18.131a2.604 2.604 0 0 0-1.915.165 4.104 4.104 0 0 1-3.67 0 2.604 2.604 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.604 2.604 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.604 2.604 0 0 0-1.915-.165v2.494c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75v-2.494Z" />
  </svg>
);

const IconClock = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-7 h-7"
  >
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
      clipRule="evenodd"
    />
  </svg>
);

const availableCourses = [
  {
    href: "/courses/family",
    title: "Mhuri — Family",
    subtitle: "Family in Shona",
    description:
      "How family works in Shona culture — immediate family, extended family, in-laws, roora (bride wealth), and the totem system. 5 modules and 90 challenges.",
    icon: <IconHome />,
    modules: 5,
    challenges: 90,
    tag: "Available now",
  },
];

const comingSoon = [
  {
    title: "Kutaura — Greetings",
    subtitle: "Everyday phrases & greetings",
    description:
      "How to greet elders, peers, and strangers in Shona. Morning, afternoon, and evening greetings, and how to ask how someone is.",
    icon: <IconChat />,
  },
  {
    title: "Nhamba — Numbers",
    subtitle: "Counting in Shona",
    description:
      "Numbers 1–100, how to tell the time, how to talk about money, and how numbers change with Shona noun classes.",
    icon: <IconHashtag />,
  },
  {
    title: "Zvokudya — Food & Drink",
    subtitle: "The language of eating",
    description:
      "Sadza, nyama, zenga, mvura — the vocabulary of Shona food and how meals, cooking, and eating together are talked about.",
    icon: <IconCake />,
  },
  {
    title: "Nguva — Time & Days",
    subtitle: "Dates, days, and seasons",
    description:
      "Days of the week, months, seasons, and how Shona people talk about past and future time.",
    icon: <IconClock />,
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero */}
      <div className="px-4 pt-6 pb-4 sm:px-6 max-w-4xl mx-auto">
        <div className="overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-soft)]">
          <div className="relative overflow-hidden bg-[var(--color-primary)] px-6 py-10 text-[var(--color-hero-text)] sm:px-10 sm:py-12">
            <div className="absolute right-0 top-0 h-36 w-36 rounded-bl-full bg-[var(--color-accent)]" />
            <div className="absolute bottom-0 left-0 h-20 w-20 rounded-tr-full bg-[var(--color-danger)]" />
            <div className="relative z-10">
              <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-[var(--color-accent)]">
                Duramazwi
              </p>
              <h1 className="text-4xl font-black tracking-normal md:text-5xl mb-3">
                Shona Courses
              </h1>
              <p className="text-lg leading-relaxed text-[var(--color-hero-text)]/85 max-w-xl">
                Structured lessons that go beyond vocabulary — culture, context,
                and the real meaning behind the words.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-10">

        {/* Available courses */}
        <h2 className="text-xl font-bold text-[var(--color-text)] mb-5">
          Available Now
        </h2>
        <div className="grid gap-6 mb-14">
          {availableCourses.map((course) => (
            <Link
              key={course.href}
              href={course.href}
              className="group flex flex-col sm:flex-row gap-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 transition-all hover:shadow-[var(--shadow-card)] overflow-hidden"
            >
              <div className="flex items-start gap-5 flex-1">
                <div className="w-14 h-14 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-primary)] shrink-0">
                  {course.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="text-xl font-bold text-[var(--color-text)] group-hover:underline">
                      {course.title}
                    </h3>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--color-primary)] text-[var(--color-hero-text)]">
                      {course.tag}
                    </span>
                  </div>
                  <p className="text-sm font-medium italic text-[var(--color-accent)] mb-3">
                    {course.subtitle}
                  </p>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)] mb-4">
                    {course.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-[var(--color-muted)]">
                    <span>
                      <span className="font-bold text-[var(--color-text)]">
                        {course.modules}
                      </span>{" "}
                      modules
                    </span>
                    <span>
                      <span className="font-bold text-[var(--color-text)]">
                        {course.challenges}
                      </span>{" "}
                      challenges
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 shrink-0">
                <span className="text-sm font-semibold text-[var(--color-primary)] whitespace-nowrap group-hover:underline">
                  Start course →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming soon */}
        <h2 className="text-xl font-bold text-[var(--color-text)] mb-2">
          Coming Soon
        </h2>
        <p className="text-sm text-[var(--color-muted)] mb-5">
          More courses are in development. Focus is on depth — every course will
          include cultural context, not just word lists.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 mb-14">
          {comingSoon.map((course) => (
            <div
              key={course.title}
              className="flex gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 opacity-60"
            >
              <div className="w-11 h-11 rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] shrink-0">
                {course.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className="text-base font-bold text-[var(--color-text)]">
                    {course.title}
                  </h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full border border-[var(--color-border)] text-[var(--color-muted)]">
                    Soon
                  </span>
                </div>
                <p className="text-xs font-medium italic text-[var(--color-muted)] mb-2">
                  {course.subtitle}
                </p>
                <p className="text-xs leading-relaxed text-[var(--color-muted)]">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Daily challenge CTA */}
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-surface)] p-6">
          <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">
            Not ready for a full course?
          </h3>
          <p className="text-sm text-[var(--color-muted)] mb-4 leading-relaxed">
            Try the daily challenge — a short set of questions covering vocabulary,
            translation, and Shona culture. New challenges every day.
          </p>
          <Link
            href="/challenge/daily"
            className="inline-block theme-button-accent border-b-4 px-5 py-2.5 rounded-xl text-sm font-semibold hover:brightness-95 transition-all shadow"
          >
            Take today&apos;s challenge →
          </Link>
        </div>
      </div>
    </div>
  );
}
