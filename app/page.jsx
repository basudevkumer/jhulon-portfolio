import dynamic from "next/dynamic";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

const Skills    = dynamic(() => import("@/components/sections/Skills"));
const Projects  = dynamic(() => import("@/components/sections/Projects"));
const Faq       = dynamic(() => import("@/components/sections/Faq"));
const Contact   = dynamic(() => import("@/components/sections/Contact"));

// import Timeline from "@/components/sections/Timeline";

const Page = () => {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Faq />
      <Contact />
      {/* <Timeline /> */}
    </div>
  );
};

export default Page;
