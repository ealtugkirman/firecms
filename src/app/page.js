import Image from "next/image";
import Hero from "@/components/Hero";
import HeroSecond from "@/components/HeroSecond";
import Scroll from "../components/Scroll"
import Team from "@/components/BlogSection";
import Services from "@/components/Services";
import Crew from "@/components/Crew";
import Cta from "@/components/Cta";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <main className="font-gs h-full">
      <Hero />
      <HeroSecond />
      <Scroll />
      <Services />
      <BlogSection />
      <Crew />
      <Cta />
    </main>
  );
}
