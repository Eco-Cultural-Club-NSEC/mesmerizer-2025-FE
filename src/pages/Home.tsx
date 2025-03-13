import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Star,
  Camera,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";
import { events } from "../data";
import Card from "../components/Card";
import Button from "../components/Button";
import EventCard from "../components/EventCard";
import ImageSlideshow2Line1 from "./ImageSlideshow2Line";
import Button2 from "../components/Button2";
// import Button3 from "../components/Button3";

const eventDate = new Date("2025-04-01");

const featuredEvents = events.slice(0, 3);

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section with Comic Pattern */}
      <section
        className="relative h-screen flex items-center justify-center hero-pattern max-md:h-auto max-md:pb-20"
        style={{
          backgroundImage:
            "url('/pics/Copy of Mesmerizer 2024 SB Final_III.pdf (32).svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-md:pt-[20vh]">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-8xl font-black mb-4 text-custom-white dark:text-white "
          >
            Mesmerizer'25
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-custom-white dark:text-white"
          >
            Where Culture Meets Creativity
          </motion.p>

          {/* Countdown Timer */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-sm:w-[80vw] mx-auto mb-8 text-white"
          >
            <div className="flex justify-center items-center">
              <div className="glass-box w-24 h-24 flex flex-col justify-center items-center">
                <span className="text-3xl">{timeLeft.days}</span>
                <span className="text-sm">DAYS</span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="glass-box w-24 h-24 flex flex-col justify-center items-center">
                <span className="text-3xl">{timeLeft.hours}</span>
                <span className="text-sm">HOURS</span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="glass-box w-24 h-24 flex flex-col justify-center items-center">
                <span className="text-3xl">{timeLeft.minutes}</span>
                <span className="text-sm">MINUTES</span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="glass-box w-24 h-24 flex flex-col justify-center items-center">
                <span className="text-3xl">{timeLeft.seconds}</span>
                <span className="text-sm">SECONDS</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="space-x-4 flex text-white justify-around max-sm:flex-col items-center max-sm:pr-4"
          >
            <Link to="/events" className="max-sm:ml-4">
              <Button className="">
                Explore Events <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/register" className="max-sm:ml-0 max-sm:mt-4">
              <Button className="">
                Register Now <Star className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="py-20 pattern-zigzag h-content md:h-screen flex items-center border-b-[20px] border-black"
        style={{
          backgroundImage: "url('/pics/Firefly 20250208005858.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card>
                <h2 className="text-4xl font-black mb-6 text-white">
                  About The Festival
                </h2>
                <p className="text-lg mb-6 text-custom-white">
                  CultFest '24 is more than just a festival - it's a celebration
                  of creativity, culture, and community. Join us for three days
                  of music, dance, art, and more as we bring together talented
                  individuals from across the country.
                </p>
                <div className="space-y-4 mb-8 text-custom-white">
                  <div className="flex items-center">
                    <Calendar className="mr-4" />
                    <div>
                      <h3 className="">Date</h3>
                      <p>April 15-17, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-4" />
                    <div>
                      <h3 className="">Venue</h3>
                      <p>University Campus</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-4" />
                    <div>
                      <h3 className="">Participants</h3>
                      <p>1000+ Students</p>
                    </div>
                  </div>
                </div>
                <Link to="/schedule" className="">
                  <Button className="">
                    View Schedule
                    <Calendar className="ml-2" />
                  </Button>
                </Link>
              </Card>
            </div>
            <Card>
              <img
                src="https://res.cloudinary.com/dzuj9tj3y/image/upload/v1741611111/mesmerizer/gallery_pic/lvvxktnnoh10znoqflza.jpg"
                alt=""
              />
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section
        className="py-20 pattern-bubbles h-content flex items-center text-white"
        style={{
          backgroundImage: "url('/pics/Firefly 20250210194301.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">Featured Events</h2>
            <p className="text-xl">Don't miss out on our flagship events</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <EventCard event={event} />
            ))}
          </div>
          <Link to="/events">
            <Button2 className="mt-12">All Events</Button2>
          </Link>
        </div>
      </section>

      {/* Gallery Glimpse */}
      <section
        className="py-20 pattern-circuit text-white"
        style={{
          backgroundImage:
            "url('/pics/Leonardo_Anime_XL_A_dark_apocalyptic_city_at_night_filled_with_1_enhanced.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-black mb-4">Gallery</h2>
            <p className="text-xl">Moments from previous editions</p>
          </div>

          <ImageSlideshow2Line1 />
          <Link to="/gallery" className="flex justify-center mt-8">
            <Button2 className="flex">
              View Full Gallery <Camera className="ml-2" />
            </Button2>
          </Link>
        </div>
      </section>

      {/* Sponsors */}
      {/* <section
        className="py-20 pattern-diagonal bg-fixed"
        style={{
          backgroundImage:
            "url('src/assets/pics/Copy of Mesmerizer 2024 SB Final_III.pdf (32).svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4 gradient-text">
              Our Sponsors
            </h2>
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
      </section> */}

      {/* Ready to Join */}
      <section
        className="py-20 pattern-comic text-white"
        style={{
          backgroundImage:
            "url('/pics/A_desolate_fogcovered_forest_at_night.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-4">Ready to Join the Fun?</h2>
          <p className="text-xl mb-8">
            Don't miss out on this incredible experience!
          </p>
          <Link to="/register" className="inline-flex items-center text-xl">
            <Button2 className="flex">
              Register Now <ArrowRight className="ml-2" />
            </Button2>
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
