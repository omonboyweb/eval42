import Hero from "@/components/hero/hero";
import Marquee from "@/components/marquee";
import Manifesto from "@/components/manifesto";
import WorkGallery from "@/components/work/work-gallery";
import ServicesLive from "@/components/services/services-live";
import StatsBand from "@/components/stats-band";
import Outro from "@/components/outro";

export default function Home() {
  return (
    <main className="relative w-full">
      <Hero />
      <Marquee />
      <Manifesto />
      <WorkGallery />
      <ServicesLive />
      <StatsBand />
      <Outro />
    </main>
  );
}
