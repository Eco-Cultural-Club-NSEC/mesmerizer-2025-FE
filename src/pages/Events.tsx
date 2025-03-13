import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users } from "lucide-react";
import { events } from "../data";

const Events = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 events-pattern"
      style={{
        backgroundImage:
          'url("src/assets/pics/Copy of Mesmerizer 2024 SB Final_III.pdf (32).svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black mb-4 gradient-text">Events</h1>
          <p className="text-xl">Discover our exciting lineup of events</p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <motion.div
              key={event.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="neo-card group"
            >
              <div className="relative mb-4 overflow-hidden border-4 border-black dark:border-white">
                <img
                  src={event.image as string}
                  alt={event.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h3 className="text-2xl font-bold mb-2">{event.title}</h3>

              <div className="space-y-2 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-[rgb(var(--color-primary))]" />
                  <span>
                    {event.date} at {event.time}
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-[rgb(var(--color-secondary))]" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-[rgb(var(--color-accent))]" />
                  <span>
                    Team: min {event.teamSize.min} & max {event.teamSize.max}{" "}
                    members
                  </span>
                </div>
              </div>

              <Link
                to={`/events/${event.id}`}
                className="neo-button inline-block w-full text-center"
              >
                View Details
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Events;
