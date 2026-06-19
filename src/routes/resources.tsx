import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Leonie Staas" },
      { name: "description", content: "Curated meditations, books, podcasts, and programs for the work of reconnection." },
      { property: "og:title", content: "Resources — Leonie Staas" },
      { property: "og:description", content: "Curated lists for the work of reconnection." },
    ],
  }),
  component: ResourcesPage,
});

const SECTIONS = [
  {
    title: "Meditations",
    items: [
      { name: "[Meditation title — placeholder]", note: "Short one-line description.", href: "#" },
      { name: "[Meditation title — placeholder]", note: "Short one-line description.", href: "#" },
    ],
  },
  {
    title: "Books",
    items: [
      { name: "[Book title — placeholder]", note: "Why this matters, in a sentence.", href: "#" },
      { name: "[Book title — placeholder]", note: "Why this matters, in a sentence.", href: "#" },
    ],
  },
  {
    title: "Podcasts",
    items: [
      { name: "[Podcast — placeholder]", note: "Short one-line description.", href: "#" },
    ],
  },
  {
    title: "Other Programs",
    items: [
      { name: "[Program — placeholder]", note: "Trainings, courses, or communities.", href: "#" },
    ],
  },
];

function ResourcesPage() {
  return (
    <div className="container-narrow py-20 md:py-28">
      <header className="max-w-2xl">
        <p className="eyebrow">Resources</p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl text-primary">
          A small library for the road.
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The teachers, books, and practices that have shaped this work — and that may
          meet you where you are.
        </p>
      </header>

      <a
        href="#"
        className="mt-12 block rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/[0.07] to-accent/10 p-10 transition-transform hover:-translate-y-0.5"
      >
        <p className="eyebrow">Featured</p>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl text-primary">
          The PsyGaia Framework
        </h2>
        <p className="mt-3 max-w-2xl text-foreground/80">
          A framework for psychedelic work in service of personal and planetary healing.
          [Description — placeholder.]
        </p>
        <span className="mt-6 inline-block text-sm text-accent">Open the framework →</span>
      </a>

      <div className="mt-20 grid gap-12 md:grid-cols-2">
        {SECTIONS.map((s) => (
          <section key={s.title}>
            <h2 className="font-serif text-2xl text-primary">{s.title}</h2>
            <ul className="mt-6 divide-y divide-border">
              {s.items.map((it) => (
                <li key={it.name} className="py-4">
                  <a href={it.href} className="group flex items-baseline justify-between gap-4">
                    <div>
                      <p className="text-base text-foreground group-hover:text-primary">{it.name}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{it.note}</p>
                    </div>
                    <span className="shrink-0 text-sm text-accent">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
