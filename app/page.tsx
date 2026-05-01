import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Shipped } from "@/components/sections/Shipped";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { DecoDivider } from "@/components/ui/DecoDivider";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <DecoDivider />
        <Shipped />
        <DecoDivider />
        <Experience />
        <DecoDivider />
        <Education />
      </main>
      <Footer />
    </>
  );
}
