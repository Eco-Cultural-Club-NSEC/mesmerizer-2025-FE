import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-zinc-900 border-t-4 border-black dark:border-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-black">
              CULTFEST '24
            </Link>
            <p className="mt-4">
              Where Culture Meets Creativity. Join us for three days of music,
              dance, art, and more at the biggest cultural festival of the year.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://instagram.com/cultfest"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-button p-2"
              >
                <Instagram />
              </a>
              <a
                href="https://twitter.com/cultfest"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-button p-2"
              >
                <Twitter />
              </a>
              <a
                href="https://facebook.com/cultfest"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-button p-2"
              >
                <Facebook />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/events" className="hover:text-rgb(var(--color-primary))">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-rgb(var(--color-primary))">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-rgb(var(--color-primary))">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-rgb(var(--color-primary))">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>University Campus</li>
              <li>123 College Road</li>
              <li>City, State 12345</li>
              <li>
                <a href="mailto:contact@cultfest.com" className="hover:text-rgb(var(--color-primary))">
                  contact@cultfest.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-rgb(var(--color-primary))">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t-2 border-black dark:border-white text-center">
          <p>&copy; 2024 CultFest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;