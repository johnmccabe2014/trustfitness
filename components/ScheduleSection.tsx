'use client';

import AnimatedDivider from './AnimatedDivider';
import RevealOnScroll from './RevealOnScroll';

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
const times = [
  '06:30 AM', '10:00 AM', '08:30 AM', '05:30 PM',
  '06:00 PM', '07:00 PM'
];

export default function ScheduleSection() {
  const getSession = (day: string, time: string) => {
    return schedule.find((s) => s.day === day && s.time === time);
  };

  return (
    <RevealOnScroll>
      <div className="w-full max-w-4xl mx-auto px-4 text-center">
      <section className="py-16 px-4 md:px-12 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Weekly Schedule</h2>
        <p className="mb-8 text-white/80 text-center max-w-2xl mx-auto">
          Plan your sessions with our clear weekly timetable.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-[700px] w-full border border-white/10 text-sm text-white text-center rounded-xl overflow-hidden">
            <thead className="bg-white/10 backdrop-blur">
              <tr>
                <th className="px-4 py-3 text-left">Time</th>
                {days.map((day) => (
                  <th key={day} className="px-4 py-3">{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {times.map((time) => (
                <tr key={time} className="border-t border-white/10">
                  <td className="px-4 py-3 text-left font-medium">{time}</td>
                  {days.map((day) => {
                    const session = getSession(day, time);
                    return (
                      <td key={day + time} className="px-4 py-3">
                        {session ? (
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              session.name === 'HYROX'
                                ? 'bg-red-500/20 text-red-300'
                                : 'bg-green-500/20 text-green-300'
                            }`}
                          >
                            {session.name}
                          </span>
                        ) : (
                          <span className="text-gray-500 text-xs">–</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AnimatedDivider label="Book Your Slot" />
      </section>
      </div>
    </RevealOnScroll>
  );
}