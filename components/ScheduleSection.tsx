'use client';

import AnimatedDivider from './AnimatedDivider';
import RevealOnScroll from './RevealOnScroll';
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
  { day: 'Saturday', time: '09:30 AM', name: 'Bootcamp' },
];

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function ScheduleSection() {
  return (
    <RevealOnScroll>
      <section className="py-16 px-4 md:px-12 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Weekly Schedule</h2>
        <p className="mb-8 max-w-xl mx-auto text-center">
          Scroll through the week and check out what sessions suit you best.
        </p>

        <div className="max-w-4xl mx-auto">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={6000}
            transitionTime={700}
            swipeable
            emulateTouch
          >
            {days.map((day) => {
              const daySessions = schedule.filter((s) => s.day === day);
              return (
                <div key={day} className="bg-white/5 backdrop-blur-xl p-6 rounded-xl shadow-lg min-h-[250px] flex flex-col items-center">
                  <h3 className="text-2xl font-semibold mb-4 text-white">{day}</h3>
                  {daySessions.map((session, index) => (
                    <div
                      key={index}
                      className={`w-full max-w-sm mb-3 px-4 py-3 rounded-lg text-white text-center font-medium shadow-md ${
                        session.name.toLowerCase().includes('hyrox')
                          ? 'bg-red-500/20'
                          : 'bg-green-500/20'
                      }`}
                    >
                      <p>{session.time} – {session.name}</p>
                    </div>
                  ))}
                  {daySessions.length === 0 && <p className="text-sm text-gray-400">No sessions available</p>}
                </div>
              );
            })}
          </Carousel>
        </div>

        <AnimatedDivider />
      </section>
    </RevealOnScroll>
  );
}