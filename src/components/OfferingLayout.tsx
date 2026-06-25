import { Link } from "@tanstack/react-router";
import { type ReactNode } from "react";
import { DanaPricing } from "./DanaPricing";

export function OfferingLayout({
  eyebrow,
  title,
  children,
  ctaLabel,
  ctaHref,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <div className="container-narrow py-20 md:py-28">
      <Link to="/work-with-me" className="text-sm text-muted-foreground hover:text-primary">
        ← All offerings
      </Link>
      <header className="mt-6 max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl text-primary">{title}</h1>
      </header>
      <div className="prose-style mt-12 max-w-3xl space-y-5 text-foreground/85 leading-relaxed">
        {children}
      </div>
      <div className="mt-12 max-w-3xl">
        <a href={ctaHref} className="btn-primary">
          {ctaLabel}
        </a>
      </div>
      <div className="max-w-3xl">
        <DanaPricing />
      </div>
    </div>
  );
}
