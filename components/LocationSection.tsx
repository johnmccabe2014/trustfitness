'use client';

import AnimatedDivider from './AnimatedDivider';
import RevealOnScroll from './RevealOnScroll';

export default function LocationSection() {
  return (
    <RevealOnScroll>
      <div className="w-full max-w-4xl mx-auto px-4 text-center">
    <section id="location" className="py-16 px-4 md:px-12 text-center animate-fade-in-up">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Where to Find Us</h2>
      <p className="mb-6 text-white/80 max-w-xl mx-auto">
        Visit Trust Fitness in the heart of Mountmellick for your next training session. Easy to access, with parking available.
      </p>

      <div className="max-w-5xl mx-auto rounded-lg overflow-hidden shadow-xl border border-white/10">
        <iframe
          title="Trust Fitness Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2394.520854784381!2d-7.332301387411678!3d53.11879509160883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485d0bd3fd3bc405%3A0x65443edb1f125e79!2sTrust%20Fitness!5e0!3m2!1sen!2sie!4v1743596017426!5m2!1sen!2sie"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <p className="mt-4 text-white/70">1 Emmet Street, Mountmellick, Laois, R32 XW62</p>

      <AnimatedDivider type='shimmer'/>
    </section>
    </div>
    </RevealOnScroll>
  );
}