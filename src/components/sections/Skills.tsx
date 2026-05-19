import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import { SKILL_GROUPS } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="02 — Skills" title="Tech Stack" description="The tools and frameworks I use to ship AI-powered products end-to-end." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, gi) => {
            const GroupIcon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.05 }}
                className="glass rounded-2xl p-6 hover:glow transition group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="size-10 rounded-xl grid place-items-center text-primary"
                       style={{ background: "var(--gradient-border)" }}>
                    <GroupIcon size={18} />
                  </div>
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(({ name, icon: Icon }) => (
                    <div
                      key={name}
                      className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs bg-secondary/40 border border-border hover:border-primary/40 hover:text-primary transition"
                    >
                      <Icon size={13} />
                      {name}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}