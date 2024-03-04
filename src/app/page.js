import Image from "next/image";
import Hero from "@/components/Hero";
import HeroSecond from "@/components/HeroSecond";
import Scroll from "../components/Scroll"
import Team from "@/components/Team";
import Services from "@/components/Services";
import Crew from "@/components/Crew";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main className="font-gs h-full">
      <Hero />
      <HeroSecond />
      <Scroll />
      <Services />
      <Team />
      <Crew />
      <Cta />
    </main>
  );
}
