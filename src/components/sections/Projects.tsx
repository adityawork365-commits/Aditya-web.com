import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { PROJECTS } from "@/lib/portfolio-data";

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="04 — Projects" title="Selected Projects" description="A few things I've built recently." />
        <div className="grid gap-8 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl p-[1px] overflow-hidden"
              style={{ background: "var(--gradient-border)" }}
            >
              <div className="relative rounded-[calc(theme(borderRadius.3xl)-1px)] glass p-7 h-full flex flex-col">
                <div
                  className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"
                  style={{ boxShadow: "var(--shadow-glow)" }}
                />
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <p className="text-sm text-primary mt-1">{p.subtitle}</p>
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} on GitHub`}
                    className="glass size-9 rounded-lg grid place-items-center hover:text-primary transition"
                  >
                    <Github size={15} />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">{p.description}</p>

                <div className="mt-5">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Features</div>
                  <ul className="grid grid-cols-2 gap-1.5 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-1.5 items-center text-foreground/85">
                        <span className="size-1 rounded-full bg-primary" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] rounded-md px-2 py-1 bg-secondary/40 border border-border text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                  >
                    View on GitHub <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}