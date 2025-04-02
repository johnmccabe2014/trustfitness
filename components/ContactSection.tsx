'use client';

import { useState } from 'react';
import AnimatedDivider from './AnimatedDivider';
import RevealOnScroll from './RevealOnScroll';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <RevealOnScroll>
      <section id="contact" className="py-20 px-4 md:px-12 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-10 text-white/80 max-w-2xl mx-auto text-lg">
          Have questions? Fill in the form below — or use the WhatsApp button in the corner.
        </p>

        <div className="flex justify-center">
          <form
            action="https://formspree.io/f/manepqke"
            method="POST"
            onSubmit={() => setSubmitted(true)}
            className="w-full max-w-2xl bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-8 space-y-6 text-left"
          >
            <div className="w-full">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="contact-input"
              />
            </div>

            <div className="w-full">
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="contact-input"
              />
            </div>

            <div className="w-full">
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Type your message here..."
                className="contact-input resize-vertical"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 active:scale-95 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out"
            >
              Send Message
            </button>

            {submitted && (
              <p className="text-green-400 mt-4 text-center text-sm">✅ Message sent successfully!</p>
            )}
          </form>
        </div>

        <AnimatedDivider />
      </section>
    </RevealOnScroll>
  );
}