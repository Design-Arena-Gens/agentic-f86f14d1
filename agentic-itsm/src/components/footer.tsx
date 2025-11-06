import { Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">Agentic ITSM</p>
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Autonomic Service Desk. All rights
            reserved.
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <Link href="/legal/ethics" className="hover:text-brand-200">
            AI Ethics
          </Link>
          <Link href="/legal/privacy" className="hover:text-brand-200">
            Privacy
          </Link>
          <Link href="/legal/security" className="hover:text-brand-200">
            Security
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-brand-400/70 hover:text-white"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-brand-400/70 hover:text-white"
          >
            <Twitter className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
