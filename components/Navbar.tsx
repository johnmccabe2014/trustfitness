'use client';

import { useState, useEffect } from 'react';

const sections = ['Memberships', 'Classes', 'Schedule', 'Contact', 'Location'];

export default function NavBar() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Scroll observer to highlight current section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.toLowerCase());
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll to section on click
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex gap-3 flex-wrap justify-center">
      {sections.map((section) => {
        const id = section.toLowerCase();
        const isActive = activeSection === id;

        return (
          <button
            key={section}
            onClick={() => scrollToSection(id)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              isActive
                ? 'bg-green-500 text-white shadow-md'
                : 'bg-white/20 text-white hover:bg-green-600/70'
            }`}
          >
            {section}
          </button>
        );
      })}
    </nav>
  );
}