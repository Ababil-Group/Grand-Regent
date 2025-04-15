import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grand Regent | Infinity Pool",
};

const InfinityPoolPage = () => {
  return (
    <main className="pb-20">
      <section className="bg-pool-bg bg-cover bg-center bg-no-repeat">
        <div className="container flex min-h-[610px] items-center justify-center">
          <h1 className="mb-14 text-center text-5xl font-bold text-white">
            Infinity Pool
          </h1>
        </div>
      </section>

      <section className="pt-20">
        <div className="container">
          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            Relax at our exclusive emerald green, chlorine-free infinity pool,
            offering stunning city views.
          </p>
          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            Open daily from sunrise to sunset, it’s the perfect spot to soak up
            the sun, sip a refreshing cocktail, and enjoy light bites.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="container space-y-5">
          <h3 className="mb-2 text-center text-3xl font-bold text-secondary-gr">
            Pool Etiquette at Grand Regent
          </h3>

          <p className="mb-2 text-center text-lg font-bold text-secondary-gr">
            Be Mindful of Others
          </p>
          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            If you don’t plan to use a pool chair for an extended period, please
            avoid reserving it. This way, all guests can enjoy their sunbathing
            experience.
          </p>
          <p className="mb-2 text-center text-lg font-bold text-secondary-gr">
            Consideration for Children
          </p>
          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            We understand that vacations are a time for fun and relaxation.
            Please remind your children to keep noise levels down so that other
            guests can enjoy their peaceful time by the pool.
          </p>
          <p className="mb-2 text-center text-lg font-bold text-secondary-gr">
            Towels Available
          </p>
          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            We provide towels for your convenience. Please use them responsibly
            to help maintain a tidy environment.
          </p>
          <p className="mb-2 text-center text-lg font-bold text-secondary-gr">
            Sun Protection
          </p>
          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            As our pool is outdoors, remember to apply sunscreen to protect your
            skin, reapplying every two hours for optimal coverage.
          </p>
          <p className="mb-2 text-center text-lg font-bold text-secondary-gr">
            Stay Hydrated
          </p>
          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            With the warm weather, it’s important to stay hydrated. Feel free to
            order your favorite cocktail from our iconic restaurant and bar.
          </p>
        </div>
      </section>
    </main>
  );
};

export default InfinityPoolPage;
