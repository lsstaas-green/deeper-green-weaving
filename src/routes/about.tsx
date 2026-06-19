import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import storyMountain from "@/assets/story/leonie-mountain.jpg";
import storySpeaking from "@/assets/story/leonie-speaking.jpg";
import storyTree from "@/assets/story/leonie-tree.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Leonie Staas" },
      {
        name: "description",
        content: "Leonie's story, your story, and frequently asked questions.",
      },
      { property: "og:title", content: "About — Leonie Staas" },
      {
        property: "og:description",
        content: "Bridging climate, mental health, and the work of reconnection.",
      },
    ],
  }),
  component: AboutPage,
});

const ACKNOWLEDGEMENTS = [
  { name: "Ram Dass", note: "On presence, love, and the witness." },
  { name: "Alan Watts", note: "On the wisdom of not-knowing." },
  { name: "Joanna Macy", note: "On the Work That Reconnects." },
  { name: "Christiana Figueres", note: "On stubborn optimism in climate work." },
  { name: "Rosalind Watts", note: "On psychedelic integration and the circle." },
  { name: "Mark Ovland", note: "On embodied practice and the inner path." },
  { name: "Andrew Boyd", note: "On meeting the truth of our situation." },
  { name: "Marissa Feinberg", note: "On regenerative leadership." },
];

const FAQ_SECTIONS = [
  {
    heading: "On the climate crisis and the state of the world",
    items: [
      {
        q: "What do you mean when you say the climate crisis is a crisis of disconnection?",
        a: "[Answer coming soon — Leonie will fill this in.]",
      },
      {
        q: "Is collapse really inevitable?",
        a: "[Answer coming soon — Leonie will fill this in.]",
      },
    ],
  },
  {
    heading: "On practices for reconnection",
    items: [
      {
        q: "What is Active Hope, and how is it different from optimism?",
        a: "[Answer coming soon — Leonie will fill this in.]",
      },
      {
        q: "Where do I begin if I feel paralysed by climate grief?",
        a: "[Answer coming soon — Leonie will fill this in.]",
      },
    ],
  },
  {
    heading: "On psychedelic healing",
    items: [
      {
        q: "Is it ethical to use psychedelics to cope with climate grief?",
        a: "[Answer coming soon — Leonie will fill this in.]",
      },
      {
        q: "What does it mean to work with psychedelics legally?",
        a: "[Answer coming soon — Leonie will fill this in.]",
      },
    ],
  },
];

const TESTIMONIALS = [
  {
    name: "[Name — placeholder]",
    role: "[Role / context]",
    quote: "[Testimonial quote will live here. Leonie will gather these over time.]",
  },
  {
    name: "[Name — placeholder]",
    role: "[Role / context]",
    quote: "[Testimonial quote will live here.]",
  },
  {
    name: "[Name — placeholder]",
    role: "[Role / context]",
    quote: "[Testimonial quote will live here.]",
  },
];

