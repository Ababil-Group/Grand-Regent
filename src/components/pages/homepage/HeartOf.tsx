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
              Located on Thamel Marg, Thamel-26, Kathmandu 44600, Nepal, our
              boutique hotel is nestled in the vibrant heart of Kathmandu’s most
              iconic neighborhood. Just a short stroll from bustling shops,
              cafés, cultural spots, and historic sites, it offers travelers the
              perfect launchpad to explore the city’s unique rhythm.
            </p>
            <p className="mb-7 text-lg font-medium text-secondary-gr">
              Thamel has long been known as the tourism hub of Kathmandu — a
              lively area where tradition and modernity meet. For decades, it
              has attracted travelers from around the world with its eclectic
              mix of local markets, rooftop restaurants, trekking gear shops,
              art galleries, and live music venues. Rooted in centuries of
              Newari culture yet open to global influences, Thamel represents
              the spirit of Nepal: warm, welcoming, and full of discovery.
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
