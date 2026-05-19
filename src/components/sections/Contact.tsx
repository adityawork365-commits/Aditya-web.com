import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Loader2 } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { toast } from "sonner";
import { SectionHeading } from "../SectionHeading";
import { PROFILE } from "@/lib/portfolio-data";
import { contactSchema } from "@/lib/contact-schema";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const flat: Record<string, string> = {};
      for (const issue of parsed.error.issues) flat[issue.path[0] as string] = issue.message;
      setErrors(flat);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("Failed");
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full rounded-xl bg-secondary/30 border border-border px-4 py-3 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition";

  return (
    <section id="contact" className="py-24 relative">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading eyebrow="07 — Contact" title="Get In Touch" description="Have a role, project, or collaboration in mind? Let's talk." />
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-7 flex flex-col gap-5"
          >
            <h3 className="text-xl font-semibold">Let's connect</h3>
            <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-3 text-sm hover:text-primary transition">
              <span className="size-9 rounded-lg glass grid place-items-center"><Mail size={15} /></span>
              {PROFILE.email}
            </a>
            <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-sm hover:text-primary transition">
              <span className="size-9 rounded-lg glass grid place-items-center"><Phone size={15} /></span>
              {PROFILE.phone}
            </a>
            <div className="border-t border-border pt-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Socials</p>
              <div className="flex items-center gap-3">
                {[
                  { Icon: FaLinkedin, href: PROFILE.socials.linkedin, label: "LinkedIn" },
                  { Icon: FaGithub, href: PROFILE.socials.github, label: "GitHub" },
                  { Icon: FaInstagram, href: PROFILE.socials.instagram, label: "Instagram" },
                ].map(({ Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                     className="glass size-10 rounded-xl grid place-items-center text-muted-foreground hover:text-foreground hover:glow transition">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="glass rounded-3xl p-7 space-y-4"
          >
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Name</label>
              <input
                className={inputCls}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
              />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                className={inputCls}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                rows={5}
                className={inputCls + " resize-none"}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="What would you like to discuss?"
              />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-primary-foreground glow disabled:opacity-60"
              style={{ background: "var(--gradient-primary)" }}
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={15} />}
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}