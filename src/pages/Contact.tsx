import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 contact-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black mb-4 gradient-text">Contact Us</h1>
          <p className="text-xl">Get in touch with the CultFest team</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="neo-card space-y-6">
              <div>
                <label htmlFor="name" className="block font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="neo-input"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="neo-input"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block font-bold mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="neo-input"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="neo-input"
                  required
                ></textarea>
              </div>
              <button type="submit" className="neo-button w-full bg-black text-white dark:bg-white dark:text-black">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="neo-card">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-4 text-[rgb(var(--color-primary))]" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <a href="mailto:contact@cultfest.com" className="hover:text-[rgb(var(--color-primary))]">
                      contact@cultfest.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-4 text-[rgb(var(--color-secondary))]" />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <a href="tel:+1234567890" className="hover:text-[rgb(var(--color-secondary))]">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-4 text-[rgb(var(--color-accent))]" />
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p>University Campus, 123 College Road</p>
                    <p>City, State 12345</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="neo-card">
              <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/cultfest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-button p-3 hover:bg-[rgb(var(--color-primary))] hover:text-white"
                >
                  <Instagram />
                </a>
                <a
                  href="https://twitter.com/cultfest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-button p-3 hover:bg-[rgb(var(--color-secondary))] hover:text-white"
                >
                  <Twitter />
                </a>
                <a
                  href="https://facebook.com/cultfest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-button p-3 hover:bg-[rgb(var(--color-accent))] hover:text-white"
                >
                  <Facebook />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;