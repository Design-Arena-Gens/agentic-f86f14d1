'use client';

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cable,
  FileSearch,
  GlobeLock,
  Sparkles,
  Workflow
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "Cognitive intake",
    description:
      "Language-native ingestion translates tickets, chats, and voice into structured intent with confidence scores and explainable rationale."
  },
  {
    icon: FileSearch,
    title: "Knowledge synthesis",
    description:
      "Retrieval-augmented generation unifies SOPs, runbooks, and historical tickets to resolve issues with traceable citations."
  },
  {
    icon: Workflow,
    title: "Autonomous playbooks",
    description:
      "Composable task graph orchestrates diagnostics, remediation, and validation, triggering actions across ITSM, DevOps, and security tools."
  },
  {
    icon: GlobeLock,
    title: "Enterprise guardrails",
    description:
      "Policy-aware agents enforce access controls and approvals, with full audit trails for every autonomous decision."
  },
  {
    icon: Cable,
    title: "Native integrations",
    description:
      "Out-of-the-box connectors for ServiceNow, Jira, Slack, PagerDuty, CrowdStrike, and custom APIs via secure agent bridges."
  },
  {
    icon: Sparkles,
    title: "Continuous learning",
    description:
      "Feedback loops capture human overrides, enabling supervised fine-tuning and reinforcement learning for ongoing quality gains."
  }
];

export function FeaturesGrid() {
  return (
    <section
      id="features"
      className="mx-auto w-full max-w-6xl px-6 pb-24 text-left"
    >
      <div className="flex flex-col gap-4 text-center md:text-left">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold tracking-tight text-white md:text-4xl"
        >
          Built for the realities of modern IT operations
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto max-w-3xl text-base text-slate-300 md:text-lg"
        >
          Agentic AI ITSM is the orchestration layer that keeps humans in
          control while empowering autonomous systems to resolve problems before
          they impact employees.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-white/5 bg-slate-900/60 p-6 shadow-lg shadow-black/20 transition hover:border-brand-400/40 hover:bg-brand-500/10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/20 text-brand-200">
              <feature.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-white">
              {feature.title}
            </h3>
            <p className="mt-3 text-sm text-slate-300">{feature.description}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
