import { Marquee } from "@/components/motion/marquee";
import { SplitTextReveal } from "@/components/motion/split-text-reveal";
import { Reveal } from "@/components/motion/reveal";

const PRINCIPLES = [
  "Design with purpose",
  "Responsive by default",
  "Performance in mind",
  "Interactive by nature",
  "Built around your goals",
  "Thoughtful engineering",
];

/** Principles marquee + a first-person statement. */
export function Testimonial() {
  return (
    <section className="border-t border-border">
      <div className="py-10" aria-label="Development principles">
        <Marquee duration={28} reverse>
          {PRINCIPLES.map((principle) => (
            <span
              key={principle}
              className="flex items-center gap-[4vw] whitespace-nowrap text-label !text-base"
            >
              {principle}
              <span className="text-accent" aria-hidden="true">
                —
              </span>
            </span>
          ))}
        </Marquee>
      </div>

      <div className="container-x section-y border-t border-border">
        <Reveal>
          <p className="text-label mb-10">04 — What you can expect</p>
        </Reveal>
        <figure>
          <blockquote>
            <SplitTextReveal
              as="p"
              type="lines"
              className="text-display-sm max-w-5xl italic text-foreground/90"
            >
              “I bring design, interaction and engineering together to create
              digital experiences that are clear, engaging and built to work
              beautifully.”
            </SplitTextReveal>
          </blockquote>
          <Reveal delay={0.25}>
            <figcaption className="mt-10 text-sm text-muted-foreground">
              <span className="text-foreground">Jayendra Kasera</span> —
              Independent Developer
            </figcaption>
          </Reveal>
        </figure>
      </div>
    </section>
  );
}
