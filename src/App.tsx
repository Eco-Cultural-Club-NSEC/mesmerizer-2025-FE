import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
// import { AnimatePresence } from "framer-motion";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Events from "./pages/Events";
// import EventDetails from "./pages/EventDetails";
// import Team from "./pages/Team";
// import Gallery from "./pages/Gallery";
// import Contact from "./pages/Contact";
// import Schedule from "./pages/Schedule";
// import Registration from "./pages/Registration";
// import Footer from "./components/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import Fallback from "./components/Fallback";
// import ComingSoon from "./pages/ComingSoon";

const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./pages/Home"));
const Events = lazy(() => import("./pages/Events"));
const EventDetails = lazy(() => import("./pages/EventDetails"));
// const Team = lazy(() => import("./pages/Team"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const Schedule = lazy(() => import("./pages/Schedule"));
const Registration = lazy(() => import("./pages/Registration"));
const Footer = lazy(() => import("./components/Footer"));
// const ComingSoon = lazy(() => import("./pages/ComingSoon"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Fallback />}>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          {/* <AnimatePresence mode="wait"> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetails />} />
            {/* <Route path="/team" element={<ComingSoon />} /> */}
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/register" element={<Registration />} />
          </Routes>
          {/* </AnimatePresence> */}
          <Footer />
        </div>
        <Toaster position="bottom-right" richColors />
      </Suspense>
    </Router>
  );
}

export default App;
