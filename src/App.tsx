import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import Fallback from "./components/Fallback";
import ErrorBoundary from "./utils/errorBoundary";
// import ComingSoon from "./pages/ComingSoon";

// Lazy load all major components
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const Home = lazy(() => import("./pages/Home"));
const Events = lazy(() => import("./pages/Events"));
const EventDetails = lazy(() => import("./pages/EventDetails"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const Schedule = lazy(() => import("./pages/Schedule"));
const Registration = lazy(() => import("./pages/Registration"));
// const ComingSoon = lazy(() => import("./pages/ComingSoon"));

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Suspense fallback={<Fallback />}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/:id" element={<EventDetails />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/register" element={<Registration />} />
            </Routes>
            <Footer />
          </Suspense>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
