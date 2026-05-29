"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

import LenisProvider      from "@/components/providers/LenisProvider";
import Navbar             from "@/components/layout/Navbar";
import Footer             from "@/components/layout/Footer";
import Themes             from "@/components/ui/Themes";
import MouseTracker       from "@/components/ui/MouseTracker";
import Loader             from "@/components/ui/Loader";
import ParticlesBackground from "@/components/ui/ParticlesBackground";

export default function Providers({ children }) {
  const [loading, setLoading] = useState(true);
  const [mobile,  setMobile]  = useState(false);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    if (document.readyState === "complete") handleLoad();
    else window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    const update = () => setMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="overflow-x-clip max-w-screen">
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <LenisProvider>
          <Navbar />
          <ParticlesBackground />
          {children}
          {!mobile && <MouseTracker />}
          <Themes />
          <Footer />
        </LenisProvider>
      </ThemeProvider>
    </div>
  );
}
