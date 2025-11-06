import { CtaSection } from "@/components/cta-section";
import { FeaturesGrid } from "@/components/features-grid";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { StatsPanel } from "@/components/stats-panel";
import { Testimonials } from "@/components/testimonials";
import { VideoShowcase } from "@/components/video-showcase";
import { WorkflowJourney } from "@/components/workflow-journey";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main>
        <HeroSection />
        <VideoShowcase />
        <StatsPanel />
        <FeaturesGrid />
        <WorkflowJourney />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
