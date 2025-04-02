'use client';

import WhatsAppButton from './WhatsAppButton';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AnimatedDivider from './AnimatedDivider';
import RevealOnScroll from './RevealOnScroll';

export default function ClassesSection() {
  return (
    <RevealOnScroll>
    <section className="py-16 px-4 md:px-12 text-center animate-fade-in-up">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">What to Expect</h2>
      <p className="mb-8 max-w-3xl mx-auto">
        Experience high-energy bootcamps, tailored Hyrox sessions, and expert coaching that pushes you to your best.
      </p>

      <div className="max-w-4xl mx-auto mb-8 rounded-xl overflow-hidden shadow-xl">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          interval={4000}
        >
          <div>
            <img src="/gallery/class1.jpeg" alt="Bootcamp in action" />
            <p className="legend">PTp</p>
          </div>
          <div>
            <img src="/gallery/class2.jpeg" alt="Hyrox training" />
            <p className="legend">Hyrox Strength & Conditioning</p>
          </div>
          <div>
            <img src="/gallery/class3.jpeg" alt="Group session" />
            <p className="legend">Bootcamp</p>
          </div>
        </Carousel>
      </div>

      <AnimatedDivider type='shimmer' />
    </section>
    </RevealOnScroll>
  );
}