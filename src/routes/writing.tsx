import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: "Writing — A Deeper Green | Leonie Staas" },
      {
        name: "description",
        content:
          "Essays on the metacrisis, its inner dimensions, and the practice of coming back to life.",
      },
      { property: "og:title", content: "Writing — A Deeper Green" },
      {
        property: "og:description",
        content:
          "Essays on the metacrisis, its inner dimensions, and the practice of coming back to life.",
      },
    ],
  }),
  component: WritingPage,
});

const SUBSTACK_URL = "https://leoniestaas.substack.com";
const SUBSCRIBE_URL = "https://leoniestaas.substack.com/subscribe";

const ARTICLES = [
  {
    title: "When We Forgot About Plants",
    sub: "A conversation with Amazonian scholar Luis Luna on plant intelligence, consciousness, and the relationship the West forgot.",
    date: "May 2026",
    href: "https://leoniestaas.substack.com/p/when-we-forgot-about-plants",
  },
  {
    title: "Psychedelic Healing for Climate Despair",
    sub: "My unfiltered story of grief, stigma, and finding back to life.",
    date: "April 2026",
    href: "https://leoniestaas.substack.com/p/psychedelic-healing-for-climate-despair",
  },
  {
    title: "\"Burning\" the Greed",
    sub: "A Gift Economy and its Deeper Lessons.",
    date: "March 2026",
    href: "https://leoniestaas.substack.com/p/burning-the-greed",
  },
  {
    title: "Measuring What Matters",
    sub: "The Unraveling Promise of Infinite Growth.",
    date: "February 2026",
    href: "https://leoniestaas.substack.com/p/measuring-what-matters",
  },
  {
    title: "Life is Good",
    sub: "And You're Allowed to Feel That Way.",
    date: "January 2026",
    href: "https://leoniestaas.substack.com/p/life-is-good",
  },
  {
    title: "Can I Still Have Children Today?",
    sub: "A 30-year-old's Mind Between Madness And Meaning.",
    excerpt:
      "A question I didn't choose, asked from inside a life that still wants to be lived.",
    date: "January 2026",
    href: "https://leoniestaas.substack.com/p/can-i-still-have-children-today",
  },
  {
    title: "The Triangle of Disconnection",
    sub: "Or What The Climate Crisis Really Is.",
    date: "January 2026",
    href: "https://leoniestaas.substack.com/p/the-triangle-of-disconnection",
  },
  {
    title: "Will Technology Save Us?",
    sub: "On System, Self, and The Power of Choice.",
    date: "January 2026",
    href: "https://leoniestaas.substack.com/p/will-technology-save-us",
  },
];

const MEDIA = [
  {
    outlet: "DoubleBlind Magazine",
    title: "As Climate Grief Deepens, Psychedelic Therapy Enters the Chat",
    href: "https://doubleblindmag.com/as-climate-grief-deepens-psychedelic-therapy-enters-the-chat/",
  },
  {
    outlet: "DoubleBlind Magazine",
    title: "What's the Real Cost of Flying for Psychedelic Healing?",
    href: "https://doubleblindmag.com/whats-the-real-cost-of-flying-for-psychedelic-healing/",
  },
  {
    outlet: "Entheogenic Renaissance · YouTube",
    title: "Conversation on the metacrisis and inner work.",
    href: "https://www.youtube.com/results?search_query=Entheogenic+Renaissance+Leonie+Staas",
  },
  {
    outlet: "OPEN Foundation",
    title: "Psychedelics for Planetary Action: Unlocking An Overlooked Potential — Part 1",
    href: "https://open-foundation.org/psychedelics-for-planetary-action-part-1/",
  },
  {
    outlet: "OPEN Foundation",
    title: "Psychedelics for Planetary Action: Unlocking An Overlooked Potential — Part 2",
    href: "https://open-foundation.org/psychedelics-for-planetary-action-unlocking-an-overlooked-potential-part-2/",
  },
];

