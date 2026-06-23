import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/work-with-me")({
  head: () => ({
    meta: [
      { title: "Work with me — Leonie Staas" },
      {
        name: "description",
        content:
          "Active Hope workshops, 1:1 coaching, a 12-month cohort, and psychedelic preparation & integration with Leonie Staas.",
      },
      { property: "og:title", content: "Work with me — Leonie Staas" },
      {
        property: "og:description",
        content: "Four ways we can meet this moment together.",
      },
    ],
  }),
  component: WorkPage,
});

const OFFERINGS = [
  {
    id: "active-hope",
    title: "Active Hope Workshop",
    body:
      "A group workshop grounded in Joanna Macy's Work That Reconnects. We move together through gratitude, honouring our pain for the world, seeing with new eyes, and going forth. [Placeholder description — full details coming soon.]",
    cta: { label: "Let's connect", href: "mailto:l.s.staas@gmail.com?subject=Active%20Hope%20Workshop" },
  },
  {
    id: "coaching",
    title: "1:1 Mentoring",
    body:
      "Personal accompaniment for those navigating climate grief, burnout, or a sense that the old map has stopped working. [Placeholder description — full details coming soon.]",
    cta: { label: "Book a free 20-minute chat", href: "mailto:l.s.staas@gmail.com?subject=1:1%20Mentoring" },
  },
  {
    id: "cohort",
    title: "12-Month Cohort Programme",
    body:
      "A small, year-long container for people ready to walk this work deeply. Cohort starts November 2026. [Placeholder description — full details coming soon.]",
    cta: { label: "I'm interested", href: "mailto:l.s.staas@gmail.com?subject=Cohort%20Programme" },
  },
  {
    id: "psychedelic",
    title: "Psychedelic Healing Work",
    body:
      "Leonie is trained to work with psilocybin mushrooms and truffles, certified by the Synthesis Institute. She offers tailored preparation and integration support, and can offer facilitation only in jurisdictions where this is legal. Reach out for a free consultation to explore whether this is right for you.",
    cta: { label: "Find out more", href: "mailto:l.s.staas@gmail.com?subject=Psychedelic%20Healing" },
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
            key={o.id}
            id={o.id}
            className="scroll-mt-28 grid gap-10 border-t border-border pt-12 md:grid-cols-[1fr_2fr]"
          >
            <div>
              <p className="eyebrow">0{i + 1}</p>
              <h2 className="mt-3 font-serif text-3xl text-primary">{o.title}</h2>
            </div>
            <div>
              <p className="text-foreground/85 leading-relaxed">{o.body}</p>
              <a href={o.cta.href} className="btn-primary mt-8">
                {o.cta.label}
              </a>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
