import { aboutGalleryImages } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Grand Regent | Gallery",
};

const GalleryPage = () => {
  return (
    <main className="py-40">
      <h1 className="mb-14 text-center text-5xl font-bold text-secondary-gr">
        GALLERY
      </h1>

      <section className="">
        <div className="columns-1 gap-0 sm:columns-2 lg:columns-3 xl:columns-4">
          {aboutGalleryImages.map((image, i) => (
            <div className="overflow-hidden" key={i}>
              <Image
                className="h-auto w-full duration-500 hover:scale-110"
                src={image}
                alt="Gallery"
                width={300}
                height={500}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default GalleryPage;
