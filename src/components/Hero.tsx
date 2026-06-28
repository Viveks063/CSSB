import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Component as ShowcaseCard } from "@/components/ui/showcase-card-1";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-maroon-dark/70 via-maroon-dark/60 to-black/80 z-10" />

      {/* Saffron accent glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-saffron/20 blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-temple-gold/15 blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none z-10" />

      <div className="relative z-20 max-w-7xl mx-auto pl-4 pr-6 sm:pl-6 sm:pr-8 lg:pl-8 lg:pr-16 pt-40 pb-12 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Sanskrit shloka */}
          <p className="font-heading italic text-[#FFD700] text-base sm:text-lg mb-6 tracking-wide drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]">
            ॥ सर्वे भवन्तु सुखिनः ॥
          </p>
          {/* Main heading */}
          <div className="relative mb-2">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-44 h-44 rounded-full bg-[#FFD700]/40 blur-[80px]"></div>
            </div>

            <img src="/cssb-logo.png" className="relative w-40 mx-auto" />
          </div>
          <h1 className="font-heading text-white text-4xl md:text-6xl font-bold leading-tight">
            CULTURAL SEVA SANSTHA
          </h1>

          <h1 className="font-heading text-[#D4A017] text-3xl md:text-5xl font-bold mt-2">
            BHIWANDI
          </h1>
          <p className="mt-5 text-xl text-white/95">
            Preserving <span className="text-[#D4A017] font-semibold">Culture</span>
            <span className="mx-3 text-[#D4A017]">•</span>
            Serving <span className="text-[#D4A017] font-semibold">Society</span>
            <span className="mx-3 text-[#D4A017]">•</span>
            Empowering <span className="text-[#D4A017] font-semibold">Communities</span>
          </p>

          {/* CTA */}
          <div className="mt-8 mb-12">
      
            <LiquidButton
              onClick={() => (window.location.hash = "#about")}
              className="text-white font-semibold">
              Discover Our Story
            </LiquidButton>
          </div>

        </div>
      </div>

      {/* Featured showcase card — bottom right */}
      <div className="absolute bottom-8 right-8 z-30 hidden md:block">
        <ShowcaseCard />
      </div>

      {/* Bottom fade to cream */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent pointer-events-none z-20" />
    </section>
  );
}

