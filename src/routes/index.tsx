import { createFileRoute, Link } from "@tanstack/react-router";
import heroPortrait from "@/assets/leonie-portrait.jpg";
import article1 from "@/assets/article-1.jpg";
import article2 from "@/assets/article-2.jpg";
import article3 from "@/assets/article-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leonie Staas — A Deeper Green" },
      {
        name: "description",
        content:
          "Climate professional, psychedelic practitioner, Active Hope facilitator and writer. Personal and planetary healing as one journey.",
      },
      { property: "og:title", content: "Leonie Staas — A Deeper Green" },
      {
        property: "og:description",
        content: "What if healing the planet and healing ourselves were never two separate journeys?",
      },
    ],
  }),
  component: Home,
});

const COMPETENCIES = [
  {
    eyebrow: "Climate Professional",
    quote: "I understand the physical and social realities of our changing planet.",
    points: [
      { text: "6 years at the IEA's World Energy Outlook Team", href: "https://www.iea.org/reports/world-energy-outlook-2024" },
      { text: "Specialist in behaviour change for the climate transition" },
      { text: "Speaker at COPs and the German Chancellery" },
    ],
  },
  {
    eyebrow: "Mental Health & Psychedelic Healing",
    quote: "I understand the inner landscape that determines how we meet this moment.",
    points: [
      { text: "Certified Psychedelic Practitioner, Synthesis Institute", href: "https://www.synthesisinstitute.com/" },
      { text: "Certified Yin Yoga Teacher" },
      { text: "Long-term meditation & embodiment practitioner" },
    ],
  },
  {
    eyebrow: "The Work That Reconnects & Active Hope",
    quote: "I help others find their way back to agency, grief, and hope.",
    points: [
      { text: "Applied Eco-Dharma" },
      { text: "Group work for climate emotions" },
      { text: "1:1 work on navigating collapse" },
    ],
  },
];

const OFFERINGS = [
  { title: "Active Hope Workshop", blurb: "Group work in Joanna Macy's tradition — feel, reconnect, act.", hash: "#active-hope" },
  { title: "1:1 Coaching on Holistic Reconnection", blurb: "Personal accompaniment through climate grief and transition.", hash: "#coaching" },
  { title: "12-Month Cohort Programme", blurb: "Finding Yourself in Times of Crisis. (Working title — starts Nov 2026.)", hash: "#cohort" },
  { title: "Psychedelic Healing Work", blurb: "Preparation, integration, and a path to legal psychedelic support.", hash: "#psychedelic" },
];

const AFFILIATIONS = [
  { name: "International Energy Agency", note: "Former — World Energy Outlook", href: "https://www.iea.org/" },
  { name: "PsyGaia", note: "Team member", href: "#" },
  { name: "PsychedeliCare", note: "European Citizens' Movement", href: "#" },
];

const ARTICLES = [
  {
    title: "Will Technology Save Us?",
    sub: "On System, Self, and the Power of Choice",
    excerpt: "We keep waiting for the breakthrough that will rescue us. But the deepest technology is the one we live inside.",
    href: "#",
    img: article1,
  },
  {
    title: "Measuring What Matters",
    sub: "The Unraveling Promise of Infinite Growth",
    excerpt: "When the indicators we trusted stop pointing at anything real, what do we steer by?",
    href: "#",
    img: article2,
  },
  {
    title: "Can I Still Have Children Today?",
    sub: "A 30-Year-Old's Mind Between Madness and Meaning",
    excerpt: "A question I didn't choose, asked from inside a life that still wants to be lived.",
    href: "#",
    img: article3,
  },
];

