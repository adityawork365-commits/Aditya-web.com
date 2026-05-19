import { motion } from "framer-motion";
import { Download, ArrowRight, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { PROFILE } from "@/lib/portfolio-data";
import avatarImg from "@/assets/aditya.jpeg";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
           style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div className="relative mx-auto max-w-6xl px-4 grid md:grid-cols-[1fr_auto] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-muted-foreground mb-6"
          >
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05]"
          >
            Hi, I'm <span className="text-gradient">{PROFILE.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-4 text-xl sm:text-2xl text-foreground/90"
          >
            {PROFILE.role}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground"
          >
            <MapPin size={14} /> {PROFILE.location}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-xl text-muted-foreground leading-relaxed"
          >
            {PROFILE.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-primary-foreground glow"
              style={{ background: "var(--gradient-primary)" }}
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 glass rounded-xl px-5 py-3 text-sm font-medium hover:bg-secondary/40 transition"
            >
              <Download size={16} /> Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mt-8 flex items-center gap-3"
          >
            {[
              { Icon: FaLinkedin, href: PROFILE.socials.linkedin, label: "LinkedIn" },
              { Icon: FaGithub, href: PROFILE.socials.github, label: "GitHub" },
              { Icon: FaInstagram, href: PROFILE.socials.instagram, label: "Instagram" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="glass size-10 rounded-xl grid place-items-center text-muted-foreground hover:text-foreground hover:glow transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative justify-self-center"
        >
          <div className="relative size-56 sm:size-64 md:size-72">
            <div className="absolute inset-0 rounded-full blur-3xl opacity-60"
                 style={{ background: "var(--gradient-primary)" }} />
            <div className="absolute inset-0 rounded-full p-[2px]"
                 style={{ background: "var(--gradient-border)" }}>
              <div className="size-full rounded-full glass grid place-items-center overflow-hidden">
                <img
                  src={avatarImg}
                  alt={PROFILE.name}
                  className="size-full object-cover"
                />
              </div>
            </div>
            {/* orbiting dots */}
            <motion.div
              className="absolute inset-[-12px] rounded-full border border-primary/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              <span className="absolute top-0 left-1/2 -translate-x-1/2 size-2 rounded-full bg-primary glow" />
            </motion.div>
            <motion.div
              className="absolute inset-[-22px] rounded-full border border-accent/15"
              animate={{ rotate: -360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            >
              <span className="absolute top-0 left-1/2 -translate-x-1/2 size-1.5 rounded-full bg-accent" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}