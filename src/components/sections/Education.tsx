import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { EDUCATION } from "@/lib/portfolio-data";

export function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading eyebrow="05 — Education" title="Education" />
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-7 flex items-start gap-5"
        >
          <div className="size-12 rounded-xl grid place-items-center text-primary shrink-0"
               style={{ background: "var(--gradient-border)" }}>
            <GraduationCap size={22} />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h3 className="text-lg font-semibold">{EDUCATION.institution}</h3>
              <span className="text-xs rounded-full px-2 py-1 bg-primary/15 text-primary">
                {EDUCATION.period}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">{EDUCATION.degree}</p>
            <p className="text-sm mt-3">
              <span className="text-muted-foreground">CGPA: </span>
              <span className="text-gradient font-semibold">{EDUCATION.cgpa}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}