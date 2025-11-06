'use client';

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Agentic ITSM gave us a digital workforce that hustles alongside our engineers. We closed a SEV-1 in 12 minutes that used to take an entire SWAT team.",
    name: "Priya Chandrasekar",
    title: "VP Infrastructure, Nimbus Cloud"
  },
  {
    quote:
      "The built-in governance convinced security on day one. Every autonomous action is explainable, reversible, and policy-aware.",
    name: "Damien Koh",
    title: "CISO, Polaris Financial"
  },
  {
    quote:
      "Our employees keep asking how the chatbot knows their environment so well. It’s the first AI that actually feels like a teammate.",
    name: "Evelyn Monroe",
    title: "Chief People Officer, Vanta Labs"
  }
];

export function Testimonials() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-24">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-3xl font-semibold tracking-tight text-white md:text-4xl"
      >
        Teams are already elevating service experiences
      </motion.h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.blockquote
            key={testimonial.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="flex h-full flex-col gap-6 rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-black/20"
          >
            <Quote className="h-6 w-6 text-brand-300" />
            <p className="text-sm text-slate-200 md:text-base">
              {testimonial.quote}
            </p>
            <footer className="mt-auto">
              <div className="text-sm font-semibold text-white">
                {testimonial.name}
              </div>
              <div className="text-xs text-slate-400">{testimonial.title}</div>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
