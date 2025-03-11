import { motion } from "framer-motion";
import ImageSlideshow from "./ImageSlideshow";
import ImageSlideshow2Line from "./ImageSlideshow2Line";

const Gallery = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 pattern-grid"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black mb-4 gradient-text">Gallery</h1>
          <p className="text-xl">Relive the moments from previous years</p>
        </div>

        <ImageSlideshow />
        <ImageSlideshow2Line />
      </div>
    </motion.div>
  );
};

export default Gallery;
