import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Trailer from "@/components/sections/Trailer";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import FloatingSocial from "@/components/layout/FloatingSocial";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Trailer />
      <Team />
      <Contact />
      <FloatingSocial />
    </>
  );
}
