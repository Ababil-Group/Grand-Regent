import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Metadata } from "next";
import SliderCarousel from "@/components/pages/regent-cafe/SliderCarousel";

export const metadata: Metadata = {
  title: "Grand Regent | Regent Cafe",
};

const RegentCafePage = () => {
  return (
    <main className="pb-20">
      <section className="bg-cafe-bg bg-cover bg-bottom bg-no-repeat">
        <div className="container flex min-h-[610px] items-center justify-center">
          <h1 className="mb-14 text-center text-5xl font-bold text-white">
            Regent Café
          </h1>
        </div>
      </section>

      <section className="pt-20">
        <div className="container">
          <h2 className="mb-10 text-center text-5xl font-bold text-secondary-gr">
            Regent Café at Grand Regent
          </h2>

          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            Take a break from downtown Odder and relax at Regent Café in Grand
            Regent.
          </p>
          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            Enjoy homemade cakes, fresh coffee, juices, sandwiches, and salads
            in a stylish setting adorned with contemporary art, perfect for
            casual meetings or afternoon tea.
          </p>
          <section className="pt-10">
            <div className="container px-10">
              <SliderCarousel />
            </div>
          </section>
        </div>
      </section>

      <section className="pt-20">
        <div className="container">
          <h2 className="mb-10 text-center text-5xl font-bold text-secondary-gr">
            Daily Operating Schedule
          </h2>

          <div className="mx-auto max-w-5xl">
            <Table className="border text-center text-xl text-secondary-gr">
              <TableHeader>
                <TableRow>
                  <TableHead className="border p-4 text-center font-bold">
                    All-day Cafe
                  </TableHead>
                  <TableHead className="border p-4 text-center font-bold">
                    Cocoa Studio
                  </TableHead>
                  <TableHead className="border p-4 text-center font-bold">
                    Evening Tea
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="border p-4">08:00 to 23:00</TableCell>
                  <TableCell className="border p-4">12:00 to 20:00</TableCell>
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

export default RegentCafePage;
