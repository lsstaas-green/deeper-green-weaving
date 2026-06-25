import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/work-with-me/")({
  head: () => ({
    meta: [
      { title: "Work with me — Leonie Staas" },
      {
        name: "description",
        content:
          "Active Hope workshops, 1:1 mentorship, a 12-month cohort, and psychedelic preparation & integration with Leonie Staas.",
      },
      { property: "og:title", content: "Work with me — Leonie Staas" },
      { property: "og:description", content: "Four ways we can meet this moment together." },
    ],
  }),
  component: WorkPage,
});

const OFFERINGS = [
  {
    slug: "active-hope",
    title: "Active Hope Workshop",
    body:
      "Find support, connection and inspiration in these difficult times through the powerful group practices of \"The Work That Reconnects\", developed by eco-philosopher Joanna Macy. Together, we move through processes of gratitude, grief, expanded identity, to take us out of overwhelm and into a healthy sense of belonging.",
  },
  {
    slug: "mentorship",
    title: "1:1 Mentorship",
    body:
      "Personal accompaniment for those navigating fear, sadness, exhaustion, or a sense that the old map has stopped working.",
  },
  {
    slug: "cohort",
    title: "12-Month Cohort Programme",
    body:
      "A small, year-long container for people ready to walk this work deeply. Cohort starts November 2026.",
  },
  {
    slug: "psychedelic",
    title: "Psychedelic Healing Work",
    body:
      "Leonie is trained to work with psilocybin mushrooms and truffles, certified by the Synthesis Institute. She offers tailored preparation and integration support, and can offer facilitation only in jurisdictions where this is legal. Reach out for a free consultation to explore whether this is right for you.",
  },
];

function WorkPage() {
  return (
    <div className="container-narrow py-20 md:py-28">
      <header className="max-w-2xl">
        <p className="eyebrow">Work with me</p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl text-primary">
          How can I help you?
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Four offerings, all rooted in the same conviction: that the personal and the
          planetary are one piece of work.
        </p>
      </header>

      <div className="mt-16 space-y-20">
        {OFFERINGS.map((o, i) => (
          <section
            key={o.slug}
            id={o.slug}
            className="scroll-mt-28 grid gap-10 border-t border-border pt-12 md:grid-cols-[1fr_2fr]"
          >
            <div>
              <p className="eyebrow">0{i + 1}</p>
              <h2 className="mt-3 font-serif text-3xl text-primary">{o.title}</h2>
            </div>
            <div>
              <p className="text-foreground/85 leading-relaxed">{o.body}</p>
              <Link
                to="/work-with-me/$slug"
                params={{ slug: o.slug }}
                className="btn-primary mt-8"
              >
                Find out more
              </Link>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
