import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Grand Regent | Accommodations",
};

const AccommodationsPage = () => {
  return (
    <main className="pb-20">
      <section className="bg-suites-bg bg-cover bg-bottom bg-no-repeat">
        <div className="container flex min-h-[610px] items-center justify-center">
          <h1 className="mb-14 text-center text-5xl font-bold text-white">
            Accommodations
          </h1>
        </div>
      </section>

      <section className="pt-20">
        <div className="container">
          <h2 className="mb-14 text-center text-5xl font-bold text-secondary-gr">
            Luxury Rooms at Grand Regent, a 4-Star Hotel
          </h2>

          <p className="mb-7 text-center text-lg font-medium text-secondary-gr">
            Grand Regent is Kathmandu&apos;s most exciting and sophisticated new
            hotel, featuring only a select number of luxury rooms designed for
            both business and leisure travelers.
          </p>

          <p className="mb-7 text-center text-lg font-medium text-secondary-gr">
            Each luxury room boasts a unique design that harmonizes modern
            comfort with refreshing colors and striking contemporary art. With a
            residential feel, our luxury rooms include a kitchenette, dining and
            sitting areas, a master bedroom, and an en-suite bathroom, ensuring
            a relaxing and indulgent stay for every guest.
          </p>

          <h2 className="mb-14 text-center text-5xl font-bold text-secondary-gr">
            Luxury Rooms
          </h2>

          <div className="space-y-20">
            <div>
              <h3 className="mb-2 text-3xl font-bold text-secondary-gr">
                City Haven
              </h3>
              <p className="mb-7 text-lg font-medium text-secondary-gr">
                Room Description: This refined space features a luxurious
                king-size bed, a connected kitchen, a dining area, and a lounge,
                with the flexibility to expand into a two-bedroom.
              </p>

              <div className="flex flex-col items-center gap-20 lg:flex-row">
                <div>
                  <Image
                    className="h-auto w-full"
                    src="/Accommodations/01.jpg"
                    alt="Urban Suite"
                    width={740}
                    height={500}
                  />
                </div>
                <div>
                  <p className="mb-4 text-lg font-medium text-secondary-gr">
                    King size bed
                  </p>
                  <p className="mb-4 text-lg font-medium text-secondary-gr">
                    Size: 40 – 50 sqm
                  </p>
                  <p className="mb-4 text-lg font-medium text-secondary-gr">
                    Stylish kitchen, dining, and living area
                  </p>
                  <p className="mb-4 text-lg font-medium text-secondary-gr">
                    Option to connect with a Prestige Room via a private
                    entrance foyer for a two-bedroom configuration
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-3xl font-bold text-secondary-gr">
                City Haven Plus
              </h3>
              <p className="mb-7 text-lg font-medium text-secondary-gr">
                This inviting space features a luxurious king-size bed and an
                adjoining kitchen, dining area, and sitting space.
              </p>

              <div className="flex flex-col items-center gap-20 lg:flex-row">
                <div>
                  <Image
                    className="h-auto w-full"
                    src="/Accommodations/02.jpg"
                    alt="Urban Suite"
                    width={740}
                    height={500}
                  />
                </div>
                <div>
                  <p className="mb-4 text-lg font-medium text-secondary-gr">
                    King size bed
                  </p>
                  <p className="mb-4 text-lg font-medium text-secondary-gr">
                    Size: 50 sqm
                  </p>
                  <p className="mb-4 text-lg font-medium text-secondary-gr">
                    Stylish kitchen, dining, and lounge area
                  </p>
                  <p className="mb-4 text-lg font-medium text-secondary-gr">
                    Option to accommodate an extra bed for added comfort
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-3xl font-bold text-secondary-gr">
                Executive Rooms
              </h3>
              <p className="mb-7 text-lg font-medium text-secondary-gr">
                This room features a king or super king bed, complemented by our
                signature adjoining sitting and dining area, offering additional
                space for your comfort and relaxation.
              </p>

              <div className="flex flex-col items-center gap-20 lg:flex-row">
                <div>
                  <Image
                    className="h-auto w-full"
                    src="/Accommodations/03.jpg"
                    alt="Urban Suite"
                    width={740}
                    height={500}
                  />
                </div>
                <div>
                  <p className="mb-4 text-lg font-medium text-secondary-gr">
                    King or Super King bed
                  </p>
                  <p className="mb-4 text-lg font-medium text-secondary-gr">
                    Size: 50-55 sqm
                  </p>
                  <p className="mb-4 text-lg font-medium text-secondary-gr">
                    Elegant kitchen, dining, and lounge area
                  </p>
                  <p className="mb-4 text-lg font-medium text-secondary-gr">
                    Option to add an extra bed for enhanced convenience
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-3xl font-bold text-secondary-gr">
                Luminous Corner Room
              </h3>
              <p className="mb-7 text-lg font-medium text-secondary-gr">
                Bathed in natural light from additional windows, this spacious
                retreat features a king or super king bed and a generous area of
                60 square meters.
              </p>

              <div className="flex flex-col items-center gap-20 lg:flex-row">
                <div>
                  <Image
                    className="h-auto w-full"
                    src="/Accommodations/04.jpg"
                    alt="Urban Suite"
                    width={740}
                    height={500}
                  />
                </div>
                <div>
                  <p className="mb-4 text-lg font-medium text-secondary-gr">
                    King or Super King bed
                  </p>
                  <p className="mb-4 text-lg font-medium text-secondary-gr">
                    Size: 60 sqm
                  </p>
                  <p className="mb-4 text-lg font-medium text-secondary-gr">
                    Expansive corner windows for enhanced natural light
                  </p>
                  <p className="mb-4 text-lg font-medium text-secondary-gr">
                    Stylish kitchen, dining, and lounge area
                  </p>
                  <p className="mb-4 text-lg font-medium text-secondary-gr">
                    Option to accommodate an extra bed for added convenience
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-3xl font-bold text-secondary-gr">
                Prestige Room
              </h3>
              <p className="mb-7 text-lg font-medium text-secondary-gr">
                Our most spacious accommodations feature super king beds,
                bathrooms filled with natural light, and the option to connect
                with a City Haven for a two-bedroom experience.
              </p>

              <div className="flex flex-col items-center gap-20 lg:flex-row">
                <div>
                  <Image
                    className="h-auto w-full"
                    src="/suites/s8.jpg"
                    alt="Urban Suite"
                    width={740}
                    height={500}
                  />
                </div>
                <div>
                  <p className="mb-4 text-lg font-medium text-secondary-gr">
                    Super King or twin beds
                  </p>
                  <p className="mb-4 text-lg font-medium text-secondary-gr">
                    Size: 60 sqm
                  </p>
                  <p className="mb-4 text-lg font-medium text-secondary-gr">
                    Bathrooms designed to maximize natural light
                  </p>
                  <p className="mb-4 text-lg font-medium text-secondary-gr">
                    Expansive kitchen, dining, and lounge area
                  </p>
                  <p className="mb-4 text-lg font-medium text-secondary-gr">
                    Option to add an extra bed for additional comfort
                  </p>
                  <p className="mb-4 text-lg font-medium text-secondary-gr">
                    Ability to interconnect with a City Haven through a private
                    entrance foyer to create a two-bedroom layout
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AccommodationsPage;
