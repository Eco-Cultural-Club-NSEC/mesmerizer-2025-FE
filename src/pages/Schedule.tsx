import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Star } from 'lucide-react';

const scheduleData = [
  {
    date: 'Day 1 - April 15, 2024',
    events: [
      {
        time: '09:00 AM',
        title: 'Opening Ceremony',
        venue: 'Main Auditorium',
        category: 'Ceremony',
        highlight: true,
      },
      {
        time: '10:30 AM',
        title: 'Dance Competition Prelims',
        venue: 'Dance Arena',
        category: 'Dance',
      },
      {
        time: '02:00 PM',
        title: 'Battle of Bands',
        venue: 'Open Air Theatre',
        category: 'Music',
        highlight: true,
      },
    ],
  },
  {
    date: 'Day 2 - April 16, 2024',
    events: [
      {
        time: '09:30 AM',
        title: 'Art Exhibition',
        venue: 'Art Gallery',
        category: 'Art',
      },
      {
        time: '11:00 AM',
        title: 'Fashion Show',
        venue: 'Main Stage',
        category: 'Fashion',
        highlight: true,
      },
      {
        time: '03:00 PM',
        title: 'Stand-up Comedy',
        venue: 'Mini Auditorium',
        category: 'Comedy',
      },
    ],
  },
  {
    date: 'Day 3 - April 17, 2024',
    events: [
      {
        time: '10:00 AM',
        title: 'Theatre Finals',
        venue: 'Drama Hall',
        category: 'Theatre',
      },
      {
        time: '02:00 PM',
        title: 'Dance Finals',
        venue: 'Main Stage',
        category: 'Dance',
        highlight: true,
      },
      {
        time: '06:00 PM',
        title: 'Closing Ceremony',
        venue: 'Main Auditorium',
        category: 'Ceremony',
        highlight: true,
      },
    ],
  },
];

const Schedule = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 pattern-diagonal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black mb-4 gradient-text">Event Schedule</h1>
          <p className="text-xl">Three days of non-stop entertainment</p>
        </div>

        <div className="space-y-12">
          {scheduleData.map((day, dayIndex) => (
            <motion.div
              key={day.date}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: dayIndex * 0.2 }}
              className="neo-card section-pattern-2"
            >
              <h2 className="text-3xl font-bold mb-6 gradient-text flex items-center">
                <Calendar className="mr-2 text-[rgb(var(--color-primary))]" />
                {day.date}
              </h2>
              <div className="space-y-6">
                {day.events.map((event, eventIndex) => (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (dayIndex * 0.2) + (eventIndex * 0.1) }}
                    className={`schedule-card flex flex-col md:flex-row md:items-center p-6 ${
                      event.highlight ? 'border-[rgb(var(--color-primary))]' : ''
                    }`}
                  >
                    <div className="flex items-center mb-4 md:mb-0 md:w-1/4">
                      <Clock className={`mr-2 ${
                        event.highlight ? 'text-[rgb(var(--color-primary))]' : ''
                      }`} />
                      <span className="font-bold">{event.time}</span>
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-bold mb-1 flex items-center">
                        {event.title}
                        {event.highlight && (
                          <Star className="ml-2 text-[rgb(var(--color-secondary))]" />
                        )}
                      </h3>
                      <span className="inline-block px-2 py-1 text-sm bg-[rgb(var(--color-secondary))] text-black font-bold border-2 border-black">
                        {event.category}
                      </span>
                    </div>
                    <div className="flex items-center mt-4 md:mt-0 md:w-1/4">
                      <MapPin className="mr-2 text-[rgb(var(--color-accent))]" />
                      <span>{event.venue}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Schedule;