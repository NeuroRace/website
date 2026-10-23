import Hero from "@/components/sections/Hero";
import Countdown from "@/components/sections/Countdown";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Trailer from "@/components/sections/Trailer";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import FloatingSocial from "@/components/layout/FloatingSocial";

export default function Home() {
  return (
    <>
      <Hero />
      <Countdown />
      <About />
      <Stats />
      <Trailer />
      <Team />
      <Contact />
      <FloatingSocial />
    </>
  );
}
