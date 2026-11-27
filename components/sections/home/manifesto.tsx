import { SplitTextReveal } from "@/components/motion/split-text-reveal";
import { Reveal } from "@/components/motion/reveal";
import { TransitionLink } from "@/components/layout/page-transition";
import { ArrowUpRight } from "lucide-react";

const STATS = [
  { value: "UI", label: "Responsive web experiences" },
  { value: "3D", label: "Interactive visual experiences" },
  { value: "API", label: "Connected digital products" },
];

/** Personal approach — big editorial statement + areas of focus. */
export function Manifesto() {
  return (
    <section className="border-t border-border">
      <div className="container-x section-y">
        <Reveal>
          <p className="text-label mb-10">02 — My approach</p>
        </Reveal>

        <SplitTextReveal
          as="p"
          type="lines"
          className="text-display-sm max-w-4xl text-foreground/90"
        >
          I believe a website should do more than look good. It should feel
          intuitive, work beautifully on every screen and turn thoughtful
          engineering into an experience people remember.
        </SplitTextReveal>

        <Reveal delay={0.2} className="mt-10">
          <TransitionLink
            href="/about"
            data-cursor="hover"
            className="link-underline inline-flex items-center gap-2 text-label text-foreground"
          >
            More about me <ArrowUpRight className="size-3.5" />
          </TransitionLink>
        </Reveal>

        <div className="mt-24 grid gap-10 border-t border-border pt-10 sm:grid-cols-3">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.12}>
              <p className="font-display text-6xl">{stat.value}</p>
              <p className="text-label mt-3">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
