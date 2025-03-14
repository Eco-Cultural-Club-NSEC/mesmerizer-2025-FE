// import { motion } from "framer-motion";
import ImageSlideshow from "./ImageSlideshow";
import ImageSlideshow2Line from "./ImageSlideshow2Line";

const Gallery = () => {
  return (
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    //   className="pt-24 pb-16 pattern-grid"
    // >
    <section className="pt-24 pb-16 max-sm:pb-8 pattern-grid text-white">
      {/* <div
        className="absolute inset-0 before:absolute before:inset-0 before:bg-black before:opacity-30 before:z-0"
        style={{
          backgroundImage: "url('/pics/Gallery.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div> */}
      <div
        className="h-screen w-full fixed left-0 bg-cover bg-center inset-0 before:fixed before:inset-0 before:bg-black before:opacity-50 before:z-0"
        style={{
          backgroundImage: 'url("/pics/Gallery.webp")',
        }}
      ></div>
      <div className="w-full relative z-10">
        <div className="text-center mb-16 md:mb-20 mt-10 z-50">
          <h1 className="text-5xl font-black mb-4">Gallery</h1>
          <p className="text-xl">Relive the moments from previous years</p>
        </div>

        <ImageSlideshow className="px-4 sm:px-6 lg:px-8 max-sm:h-[100dvw] " />
        <ImageSlideshow2Line className="mt-32 max-sm:mt-12" />
      </div>
    </section>
    // </motion.div>
  );
};

export default Gallery;
