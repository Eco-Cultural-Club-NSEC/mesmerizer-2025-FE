import { Link } from "react-router-dom";
import { Event } from "../types";
import Card from "./Card";
import { Calendar, MapPin, Users } from "lucide-react";
import Button2 from "./Button2";

interface EventCardProp {
  cardClassName?: string;
  event: Event;
}

const EventCard = ({ cardClassName, event }: EventCardProp) => {
  return (
    <Card className={cardClassName}>
      <div className="group">
        <div className="relative mb-4 overflow-hidden border border-white/50">
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
          <Button2 className="w-full">View Details</Button2>
        </Link>
      </div>
    </Card>
  );
};

export default EventCard;
