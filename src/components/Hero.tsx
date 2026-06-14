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

      <div className="relative z-20 max-w-7xl mx-auto pl-4 pr-6 sm:pl-6 sm:pr-8 lg:pl-8 lg:pr-16 pt-24 pb-12 w-full">
        <div className="flex flex-col items-start text-left max-w-3xl">
          {/* Sanskrit shloka */}
          <p className="font-heading italic text-temple-gold-light text-base sm:text-lg mb-6 tracking-wide drop-shadow-lg">
            ॥ सर्वे भवन्तु सुखिनः ॥
          </p>

          {/* Main heading */}
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-10 drop-shadow-2xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] via-[#0080FF] to-[#0050C0]">
              Preserving culture.
            </span>
            <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] via-[#0080FF] to-[#0050C0]">
              Serving society.
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] via-[#0080FF] to-[#0050C0]">
              Empowering community.
            </span>
          </h1>

          {/* CTA */}
          <div className="mb-12">
            <LiquidButton
              onClick={() => (window.location.hash = "#about")}
              className="text-white font-semibold"
            >
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

