import Image from "next/image";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="mt-auto bg-primary-gr py-10 text-white">
      <div className="container flex flex-col justify-between divide-y-[1px] divide-white lg:flex-row lg:divide-x-[1px] lg:divide-y-0">
        <div className="basis-full py-10 lg:basis-[33%] lg:px-12 lg:py-3">
          <Image
            className="mx-auto h-auto w-[230px] lg:mr-auto"
            src="/logo.png"
            alt="Grand Regent Logo"
            height={230}
            width={230}
          />
        </div>

        <div className="basis-full space-y-3 py-10 lg:basis-[33%] lg:px-12 lg:py-3">
          <p className="text-lg font-medium">
            <Link
              href="https://maps.app.goo.gl/EnNZKjKH581HgMP99"
              target="_blank"
            >
              Thamel Marg, Thamel-26, Kathmandu 44600, Nepal
            </Link>
          </p>
          <Link
            className="flex items-center gap-1 font-medium"
            href="emailto:info@grandregent.eu"
          >
            <FaEnvelope />
            info@grandregent.eu
          </Link>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.109334476869!2d85.30863167614801!3d27.713910325200715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fd08d71809%3A0x3a162e60c945c656!2sThamel%20Marg%2026%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sbd!4v1744459104390!5m2!1sen!2sbd"
            width="100%"
            height="200"
            style={{ border: "0px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="basis-full py-10 lg:basis-[33%] lg:px-12 lg:py-3">
          <p className="text-xl font-medium">Sign Up for Newsletter</p>

          <form className="mt-5 space-y-3" action="">
            <Input
              className="text-secondary-gr placeholder:font-medium"
              type="text"
              placeholder="First Name"
              required
            />
            <Input
              className="text-secondary-gr placeholder:font-medium"
              type="text"
              placeholder="Last Name"
              required
            />
            <Input
              className="text-secondary-gr placeholder:font-medium"
              type="email"
              placeholder="Email"
              required
            />
            <Button>Subscribe</Button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
