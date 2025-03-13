import { Link } from "react-router-dom";
import { Event } from "../types";
import Card from "./Card";
import { motion } from "framer-motion";
import Button from "./Button";
import { Calendar, MapPin, Users } from "lucide-react";

interface EventCardProp {
  cardClassName?: string;
  event: Event;
}

const EventCard = ({ cardClassName, event }: EventCardProp) => {
  return (
    <Card className={cardClassName}>
      <motion.div
        key={event.id}
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="group"
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
              Team: min {event.teamSize.min} & max {event.teamSize.max} members
            </span>
          </div>
        </div>

        <Link
          to={`/events/${event.id}`}
          className="inline-block w-full text-center"
        >
          <Button className="w-full">View Details</Button>
        </Link>
      </motion.div>
    </Card>
  );
};

export default EventCard;
