import Image from "next/image";

const HeartOf = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="mb-14 text-center text-5xl font-bold text-secondary-gr">
          At the Core of Kathmandu
        </h2>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-7 text-lg font-medium text-secondary-gr">
              Located at Rådhusgade 21, the Grand Regent is based in the heart
              of Odder, Denmark. Being just a short walk from the charming high
              street and the town center, this boutique hotel puts visitors
              within easy reach of the area’s activities and landmarks.
            </p>
            <p className="mb-7 text-lg font-medium text-secondary-gr">
              Odder has grown from a small market town founded in the 14th
              century into a thriving town of well-proportioned houses with a
              character that is traditional yet decidedly modern. Many shops,
              restaurants, and cultural attractions reflect the region&apos;s
              traditional trading history and artistic spirit. The Grand Regent
              serves as the perfect base for exploring the unique shopping
              opportunities and gastronomic delights of Odder, making it a
              valuable asset for tourists looking for a tranquil and adventurous
              getaway, respectively.
            </p>
          </div>
          <div>
            <Image
              className="h-auto w-full rounded-lg border-8 border-secondary-gr"
              src="/Homepage/At the Core of Oddre.jpg"
              alt="At the heart of Downtown Manama"
              height={500}
              width={750}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeartOf;
