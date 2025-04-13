import SliderCarousel from "@/components/pages/our-library/SliderCarousel";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grand Regent | Library",
};

const OurLibraryPage = () => {
  return (
    <main className="pb-20">
      <section className="bg-library-bg bg-cover bg-center bg-no-repeat">
        <div className="container flex min-h-[610px] items-center justify-center">
          <h1 className="mb-14 text-center text-5xl font-bold text-white">
            Our Library
          </h1>
        </div>
      </section>

      <section className="pt-20">
        <div className="container">
          <h2 className="mb-10 text-center text-5xl font-bold text-secondary-gr">
            The Library at Grand Regent
          </h2>

          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            Perched on the mezzanine overlooking the lobby, The Library at Grand
            Regent features a curated collection of over 1,000 books for guests
            and visitors to enjoy.
          </p>

          <section className="pt-10">
            <div className="container px-10">
              <SliderCarousel />
            </div>
          </section>
        </div>
      </section>

      <section className="py-10">
        <div className="container">
          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            It’s the perfect spot to unwind or gather for afternoon tea. Whether
            you&apos;re hosting a sophisticated gathering with light bites and
            tea or enjoying some quality time reading, The Library welcomes you
            to its cozy sanctuary. Expand your knowledge with our diverse book
            selection, thoughtfully curated to enhance your understanding of
            Denmark and its rich surroundings. Enjoy light bites and beverages
            from 8 AM to 1 AM.
          </p>
        </div>
      </section>

      <section className="pt-10">
        <div className="container">
          <h2 className="mb-10 text-center text-5xl font-bold text-secondary-gr">
            Daily Operating Schedule
          </h2>

          <div className="mx-auto max-w-5xl">
            <Table className="border text-center text-xl text-secondary-gr">
              <TableHeader>
                <TableRow>
                  <TableHead className="border p-4 text-center font-bold">
                    Offering Food and Beverages
                  </TableHead>
                  <TableHead className="border p-4 text-center font-bold">
                    Evening Tea
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="border p-4">08:00 to 13:00</TableCell>
                  <TableCell className="border p-4">
                    14:00 to 17:30 (Pre-Booking Required)
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurLibraryPage;
