import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/content/site.config";
import { Reveal } from "@/components/motion/reveal";
import { SplitTextReveal } from "@/components/motion/split-text-reveal";
import { ParallaxLayer } from "@/components/motion/parallax-layer";
import { Marquee } from "@/components/motion/marquee";
import { padIndex } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Jayendra Kasera — an independent developer focused on responsive websites, interactive experiences and reliable web applications.",
};

const VALUES = [
  {
    name: "Clarity before code",
    description:
      "I start by understanding the goal, the audience and the problem the website needs to solve.",
  },
  {
    name: "Performance matters",
    description:
      "A polished experience should also feel fast, responsive and reliable across devices.",
  },
  {
    name: "Built for every screen",
    description:
      "Responsive layouts and accessible interactions are part of the build from the beginning.",
  },
  {
    name: "Thoughtful engineering",
    description:
      "I bring frontend experiences and backend functionality together with maintainability in mind.",
  },
];

const TEAM = [{ name: "Jayendra Kasera", role: "Independent Developer" }];

export default function AboutPage() {
  return (
    <main className="pt-40">
      <header className="container-x mb-24">
        <Reveal>
          <p className="text-label mb-8">About me</p>
        </Reveal>
        <SplitTextReveal
          as="h1"
          type="words"
          className="text-display-xl max-w-[14ch]"
        >
          Independent mindset, end-to-end craft
        </SplitTextReveal>
        <Reveal delay={0.25}>
          <p className="mt-10 max-w-xl text-lg text-muted-foreground">
            I&apos;m Jayendra Kasera, an independent developer based in India.
            I build responsive websites, interactive digital experiences and
            practical web applications — combining modern frontend work with
            backend engineering.
          </p>
        </Reveal>
      </header>

      {/* Image band */}
      <div className="relative h-[50vh] overflow-hidden">
        <ParallaxLayer speed={-0.4} className="absolute -inset-y-20 inset-x-0">
          <Image
            src="/covers/polaris-observatory.svg"
            alt="Abstract digital artwork"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </ParallaxLayer>
      </div>

      {/* Values */}
      <section className="container-x section-y">
        <Reveal>
          <p className="text-label mb-14">How I work</p>
        </Reveal>
        <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">
          {VALUES.map((value, i) => (
            <Reveal key={value.name} delay={(i % 2) * 0.12}>
              <div className="border-t border-border pt-6">
                <p className="text-label mb-4">{padIndex(i)}</p>
                <h2 className="font-display text-3xl">{value.name}</h2>
                <p className="mt-4 max-w-md text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-border">
        <div className="container-x section-y">
          <Reveal>
            <p className="text-label mb-14">The developer</p>
          </Reveal>
          <ul>
            {TEAM.map((person, i) => (
              <Reveal key={person.name} delay={i * 0.08}>
                <li className="group flex flex-wrap items-baseline justify-between gap-2 border-t border-border py-6 last:border-b">
                  <span className="font-display text-3xl transition-all duration-300 group-hover:translate-x-2 group-hover:text-accent">
                    {person.name}
                  </span>
                  <span className="text-label">{person.role}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Rolling statement */}
      <div className="border-t border-border py-12" aria-hidden="true">
        <Marquee duration={24}>
          <span className="flex items-center gap-[4vw] whitespace-nowrap font-display text-5xl italic text-muted-foreground/50">
            Design with intent — build with care —
          </span>
        </Marquee>
      </div>
    </main>
  );
}
