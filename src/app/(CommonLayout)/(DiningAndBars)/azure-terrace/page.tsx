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
  title: "Grand Regent | Azure Terrace",
};

const AzureTerracePage = () => {
  return (
    <main className="pb-20">
      <section className="bg-terrace-bg bg-cover bg-bottom bg-no-repeat">
        <div className="container flex min-h-[610px] items-center justify-center">
          <h1 className="mb-14 text-center text-5xl font-bold text-white">
            Azure Terrace
          </h1>
        </div>
      </section>

      <section className="pt-20">
        <div className="container">
          <h2 className="mb-10 text-center text-5xl font-bold text-secondary-gr">
            Rooftop Dining at Azure Terrace
          </h2>

          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            Perched atop our hotel, Azure Terrace offers a delightful dining
            experience with indoor seating and an enchanting garden terrace.
          </p>

     
        </div>
      </section>

      {/* <section className="py-20">
        <div className="container">
          <h2 className="mb-10 text-center text-5xl font-bold text-secondary-gr">
            Our Inspiration for Azure Terrace
          </h2>

          <p className="mb-2 text-center text-lg font-medium text-secondary-gr">
            Inspired by the vibrant flavors of Nepal, Azure Terrace blends  local culinary traditions to create a vibrant dining experience.
            Featuring dishes like Paella, Moussaka, Stegt Flæsk, and Rugbrød,
            our menu celebrates fresh, seasonal ingredients. With a
            floral-inspired design and serene outdoor terrace, Azure Terrace is
            Odder’s premier destination for all-day dining.
          </p>
        </div>
      </section> */}

      <section>
        <div className="container">
          <h2 className="mb-10 text-center text-5xl font-bold text-secondary-gr">
            Daily Operating Schedule
          </h2>

          <div className="mx-auto max-w-5xl">
            <Table className="border text-center text-xl text-secondary-gr">
              <TableHeader>
                <TableRow>
                  <TableHead className="border p-4 text-center font-bold">
                    Breakfast
                  </TableHead>
                  <TableHead className="border p-4 text-center font-bold">
                    Lunch
                  </TableHead>
                  <TableHead className="border p-4 text-center font-bold">
                    Corporate Lunch
                  </TableHead>
                  <TableHead className="border p-4 text-center font-bold">
                    Brunch in the Twilight
                  </TableHead>
                  <TableHead className="border p-4 text-center font-bold">
                    Dinner
                  </TableHead>
                  <TableHead className="border p-4 text-center font-bold">
                    Bar
                  </TableHead>
                  <TableHead className="border p-4 text-center font-bold">
                    Evening Tea
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="border p-4">
                    6:30 to 10:30 Weekend Until 11:00
                  </TableCell>
                  <TableCell className="border p-4">Noon until 3:00</TableCell>
                  <TableCell className="border p-4">Noon until 3:00</TableCell>
                  <TableCell className="border p-4">
                    Every Saturday, 19:00 to 23:45
                  </TableCell>
                  <TableCell className="border p-4">18:00 to 23:00</TableCell>
                  <TableCell className="border p-4">
                    Midday to late evening
                  </TableCell>
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

export default AzureTerracePage;
