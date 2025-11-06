'use client';

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section
      id="cta"
      className="mx-auto w-full max-w-5xl px-6 pb-32 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border border-brand-400/40 bg-gradient-to-br from-brand-500/20 via-slate-950 to-slate-950 p-10 shadow-2xl"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(114,136,255,0.35),_transparent_60%)]" />
        <div className="relative space-y-6">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Deploy your first agentic service squad in 30 days.
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-200 md:text-lg">
            Join the design partner program to co-create guardrails, workflows,
            and KPIs tailored to your enterprise. We’ll migrate knowledge,
            integrate tools, and enable your teams with AI copilots.
          </p>
          <form className="mx-auto flex flex-col gap-4 sm:flex-row">
            <input
              type="email"
              required
              placeholder="work.email@company.com"
              className="h-12 flex-1 rounded-full border border-white/10 bg-slate-900/80 px-5 text-sm text-white outline-none transition focus:border-brand-300"
            />
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-900 transition hover:bg-brand-100"
            >
              Reserve Strategy Session
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </form>
          <p className="text-xs text-slate-400">
            By submitting this form you agree to our AI ethics guidelines and
            responsible automation principles.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
