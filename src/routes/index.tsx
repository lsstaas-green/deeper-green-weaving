import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import heroPortrait from "@/assets/leonie-hero-wide.jpg";

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
        content:
          "What if healing ourselves and healing our planet were never two separate journeys?",
      },
    ],
  }),
  component: Home,
});

const SUBSTACK_URL = "https://leoniestaas.substack.com";
const SUBSCRIBE_URL = "https://leoniestaas.substack.com/subscribe";
const EMAIL = "l.s.staas@gmail.com";

const COMPETENCIES = [
  {
    eyebrow: "Climate Modelling and Policy",
    quote: "Understanding the physical and social realities of our changing planet.",
    points: [
      { text: "6 years at the IEA's World Energy Outlook Team", href: "https://www.iea.org/reports/world-energy-outlook-2024" },
      { text: "Specialist in behaviour change for the climate transition" },
      { text: "High-level key note speaker at COPs or German Chancellery" },
    ],
  },
  {
    eyebrow: "Mental Health & Psychedelic Healing",
    quote: "Transforming the inner landscape that determines how we meet this moment.",
    points: [
      { text: "Certified Psychedelic Practitioner, Synthesis Institute", href: "https://www.synthesisinstitute.com/" },
      { text: "Certified Yin Yoga Teacher" },
      { text: "Long-term engagement with reflective and meditative disciplines and embodiment practices" },
    ],
  },
  {
    eyebrow: "The Work That Reconnects & Active Hope",
    quote: "Finding our way back to agency, belonging, and hope.",
    points: [
      { text: "Applied Eco-Dharma" },
      { text: "Group work for climate emotions" },
      { text: "1:1 work on navigating times of systemic change and crisis" },

    ],
  },
];

const OFFERINGS = [
  { title: "Active Hope Workshop", blurb: "Group work in Joanna Macy's tradition — feel, reconnect, act.", slug: "active-hope" },
  { title: "1:1 Mentorship", blurb: "Personal accompaniment through climate grief and transition.", slug: "mentorship" },
  { title: "12-Month Cohort Programme", blurb: "Finding Yourself in Times of Crisis. Starts November 2026.", slug: "cohort" },
  { title: "Psychedelic Healing Work", blurb: "Preparation, integration, and a path to legal psychedelic support.", slug: "psychedelic" },
];

import ieaLogo from "@/assets/logos/iea.png";
import psygaiaLogo from "@/assets/logos/psygaia.png";
import psychedelicareLogo from "@/assets/logos/psychedelicare.png";
import wtrLogo from "@/assets/logos/wtr.webp";

const AFFILIATIONS = [
  {
    name: "International Energy Agency",
    note: "Former — World Energy Outlook",
    logo: ieaLogo,
    href: "https://www.iea.org/commentaries/do-we-need-to-change-our-behaviour-to-reach-net-zero-by-2050",
  },
  {
    name: "PsyGaia",
    note: "Climate and Active Hope",
    logo: psygaiaLogo,
    href: "https://psygaia.org/about/",
  },
  {
    name: "PsychedeliCare",
    note: "European Citizens' Movement",
    logo: psychedelicareLogo,
    href: "https://psychedelicare.eu/",
  },
  {
    name: "The Work That Reconnects Network",
    note: "Facilitator community",
    logo: wtrLogo,
    href: "https://workthatreconnects.org/what-is-the-work-that-reconnects/",
  },
];


