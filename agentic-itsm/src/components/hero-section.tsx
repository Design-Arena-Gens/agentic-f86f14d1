'use client';

import { ArrowRight, Bot, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Bot,
    title: "Autonomous Agents",
    description: "Multi-agent triage and remediation built for enterprise scale."
  },
  {
    icon: ShieldCheck,
    title: "Trustworthy AI",
    description: "Guardrails, provenance tracking, and SOC2-ready observability."
  },
  {
    icon: Zap,
    title: "Hyperautomation",
    description: "Compress MTTR from hours to minutes across the ITSM lifecycle."
  }
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(69,89,255,0.35),_transparent_55%)]" />
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-16 pt-12 text-center md:pb-24 md:pt-20">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-brand-200"
        >
          Launching the Autonomous Service Desk
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl"
        >
          Agentic AI that transforms IT service management into a predictive,
          self-healing experience.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-2xl text-base text-slate-300 md:text-lg"
        >
          Unlock an orchestrated network of specialized AI agents that handle
          incident intake, automate resolutions, and continuously learn from
          every interaction. Deliver consumer-grade support with enterprise
          resilience.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="#video"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-900 shadow-xl shadow-brand-500/40 transition hover:bg-brand-100"
          >
            Watch the 90s Preview
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="#cta"
            className="inline-flex items-center justify-center rounded-full border border-white/10 px-7 py-3 text-sm font-semibold text-slate-200 transition hover:border-brand-400/70 hover:text-white"
          >
            Explore the Product Brief
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-14 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-2 rounded-2xl border border-white/5 bg-white/5 p-6 text-left backdrop-blur transition hover:border-brand-400/40 hover:bg-brand-500/10"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/20 text-brand-200">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-sm text-slate-300">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
