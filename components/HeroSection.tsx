'use client';

import AnimatedDivider from './AnimatedDivider';
import NavBar from './Navbar';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full py-20 px-4 md:px-12 bg-[#0D424A] text-white text-center animate-fade-in-up"
    >
     

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto mt-20">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in-up mb-6">
          Train with Purpose. Move with Trust.
        </h1>
      </div>
       {/* NavBar */}
       <NavBar />

      <AnimatedDivider type="shimmer" />
    </section>
  );
}