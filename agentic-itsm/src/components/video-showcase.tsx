'use client';

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function VideoShowcase() {
  return (
    <section
      id="video"
      className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-24"
    >
      <div className="absolute inset-x-0 -top-32 -z-10 h-64 bg-[radial-gradient(circle,_rgba(69,89,255,0.2)_0%,_rgba(2,6,23,0)_70%)]" />
      <div className="flex flex-col gap-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold tracking-tight text-white md:text-4xl"
        >
          See Agentic AI orchestrating your entire service desk
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-3xl text-base text-slate-300 md:text-lg"
        >
          Experience how incident detection, classification, knowledge retrieval,
          and autonomous remediation converge into one seamless flow. The demo
          highlights real-time reasoning, policy-aware actions, and human-in-loop
          escalation.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-brand-500/10 to-slate-950 shadow-2xl"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(69,89,255,0.35),_transparent_70%)]" />
        <div className="relative aspect-video w-full">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/1UPp_BCdm04?rel=0&showinfo=0"
            title="Agentic AI ITSM Launch Reel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="absolute bottom-6 right-6 flex items-center gap-3 rounded-full border border-white/10 bg-slate-900/90 px-4 py-2 text-sm text-slate-300 backdrop-blur">
          <Play className="h-4 w-4 text-brand-300" />
          2:38 Spotlight • Live agent collaboration
        </div>
      </motion.div>
    </section>
  );
}
