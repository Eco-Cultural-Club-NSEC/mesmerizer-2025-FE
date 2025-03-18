import { useState, useEffect, useMemo } from "react";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Star,
  Camera,
} from "lucide-react";
import { Link } from "react-router-dom";
import { events } from "../data";
import Card from "../components/Card";
import Button from "../components/Button";
import EventCard from "../components/EventCard";
import ImageSlideshow2Line from "../components/ImageSlideshow2Line";
import Button2 from "../components/Button2";

const eventDate = new Date("2025-04-03").getTime();

const featuredEvents = events.slice(0, 3);

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Memoize the countdown calculation
  const calculateTimeLeft = useMemo(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  }, []);

  useEffect(() => {
    // Initial calculation
    setTimeLeft(calculateTimeLeft);

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft((prev) => ({
        ...prev,
        seconds: prev.seconds === 0 ? 59 : prev.seconds - 1,
        minutes:
          prev.seconds === 0
            ? prev.minutes === 0
              ? 59
              : prev.minutes - 1
            : prev.minutes,
        hours:
          prev.minutes === 0 && prev.seconds === 0
            ? prev.hours === 0
              ? 23
              : prev.hours - 1
            : prev.hours,
        days:
          prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0
            ? prev.days - 1
            : prev.days,
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <main>
      {/* Hero Section with Comic Pattern */}
      <section
        className="relative h-screen flex items-center justify-center hero-pattern max-md:h-auto max-md:pb-20 border-b-[10px] border-black"
        style={{
          backgroundImage: "url('/pics/Main_Theme_Hero.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-md:pt-[20vh]">
          <div className="text-5xl sm:text-6xl md:text-8xl font-black mb-4 text-custom-white dark:text-white ">
            Mesmerizer'25
          </div>

          <div className="text-xl md:text-2xl mb-8 text-custom-white dark:text-white">
            Where Culture Meets Creativity
          </div>

          {/* Countdown Timer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-sm:w-[80vw] mx-auto mb-8 text-white">
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
          </div>
          {/* </motion.div> */}

          <div className="space-x-4 flex text-white justify-around max-sm:flex-col items-center max-sm:pr-4">
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
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="py-20 pattern-zigzag h-content md:h-screen flex items-center border-b-[10px] border-black"
        style={{
          backgroundImage: "url('/pics/About_us.webp')",
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
                  Mesmerizer is more than just a festival - it's a celebration
                  of creativity, culture, and community. Join us for two days
                  of music, dance, art, and more as we bring together talented
                  individuals from across the country.
                </p>
                <div className="space-y-4 mb-8 text-custom-white">
                  <div className="flex items-center">
                    <Calendar className="mr-4" />
                    <div>
                      <h3 className="">Date</h3>
                      <p>April 3-4, 2025</p>
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
                src="https://res.cloudinary.com/dzuj9tj3y/image/upload/v1742223578/mesmerizer/webp/ykfj4o2u0v61nnndo50h.webp"
                alt=""
              />
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section
        className="py-20 pattern-bubbles h-content flex items-center text-white  border-b-[10px] border-black"
        style={{
          backgroundImage: "url('/pics/Events.webp')",
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
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <Link to="/events">
            <Button2 className="mt-12">All Events</Button2>
          </Link>
        </div>
      </section>

      {/* Gallery Glimpse */}
      <section className="relative py-20 pattern-circuit text-white  border-b-[10px] border-black transition-opacity duration-500 ease-in-out">
        {/* Background with overlay */}
        <div
          className="absolute inset-0 before:absolute before:inset-0 before:bg-black before:opacity-50 before:z-0"
          style={{
            backgroundImage: "url('/pics/Gallery.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="relative z-10 w-full">
          <div className="text-center">
            <h2 className="text-4xl font-black mb-4">Gallery</h2>
            <p className="text-xl">Moments from previous editions</p>
          </div>

          <ImageSlideshow2Line />
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
              // <motion.div
              //   key={sponsor.id}
              //   whileHover={{ scale: 1.05 }}
              //   className="neo-card flex items-center justify-center p-8"
              // >
              <div className="neo-card flex items-center justify-center p-8">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-16 w-auto"
                />
              </div>
              // </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Ready to Join */}
      <section className="relative py-20 pattern-comic text-white  border-b-[10px] border-black">
        {/* Background with overlay */}
        <div
          className="absolute inset-0 before:absolute before:inset-0 before:bg-black before:opacity-40 before:z-0"
          style={{
            backgroundImage: "url('/pics/Register_Now.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
    </main>
  );
};

export default Home;
