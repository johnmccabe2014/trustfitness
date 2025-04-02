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
const timeSlots = [
  '06:30 AM', '07:30 AM', '08:30 AM', '09:30 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '03:30 AM', '04:00 PM',
  '05:00 PM', '05:30 PM', '06:00 PM', '07:00 PM', '08:00 PM',
];

export default function ScheduleSection() {
  return (
    <RevealOnScroll>
      <section className="py-16 px-4 md:px-12 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Weekly Schedule</h2>
        <p className="mb-8 max-w-xl mx-auto text-center">
          Find the perfect session for your week – Bootcamp or HYROX.
        </p>

        <div className="overflow-x-auto">
          <table className="table-auto border-collapse w-full max-w-7xl mx-auto text-sm md:text-base schedule-table">
            <thead>
              <tr className="bg-white/10 text-white sticky top-0 z-10">
                <th className="p-3 text-left bg-[#0D424A]">Time</th>
                {days.map((day) => (
                  <th key={day} className="p-3 text-center bg-[#0D424A]">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((time) => (
                <tr key={time} className="border-t border-white/10">
                  <td className="p-2 text-white font-medium">{time}</td>
                  {days.map((day) => {
                    const match = schedule.find(
                      (s) => s.time === time && s.day === day
                    );
                    const isHyrox = match?.name.toLowerCase().includes('hyrox');
                    const bgClass = isHyrox
                      ? 'bg-red-500/20 text-red-200'
                      : match
                      ? 'bg-green-500/20 text-green-200'
                      : '';

                    return (
                      <td key={`${day}-${time}`} className={`p-2 text-center ${bgClass}`}>
                        {match ? match.name : ''}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AnimatedDivider label="Connect with us on Whatsapp using the Icon in the bottom right to get invovled!" />
      </section>
    </RevealOnScroll>
  );
}