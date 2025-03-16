import React from "react";
// import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Card from "../components/Card";
// import Button from "../components/Button";
import Button2 from "../components/Button2";
import SocialMediaButtons from "../components/SocialMediaButtons";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="pt-24 pb-16 contact-pattern text-white">
      <div
        className="h-screen w-full fixed left-0 bg-cover bg-center inset-0 before:fixed before:inset-0 before:bg-black before:opacity-20 before:z-0"
        style={{
          backgroundImage: 'url("/pics/Contact.webp")',
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch with the CultFest team</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="hover:shadow-none">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block  mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter Name"
                    className="w-full p-4 bg-transparent border-2 border-white/50 rounded-lg focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block  mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Email"
                    className="w-full p-4 bg-transparent border-2 border-white/50 rounded-lg focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block  mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Enter Subject"
                    className="w-full p-4 bg-transparent border-2 border-white/50 rounded-lg focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block  mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Enter Message"
                    className="w-full p-4 bg-transparent border-2 border-white/50 rounded-lg focus:outline-none"
                    required
                  ></textarea>
                </div>
                <Button2 type="submit" className="w-full">
                  Send Message
                </Button2>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="hover:shadow-none">
              <h2 className="text-2xl  mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-4 text-purple-500" />
                  <div>
                    <h3 className="">Email</h3>
                    <a
                      href="mailto:contact@cultfest.com"
                      className="hover:text-[rgb(var(--color-primary))]"
                    >
                      contact@cultfest.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-4 text-rose-300" />
                  <div>
                    <h3 className="">Phone</h3>
                    <a
                      href="tel:+1234567890"
                      className="hover:text-[rgb(var(--color-secondary))]"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-4 text-green-300" />
                  <div>
                    <h3 className="">Address</h3>
                    <p>Netaji Subhash Engineering College</p>
                    <p>Kolkata, West Bengal</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="hover:shadow-none">
              <h2 className="text-2xl">Follow Us</h2>
              <SocialMediaButtons />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
