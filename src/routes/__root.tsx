import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 className="text-4xl text-foreground">Lost in the woods</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          This path doesn't lead anywhere yet. Let's find our way back.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary">Return home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl text-foreground">Something didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          A small disturbance in the system. You can try again or head home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary">
            Try again
          </button>
          <a href="/" className="btn-ghost">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Leonie Staas — A Deeper Green" },
      {
        name: "description",
        content:
          "Leonie Staas — climate professional, psychedelic facilitator, writer and speaker. Bridging the inner and outer work of our time.",
      },
      { property: "og:title", content: "Leonie Staas — A Deeper Green" },
      {
        property: "og:description",
        content: "At the intersection of personal and planetary healing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const NAV = [
  { to: "/writing", label: "Writing" },
  { to: "/work-with-me", label: "Work with me" },
  { to: "/resources", label: "Resources" },
  { to: "/key-concepts", label: "My Framework" },
  { to: "/about", label: "About" },
] as const;

function SiteHeader() {
  const [writingHover, setWritingHover] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-narrow flex flex-col gap-3 py-4 sm:h-20 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-0">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-serif text-xl text-primary">Leonie Staas</span>
        </Link>

        <nav className="-mx-1 flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-7 md:gap-x-9">
          {NAV.map((item) => {
            const isWriting = item.to === "/writing";
            return (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => isWriting && setWritingHover(true)}
                onMouseLeave={() => isWriting && setWritingHover(false)}
              >
                <Link
                  to={item.to}
                  className="text-sm text-foreground/80 transition-colors hover:text-primary"
                  activeProps={{ className: "text-primary" }}
                >
                  {item.label}
                </Link>
                {isWriting && writingHover && (
                  <div className="absolute left-0 top-full z-50 mt-3 w-72 rounded-xl border border-border bg-card p-4 shadow-xl sm:left-1/2 sm:-translate-x-1/2">
                    <p className="font-serif text-base text-primary">A Deeper Green</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Essays on climate, consciousness and reconnection.
                    </p>
                    <a
                      href="https://substack.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-2 text-xs text-primary-foreground"
                    >
                      Subscribe on Substack
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-secondary/40">
      <div className="container-narrow grid gap-10 py-16 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl text-primary">Leonie Staas</p>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            At the intersection of personal and planetary healing.
          </p>
          <a
            href="https://instagram.com/a_deeper_green"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-primary underline-offset-4 hover:underline"
            aria-label="Instagram @a_deeper_green"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            @a_deeper_green
          </a>
        </div>
        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-foreground/80 hover:text-primary">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Let's connect</p>
          <p className="text-sm text-muted-foreground">
            Subscribe to{" "}
            <a
              href="https://substack.com/"
              target="_blank"
              rel="noreferrer"
              className="italic text-primary underline-offset-4 hover:underline"
            >
              A Deeper Green
            </a>{" "}
            on Substack, or write directly for speaking and media inquiries.
          </p>
          <a
            href="mailto:l.s.staas@gmail.com"
            className="mt-4 inline-block text-sm text-primary underline-offset-4 hover:underline"
          >
            l.s.staas@gmail.com
          </a>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-narrow flex flex-col gap-2 py-6 text-xs text-muted-foreground md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} Leonie Staas</span>
          <span>Made with care for the web of life.</span>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
