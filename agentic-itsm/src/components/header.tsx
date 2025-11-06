import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
      <Link href="/" className="flex items-center gap-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300">
          <Sparkles className="h-5 w-5" />
        </span>
        <div>
          <p className="text-lg font-semibold tracking-tight">
            Agentic ITSM
          </p>
          <p className="text-xs text-slate-400">
            Autonomous service operations platform
          </p>
        </div>
      </Link>
      <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
        <a href="#video" className="hover:text-brand-200">
          Watch Demo
        </a>
        <a href="#features" className="hover:text-brand-200">
          Capabilities
        </a>
        <a href="#workflow" className="hover:text-brand-200">
          Intelligent Flow
        </a>
        <a href="#cta" className="hover:text-brand-200">
          Get Access
        </a>
      </nav>
      <div className="flex items-center gap-3">
        <a
          href="#cta"
          className="hidden rounded-full border border-white/10 px-5 py-2 text-sm font-semibold text-slate-200 transition-colors hover:border-brand-400/70 hover:text-white md:inline-flex"
        >
          Book a Live Demo
        </a>
        <a
          href="#cta"
          className="inline-flex items-center rounded-full bg-brand-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-400"
        >
          Launch Beta
        </a>
      </div>
    </header>
  );
}
