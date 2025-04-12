/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";

interface NavLink {
  label: string;
  href?: string;
  subLinks?: NavLink[];
}

interface NavigationMenuProps {
  navLinks: NavLink[];
}
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
};
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<null | string | number>(
    null,
  );
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setActiveIndex(null);
    }
  };

  const handleSubLinkClick = () => {
    setActiveIndex(null); // Close the sub-navigation panel
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeSheet = () => setIsOpen(false);

  const toggleSubMenu = (index: number | string) => {
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          subject: data.subject,
          message: "New booking request from website",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send booking request");
      }

      // Reset form and close modal on success
      reset();
      setOpenModal(false);
      console.log("Booking request sent successfully");
    } catch (error) {
      console.error("Error sending booking request:", error);
      // Optional: Show error message
      alert("Failed to send booking request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-primary-gr py-4 text-white">
      <nav className="container flex items-center justify-between">
        <div className="flex basis-1/2 items-center justify-start xl:basis-[10%]">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Grand Regent Logo"
              height={80}
              width={80}
            />
          </Link>
        </div>

        {/* desktop navigation  */}
        <div className="hidden basis-4/5 xl:block">
          <ul
            ref={menuRef}
            className="flex items-center justify-center space-x-6 font-medium"
          >
            {navLinks.map((link, index) => (
              <li key={index} className="relative">
                <Link
                  href={link.href || ""}
                  className="flex items-center text-sm duration-200 hover:opacity-50 focus:outline-none"
                  onClick={() => handleToggle(index)}
                >
                  {link.label}
                  {link.subLinks && (
                    <MdOutlineKeyboardArrowDown className="ml-1 text-lg" />
                  )}
                </Link>

                {link.subLinks && activeIndex === index && (
                  <ul className="absolute left-0 top-full mt-2 w-48 rounded-lg border bg-primary-gr shadow-lg">
                    {link.subLinks.map((subLink, subIndex) => (
                      <li key={subIndex} className="px-4 py-2">
                        <Link
                          className="text-sm duration-200 hover:opacity-50"
                          href={subLink.href || "#"}
                          onClick={handleSubLinkClick} // Close the panel on sub-link click
                        >
                          {subLink.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* mobile navigation  */}
        <div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
              <button className="xl:hidden">
                <FaBars className="text-3xl" />
              </button>
            </SheetTrigger>
            <SheetContent className="bg-primary-gr text-white" side="left">
              <Link href="/" onClick={closeSheet}>
                <Image
                  src="/logo.png"
                  alt="Grand Regent Logo"
                  height={80}
                  width={80}
                />
              </Link>

              <div className="mt-10 space-y-2">
                {navLinks.map((link, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href || "#"}
                        className="block py-2 font-medium"
                      >
                        {link.label}
                      </Link>
                      {link.subLinks && (
                        <button
                          className="p-1 focus:outline-none"
                          onClick={() => toggleSubMenu(index)}
                        >
                          <ChevronDownIcon
                            className={`h-5 w-5 transform ${
                              activeSubMenu === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>
                    {link.subLinks && activeSubMenu === index && (
                      <div className="ml-4 mt-2 space-y-1">
                        {link.subLinks.map((subLink, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subLink.href || "#"}
                            className="block py-1"
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden basis-1/2 items-center justify-end xl:flex xl:basis-[10%]">
          <Dialog open={openModal} onOpenChange={setOpenModal}>
            <DialogTrigger asChild>
              <Button>BOOK NOW</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <h3 className="text-center text-2xl font-bold">
                  Book your reservation now
                </h3>
                <DialogTitle className="text-center">Form</DialogTitle>
              </DialogHeader>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mx-auto max-w-2xl space-y-5"
              >
                {/* Name fields */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                  <div>
                    <Input
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                      placeholder="First Name"
                      disabled={isSubmitting}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                      placeholder="Last Name"
                      disabled={isSubmitting}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email field */}
                <div>
                  <Input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    placeholder="Email"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Subject select */}
                <div>
                  <Controller
                    name="subject"
                    control={control}
                    rules={{ required: "Please select a subject" }}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        required
                        disabled={isSubmitting}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select One" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="General Enquiry">
                            General Enquiry
                          </SelectItem>
                          <SelectItem value="Room Reservation">
                            Room Reservation
                          </SelectItem>
                          <SelectItem value="Food and Beverage">
                            Food and Beverage
                          </SelectItem>
                          <SelectItem value="Table booking">
                            Table booking
                          </SelectItem>
                          <SelectItem value="Group booking">
                            Group booking
                          </SelectItem>
                          <SelectItem value="Meeting and Events">
                            Meeting and Events
                          </SelectItem>
                          <SelectItem value="Spa Reservation">
                            Spa Reservation
                          </SelectItem>
                          <SelectItem value="Corporate">Corporate</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="flex items-center justify-center">
                  <Button
                    type="submit"
                    className="border-secondary-gr"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </nav>
    </header>
  );
};

export default Header;
