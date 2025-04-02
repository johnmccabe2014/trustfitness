'use client';

import AnimatedDivider from './AnimatedDivider';
import RevealOnScroll from './RevealOnScroll';
import { FaDumbbell, FaRunning } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const schedule = [
  { day: 'Monday', time: '06:30 AM', name: 'Bootcamp' },
  { day: 'Monday', time: '10:00 AM', name: 'Bootcamp' },
  { day: 'Monday', time: '06:00 PM', name: 'Bootcamp' },
  { day: 'Monday', time: '07:00 PM', name: 'Bootcamp' },
  { day: 'Tuesday', time: '10:00 AM', name: 'HYROX' },
  { day: 'Tuesday', time: '05:30 PM', name: 'HYROX' },
  { day: 'Wednesday', time: '06:30 AM', name: 'Bootcamp' },
  { day: 'Wednesday', time: '10:00 AM', name: 'Bootcamp' },
  { day: 'Wednesday', time: '06:00 PM', name: 'Bootcamp' },
  { day: 'Wednesday', time: '07:00 PM', name: 'Bootcamp' },
  { day: 'Thursday', time: '10:00 AM', name: 'HYROX' },
  { day: 'Thursday', time: '05:30 PM', name: 'HYROX' },
  { day: 'Friday', time: '06:30 AM', name: 'Bootcamp' },
  { day: 'Friday', time: '10:00 AM', name: 'Bootcamp' },
  { day: 'Friday', time: '06:00 PM', name: 'Bootcamp' },
  { day: 'Friday', time: '07:00 PM', name: 'Bootcamp' },
  { day: 'Saturday', time: '03:30 AM', name: 'HYROX' },
  { day: 'Saturday', time: '09:30 AM', name: 'Bootcamp' }
];

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function ScheduleCarousel() {
  const grouped = days.map(day => ({
    day,
    sessions: schedule.filter(s => s.day === day)
  }));

  return (
    <RevealOnScroll>
      <section className="py-20 px-4 md:px-12 text-center animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Weekly Schedule</h2>
        <p className="mb-10 max-w-xl mx-auto text-white/80">
          Swipe through the week to see all Bootcamp and HYROX sessions.
        </p>

        <div className="max-w-4xl mx-auto">
          <Carousel
            showThumbs={false}
            showIndicators={true}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={5000}
          >
            {grouped.map(({ day, sessions }) => (
              <div key={day} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 shadow-md">
                <h3 className="text-2xl font-semibold mb-4">{day}</h3>
                {sessions.length > 0 ? (
                  <ul className="space-y-4">
                    {sessions.map((s, i) => (
                      <li
                        key={i}
                        className={`flex items-center justify-between px-4 py-3 rounded-lg text-white ${
                          s.name.toLowerCase().includes('hyrox')
                            ? 'bg-red-500/20'
                            : 'bg-green-500/20'
                        }`}
                      >
                        <div className="text-left">
                          <p className="font-medium text-sm">{s.time}</p>
                          <p className="text-sm opacity-90">{s.name}</p>
                        </div>
                        <div className="text-xl">
                          {s.name.toLowerCase().includes('hyrox') ? (
                            <FaRunning className="text-red-400" />
                          ) : (
                            <FaDumbbell className="text-green-400" />
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-white/60">No sessions today.</p>
                )}
              </div>
            ))}
          </Carousel>
        </div>

        <AnimatedDivider label="Book Your Spot" />
      </section>
    </RevealOnScroll>
  );
}
