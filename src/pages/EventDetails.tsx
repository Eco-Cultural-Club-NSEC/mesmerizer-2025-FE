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
import Button2 from "../components/Button2";
import Card from "../components/Card";

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
        <h1 className="text-4xl mb-4">Event not found</h1>
        <Link to="/events" className="inline-flex items-center">
          <ArrowLeft className="mr-2" /> Back to Events
        </Link>
      </div>
    );
  }

  return (
    <section className="pt-24 pb-16">
      <div
        className="h-screen w-full fixed top-0 left-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/pics/Events.webp")',
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link to="/events" className="inline-flex items-center mb-8">
          <Button2 className="flex items-center justify-center">
            <ArrowLeft className="mr-2" /> Back to Events
          </Button2>
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Card className="overflow-hidden hover:shadow-none">
              <img
                src={event.image as string}
                alt={event.title}
                className="w-full h-96 object-cover border border-white/50"
              />
            </Card>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="transition-transform duration-200 hover:-translate-y-1">
                <Card className="hover:shadow-none">
                  <div className="flex items-center">
                    <Clock className="mr-4 text-[rgb(var(--color-primary))]" />
                    <div>
                      <h3 className="text-lg">Time</h3>
                      <p>{event.time}</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="transition-transform duration-200 hover:-translate-y-1">
                <Card className="hover:shadow-none">
                  <div className="flex items-center">
                    <MapPin className="mr-4 text-[rgb(var(--color-secondary))]" />
                    <div>
                      <h3 className="text-lg">Venue</h3>
                      <p>{event.location}</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="transition-transform duration-200 hover:-translate-y-1">
                <Card className="hover:shadow-none">
                  <div className="flex items-center">
                    <Calendar className="mr-4 text-[rgb(var(--color-accent))]" />
                    <div>
                      <h3 className="text-lg">Date</h3>
                      <p>{event.date}</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="transition-transform duration-200 hover:-translate-y-1">
                <Card className="hover:shadow-none">
                  <div className="flex items-center">
                    <Users className="mr-4 text-[rgb(var(--color-purple))]" />
                    <div>
                      <h3 className="text-lg">Team Size</h3>
                      <p>
                        min {event.teamSize.min} & max {event.teamSize.max}{" "}
                        members
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="transition-transform duration-200 hover:-translate-y-1">
                <Card className="hover:shadow-none">
                  <div className="flex items-center">
                    <BadgeIndianRupee className="mr-4 text-[rgb(var(--color-indigo))]" />
                    <div>
                      <h3 className="">Entry Fees</h3>
                      <p>{event.entryFees}</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="transition-transform duration-200 hover:-translate-y-1">
                <Card className="hover:shadow-none">
                  <div className="flex items-center">
                    <ScanLine className="mr-4 text-[rgb(var(--color-orange))]" />
                    <div>
                      <h3 className="text-lg">Event Code</h3>
                      <p>{event.code}</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          <div className="space-y-8 text-white">
            <h1 className="text-5xl mb-4">{event.title}</h1>
            <Card className="hover:shadow-none">
              <h2 className="text-2xl mb-4 flex items-center">
                <Award className="mr-2 text-[rgb(var(--color-primary))]" />
                Event Description
              </h2>
              <p className="text-lg leading-relaxed">{event.tagline}</p>
            </Card>
            <Card className="hover:shadow-none">
              <h2 className="text-2xl mb-4 font flex items-center">
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
            </Card>
            <Card className="hover:shadow-none">
              <h2 className="text-2xl mb-4 flex items-center">
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
            </Card>
            <Button2 onClick={handleRegister} className="w-full">
              Register Now
            </Button2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
