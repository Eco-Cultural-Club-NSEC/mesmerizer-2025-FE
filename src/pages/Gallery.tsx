import ImageSlideshow from "../components/ImageSlideshow";
import ImageSlideshow2Line from "../components/ImageSlideshow2Line";
const Gallery = () => {
  return (
    <section className="pt-24 pb-16 max-sm:pb-8 pattern-grid text-white">
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
  );
};

export default Gallery;