function AboutPage() {
  return (
    <div className="container-narrow py-20 md:py-28">
      <header className="max-w-2xl">
        <p className="eyebrow">About</p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl text-primary">
          My story, your story, and the questions in between.
        </h1>
      </header>

      <nav className="mt-10 flex flex-wrap gap-2 text-sm">
        {[
          ["my-story", "My Story"],
          ["testimonials", "Testimonials"],
          ["faq", "FAQ"],
        ].map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className="rounded-full border border-border bg-card px-4 py-2 text-foreground/80 transition hover:border-primary hover:text-primary"
          >
            {label}
          </a>
        ))}
      </nav>

      {/* MY STORY */}
      <section id="my-story" className="mt-20 scroll-mt-28">
        <h2 className="font-serif text-3xl md:text-4xl text-primary">My Story</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-[2fr_3fr]">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={storyMountain}
                alt="Leonie in the mountains, hand on heart"
                width={1280}
                height={1600}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={storySpeaking}
                  alt="Leonie speaking at a podium"
                  width={800}
                  height={800}
                  loading="lazy"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={storyTree}
                  alt="Leonie embracing an old tree in the forest"
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="prose-style space-y-5 text-foreground/85 leading-relaxed">
            <p>
              Leonie is passionate about aligning human consciousness and action with the
              needs of our time. Bringing together professional expertise from both the
              politics of climate change and psychedelic healing and facilitation, she is
              a bridge between the environmental and the mental health communities —
              between the systemic and the personal.
            </p>
            <p>
              Trained in energy and climate policy, she worked six years at the World
              Energy Outlook Team of the International Energy Agency (IEA), one of the
              most influential players in international climate politics. She became an
              expert in the role of behavioral change and societal transformation,
              modeled its role in achieving the world's climate goals, and advised
              governments on why each of us matters. She co-authored multiple high-impact
              reports on the climate transition, published a scientific paper on climate
              adaptation, and spoke to high-level policymakers at COP and the German
              Chancellery.
            </p>
            <p>
              Climate anxiety, ecological grief, and ultimately burnout brought this work
              to a full stop. It also opened her to a profound exploration of mind,
              consciousness, and what it means to truly heal. Healing, she discovered, is
              not an individual job — it is a planetary one. And it requires
              reconnection: to ourselves, to each other, and most of all to nature.
            </p>
            <p>
              What reconnected her were diverse practices — from rave to meditation —
              diverse wisdom traditions, from Buddhism to Taoist thought, and diverse
              philosophies, from deep ecology to systems theory. Most of all, it was the
              lived experience of connection through the intentional use of psychedelics.
            </p>
            <p>
              Leonie is now a certified psychedelic facilitator through the Synthesis
              Institute, combining her facilitation with Joanna Macy's Work That
              Reconnects and Eco-Dharma. She is part of the team at PsyGaia, and works
              with the European Citizens' Movement PsychedeliCare, advocating for
              climate anxiety and ecological grief to be recognized as important
              therapeutic use cases for psychedelic-assisted therapy, as well as with
              PSYCA (Psychedelics for Climate Action).
            </p>

            <blockquote className="mt-10 border-l-2 border-accent pl-6 font-serif text-2xl italic leading-snug text-primary">
              "If we can turn a mindset of growth into one of balance, if we can turn
              fear into connection, we can unlock a nascent environmental movement, and
              transform the biggest challenge of our species into a quantum leap in
              consciousness."
            </blockquote>
          </div>
        </div>

        {/* Acknowledgements */}
        <div className="mt-20">
          <h3 className="font-serif text-2xl text-primary">Acknowledgements</h3>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            The teachers and thinkers whose work has shaped this one.
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {ACKNOWLEDGEMENTS.map((p) => (
              <li key={p.name} className="card-soft">
                <p className="font-serif text-lg text-primary">{p.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{p.note}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Note on AI */}
        <div className="mt-16 rounded-2xl border border-border bg-secondary/40 p-8">
          <p className="eyebrow">A note on the use of AI</p>
          <p className="mt-3 text-foreground/85">
            AI is not used for original writing on this site — only for editing
            purposes such as shortening or suggesting summaries. The voice you read
            here is Leonie's own.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="mt-28 scroll-mt-28">
        <h2 className="font-serif text-3xl md:text-4xl text-primary">Testimonials</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Voices of people who have walked some of this path with me. (Testimonials
          gathered over time — placeholders below.)
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className="card-soft">
              <div className="h-12 w-12 rounded-full bg-secondary" aria-hidden />
              <blockquote className="mt-5 text-sm text-foreground/85">"{t.quote}"</blockquote>
              <figcaption className="mt-5">
                <p className="text-sm font-medium text-primary">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-28 scroll-mt-28">
        <h2 className="font-serif text-3xl md:text-4xl text-primary">FAQ</h2>
        <div className="mt-10 space-y-14">
          {FAQ_SECTIONS.map((s) => (
            <div key={s.heading}>
              <h3 className="eyebrow">{s.heading}</h3>
              <div className="mt-5 divide-y divide-border border-y border-border">
                {s.items.map((item) => (
                  <FaqItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      className="block w-full py-5 text-left"
      aria-expanded={open}
    >
      <div className="flex items-start justify-between gap-6">
        <span className="font-serif text-lg text-primary">{q}</span>
        <span className="mt-1 shrink-0 text-accent">{open ? "−" : "+"}</span>
      </div>
      {open && <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{a}</p>}
    </button>
  );
}
