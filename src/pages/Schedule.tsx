// import React from 'react';
// import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Star } from "lucide-react";
import { events } from "../data.ts";
import Card from "../components/Card.tsx";
// const scheduleData = [
//   {
//     date: 'Day 1 - April 15, 2024',
//     events: [
//       {
//         time: '09:00 AM',
//         title: 'Opening Ceremony',
//         venue: 'Main Auditorium',
//         category: 'Ceremony',
//         highlight: true,
//       },
//       {
//         time: '10:30 AM',
//         title: 'Dance Competition Prelims',
//         venue: 'Dance Arena',
//         category: 'Dance',
//       },
//       {
//         time: '02:00 PM',
//         title: 'Battle of Bands',
//         venue: 'Open Air Theatre',
//         category: 'Music',
//         highlight: true,
//       },
//     ],
//   },
//   {
//     date: 'Day 2 - April 16, 2024',
//     events: [
//       {
//         time: '09:30 AM',
//         title: 'Art Exhibition',
//         venue: 'Art Gallery',
//         category: 'Art',
//       },
//       {
//         time: '11:00 AM',
//         title: 'Fashion Show',
//         venue: 'Main Stage',
//         category: 'Fashion',
//         highlight: true,
//       },
//       {
//         time: '03:00 PM',
//         title: 'Stand-up Comedy',
//         venue: 'Mini Auditorium',
//         category: 'Comedy',
//       },
//     ],
//   },
//   {
//     date: 'Day 3 - April 17, 2024',
//     events: [
//       {
//         time: '10:00 AM',
//         title: 'Theatre Finals',
//         venue: 'Drama Hall',
//         category: 'Theatre',
//       },
//       {
//         time: '02:00 PM',
//         title: 'Dance Finals',
//         venue: 'Main Stage',
//         category: 'Dance',
//         highlight: true,
//       },
//       {
//         time: '06:00 PM',
//         title: 'Closing Ceremony',
//         venue: 'Main Auditorium',
//         category: 'Ceremony',
//         highlight: true,
//       },
//     ],
//   },
// ];

const days = new Set(events.map((event) => event.date));

const Schedule = () => {
  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    //   className="pt-24 pb-16 pattern-diagonal"
    // >
    <section className="pt-24 pb-16 pattern-diagonal text-white">
      <div
        className="h-screen w-full fixed left-0 bg-cover bg-center inset-0 before:fixed before:inset-0 before:bg-black before:opacity-20 before:z-0"
        style={{
          backgroundImage: 'url("/pics/Contact.webp")',
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4">
            Event Schedule
          </h1>
          <p className="text-xl">Three days of non-stop entertainment</p>
        </div>

        <div className="space-y-12">
          {[...days].map((day, dayIndex) => (
            // <motion.div
            //   key={day.date}
            //   initial={{ opacity: 0, y: 20 }}
            //   animate={{ opacity: 1, y: 0 }}
            //   transition={{ delay: dayIndex * 0.2 }}
            //   className="neo-card section-pattern-2"
            // >
            <div key={dayIndex} className="section-pattern-2">
              <h2 className="text-3xl  mb-6 flex items-center">
                <Calendar className="mr-2 text-[rgb(var(--color-primary))]" />
                {day}
              </h2>
              <div className="space-y-6">
                {events
                  .filter((event) => event.date === day)
                  .map((event) => (
                    // <motion.div
                    //   key={event.title}
                    //   initial={{ opacity: 0, x: -20 }}
                    //   animate={{ opacity: 1, x: 0 }}
                    //   transition={{ delay: dayIndex * 0.2 + eventIndex * 0.1 }}
                    //   className={`schedule-card flex flex-col md:flex-row md:items-center p-6 ${
                    //     event.highlight
                    //       ? "border-[rgb(var(--color-primary))]"
                    //       : ""
                    //   }`}
                    // >
                    <Card
                      key={event.id}
                      className={`flex flex-col md:flex-row md:items-center p-6 hover:shadow-none`}
                    >
                      <div className="flex items-center mb-4 md:mb-0 md:w-1/4">
                        <Clock
                          className={`mr-2 text-violet-500`}
                        />
                        <span className="">{event.time}</span>
                      </div>
                      <div className="md:w-1/2">
                        <h3 className="text-xl  mb-1 flex items-center">
                          {event.title}
                          {event.code && (
                            <Star className="ml-2 text-rose-300" />
                          )}
                        </h3>
                        <span className="inline-block px-2 py-1 text-sm bg-rose-300 text-black  border-2 border-black">
                          {event.code}
                        </span>
                      </div>
                      <div className="flex items-center mt-4 md:mt-0 md:w-1/4">
                      {/* text-[rgb(var(--color-accent))] */}
                        <MapPin className="mr-2 text-green-300" />
                        <span>{event.location}</span>
                      </div>
                    </Card>
                    // </motion.div>
                  ))}
              </div>
            </div>
            // </motion.div>
          ))}
        </div>
      </div>
    </section>
    // </motion.div>
  );
};

export default Schedule;
