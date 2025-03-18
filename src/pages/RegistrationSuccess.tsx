import { Link } from "react-router-dom";
import { CheckCircle, Home, Calendar, Share2 } from "lucide-react";
import Button2 from "../components/Button2";

const RegistrationSuccess = () => {
  const handleShare = async () => {
    try {
      await navigator.share({
        title: "Mesmerizer 2025",
        text: "I just registered for Mesmerizer 2025! Join me for this amazing cultural fest!",
        url: window.location.origin,
      });
    } catch (error) {
      console.log("Sharing failed", error);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div
        className="fixed inset-0 before:absolute before:inset-0 before:bg-black before:opacity-50"
        style={{
          backgroundImage: "url('/pics/Register_Now.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-2xl w-full pt-20">
        <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl">
          {/* Success Icon with Animation */}
          <div className="mb-8 transform animate-bounce">
            <CheckCircle className="w-24 h-24 mx-auto text-green-400" />
          </div>

          {/* Success Message */}
          <h1 className="text-4xl font-black mb-4 bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
            We got your registration!
          </h1>

          <p className="text-xl mb-8 text-gray-200">
            Your registration is under review. We will get back to you soon.
          </p>

          {/* Event Details Card */}
          <div className="bg-white/5 rounded-xl p-6 mb-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4">Event Details</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="text-green-400" />
                <span>April 3-4, 2025</span>
              </div>
              <p className="text-sm text-gray-300">
                Check your email for the confirmation and further details.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/">
              <Button2 className="w-full sm:w-auto flex items-center justify-center">
                <Home className="mr-2" /> Back to Home
              </Button2>
            </Link>
            <Button2
              onClick={handleShare}
              className="w-full sm:w-auto flex items-center justify-center"
            >
              <Share2 className="mr-2" /> Share
            </Button2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegistrationSuccess;
