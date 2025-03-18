import { Link } from "react-router-dom";
import { XCircle, Home, RefreshCw, MessageCircle } from "lucide-react";
import Button2 from "../components/Button2";

const RegistrationFailure = () => {
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
          {/* Error Icon with Animation */}
          <div className="mb-8 animate-pulse">
            <XCircle className="w-24 h-24 mx-auto text-red-400" />
          </div>

          {/* Error Message */}
          <h1 className="text-4xl font-black mb-4 bg-gradient-to-r from-red-400 to-rose-500 text-transparent bg-clip-text">
            Registration Failed
          </h1>

          <p className="text-xl mb-8 text-gray-200">
            Oops! Something went wrong during registration.
          </p>

          {/* Error Details Card */}
          <div className="bg-white/5 rounded-xl p-6 mb-8 backdrop-blur-sm">
            <h2 className="text-2xl mb-4">What Next?</h2>
            <div className="space-y-4 text-gray-300">
              <p>Don't worry! Here are a few things you can try:</p>
              <ul className="list-disc list-inside text-left space-y-2">
                <li>Duplicate transaction id not allowed</li>
                <li>Check your email correctly</li>
                <li>Verify your form details</li>
                <li>Check your internet connection</li>
                <li>Try registering again in a few minutes</li>
                <li>Contact support if the issue persists</li>
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <Button2 className="w-full sm:w-auto flex items-center justify-center">
                <RefreshCw className="mr-2" /> Try Again
              </Button2>
            </Link>
            <Link to="/">
              <Button2 className="w-full sm:w-auto flex items-center justify-center">
                <Home className="mr-2" /> Back to Home
              </Button2>
            </Link>
            <Link to="/contact">
              <Button2 className="w-full sm:w-auto flex items-center justify-center">
                <MessageCircle className="mr-2" /> Contact Support
              </Button2>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegistrationFailure;
