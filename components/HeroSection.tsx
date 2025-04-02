'use client';

import AnimatedDivider from './AnimatedDivider';

export default function HeroSection() {
  const handleScrollToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) contact.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 text-center">
    <section className="relative w-full min-h-screen bg-[#0D424A] text-white text-center px-4 md:px-12 flex flex-col justify-center items-center overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#0D424A]/70 to-black/50 z-0" />

      <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl mx-auto">
        <img
          src="/trustfitness_logo.avif"
          alt="Trust Fitness Logo"
          className="w-32 md:w-48 mb-6 animate-fade-in"
        />

        <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in-up">
          Train with Purpose. Move with Trust.
        </h1>

        <button
          onClick={handleScrollToContact}
          className="mt-8 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 animate-fade-in-up"
        >
          Join Now
        </button>
      </div>

      <AnimatedDivider />
    </section>
    </div>
  );
}