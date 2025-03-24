import { Calendar, Clock, MapPin, Star } from "lucide-react";
import { events } from "../data.ts";
import Card from "../components/Card.tsx";
import { AttractionCard } from "../components/AttractionCard.tsx";
import { Link } from "react-router-dom";
import Button2 from "../components/Button2.tsx";

const days = new Set(events.map((event) => event.date));

const getDayName = (dateStr: string): string => {
  // Convert "dd-mm-yyyy" to "yyyy-mm-dd" for Date object
  const [day, month, year] = dateStr.split("-");
  const date = new Date(`${year}-${month}-${day}`);
  return date.toLocaleDateString("en-US", { weekday: "long" });
};

const Schedule = () => {
  return (
    <section className="pt-24 pb-16 pattern-diagonal text-white">
      <div
        className="h-screen w-full fixed left-0 bg-cover bg-center inset-0 before:fixed before:inset-0 before:bg-black before:opacity-20 before:z-0 transition-opacity duration-500 ease-in-out"
        style={{
          backgroundImage: 'url("/pics/Contact.webp")',
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4">Event Schedule</h1>
          <p className="text-xl">Two days of non-stop entertainment</p>
        </div>

        <div className="space-y-12">
          {[...days].map((day, dayIndex) => (
            <div key={dayIndex} className="section-pattern-2">
              <h2 className="text-3xl  mb-6 flex items-center">
                <Calendar className="mr-2 text-[rgb(var(--color-primary))]" />
                {day} {getDayName(day)}
              </h2>
              <div className="space-y-6">
                {events
                  .filter((event) => event.date === day)
                  .map((event) => (
                    <Card
                      key={event.id}
                      className={`flex flex-col md:flex-row md:items-center p-6 hover:shadow-none`}
                    >
                      <div className="flex items-center mb-4 md:mb-0 md:w-1/4">
                        <Clock className={`mr-2 text-violet-500`} />
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
                        <MapPin className="mr-2 text-green-300" />
                        <span>{event.location}</span>
                      </div>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
          <AttractionCard
            attractionName="Band Performance"
            attractionLocation="Boys Common Room"
            attractionTime="6th April Afternoon"
            artistOrBand="Band: Reveal Soon"
          />
        </div>
        <div className="space-x-4 flex text-white justify-center max-sm:flex-col items-center max-sm:pr-4 mt-8">
          <Link
            to="https://drive.google.com/uc?export=download&id=11JmHZi8RXzqSfOCJazaLboNKyxdvLKxo"
            className="max-sm:ml-4 max-sm:w-full"
          >
            <Button2 className="max-sm:w-full">Download Brochure</Button2>
          </Link>
          <Link to="/events" className="max-sm:ml-0 max-sm:mt-4 max-sm:w-full">
            <Button2 className="px-8 max-sm:w-full">All Events</Button2>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
