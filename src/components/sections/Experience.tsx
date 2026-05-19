import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { EXPERIENCE } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading eyebrow="03 — Experience" title="Work Experience" />
        <div className="relative pl-8 sm:pl-12">
          <div className="absolute left-3 sm:left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-accent/30 to-transparent" />
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.role + i}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative mb-10 last:mb-0"
            >
              <div className="absolute -left-[26px] sm:-left-[34px] top-4 size-6 rounded-full grid place-items-center glass glow">
                <Briefcase size={12} className="text-primary" />
              </div>
              <div className="glass rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <span className="text-xs rounded-full px-2 py-1 bg-primary/15 text-primary">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{exp.company}</p>
                <ul className="space-y-1.5 text-sm text-foreground/85">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 size-1 rounded-full bg-primary shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}