const MEDIA = [
  { outlet: "DoubleBlind Magazine", desc: "Feature on climate grief and psychedelic integration.", href: "#" },
  { outlet: "Entheogenic Renaissance · Podcast", desc: "Conversation on the metacrisis and inner work (YouTube).", href: "#" },
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

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroPortrait}
          alt="Leonie Staas standing among juniper and sage in the high desert"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover object-[center_15%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/55 to-primary/85" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/65 via-black/35 to-transparent" />
        <div className="relative container-narrow flex min-h-[78vh] flex-col items-start justify-end pb-20 pt-40 text-cream">
          <p className="eyebrow text-cream/85">Leonie Staas</p>
          <h1 className="mt-5 max-w-3xl text-balance font-serif text-4xl leading-[1.05] text-cream sm:text-5xl md:text-6xl">
            What if healing the planet and healing ourselves were never two separate journeys?
          </h1>
          <p className="mt-6 max-w-xl text-base text-cream/85 sm:text-lg">
            Climate Professional · Active Hope Facilitator · Psychedelic Practitioner · Writer
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link to="/work-with-me" className="btn-primary bg-cream text-primary hover:opacity-90">
              Work with me
            </Link>
            <Link to="/about" className="btn-ghost border-cream/70 text-cream hover:bg-cream/10">
              My story
            </Link>
            <a
              href="https://instagram.com/a_deeper_green"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram @a_deeper_green"
              className="ml-1 inline-flex items-center gap-2 rounded-full border border-cream/60 px-4 py-2 text-sm text-cream/90 hover:bg-cream/10"
            >
              <InstagramIcon className="h-4 w-4" />
              @a_deeper_green
            </a>
          </div>
        </div>
      </section>

      {/* Triangle of competencies */}
      <section className="container-narrow py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">A holistic response to a systemic illness</p>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl text-primary">
            My work lives at the intersection of three unique perspectives.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Climate. Inner landscape. Reconnection. Each on its own is not enough — together
            they begin to describe a way through.
          </p>
        </div>

        {/* Triangle visualization — apex on top, two base corners below */}
        <div className="relative mx-auto mt-20 max-w-5xl">
          {/* connecting triangle lines (desktop only) */}
          <svg
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 hidden h-[420px] w-[640px] -translate-x-1/2 text-primary/40 md:block"
            viewBox="0 0 640 420"
          >
            <polygon
              points="320,40 60,380 580,380"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeDasharray="4 8"
            />
          </svg>

          <div className="grid gap-14 md:grid-cols-2 md:gap-x-16 md:gap-y-20">
            {COMPETENCIES.map((c, i) => (
              <article
                key={c.eyebrow}
                className={
                  "relative text-center " +
                  (i === 0
                    ? "md:col-span-2 md:mx-auto md:max-w-sm"
                    : "md:max-w-sm " + (i === 1 ? "md:justify-self-start md:text-left" : "md:justify-self-end md:text-right"))
                }
              >
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-cream shadow-sm md:mx-0" style={i === 0 ? { marginLeft: "auto", marginRight: "auto" } : i === 1 ? { marginLeft: 0 } : { marginLeft: "auto", marginRight: 0 }}>
                  <span className="h-3 w-3 rounded-full bg-primary" />
                </div>
                <p className="eyebrow">{c.eyebrow}</p>
                <p className="mt-3 font-serif text-lg leading-snug text-primary">
                  "{c.quote}"
                </p>
                <ul className={"mt-5 space-y-2 text-sm text-foreground/80 " + (i === 2 ? "md:[&_li]:flex-row-reverse" : "")}>
                  {c.points.map((p) => (
                    <li key={p.text} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {p.href ? (
                        <a href={p.href} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
                          {p.text}
                        </a>
                      ) : (
                        <span>{p.text}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="bg-secondary/40 py-24 md:py-32">
        <div className="container-narrow">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow">Work with me</p>
              <h2 className="mt-3 text-3xl md:text-4xl text-primary">
                Four ways we can meet this moment together.
              </h2>
            </div>
            <Link to="/work-with-me" className="text-sm text-primary underline-offset-4 hover:underline">
              See all offerings →
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {OFFERINGS.map((o) => (
              <Link key={o.title} to="/work-with-me" hash={o.hash.slice(1)} className="card-soft block">
                <h3 className="font-serif text-2xl text-primary">{o.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{o.blurb}</p>
                <span className="mt-5 inline-block text-sm text-accent">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="container-narrow py-24">
        <p className="eyebrow text-center">Key positions & affiliations</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {AFFILIATIONS.map((a) => (
            <a key={a.name} href={a.href} className="card-soft text-center">
              <p className="font-serif text-xl text-primary">{a.name}</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{a.note}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Latest writing */}
      <section className="bg-primary/[0.04] py-24 md:py-32">
        <div className="container-narrow">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">From A Deeper Green</p>
              <h2 className="mt-3 text-3xl md:text-4xl text-primary">Recent writing</h2>
            </div>
            <a href="#" className="text-sm text-primary underline-offset-4 hover:underline">
              Subscribe on Substack →
            </a>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ARTICLES.map((a) => (
              <a key={a.title} href={a.href} className="card-soft block overflow-hidden p-0">
                <img src={a.img} alt="" loading="lazy" width={800} height={600} className="aspect-[4/3] w-full object-cover" />
                <div className="p-6">
                  <p className="eyebrow text-clay">Essay</p>
                  <h3 className="mt-3 font-serif text-xl leading-snug text-primary">{a.title}</h3>
                  <p className="mt-1 text-sm italic text-muted-foreground">{a.sub}</p>
                  <p className="mt-4 text-sm text-foreground/80">{a.excerpt}</p>
                  <span className="mt-5 inline-block text-sm text-accent">Read more →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* In the Media */}
      <section className="container-narrow py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow">In the media</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-primary">
              In the media.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Features, podcasts, and panels where my work has appeared.
            </p>
            <a
              href="mailto:l.s.staas@gmail.com?subject=Media%20%26%20Speaking%20Inquiry"
              className="btn-primary mt-8"
            >
              Media & Speaking Inquiries
            </a>
          </div>

          <ul className="divide-y divide-border">
            {MEDIA.map((m) => (
              <li key={m.outlet} className="py-6">
                <a href={m.href} className="group flex items-baseline justify-between gap-6">
                  <div>
                    <p className="font-serif text-xl text-primary group-hover:text-accent">{m.outlet}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
                  </div>
                  <span className="shrink-0 text-sm text-accent">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
