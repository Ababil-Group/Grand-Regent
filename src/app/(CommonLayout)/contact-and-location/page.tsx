import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grand Regent | Contact and Location",
};

const ContactAndLocationPage = () => {
  return (
    <main>
      <section className="bg-contact-location-bg bg-cover bg-bottom bg-no-repeat">
        <div className="container flex min-h-[610px] items-center justify-center">
          <h1 className="mb-14 text-center text-5xl font-bold text-white">
            Contact & Location
          </h1>
        </div>
      </section>

      <section className="pt-20 text-center">
        <div className="container">
          <p className="mb-7 text-lg font-medium text-secondary-gr">
            The Merchant House is only 15 minutes-drive from Bahrain
            International Airport.
          </p>
          <p className="mb-7 text-lg font-medium text-secondary-gr">
            We provide luxury transfers using our Range Rover and Maserati cars,
            while those arriving with their own car can use our 24-hour valet
            parking service.
          </p>
        </div>
      </section>

      <section className="pt-10">
        <div className="container">
          <h2 className="mb-14 text-center text-5xl font-bold text-secondary-gr">
            WANT TO KNOW MORE
          </h2>
          <h3 className="mb-2 text-center text-4xl font-semibold text-secondary-gr">
            EMAIL US
          </h3>
          <p className="mb-7 text-center text-lg font-medium text-secondary-gr">
            fo@themerchanthouse.bh
          </p>

          <form className="mx-auto max-w-2xl space-y-5" action="">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              <Input type="text" placeholder="First Name" required />
              <Input type="text" placeholder="Last Name" required />
            </div>

            <Input type="email" placeholder="Email" required />

            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select One" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="General Enquiry">General Enquiry</SelectItem>
                <SelectItem value="Room Reservation">
                  Room Reservation
                </SelectItem>
                <SelectItem value="Food and Beverage">
                  Food and Beverage
                </SelectItem>
                <SelectItem value="Table booking">Table booking</SelectItem>
                <SelectItem value="Group booking">Group booking</SelectItem>
                <SelectItem value="Meeting and Events">
                  Meeting and Events
                </SelectItem>
                <SelectItem value="Spa Reservation">Spa Reservation</SelectItem>
                <SelectItem value="Corporate">Corporate</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center justify-center">
              <Button className="border-secondary-gr">Send</Button>
            </div>
          </form>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <Accordion className="space-y-5" type="single" collapsible>
              <AccordionItem value="item-1" className="border px-5">
                <AccordionTrigger className="text-2xl text-secondary-gr">
                  Reservations at The Merchant House
                </AccordionTrigger>
                <AccordionContent className="text-lg font-semibold text-secondary-gr">
                  150 Government Avenue, Manama 304, Kingdom of Bahrain <br />{" "}
                  E: fo@themerchanthouse.bh
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border px-5">
                <AccordionTrigger className="text-2xl text-secondary-gr">
                  Press & Media Enquiries
                </AccordionTrigger>
                <AccordionContent className="text-lg font-semibold text-secondary-gr">
                  Obai and Hill <br /> PR Agency <br /> E:
                  nikita@obaiandhill.com
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <h3 className="mb-2 text-center text-4xl font-semibold text-secondary-gr">
            HOW TO FIND US
          </h3>

          <p className="mb-7 text-center text-lg font-medium text-secondary-gr">
            150 Government Avenue <br /> Manama 304 <br /> Kingdom of Bahrain
          </p>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4245.221446045315!2d50.572002275954645!3d26.23414428892121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49af6019b67c2d%3A0xc94664e899462d64!2s150%20Government%20Ave%2C%20Manama%2C%20Bahrain!5e1!3m2!1sen!2sbd!4v1736319913937!5m2!1sen!2sbd"
              width="100%"
              height="600"
              style={{ border: "0px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactAndLocationPage;
