import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users } from 'lucide-react';
import { events } from '../data';

// const categories = Array.from(new Set(events.map(event => event.category)));

const Events = () => {
//   const [selectedCategory, setSelectedCategory] = useState<string>('all');

//   const filteredEvents = selectedCategory === 'all'
//     ? events
//     : events.filter(event => event.category === selectedCategory);
// console.log(filteredEvents);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 events-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black mb-4 gradient-text">Events</h1>
          <p className="text-xl">Discover our exciting lineup of events</p>
        </div>

        {/* Filters */}
        {/* <div className="mb-8">
          <div className="flex items-center justify-center space-x-4 flex-wrap">
            <Filter className="mr-2" />
            <button
              onClick={() => setSelectedCategory('all')}
              className={`neo-button ${selectedCategory === 'all' ? 'bg-[rgb(var(--color-primary))] text-white' : ''}`}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`neo-button ${selectedCategory === category ? 'bg-[rgb(var(--color-primary))] text-white' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div> */}

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map(event => (
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
                {/* <div className="absolute top-2 right-2 bg-white dark:bg-zinc-800 px-3 py-1 border-2 border-black dark:border-white">
                  {event.category}
                </div> */}
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
              {/* <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p> */}
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-[rgb(var(--color-primary))]" />
                  <span>{event.date} at {event.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-[rgb(var(--color-secondary))]" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-[rgb(var(--color-accent))]" />
                  <span>Team: min {event.teamSize.min} & max {event.teamSize.max} members</span>
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