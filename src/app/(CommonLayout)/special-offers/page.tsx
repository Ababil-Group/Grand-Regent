import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grand Regent | Special Offers",
};

const SpecialOffersPage = () => {
  return (
    <main>
      <section className="bg-promotion-bg bg-cover bg-center bg-no-repeat">
        <div className="container flex min-h-[610px] items-center justify-center">
          <h1 className="mb-14 text-center text-5xl font-bold text-white">
            Special Offers
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container space-y-5">
          <p className="text-center text-lg font-medium text-secondary-gr">
            Experience the essence of Odder at Grand Regent, where you can take
            advantage of all the amenities this top-notch boutique hotel
            provides.
          </p>
          <p className="text-center text-lg font-medium text-secondary-gr">
            Check out our latest special deals!
          </p>
        </div>
      </section>

      <section className="">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-20">
            <h3 className="mb-7 text-center text-4xl font-semibold text-secondary-gr">
              Escape the Winter Chill in Luxury at Grand Regent
            </h3>
            <p className="mb-7 text-center text-lg font-medium text-secondary-gr">
              Create unforgettable memories this winter by indulging in the
              ultimate luxury experience at Grand Regent.
            </p>
            <p className="mb-7 text-center text-lg font-bold text-secondary-gr">
              Enjoy a night in our exquisite Luminous Corner Room or Prestige
              Room, where comfort meets elegance.
            </p>
            <p className="mb-7 text-center text-lg font-medium text-secondary-gr">
              Savor tradition with our delightful afternoon tea, which is
              included in your package and features a selection of fine teas and
              delectable treats.
            </p>
            <p className="mb-7 text-center text-lg font-medium text-secondary-gr">
              Unwind with a complimentary 30-minute massage at our Lotus Blossom
              Spa, designed to rejuvenate your body and mind.
            </p>
            <p className="mb-7 text-center text-lg font-medium text-secondary-gr">
              Throughout your stay, enjoy a 10% discount on Foods & Beverages
              and a 15% discount at our Lotus Blossom Spa.
            </p>
            <h6 className="mb-7 text-center text-2xl">
              Use Promocode: GRK25 to Book Now
            </h6>
            <p className="mb-7 text-center text-lg font-medium text-secondary-gr">
              <strong>contact us via email at </strong>
              contact us via email at info@grandregent.np.
              <br />
              Terms and Conditions apply.
            </p>
          </div>
          <div className="min-h-screen w-full bg-escape-bg bg-cover bg-fixed bg-center bg-no-repeat lg:min-h-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="min-h-screen w-full bg-star-bg bg-cover bg-fixed bg-center bg-no-repeat lg:min-h-full"></div>
          <div className="p-20">
            <h3 className="mb-7 text-center text-4xl font-semibold text-secondary-gr">
              Under the stars
            </h3>
            <p className="mb-7 text-center text-lg font-bold text-secondary-gr">
              Brunch at Azure Terrace
            </p>
            <p className="mb-7 text-center text-lg font-medium text-secondary-gr">
              Join us for a delightful à la carte brunch under the stars at
              Azure Terrace, paired with refreshing beverages and live
              entertainment.
            </p>

            <p className="mb-7 text-center text-lg font-medium text-secondary-gr">
              <strong>Every Saturday from 7:30 PM to 11 PM.</strong>
            </p>
            <p className="mb-7 text-center text-lg font-medium text-secondary-gr">
              <strong>NPR 2,500 for soft drinks</strong>
            </p>
            <p className="mb-7 text-center text-lg font-medium text-secondary-gr">
              <strong>NPR 3,200 for house beverages</strong>
            </p>
            <p className="mb-7 text-center text-lg font-medium text-secondary-gr">
              <strong>
                For booking, Email us on Email: info@grandregent.np.
              </strong>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-20">
            <h3 className="mb-7 text-center text-4xl font-semibold text-secondary-gr">
              Business Lunch at Regent Café
            </h3>
            <p className="mb-7 text-center text-lg font-medium text-secondary-gr">
              Elevate your business meetings with our unique dining experience
              starting from NPR 1,200 net per person, available from Noon until
              3 PM at the charming Regent Café
            </p>
          </div>
          <div className="min-h-screen w-full bg-business-lunch-bg bg-cover bg-fixed bg-center bg-no-repeat lg:min-h-full"></div>
        </div>
      </section>
    </main>
  );
};

export default SpecialOffersPage;
