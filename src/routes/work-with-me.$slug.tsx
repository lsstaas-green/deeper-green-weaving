import { createFileRoute, notFound } from "@tanstack/react-router";
import type { ReactElement } from "react";
import { OfferingLayout } from "@/components/OfferingLayout";
import { ActiveHopeContent } from "@/content/offerings/active-hope";
import { MentorshipContent } from "@/content/offerings/mentorship";
import { CohortContent } from "@/content/offerings/cohort";
import { PsychedelicContent } from "@/content/offerings/psychedelic";

const EMAIL = "l.s.staas@gmail.com";

type OfferingDef = {
  eyebrow: string;
  title: string;
  ctaLabel: string;
  ctaHref: string;
  Content: () => ReactElement;
};

const OFFERINGS: Record<string, OfferingDef> = {
  "active-hope": {
    eyebrow: "01 — Active Hope Workshop",
    title: "Active Hope Workshop",
    ctaLabel: "Let's connect",
    ctaHref: `mailto:${EMAIL}?subject=Active%20Hope%20Workshop`,
    Content: ActiveHopeContent,
  },
  mentorship: {
    eyebrow: "02 — 1:1 Mentorship",
    title: "1:1 Mentorship — Finding Your Way in Difficult Times",
    ctaLabel: "Book a free 20-minute chat",
    ctaHref: `mailto:${EMAIL}?subject=1:1%20Mentorship`,
    Content: MentorshipContent,
  },
  cohort: {
    eyebrow: "03 — 12-Month Cohort Programme",
    title: "A Year of Questions — A 12-Month Programme for Living Differently",
    ctaLabel: "I'm interested",
    ctaHref: `mailto:${EMAIL}?subject=Cohort%20Programme`,
    Content: CohortContent,
  },
  psychedelic: {
    eyebrow: "04 — Psychedelic Healing Work",
    title: "Psychedelic Healing",
    ctaLabel: "Find out more",
    ctaHref: `mailto:${EMAIL}?subject=Psychedelic%20Healing`,
    Content: PsychedelicContent,
  },
};

export const Route = createFileRoute("/work-with-me/$slug")({
  loader: ({ params }) => {
    const o = OFFERINGS[params.slug];
    if (!o) throw notFound();
    return o;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Leonie Staas` },
          { property: "og:title", content: `${loaderData.title} — Leonie Staas` },
        ]
      : [],
  }),
  component: OfferingPage,
  notFoundComponent: () => (
    <div className="container-narrow py-20 text-center">
      <p>Offering not found.</p>
    </div>
  ),
});

function OfferingPage() {
  const o = Route.useLoaderData();
  const { Content } = o;
  return (
    <OfferingLayout
      eyebrow={o.eyebrow}
      title={o.title}
      ctaLabel={o.ctaLabel}
      ctaHref={o.ctaHref}
    >
      <Content />
    </OfferingLayout>
  );
}
