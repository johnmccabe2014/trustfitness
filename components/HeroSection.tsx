'use client';

import { useState, useEffect } from 'react';
import AnimatedDivider from './AnimatedDivider';
import NavBar from './Navbar';

export default function HeroSection() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2500); // Adjust duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className={`relative w-full min-h-screen bg-[#0D424A] text-white flex items-center justify-center px-4 md:px-12 transition-all duration-1000 ${
        showIntro ? 'overflow-hidden' : 'pt-24'
      }`}
    >
      {/* Intro logo full-screen */}
      {showIntro ? (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-[#0D424A]">
          <img
            src="/trustfitness_logo.avif"
            alt="Trust Fitness Logo"
            className="w-48 md:w-64 animate-fade-in-up transition-all duration-1000"
          />
        </div>
      ) : (
        <>
          {/* NavBar */}
          <NavBar />

          {/* Hero Content */}
          <div className="flex flex-col items-center justify-center max-w-4xl mx-auto mt-20">
            <img
              src="/trustfitness_logo.avif"
              alt="Trust Fitness Logo"
              className="w-24 md:w-36 mb-6 transition-all duration-700"
            />
            <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in-up mb-6">
              Train with Purpose. Move with Trust.
            </h1>
          </div>

          <AnimatedDivider type="shimmer" />
        </>
      )}
    </section>
  );
}