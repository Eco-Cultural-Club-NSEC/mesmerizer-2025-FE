import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const teamCategories = [
  {
    id: 'core',
    name: 'Core Team',
    members: [
      {
        id: '1',
        name: 'Alex Rivera',
        role: 'Festival Director',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
        social: {
          instagram: 'alexrivera',
          linkedin: 'alexrivera',
          twitter: 'alexrivera',
        },
      },
      // Add more core team members
    ],
  },
  {
    id: 'tech',
    name: 'Technical Team',
    members: [
      {
        id: '2',
        name: 'Sarah Chen',
        role: 'Technical Head',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
        social: {
          linkedin: 'sarahchen',
          twitter: 'sarahchen',
        },
      },
      // Add more tech team members
    ],
  },
  {
    id: 'cultural',
    name: 'Cultural Team',
    members: [
      {
        id: '3',
        name: 'Michael Brown',
        role: 'Cultural Head',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
        social: {
          instagram: 'michaelbrown',
          linkedin: 'michaelbrown',
        },
      },
      // Add more cultural team members
    ],
  },
  {
    id: 'outreach',
    name: 'Outreach Team',
    members: [
      {
        id: '4',
        name: 'Emma Wilson',
        role: 'PR Head',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
        social: {
          instagram: 'emmawilson',
          linkedin: 'emmawilson',
          twitter: 'emmawilson',
        },
      },
      // Add more outreach team members
    ],
  },
];

const Team = () => {
  const [activeCategory, setActiveCategory] = useState('core');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 team-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black mb-4 gradient-text">Our Team</h1>
          <p className="text-xl">Meet the amazing people behind CultFest '24</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {teamCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`neo-button ${
                activeCategory === category.id
                  ? 'bg-[rgb(var(--color-primary))] text-white'
                  : ''
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Team Members Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamCategories
            .find((category) => category.id === activeCategory)
            ?.members.map((member) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="neo-card"
              >
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto overflow-hidden border-4 border-black dark:border-white rounded-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[rgb(var(--color-secondary))] text-black px-4 py-1 rounded-full font-bold">
                    {member.role}
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">{member.name}</h3>
                  
                  <div className="flex justify-center space-x-4">
                    {member.social.instagram && (
                      <a
                        href={`https://instagram.com/${member.social.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 neo-button hover:bg-[rgb(var(--color-primary))] hover:text-white"
                      >
                        <Instagram />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={`https://linkedin.com/in/${member.social.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 neo-button hover:bg-[rgb(var(--color-primary))] hover:text-white"
                      >
                        <Linkedin />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={`https://twitter.com/${member.social.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 neo-button hover:bg-[rgb(var(--color-primary))] hover:text-white"
                      >
                        <Twitter />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Team;