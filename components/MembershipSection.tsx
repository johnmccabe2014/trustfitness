'use client';

import AnimatedDivider from './AnimatedDivider';
import RevealOnScroll from './RevealOnScroll';
import WhatsAppButton from './WhatsAppButton';

export default function MembershipSection() {
  return (
    <RevealOnScroll>
    <section className="py-16 px-4 md:px-12 text-center animate-fade-in-up">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Membership Options</h2>
      <p className="mb-8 max-w-2xl mx-auto">
        Choose the plan that suits your goals and lifestyle. Each membership gives you access to expert-led sessions and our vibrant fitness community.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-md hover:shadow-lg transition-all">
          <h3 className="text-2xl font-semibold mb-2">Standard Membership</h3>
          <p className="mb-4 text-white/80">
            Gain access to <strong>3 Bootcamp sessions per week</strong>. Perfect for those looking to stay consistent and build strength.
          </p>
          
        </div>

        <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-md hover:shadow-lg transition-all">
          <h3 className="text-2xl font-semibold mb-2">Hyrox Membership</h3>
          <p className="mb-4 text-white/80">
            Get <strong>unlimited access</strong> to all sessions, including specialized Hyrox training. Ideal for competitive athletes and those training with intensity.
            Thats up to 6 days a week of high quality training!
          </p>
         
        </div>
        
      </div>

      <AnimatedDivider />
    </section>
    </RevealOnScroll>
  );
}
