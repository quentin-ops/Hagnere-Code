import { Container } from "@/components/template/container";
import { Hero } from "@/components/template/hero";
import { Background } from "@/components/template/background";
import { Features } from "@/components/template/features";
import { Companies } from "@/components/template/companies";
import { GridFeatures } from "@/components/template/grid-features";
import { Testimonials } from "@/components/template/testimonials";
import { CTA } from "@/components/template/cta";
import { NavBar } from "@/components/template/navbar";
import { Footer } from "@/components/template/footer";

export default function TemplatePage() {
  return (
    <main className="bg-white dark:bg-black antialiased">
      <NavBar />
      <div className="relative">
        <div className="absolute inset-0 h-full w-full overflow-hidden ">
          <Background />
        </div>
        <Container className="flex min-h-screen flex-col items-center justify-between ">
          <Hero />
          <Companies />
          <Features />
          <GridFeatures />
          <Testimonials />
        </Container>
        <div className="relative">
          <div className="absolute inset-0 h-full w-full overflow-hidden">
            <Background />
          </div>
          <CTA />
        </div>
      </div>
      <Footer />
    </main>
  );
}
