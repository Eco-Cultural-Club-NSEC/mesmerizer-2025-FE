import { Link } from "react-router-dom";
import Card from "./Card";
import SocialMediaButtons from "./SocialMediaButtons";

const Footer = () => {
  return (
    <footer
      className="mt-auto text-white"
      style={{
        backgroundImage: "url('/pics/Footer.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <Card className="border-0 hover:shadow-none justify-around px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="text-3xl">
                MESMERIZER'25
              </Link>{" "}
              <p className="mt-4">
                Where Culture Meets Creativity. Join us for two days of music,
                dance, art, and more at the biggest cultural festival of the
                year.
              </p>
              <div>
                <SocialMediaButtons />
              </div>
            </div>

            <div>
              <h3 className="text-xl mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/events"
                    className="hover:text-rgb(var(--color-primary))"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team"
                    className="hover:text-rgb(var(--color-primary))"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="hover:text-rgb(var(--color-primary))"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-rgb(var(--color-primary))"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>Netaji Subhash Engineering College</li>
                <li>Kolkata, 700152</li>
                <li>
                  <a
                    href="mailto:contact@cultfest.com"
                    className="hover:text-rgb(var(--color-primary))"
                  >
                    contact@cultfest.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+1234567890"
                    className="hover:text-rgb(var(--color-primary))"
                  >
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t-2 border-white text-center">
            <p>2025 MESMERIZER. ECO-CULTURAL CLUB, NSEC, KOLKATA.</p>
          </div>
        </Card>
      </div>
    </footer>
  );
};

export default Footer;
