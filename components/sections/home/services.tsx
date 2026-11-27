"use client";

import { Reveal } from "@/components/motion/reveal";
import { padIndex } from "@/lib/utils";

const SERVICES = [
  {
    name: "Web Development",
    description:
      "Responsive, fast and polished websites built around your brand, audience and business goals.",
  },
  {
    name: "3D & Interactive Experiences",
    description:
      "Immersive 3D visuals, product showcases and engaging interactions for memorable digital experiences.",
  },
  {
    name: "E-commerce & Business Websites",
    description:
      "Practical online storefronts and business websites designed to present products and convert visitors.",
  },
  {
    name: "Backend & API Development",
    description:
      "Reliable application backends, REST APIs, database integration and connected web applications.",
  },
];

/** Services — editorial index rows with hover accent. */
export function Services() {
  return (
    <section className="border-t border-border">
      <div className="container-x section-y">
        <Reveal>
          <p className="text-label mb-14">03 — What I do</p>
        </Reveal>
        <ul>
          {SERVICES.map((service, i) => (
            <Reveal key={service.name} delay={i * 0.08}>
              <li className="group flex flex-wrap items-baseline gap-x-10 gap-y-2 border-t border-border py-8 transition-colors last:border-b hover:bg-surface/60">
                <span className="text-label w-10">{padIndex(i)}</span>
                <h3 className="font-display text-3xl transition-all duration-300 group-hover:translate-x-2 group-hover:italic group-hover:text-accent md:text-4xl">
                  {service.name}
                </h3>
                <p className="ml-auto max-w-sm text-sm text-muted-foreground">
                  {service.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
