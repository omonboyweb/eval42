import GreenCircle from "@/icons/greenCircle";
import PurpleCircle from "@/icons/purpleCircle";
import RedCircle from "@/icons/redCircle";
import { ServicesBentoGrid } from "@/features/services/service";
import { ProjectsAccordion } from "@/features/progects/progects";
import Contacts from "@/features/contacts/contacts";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 md:-top-10 md:left-50 w-70 md:w-200 md:h-200 rounded-full blur-[60px] md:blur-[100px] opacity-10">
          <PurpleCircle className="w-full h-full" />
        </div>
        <div className="absolute top-10 right-20 md:-top-30 md:right-0 w-55 md:w-200 md:h-200 rounded-full blur-[60px] md:blur-[100px] opacity-[6%]">
          <RedCircle className="w-full h-full" />
        </div>
        <div className="absolute bottom-10 left-0 md:top-40 md:right-10 w-70 md:w-200 md:h-200 rounded-full blur-[60px] md:blur-[100px] opacity-[8%]">
          <GreenCircle className="w-full h-full" />
        </div>
      </div>

      <section id="home" className="container mx-auto px-4 relative z-10">
        <div className="pt-20 md:pt-40 lg:ml-20 pb-20 md:pb-32 w-full max-w-3xl">
          <h1 className="font-semibold text-4xl md:text-[56px] lg:text-[64px] leading-[1.1] tracking-[-0.03em] text-h1">
            Every product
            <span className="text-blue-primary"> starts </span>
            with an idea.
          </h1>

          <p className="text-lg md:text-2xl leading-relaxed text-description mt-6 md:mt-8">
            We streamline that thinking. We remove the clutter. We simplify
            complex processes to the point where they are invisible to humans.
            As a result, the product works naturally, quickly, and intuitively.
          </p>
          <div className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#contants"
              className="w-full flex justify-center sm:w-auto rounded-sm font-medium text-sm px-8 py-3.5 bg-blue-primary text-white border border-blue-primary transition-all hover:bg-blue-primary/90 hover:shadow-lg hover:shadow-blue-primary/20 active:scale-95"
            >
              Start a project
            </a>
          </div>
        </div>
      </section>

      <section className="bg-bg" id="services">
        <ServicesBentoGrid />
      </section>
      <section id="projects" className="bg-bg border-b border-border-line">
        <ProjectsAccordion />
      </section>
      <section id="contants">
        <Contacts />
      </section>
    </main>
  );
}
