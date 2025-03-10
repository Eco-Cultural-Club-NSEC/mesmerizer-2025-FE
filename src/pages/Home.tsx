import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Users, Star, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';
import { events, sponsors } from '../data';

const eventDate = new Date('2024-04-15');

const featuredEvents = events.slice(0, 3); // Get first 3 events as featured
const galleryImages = [
  'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4',
  'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30',
];

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTimeLeft({
        days: differenceInDays(eventDate, now),
        hours: differenceInHours(eventDate, now) % 24,
        minutes: differenceInMinutes(eventDate, now) % 60,
        seconds: differenceInSeconds(eventDate, now) % 60,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section with Comic Pattern */}
      <section className="relative h-screen flex items-center justify-center hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-black mb-4 text-black dark:text-white mix-blend-difference"
          >
            CULTFEST '24
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-black dark:text-white mix-blend-difference"
          >
            Where Culture Meets Creativity
          </motion.p>
          
          {/* Countdown Timer */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8"
          >
            <div className="neo-card bg-white/90">
              <div className="text-4xl font-bold">{timeLeft.days}</div>
              <div className="text-sm">Days</div>
            </div>
            <div className="neo-card bg-white/90">
              <div className="text-4xl font-bold">{timeLeft.hours}</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="neo-card bg-white/90">
              <div className="text-4xl font-bold">{timeLeft.minutes}</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="neo-card bg-white/90">
              <div className="text-4xl font-bold">{timeLeft.seconds}</div>
              <div className="text-sm">Seconds</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="space-x-4"
          >
            <Link to="/events" className="neo-button-primary inline-flex items-center">
              Explore Events <ArrowRight className="ml-2" />
            </Link>
            <Link to="/register" className="neo-button-secondary inline-flex items-center">
              Register Now <Star className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 pattern-zigzag">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6 gradient-text">About The Festival</h2>
              <p className="text-lg mb-6">
                CultFest '24 is more than just a festival - it's a celebration of creativity,
                culture, and community. Join us for three days of music, dance, art, and more
                as we bring together talented individuals from across the country.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Calendar className="mr-4 text-[rgb(var(--color-primary))]" />
                  <div>
                    <h3 className="font-bold">Date</h3>
                    <p>April 15-17, 2024</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-4 text-[rgb(var(--color-secondary))]" />
                  <div>
                    <h3 className="font-bold">Venue</h3>
                    <p>University Campus</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="mr-4 text-[rgb(var(--color-accent))]" />
                  <div>
                    <h3 className="font-bold">Participants</h3>
                    <p>1000+ Students</p>
                  </div>
                </div>
              </div>
              <Link to="/schedule" className="neo-button-accent inline-flex items-center">
                View Schedule <Calendar className="ml-2" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
                alt="Festival Atmosphere"
                className="rounded-lg neo-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 pattern-bubbles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4 gradient-text">Featured Events</h2>
            <p className="text-xl">Don't miss out on our flagship events</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <motion.div
                key={event.id}
                whileHover={{ y: -10 }}
                className="neo-card overflow-hidden"
              >
                <div className="relative h-48 mb-4">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-[rgb(var(--color-secondary))] px-3 py-1 text-black font-bold rounded-full">
                    {event.category}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                <p className="mb-4">{event.description}</p>
                <Link
                  to={`/events/${event.id}`}
                  className="neo-button-primary w-full text-center inline-block"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Glimpse */}
      <section className="py-20 pattern-circuit">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4 gradient-text">Gallery</h2>
            <p className="text-xl">Moments from previous editions</p>
          </div>

          <div className="relative">
            <div className="relative h-[400px] neo-card overflow-hidden">
              <motion.img
                key={currentImage}
                src={galleryImages[currentImage]}
                alt="Gallery"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 neo-button"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={() => setCurrentImage((prev) => (prev + 1) % galleryImages.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 neo-button"
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/gallery" className="neo-button inline-flex items-center">
              View Full Gallery <Camera className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-20 pattern-diagonal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4 gradient-text">Our Sponsors</h2>
            <p className="text-xl">Proudly supported by</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sponsors.map((sponsor) => (
              <motion.div
                key={sponsor.id}
                whileHover={{ scale: 1.05 }}
                className="neo-card flex items-center justify-center p-8"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-16 w-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Join */}
      <section className="py-20 pattern-comic">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-4 gradient-text">Ready to Join the Fun?</h2>
          <p className="text-xl mb-8">Don't miss out on this incredible experience!</p>
          <Link to="/register" className="neo-button-primary inline-flex items-center text-xl">
            Register Now <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;