const ARTICLES = [
  {
    title: "The Triangle of Disconnection",
    sub: "Or What The Climate Crisis Really Is",
    img: "https://substack-post-media.s3.amazonaws.com/public/images/58851aa3-5338-41f8-b7f0-12f132fc7666_6016x4016.jpeg",
    href: "https://leoniestaas.substack.com/p/the-triangle-of-disconnection",
  },
  {
    title: "Will Technology Save Us?",
    sub: "On System, Self, and The Power of Choice",
    img: "https://substack-post-media.s3.amazonaws.com/public/images/0fc95cba-9663-48f8-bad6-ef4e21b99b47_2048x1536.jpeg",
    href: "https://leoniestaas.substack.com/p/will-technology-save-us",
  },
  {
    title: "Psychedelic Healing for Climate Despair",
    sub: "My unfiltered story of grief, stigma, and finding back to life",
    img: "https://substack-post-media.s3.amazonaws.com/public/images/e30cb50f-fac9-4230-a2de-afff412c7ccf_2400x1723.png",
    href: "https://leoniestaas.substack.com/p/psychedelic-healing-for-climate-despair",
  },
];

const MEDIA = [
  {
    outlet: "DoubleBlind Magazine",
    desc: "As Climate Grief Deepens, Psychedelic Therapy Enters the Chat",
    href: "https://doubleblindmag.com/as-climate-grief-deepens-psychedelic-therapy-enters-the-chat/",
  },
  {
    outlet: "DoubleBlind Magazine",
    desc: "What's the Real Cost of Flying for Psychedelic Healing?",
    href: "https://doubleblindmag.com/whats-the-real-cost-of-flying-for-psychedelic-healing/",
  },
  {
    outlet: "Entheogenic Renaissance · Podcast",
    desc: "Conversation on the metacrisis and inner work (YouTube).",
    href: "https://www.youtube.com/results?search_query=Entheogenic+Renaissance+Leonie+Staas",
  },
  {
    outlet: "OPEN Foundation",
    desc: "Psychedelics for Planetary Action — Part 1",
    href: "https://open-foundation.org/psychedelics-for-planetary-action-part-1/",
  },
  {
    outlet: "OPEN Foundation",
    desc: "Psychedelics for Planetary Action — Part 2",
    href: "https://open-foundation.org/psychedelics-for-planetary-action-unlocking-an-overlooked-potential-part-2/",
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

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ok">("idle");
  return (
    <div className="relative -mt-2 overflow-hidden rounded-3xl border border-accent/40 bg-cream p-8 shadow-[0_30px_80px_-40px_rgba(40,80,60,0.45)] md:p-10">
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/20 blur-2xl" aria-hidden />
      <div className="absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-primary/15 blur-2xl" aria-hidden />
      <div className="relative grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-start">
        <div>
          <p className="eyebrow text-accent">Get in touch</p>
          <h3 className="mt-3 font-serif text-2xl text-primary md:text-3xl">
            I'd love to hear from you.
          </h3>
          <p className="mt-3 text-foreground/80">
            Let's connect and see where it takes us!
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            We can work in English or German.
          </p>
        </div>

        <form
          action={`https://formsubmit.co/${EMAIL}`}
          method="POST"
          onSubmit={() => setStatus("ok")}
          className="space-y-3"
        >
          <input type="hidden" name="_subject" value="New message from a-deeper-green website" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
          <label className="block">
            <span className="sr-only">Name</span>
            <input
              required
              name="name"
              placeholder="Your name"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent"
            />
          </label>
          <label className="block">
            <span className="sr-only">Email</span>
            <input
              required
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent"
            />
          </label>
          <label className="block">
            <span className="sr-only">Message</span>
            <textarea
              required
              name="message"
              rows={4}
              placeholder="A short message…"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent"
            />
          </label>
          <button type="submit" className="btn-primary w-full sm:w-auto">
            Send message
          </button>
          {status === "ok" && (
            <p className="text-xs text-muted-foreground">Opening confirmation…</p>
          )}
        </form>
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary">
        <img
          src={heroPortrait}
          alt="Leonie Staas standing among juniper and sage in the high desert"
          width={1920}
          height={820}
          className="absolute inset-0 h-full w-full object-cover object-[100%_42%] brightness-[1.35] saturate-[1.15] contrast-[0.96] md:object-right"
        />
        <div className="absolute inset-0 bg-cream/15 mix-blend-screen" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/22 via-primary/5 to-transparent" aria-hidden />


        <div className="relative container-narrow flex min-h-[78vh] flex-col items-start justify-end pb-20 pt-40 text-cream">
          <p className="eyebrow text-cream/85">Leonie Staas</p>
          <h1 className="mt-5 max-w-3xl text-balance font-serif text-4xl leading-[1.05] text-cream sm:text-5xl md:text-6xl">
            What if healing ourselves and healing our planet were never two separate journeys?
          </h1>
          <p className="mt-6 text-xs text-cream/85 sm:text-sm md:whitespace-nowrap md:text-base lg:text-lg">
            Climate Professional · Active Hope Facilitator · Psychedelic Practitioner · Writer
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link to="/work-with-me" className="btn-primary bg-cream text-primary hover:opacity-90">
              Work with me
            </Link>
            <Link to="/about" className="btn-ghost border-cream/70 text-cream hover:bg-cream/10">
              My story
            </Link>
          </div>
        </div>
      </section>

      {/* Triangle of competencies */}
      <section className="container-narrow py-24 md:py-32">
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <p className="eyebrow">A holistic response to a systemic illness</p>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl text-primary">
            My work lives at the intersection of three unique perspectives.
          </h2>
        </div>

        {/* Triangle visualization */}
        <div className="relative mx-auto mt-16 max-w-6xl md:mt-20">
          {/* Desktop */}
          <div className="relative hidden h-[640px] md:block">
            {/* Top text — above apex */}
            <div className="absolute left-1/2 top-0 w-[36%] -translate-x-1/2 text-center">
              <CompetencyBody c={COMPETENCIES[0]} align="center" />
            </div>
            {/* Bottom-left text — to the left of the bottom-left corner */}
            <div className="absolute left-0 top-[62%] w-[30%] text-right">
              <CompetencyBody c={COMPETENCIES[1]} align="right" />
            </div>
            {/* Bottom-right text — to the right of the bottom-right corner */}
            <div className="absolute right-0 top-[62%] w-[30%] text-left">
              <CompetencyBody c={COMPETENCIES[2]} align="left" />
            </div>

            {/* Triangle in the centre between the three text blocks */}
            <svg
              aria-hidden
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="triGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.85" />
                </linearGradient>
                <radialGradient id="triFill" cx="50%" cy="60%" r="60%">
                  <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.10" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.02" />
                </radialGradient>
              </defs>
              <polygon
                points="50,42 36,90 64,90"
                fill="url(#triFill)"
                stroke="url(#triGrad)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* Dots exactly at the three corners */}
            <Dot className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2" />
            <Dot className="absolute left-[36%] top-[90%] -translate-x-1/2 -translate-y-1/2" />
            <Dot className="absolute left-[64%] top-[90%] -translate-x-1/2 -translate-y-1/2" />
          </div>

          {/* Mobile: stacked cards */}
          <div className="grid gap-12 md:hidden">
            <article className="text-center">
              <CompetencyBody c={COMPETENCIES[0]} align="center" />
              <Dot className="mx-auto mt-6" />
            </article>
            <article>
              <CompetencyBody c={COMPETENCIES[1]} align="left" />
              <Dot className="mx-auto mt-6" />
            </article>
            <article>
              <CompetencyBody c={COMPETENCIES[2]} align="left" />
              <Dot className="mx-auto mt-6" />
            </article>
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="container-narrow pb-24">
        <p className="eyebrow text-center">Key positions & affiliations</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AFFILIATIONS.map((a) => (
            <a
              key={a.name}
              href={a.href}
              target="_blank"
              rel="noreferrer"
              className="card-soft flex flex-col items-center text-center transition hover:border-accent"
            >
              <div className="flex h-16 w-16 items-center justify-center">
                <img src={a.logo} alt={`${a.name} logo`} className="max-h-14 max-w-14 object-contain" loading="lazy" />
              </div>
              <p className="mt-4 font-serif text-lg text-primary">{a.name}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{a.note}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Offerings + Contact */}
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
              <Link key={o.title} to="/work-with-me/$slug" params={{ slug: o.slug }} className="card-soft block">
                <h3 className="font-serif text-2xl text-primary">{o.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{o.blurb}</p>
                <span className="mt-5 inline-block text-sm text-accent">Find out more →</span>
              </Link>
            ))}
          </div>

          <p className="mt-6 text-center text-sm italic text-muted-foreground">
            We can work in English or German.
          </p>

          <div className="mt-12">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Latest writing */}
      <section className="bg-primary/[0.04] py-24 md:py-32">
        <div className="container-narrow">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">From A Deeper Green</p>
              <Link to="/writing" className="mt-3 inline-block text-3xl text-primary underline-offset-4 hover:underline md:text-4xl">
                Recent writing
              </Link>
            </div>
            <a href={SUBSCRIBE_URL} target="_blank" rel="noreferrer" className="text-sm text-primary underline-offset-4 hover:underline">
              Subscribe on Substack →
            </a>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ARTICLES.map((a) => (
              <a key={a.title} href={a.href} target="_blank" rel="noreferrer" className="card-soft block overflow-hidden p-0">
                <img src={a.img} alt="" loading="lazy" width={800} height={600} className="aspect-[4/3] w-full object-cover" />
                <div className="p-6">
                  <p className="eyebrow text-clay">Essay</p>
                  <h3 className="mt-3 font-serif text-xl leading-snug text-primary">{a.title}</h3>
                  <p className="mt-1 text-sm italic text-muted-foreground">{a.sub}</p>
                  <span className="mt-5 inline-block text-sm text-accent">Read on Substack →</span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/writing" className="btn-ghost">See all →</Link>
          </div>
        </div>
      </section>

      {/* In the Media */}
      <section className="container-narrow py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow">Dive deeper</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-primary">
              In the media.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Features, podcasts, and panels where my work has appeared.
            </p>
            <a
              href={`mailto:${EMAIL}?subject=Media%20%26%20Speaking%20Inquiry`}
              className="btn-primary mt-8"
            >
              Media & Speaking Inquiries
            </a>
            <a
              href="https://instagram.com/leonie_staas"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-primary underline-offset-4 hover:underline"
            >
              <InstagramIcon /> @leonie_staas
            </a>
          </div>

          <ul className="divide-y divide-border">
            {MEDIA.map((m) => (
              <li key={m.desc} className="py-6">
                <a href={m.href} target="_blank" rel="noreferrer" className="group flex items-baseline justify-between gap-6">
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

function Dot({ className = "" }: { className?: string }) {
  return (
    <span
      className={
        "block h-5 w-5 rounded-full bg-gradient-to-br from-accent to-primary shadow-[0_0_0_6px_rgba(190,165,120,0.18)] " +
        className
      }
      aria-hidden
    />
  );
}

function CompetencyBody({
  c,
  align,
}: {
  c: (typeof COMPETENCIES)[number];
  align: "left" | "right" | "center";
}) {
  const textAlign =
    align === "center" ? "text-center" : align === "right" ? "md:text-right" : "md:text-left";
  return (
    <div className={textAlign}>
      <p className="eyebrow">{c.eyebrow}</p>
      <p className="mt-3 font-serif text-lg leading-snug text-primary">"{c.quote}"</p>
      <ul
        className={
          "mt-4 space-y-2 text-sm text-foreground/80 " +
          (align === "center"
            ? "mx-auto inline-block text-left"
            : align === "right"
            ? "md:[&_li]:flex-row-reverse md:[&_li]:text-right"
            : "")
        }
      >
        {c.points.map((p) => (
          <li key={p.text} className="flex items-start gap-2 text-left">
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
    </div>
  );
}
