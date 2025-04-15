"use client";
import { useState } from "react";
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
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Grand Regent | Contact Us",
// };

const ContactUsPage = () => {
  const [, setSubject] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const payload = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message") || "Contact form submission",
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        console.log("Email sent successfully");
        e.currentTarget.reset();
        setSubject("");
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <section className="bg-contact-location-bg bg-cover bg-bottom bg-no-repeat">
        <div className="container flex min-h-[610px] items-center justify-center">
          <h1 className="mb-14 text-center text-5xl font-bold text-white">
            Contact & Location
          </h1>
        </div>
      </section>

      <section className="pt-20">
        <div className="container">
          <h2 className="mb-14 text-center text-5xl font-bold text-secondary-gr">
            WANT TO KNOW MORE
          </h2>
          <h3 className="mb-2 text-center text-4xl font-semibold text-secondary-gr">
            EMAIL US
          </h3>
          <p className="mb-7 text-center text-lg font-medium text-secondary-gr">
            info@grandregent.asia
          </p>

          <form className="mx-auto max-w-2xl space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              <Input
                type="text"
                placeholder="First Name"
                name="firstName"
                required
                disabled={isLoading}
              />
              <Input
                type="text"
                placeholder="Last Name"
                name="lastName"
                required
                disabled={isLoading}
              />
            </div>

            <Input
              type="email"
              placeholder="Email"
              name="email"
              required
              disabled={isLoading}
            />

            <Select
              name="subject"
              onValueChange={setSubject}
              required
              disabled={isLoading}
            >
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
              <Button
                className="border-secondary-gr"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send"}
              </Button>
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
                  Reservations at Grand Regent
                </AccordionTrigger>
                <AccordionContent className="text-lg font-semibold text-secondary-gr">
                  Thamel Marg, Thamel-26, Kathmandu 44600, Nepal <br />
                  Phone: +977 9707735420 <br /> Email: info@grandregent.asia
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
            Thamel Marg, Thamel-26, Kathmandu 44600, Nepal
          </p>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.109334476869!2d85.30863167614801!3d27.713910325200715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fd08d71809%3A0x3a162e60c945c656!2sThamel%20Marg%2026%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sbd!4v1744459104390!5m2!1sen!2sbd"
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

export default ContactUsPage;
