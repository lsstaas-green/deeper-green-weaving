import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/key-concepts")({
  head: () => ({
    meta: [
      { title: "Key Concepts — Leonie Staas" },
      { name: "description", content: "A glossary of the terms at the heart of this work." },
      { property: "og:title", content: "Key Concepts — Leonie Staas" },
      { property: "og:description", content: "Societal collapse, the metacrisis, eco-dharma, and more." },
    ],
  }),
  component: KeyConceptsPage,
});

const CONCEPTS = [
  {
    term: "Societal Collapse",
    body:
      "A process of the breakdown of modern industrial societies is already underway, driven by ecological degradation and the internal contradictions of an expansionist economic system. Because there is such overshoot and momentum, although breakdown could be softened and new systems seeded, the process can't be stopped — so collapse is an appropriate term. It does not necessarily mean near-term human extinction, but that becomes increasingly likely without massive awakening and organizing.",
    href: "#",
  },
  {
    term: "Metacrisis",
    body:
      "A useful term for our global predicament. The term points toward a deeper crisis underlying the myriad problems we experience today — in politics, economics, culture, health, and environment. That underlying crisis lives in the assumptions, values, beliefs, norms, and habits of our societies. The term metacrisis invites us to consider what is in crisis within ourselves, which can be the beginning of deeper transformation.",
    href: "#",
  },
];

function KeyConceptsPage() {
  const [q, setQ] = useState("");
  const filtered = useMemo(
    () =>
      CONCEPTS.filter(
        (c) =>
          c.term.toLowerCase().includes(q.toLowerCase()) ||
          c.body.toLowerCase().includes(q.toLowerCase()),
      ),
    [q],
  );

  return (
    <div className="container-narrow py-20 md:py-28">
      <header className="max-w-2xl">
        <p className="eyebrow">Key Concepts</p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl text-primary">
          A vocabulary for this moment.
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The words we use shape what we can see and do. Here are some that have changed
          how I understand the world — added to over time.
        </p>
      </header>

      <div className="mt-10 max-w-md">
        <label htmlFor="search" className="sr-only">Search concepts</label>
        <input
          id="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search a concept…"
          className="w-full rounded-full border border-border bg-card px-5 py-3 text-sm outline-none focus:border-primary"
        />
      </div>

      <dl className="mt-12 divide-y divide-border border-y border-border">
        {filtered.map((c) => (
          <div key={c.term} className="grid gap-4 py-10 md:grid-cols-[1fr_2fr] md:gap-12">
            <dt className="font-serif text-2xl text-primary">{c.term}</dt>
            <dd className="text-foreground/85 leading-relaxed">
              {c.body}
              {c.href && (
                <>
                  {" "}
                  <a href={c.href} className="text-accent underline-offset-4 hover:underline">
                    Further reading →
                  </a>
                </>
              )}
            </dd>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="py-10 text-sm text-muted-foreground">No concepts match that search.</p>
        )}
      </dl>
    </div>
  );
}
