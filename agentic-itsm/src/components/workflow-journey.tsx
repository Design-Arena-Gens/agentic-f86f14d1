'use client';

import { motion } from "framer-motion";
import {
  AlarmCheck,
  Bot,
  BrainCog,
  Fingerprint,
  UsersRound
} from "lucide-react";

const steps = [
  {
    icon: AlarmCheck,
    headline: "Predict & prevent",
    copy: "Predictive sensors analyze telemetry and service signals to forecast outages before employees submit a ticket."
  },
  {
    icon: BrainCog,
    headline: "Cognitive triage",
    copy: "Specialist agents label, prioritize, and route incidents with full reasoning traces and compliance checks."
  },
  {
    icon: Bot,
    headline: "Autonomous execution",
    copy: "Dynamic playbooks trigger actions across infrastructure, SaaS, and security stacks with rollback safeguards."
  },
  {
    icon: UsersRound,
    headline: "Human orchestration",
    copy: "High-impact escalations invite SMEs with AI-generated briefings and ready-to-run remediation options."
  },
  {
    icon: Fingerprint,
    headline: "Closing the loop",
    copy: "Post-incident retros feed learning pipelines, strengthening models and updating knowledge in real time."
  }
];

export function WorkflowJourney() {
  return (
    <section
      id="workflow"
      className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24"
    >
      <div className="text-center md:text-left">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold tracking-tight text-white md:text-4xl"
        >
          A cinematic journey from signal to resolution
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 max-w-3xl text-base text-slate-300 md:text-lg"
        >
          Orchestrate autonomous agents with human oversight across every stage
          of ITSM. Each step is observable, auditable, and tunable to your
          operational DNA.
        </motion.p>
      </div>
      <div className="relative flex flex-col gap-10 lg:flex-row">
        <div className="absolute left-[30px] top-10 hidden h-[calc(100%-5rem)] w-px bg-gradient-to-b from-brand-500/60 via-brand-500/10 to-transparent lg:hidden" />
        <div className="grid flex-1 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.headline}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative flex gap-4 rounded-2xl border border-white/5 bg-slate-900/70 p-6 backdrop-blur transition hover:border-brand-400/40 hover:bg-brand-500/10"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-500/20 text-brand-200 group-hover:bg-brand-500/30">
                <step.icon className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {step.headline}
                </h3>
                <p className="mt-2 text-sm text-slate-300">{step.copy}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex w-full flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-brand-500/10 via-slate-950 to-slate-950 p-8 lg:w-80"
        >
          <h3 className="text-xl font-semibold text-white">
            Measurable outcomes
          </h3>
          <ul className="flex flex-col gap-4 text-sm text-slate-300">
            <li>
              • 40% reduction in incident volume via predictive detection and
              self-healing automations.
            </li>
            <li>
              • 60% drop in manual escalations with AI-authored runbooks and
              guardrails.
            </li>
            <li>
              • 3x faster onboarding for new agents powered by contextual
              co-pilots.
            </li>
          </ul>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4 text-xs text-slate-400">
            Based on pilot programs across Fortune 500 enterprise technology,
            finance, and biotech operations teams.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
