import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grand Regent | Lotus Blossom Spa",
};

const LotusBlossomSpaPage = () => {
  return (
    <main className="pb-20">
      <section className="bg-spa-bg bg-cover bg-center bg-no-repeat">
        <div className="container flex min-h-[610px] items-center justify-center">
          <h1 className="mb-14 text-center text-5xl font-bold text-white">
            Lotus Blossom Spa
          </h1>
        </div>
      </section>

      <section className="pt-20">
        <div className="container">
          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            At Lotus Blossom Spa, we prioritize your well-being with treatments
            performed by hand using natural and organic oils, ensuring care for
            your body without harm.
          </p>
          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            Our commitment extends to the environment, as we source products
            from ethical and sustainable suppliers whenever possible.
          </p>

          <h2 className="mb-10 text-center text-5xl font-bold text-secondary-gr">
            Contact us to book your appointment:
          </h2>
        </div>
      </section>

      <section className="py-10">
        <div className="container space-y-5">
          <p className="mb-5 text-center text-lg font-bold text-secondary-gr">
            Email: info@grandregent.asia
          </p>

          <h3 className="mb-2 text-center text-3xl font-bold text-secondary-gr">
            Spa Basics at Lotus Blossom Spa
          </h3>
          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            At Lotus Blossom Spa, we create an environment of tranquility and
            relaxation. To enhance your experience, please remember to turn off
            your mobile phone.
          </p>
          <p className="mb-2 text-center text-lg font-bold text-secondary-gr">
            Booking Treatments
          </p>
          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            We recommend booking your treatments in advance. Feel free to reach
            out to us by email, and we’ll do our best to accommodate your
            schedule.
          </p>
          <p className="mb-2 text-center text-lg font-bold text-secondary-gr">
            Arrival Time
          </p>
          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            Please arrive at least 10 minutes before your scheduled treatment.
            This allows time for check-in and changing, ensuring you’re relaxed
            and ready.
          </p>
          <p className="mb-2 text-center text-lg font-bold text-secondary-gr">
            Special Health Considerations
          </p>
          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            During your first visit, you’ll complete a brief profile. Please let
            us know about any medical conditions, pregnancy, allergies, or
            prescribed medications that may affect your treatment. If you have
            any concerns, don’t hesitate to share them with us.
          </p>
          <p className="mb-2 text-center text-lg font-bold text-secondary-gr">
            Staying Hydrated
          </p>
          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            To make the most of your spa experience, we recommend avoiding
            alcohol for at least 4 hours before and after your treatments. After
            a massage, be sure to drink plenty of warm water or herbal infusions
            to stay hydrated.
          </p>
          <p className="mb-2 text-center text-lg font-bold text-secondary-gr">
            Cancelling Your Reservation
          </p>
          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            We reserve treatments especially for you, so if you need to cancel,
            please do so at least 12 hours in advance. This allows us to offer
            the appointment to other guests.
          </p>
          <p className="mb-2 text-center text-lg font-bold text-secondary-gr">
            Late Arrivals
          </p>
          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            Arriving late may shorten your treatment time, which can affect both
            its effectiveness and your enjoyment. We want you to have the best
            experience possible, so please plan accordingly.
          </p>
          <p className="mb-2 text-center text-lg font-bold text-secondary-gr">
            Clothing
          </p>
          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            Feel free to bring your clothing and accessories like swimwear,
            slippers, or bathrobes. We also provide disposable underwear,
            towels, and slippers to ensure you feel comfortable and relaxed
            during your visit.
          </p>
        </div>
      </section>
    </main>
  );
};

export default LotusBlossomSpaPage;
