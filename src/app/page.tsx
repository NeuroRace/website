import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Trailer from "@/components/sections/Trailer";
import GameplayHooks from "@/components/sections/GameplayHooks";
import StatsShowcase from "@/components/sections/StatsShowcase";
import Archetypes from "@/components/sections/Archetypes";
import Community from "@/components/sections/Community";
import FloatingSocial from "@/components/layout/FloatingSocial";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Trailer />
      <GameplayHooks />
      <StatsShowcase />
      <Archetypes />
      <Community />
      <FloatingSocial />
    </>
  );
}
