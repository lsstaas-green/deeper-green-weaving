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

const SECTIONS: Array<{
  title: string;
  items: Array<{ name: string; href: string }>;
}> = [
  {
    title: "Mindfulness and meditation practice",
    items: [
      { name: "Gaia House Buddhist Meditation Retreat Centre", href: "https://gaiahouse.co.uk/" },
      { name: "Insight Meditation", href: "https://www.dharma.org/" },
      { name: "Personal Happiness Index", href: "https://www.actionforhappiness.org/" },
      { name: "The Heart Mind Institute Courses", href: "https://heartmind.co/" },
    ],
  },
  {
    title: "Climate Emotions",
    items: [
      { name: "Resources | Unthinkable", href: "https://www.unthinkable.earth/resources" },
      { name: "Climate Mental Health Network", href: "https://www.climatementalhealth.net/" },
    ],
  },
  {
    title: "Planetary Action",
    items: [
      { name: "How to fight climate change | EcoTree", href: "https://ecotree.green/en/how-to-fight-climate-change" },
      { name: "An Engaged Life | Up-rising", href: "https://www.up-rising.org/" },
    ],
  },
  {
    title: "Psychedelic Healing",
    items: [
      { name: "How to use psychedelics", href: "https://howtousepsychedelics.com" },
      { name: "The PsyGaia Framework", href: "https://psygaia.org/" },
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

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        {SECTIONS.map((s) => (
          <section key={s.title}>
            <h2 className="font-serif text-2xl text-primary">{s.title}</h2>
            <ul className="mt-6 divide-y divide-border">
              {s.items.map((it) => (
                <li key={it.name} className="py-4">
                  <a
                    href={it.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-baseline justify-between gap-4"
                  >
                    <p className="text-base text-foreground group-hover:text-primary">
                      {it.name}
                    </p>
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
