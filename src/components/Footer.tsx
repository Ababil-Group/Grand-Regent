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
              href="https://maps.app.goo.gl/ZyS4TvxwHhm9kRGE7"
              target="_blank"
            >
              Rådhusgade 21, 8300 Odder, Denmark
            </Link>
          </p>
          <Link
            className="flex items-center gap-1 font-medium"
            href="emailto:info@grandregent.eu"
          >
            <FaEnvelope />
            fo@themerchanthouse.bh
          </Link>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2232.4901019693534!2d10.14742817709822!3d55.97553777481305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c42d082d5383b%3A0x44e2a3b91727dcec!2sR%C3%A5dhusgade%2021%2C%208300%20Odder%2C%20Denmark!5e0!3m2!1sen!2sbd!4v1737698984014!5m2!1sen!2sbd"
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
