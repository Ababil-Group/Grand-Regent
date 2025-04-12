import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grand Regent | Fitness Center",
};

const FitnessCenterPage = () => {
  return (
    <main className="pb-20">
      <section className="bg-gym-bg bg-cover bg-center bg-no-repeat">
        <div className="container flex min-h-[610px] items-center justify-center">
          <h1 className="mb-14 text-center text-5xl font-bold text-white">
            Fitness Center
          </h1>
        </div>
      </section>

      <section className="pt-20">
        <div className="container">
          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            Our facility is equipped with cutting-edge Techno-gym equipment and
            is renowned for its excellence and performance. Enjoy a variety of
            cardio machines, including treadmills, cross trainers, and bikes,
            alongside our cable resistance options featuring the versatile
            Kinesis multi-function system. We also provide dedicated areas for
            free weights, pull-up bars, benches, and stretching, ensuring you
            have everything you need for a comprehensive workout.
          </p>
          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            We believe fitness should be enjoyable for everyone. That’s why we
            offer a diverse range of wellness activities suitable for all ages
            and fitness levels, including yoga, mat Pilates, dance fitness,
            stretching sessions, and circuit training. Plus, our friendly
            personal trainer is always on hand to guide and motivate you
            throughout your fitness journey.
          </p>
          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            Open 24/7 exclusively for hotel guests.
          </p>
          {/* <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            Personal Training Session: 60 minutes | BHD 15+++
          </p> */}
        </div>
      </section>

      <section className="py-10">
        <div className="container space-y-5">
          <h3 className="mb-2 text-center text-3xl font-bold text-secondary-gr">
            Gym Etiquette
          </h3>

          <p className="mb-2 text-center text-lg font-bold text-secondary-gr">
            Keep It Clean
          </p>
          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            After using any equipment, please wipe it down and return it to its
            designated spot. This helps maintain a tidy and welcoming
            environment for all guests.
          </p>
          <p className="mb-2 text-center text-lg font-bold text-secondary-gr">
            Dress for Success
          </p>
          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            Wear appropriate athletic footwear (barefoot is great for yoga or
            Pilates). Please avoid sandals or slippers to ensure your safety
            while working out.
          </p>
          <p className="mb-2 text-center text-lg font-bold text-secondary-gr">
            Stay Alert
          </p>
          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            Be mindful of your surroundings to create a safe space for yourself
            and your fellow guests.
          </p>
          <p className="mb-2 text-center text-lg font-bold text-secondary-gr">
            Be Considerate
          </p>
          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            During peak times, please limit your use of equipment so everyone
            can enjoy their workout experience.
          </p>
          <p className="mb-2 text-center text-lg font-bold text-secondary-gr">
            Towels Available
          </p>
          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            We provide towels for your convenience—please use them wisely to
            stay fresh and comfortable.
          </p>
          <p className="mb-2 text-center text-lg font-bold text-secondary-gr">
            Capture the Moment
          </p>
          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            Feel free to take a quick selfie, but please ensure it doesn’t
            disrupt anyone else’s experience or invade their privacy.
          </p>
          <p className="mb-2 text-center text-lg font-bold text-secondary-gr">
            Hydration is Key
          </p>
          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            Stay refreshed by drinking plenty of water or electrolyte-rich
            beverages before, during, and after your workout.
          </p>
          <p className="mb-2 text-center text-lg font-bold text-secondary-gr">
            Ask for Assistance
          </p>
          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            Our trainer is here to support you. Don’t hesitate to reach out with
            any questions or health concerns before starting your workout.
          </p>
        </div>
      </section>
    </main>
  );
};

export default FitnessCenterPage;
