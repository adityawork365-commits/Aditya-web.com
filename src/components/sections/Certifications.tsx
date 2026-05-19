import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { CERTIFICATIONS } from "@/lib/portfolio-data";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="06 — Certifications" title="Certifications" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-5 hover:glow hover:border-primary/30 transition group"
            >
              <div className="flex items-start gap-3">
                <div className="size-9 rounded-lg grid place-items-center text-primary shrink-0"
                     style={{ background: "var(--gradient-border)" }}>
                  <Award size={16} />
                </div>
                <div>
                  <h3 className="font-medium leading-snug">{c.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{c.issuer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}