import { events } from "../data";
import EventCard from "../components/EventCard";

const Events = () => {
  return (
    <section className="pt-24 pb-16 events-pattern text-white">
      <div
        className="h-screen w-full fixed top-0 left-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/pics/Events.webp")',
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4">Events</h1>
          <p className="text-xl">Discover our exciting lineup of events</p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