const PODCASTS = [
  {
    title: "Outrage & Optimism",
    host: "with Christiana Figueres",
    href: "https://www.outrageandoptimism.org/",
  },
  {
    title: "The Nature Of",
    host: "with Willow Defebaugh",
    href: "https://atmos.earth/tag/the-nature-of-podcast/",
  },
  {
    title: "Stand in the Circle",
    host: "with Rosalind Watts",
    href: "https://www.acceptanceandcommitment.co.uk/stand-in-the-circle",
  },
  {
    title: "We Are The Great Turning",
    host: "with Joanna Macy & Jess Serrante",
    href: "https://www.wearethegreatturning.com/",
  },
  {
    title: "The Way Out Is In",
    host: "by Plum Village",
    href: "https://plumvillage.org/podcast/the-way-out-is-in",
  },
  {
    title: "The Great Simplification",
    host: "with Nate Hagens",
    href: "https://www.thegreatsimplification.com/",
  },
  {
    title: "Accidental Gods",
    host: "with Manda Scott",
    href: "https://accidentalgods.life/",
  },
];

function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function SubscribeBlock() {
  return (
    <div className="rounded-3xl border border-border bg-secondary/50 p-8 md:p-12">
      <p className="eyebrow">Subscribe</p>
      <h3 className="mt-3 font-serif text-2xl md:text-3xl text-primary">A Deeper Green</h3>
      <p className="mt-2 max-w-xl text-sm text-muted-foreground">
        New essays land in your inbox every few weeks. No noise, no marketing — just the
        work as it unfolds.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a href={SUBSCRIBE_URL} target="_blank" rel="noreferrer" className="btn-primary">
          Subscribe on Substack
        </a>
        <a
          href="https://instagram.com/a_deeper_green"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram @a_deeper_green"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-primary hover:border-primary"
        >
          <InstagramIcon />
          @a_deeper_green
        </a>
      </div>
    </div>
  );
}

function WritingPage() {
  return (
    <div className="container-narrow py-20 md:py-28">
      <header className="max-w-2xl">
        <p className="eyebrow">Writing</p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl text-primary">A Deeper Green</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Essays on the metacrisis, its inner dimensions, and the practice of coming back to life.
        </p>
      </header>

      <section className="mt-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-serif text-2xl text-primary">From Substack</h2>
          <a href={SUBSTACK_URL} target="_blank" rel="noreferrer" className="text-sm text-primary underline-offset-4 hover:underline">
            All posts →
          </a>
        </div>
        <ul className="mt-8 divide-y divide-border border-y border-border">
          {ARTICLES.map((a) => (
            <li key={a.title}>
              <a
                href={a.href}
                target="_blank"
                rel="noreferrer"
                className="group block py-6 transition hover:bg-secondary/40"
              >
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
                  <div>
                    <h3 className="font-serif text-xl leading-snug text-primary group-hover:text-accent">
                      {a.title}
                    </h3>
                    <p className="mt-1 text-sm italic text-muted-foreground">{a.sub}</p>
                    {a.excerpt && (
                      <p className="mt-3 max-w-2xl text-sm text-foreground/80">{a.excerpt}</p>
                    )}
                  </div>
                  <span className="shrink-0 text-xs uppercase tracking-widest text-clay">
                    {a.date}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-16">
        <SubscribeBlock />
      </div>

      <section className="mt-20">
        <h2 className="font-serif text-2xl text-primary">In the Media</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Features, interviews, podcasts, and panels.
        </p>
        <ul className="mt-8 divide-y divide-border border-y border-border">
          {MEDIA.map((m) => (
            <li key={m.title}>
              <a
                href={m.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-baseline justify-between gap-6 py-6 transition hover:bg-secondary/40"
              >
                <div>
                  <p className="eyebrow text-clay">{m.outlet}</p>
                  <h3 className="mt-2 font-serif text-xl leading-snug text-primary group-hover:text-accent">
                    {m.title}
                  </h3>
                </div>
                <span className="shrink-0 text-sm text-accent">→</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20">
        <h2 className="font-serif text-2xl text-primary">Podcasts</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Voices keeping me company on the path.
        </p>
        <ul className="mt-8 divide-y divide-border border-y border-border">
          {PODCASTS.map((p) => (
            <li key={p.title}>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-baseline justify-between gap-6 py-6 transition hover:bg-secondary/40"
              >
                <div>
                  <h3 className="font-serif text-xl leading-snug text-primary group-hover:text-accent">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm italic text-muted-foreground">{p.host}</p>
                </div>
                <span className="shrink-0 text-sm text-accent">→</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
