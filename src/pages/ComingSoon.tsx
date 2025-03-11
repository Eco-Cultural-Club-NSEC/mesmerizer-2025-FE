import { useState, useEffect } from 'react';

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to April 1, 2025
    const targetDate = new Date('2025-03-20T00:00:00');
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };
    
    // Calculate initial time left
    calculateTimeLeft();
    
    // Set up interval to update every second
    const timer = setInterval(calculateTimeLeft, 1000);
    
    // Clean up interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-6 pt-24 font-mono relative">
      {/* Comic-style header with shadow effect */}
      <header className="flex justify-center mb-12 mt-6">
        <div className="bg-white p-6 rotate-1 border-8 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-center text-black transform -rotate-1">
            COMING
            <span className="block text-7xl md:text-8xl text-indigo-600 -mt-2 mb-2">SOON!</span>
          </h1>
        </div>
      </header>

      {/* Comic explosion for subtitle */}
      <div className="self-center bg-indigo-500 p-5 -rotate-3 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-10 transform hover:rotate-0 transition-transform">
        <h2 className="text-2xl md:text-3xl font-bold text-white transform rotate-3">EPIC ADVENTURE AWAITS</h2>
      </div>

      {/* Countdown container */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10">
        {[
          { label: 'DAYS', value: timeLeft.days },
          { label: 'HOURS', value: timeLeft.hours },
          { label: 'MINS', value: timeLeft.minutes },
          { label: 'SECS', value: timeLeft.seconds }
        ].map((item, index) => (
          <div key={index} className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-3 flex flex-col items-center transform hover:-translate-y-1 transition-transform">
            <span className="text-4xl md:text-5xl font-bold">{item.value}</span>
            <span className="text-sm md:text-lg font-bold">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Comic speech bubbles */}
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mb-10">
        <div className="relative bg-white p-4 border-4 border-black rounded-tr-3xl rounded-bl-3xl rounded-br-3xl max-w-xs shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="absolute -top-4 -left-4 w-6 h-6 bg-white border-4 border-black rounded-full"></div>
          <p className="font-bold">Our website is under construction but something AMAZING is coming!</p>
        </div>
        <div className="relative bg-indigo-400 p-4 border-4 border-black rounded-tl-3xl rounded-bl-3xl rounded-br-3xl max-w-xs shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="absolute -top-4 -right-4 w-6 h-6 bg-indigo-400 border-4 border-black rounded-full"></div>
          <p className="font-bold text-white">Get ready for our launch on March 20, 2025!</p>
        </div>
      </div>

      {/* Fixed position background decorations that won't interfere with content */}
      <div className="fixed top-24 right-5 text-5xl md:text-6xl transform rotate-12 opacity-70 z-0 text-indigo-600">✷</div>
      <div className="fixed bottom-32 left-5 text-5xl md:text-6xl transform -rotate-12 opacity-70 z-0 text-indigo-600">✷</div>
      <div className="fixed top-52 left-8 text-3xl md:text-4xl opacity-70 z-0 text-indigo-400">✦</div>
      <div className="fixed bottom-16 right-8 text-3xl md:text-4xl opacity-70 z-0 text-indigo-400">✦</div>
      
      {/* Add some comic-style dots for texture */}
      <div className="fixed top-1/3 right-1/4 w-12 h-12 bg-dots-pattern opacity-10"></div>
      <div className="fixed bottom-1/4 left-1/3 w-16 h-16 bg-dots-pattern opacity-10"></div>
      
      {/* Visual element indicating scrollable content */}
      <div className="absolute top-0 right-0 left-0 h-20 bg-gradient-to-b from-purple-100 to-transparent z-10"></div>
    </div>
  );
};

export default ComingSoon;