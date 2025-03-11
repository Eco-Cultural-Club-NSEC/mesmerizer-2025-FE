import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Users,
  ArrowLeft,
  Clock,
  Award,
  AlertCircle,
  BadgeIndianRupee,
  ScanLine,
  Cctv,
} from "lucide-react";
import { events } from "../data";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find((e) => e.id === id);

  const handleRegister = () => {
    navigate("/register", { state: { eventId: id } });
  };

  if (!event) {
    return (
      <div className="pt-24 pb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Event not found</h1>
        <Link to="/events" className="neo-button inline-flex items-center">
          <ArrowLeft className="mr-2" /> Back to Events
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/events" className="neo-button inline-flex items-center mb-8">
          <ArrowLeft className="mr-2" /> Back to Events
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <motion.div
              className="neo-card overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={event.image as string}
                alt={event.title}
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <motion.div
                className="neo-card bg-[rgb(var(--color-primary))]/10"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center">
                  <Clock className="mr-4 text-[rgb(var(--color-primary))]" />
                  <div>
                    <h3 className="font-bold">Time</h3>
                    <p>{event.time}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="neo-card bg-[rgb(var(--color-secondary))]/10"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center">
                  <MapPin className="mr-4 text-[rgb(var(--color-secondary))]" />
                  <div>
                    <h3 className="font-bold">Venue</h3>
                    <p>{event.location}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="neo-card bg-[rgb(var(--color-accent))]/10"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center">
                  <Calendar className="mr-4 text-[rgb(var(--color-accent))]" />
                  <div>
                    <h3 className="font-bold">Date</h3>
                    <p>{event.date}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="neo-card bg-[rgb(var(--color-purple))]/10"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center">
                  <Users className="mr-4 text-[rgb(var(--color-purple))]" />
                  <div>
                    <h3 className="font-bold">Team Size</h3>
                    <p>
                      min {event.teamSize.min} & max {event.teamSize.max} members
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="neo-card bg-[rgb(var(--color-indigo))]/10"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center">
                  <BadgeIndianRupee className="mr-4 text-[rgb(var(--color-indigo))]" />
                  <div>
                    <h3 className="font-bold">Entry Fees</h3>
                    <p>{event.entryFees}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="neo-card bg-[rgb(var(--color-orange))]/10"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center">
                  <ScanLine className="mr-4 text-[rgb(var(--color-orange))]" />
                  <div>
                    <h3 className="font-bold">Event Code</h3>
                    <p>{event.code}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-black mb-4 gradient-text">
                {event.title}
              </h1>
            </div>

            <div className="neo-card bg-[rgb(var(--color-accent))]/5">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Award className="mr-2 text-[rgb(var(--color-primary))]" />
                Event Description
              </h2>
              <p className="text-lg leading-relaxed">{event.tagline}</p>
            </div>

            <div className="neo-card bg-[rgb(var(--color-secondary))]/5">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <AlertCircle className="mr-2 text-[rgb(var(--color-secondary))]" />
                Rules & Guidelines
              </h2>
              <ul className="list-disc list-inside space-y-2">
                {event.rules &&
                  event.rules.map((rule, index) => (
                    <li key={index} className="text-lg">
                      {rule}
                    </li>
                  ))}
              </ul>
            </div>

            <div className="neo-card bg-[rgb(var(--color-teal))]/5">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Cctv className="mr-2 text-[rgb(var(--color-teal))]" />
                Coordinators
              </h2>
              <ul className="list-disc list-inside space-y-2">
                {event.coordinators &&
                  event.coordinators.map((cr, index) => (
                    <li key={index} className="text-lg">
                      {cr.name} &ndash; {cr.contact}
                    </li>
                  ))}
              </ul>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRegister}
              className="neo-button w-full bg-[rgb(var(--color-primary))] text-white text-xl font-bold hover:bg-[rgb(var(--color-primary))]/90"
            >
              Register Now
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EventDetails;
