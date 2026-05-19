import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import { ABOUT } from "@/lib/portfolio-data";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading eyebrow="01 — About" title="About Me" />
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-10 max-w-3xl mx-auto"
        >
          <p className="text-lg leading-relaxed text-foreground/90">{ABOUT}</p>
        </motion.div>
      </div>
    </section>
  );
}