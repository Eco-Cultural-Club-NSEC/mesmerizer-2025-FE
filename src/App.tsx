import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Team from "./pages/Team";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Schedule from "./pages/Schedule";
import Registration from "./pages/Registration";
import Footer from "./components/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        {/* <Navbar /> */}
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<ComingSoon />} />
            <Route path="/events" element={<ComingSoon />} />
            <Route path="/events/:id" element={<ComingSoon />} />
            <Route path="/team" element={<ComingSoon />} />
            <Route path="/gallery" element={<ComingSoon />} />
            <Route path="/contact" element={<ComingSoon />} />
            <Route path="/schedule" element={<ComingSoon />} />
            <Route path="/register" element={<ComingSoon />} />
          </Routes>
        </AnimatePresence>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
