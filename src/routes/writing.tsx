import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: "Writing — A Deeper Green | Leonie Staas" },
      { name: "description", content: "Essays on climate, consciousness, and reconnection." },
      { property: "og:title", content: "Writing — A Deeper Green" },
      { property: "og:description", content: "Essays on climate, consciousness, and reconnection." },
    ],
  }),
  component: WritingPage,
});

const SUBSTACK = [
  {
    title: "Will Technology Save Us?",
    sub: "On System, Self, and the Power of Choice",
    excerpt:
      "We keep waiting for the breakthrough that will rescue us. But the deepest technology is the one we live inside.",
    href: "#",
  },
  {
    title: "Measuring What Matters",
    sub: "The Unraveling Promise of Infinite Growth",
    excerpt:
      "When the indicators we trusted stop pointing at anything real, what do we steer by?",
    href: "#",
  },
  {
    title: "Can I Still Have Children Today?",
    sub: "A 30-Year-Old's Mind Between Madness and Meaning",
    excerpt:
      "A question I didn't choose, asked from inside a life that still wants to be lived.",
    href: "#",
  },
];

const EXTERNAL = [
  {
    title: "[External essay title — placeholder]",
    outlet: "OPEN Foundation",
    excerpt: "Short overview of the piece. To be filled in.",
    href: "#",
  },
  {
    title: "[External essay title — placeholder]",
    outlet: "PSYCA",
    excerpt: "Short overview of the piece. To be filled in.",
    href: "#",
  },
];

function SubscribeBlock() {
  return (
    <div className="rounded-3xl border border-border bg-secondary/50 p-8 md:p-12">
      <p className="eyebrow">Subscribe</p>
      <h3 className="mt-3 font-serif text-2xl md:text-3xl text-primary">
        A Deeper Green
      </h3>
      <p className="mt-2 max-w-xl text-sm text-muted-foreground">
        New essays land in your inbox every few weeks. No noise, no marketing — just
        the work as it unfolds.
      </p>
      <a
        href="https://substack.com/"
        target="_blank"
        rel="noreferrer"
        className="btn-primary mt-6"
      >
        Subscribe on Substack
      </a>
    </div>
  );
}

function WritingPage() {
  return (
    <div className="container-narrow py-20 md:py-28">
      <header className="max-w-2xl">
        <p className="eyebrow">Writing</p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl text-primary">
          A Deeper Green
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Essays on the metacrisis, the inner work of our time, and the practice of
          coming back to life.
        </p>
      </header>

      <section className="mt-16">
        <h2 className="font-serif text-2xl text-primary">From Substack</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {SUBSTACK.map((a) => (
            <a key={a.title} href={a.href} className="card-soft block">
              <p className="eyebrow text-clay">Substack</p>
              <h3 className="mt-3 font-serif text-xl leading-snug text-primary">{a.title}</h3>
              <p className="mt-1 text-sm italic text-muted-foreground">{a.sub}</p>
              <p className="mt-4 text-sm text-foreground/80">{a.excerpt}</p>
              <span className="mt-5 inline-block text-sm text-accent">Read on Substack →</span>
            </a>
          ))}
        </div>
      </section>

      <div className="mt-16">
        <SubscribeBlock />
      </div>

      <section className="mt-20">
        <h2 className="font-serif text-2xl text-primary">Elsewhere</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Pieces published with other outlets and communities.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {EXTERNAL.map((a) => (
            <a key={a.title} href={a.href} className="card-soft block">
              <p className="eyebrow text-clay">{a.outlet}</p>
              <h3 className="mt-3 font-serif text-xl leading-snug text-primary">{a.title}</h3>
              <p className="mt-4 text-sm text-foreground/80">{a.excerpt}</p>
              <span className="mt-5 inline-block text-sm text-accent">Read the piece →</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
