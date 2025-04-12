import { UrlObject } from "url";

type NavLink = {
  label: string; // The display name of the navigation link
  href?: string | UrlObject; // Optional, the path for the link
  subLinks?: NavLink[]; // Optional, an array of sub-links with the same structure
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },

  { label: "Accommodations", href: "/accommodations" },

  {
    label: "Dining & Bars",
    subLinks: [
      { label: "Azure Terrace", href: "/azure-terrace" },
      { label: "Regent Café", href: "/regent-cafe" },
      { label: "Our Library", href: "/our-library" },
      // { label: "Conferences & Events", href: "/conferences-and-events" },
    ],
  },

  {
    label: "Fitness & Spa",
    subLinks: [
      { label: "Lotus Blossom Spa", href: "/lotus-blossom-spa" },
      { label: "Fitness Center", href: "/fitness-center" },
      { label: "Infinity Pool", href: "/infinity-pool" },
    ],
  },

  // {
  //   label: "Destination",
  //   subLinks: [
  //     { label: "Activities", href: "/activities" },
  //     { label: "Culture & Heritage", href: "/culture-and-heritage" },
  //     { label: "Restaurants", href: "/restaurants" },
  //     { label: "Shopping", href: "/shopping" },
  //     { label: "Walks & Wildlife", href: "/walks-and-wildlife" },
  //   ],
  // },

  { label: "Special Offers", href: "/special-offers" },
  { label: "Contact Us", href: "/contact-us" },
];

export const homepageServices = [
  {
    title: "Accommodations",
    image: "/Homepage/Accommodations.jpg",
  },
  {
    title: "Dining  & Bars",
    image: "/Homepage/Dining & Bars.jpg",
  },
  {
    title: "Lounges",
    image: "/Homepage/Lounges.jpg",
  },
  {
    title: "Fitness & Spa",
    image: "/Homepage/Fitness & Spa.jpg",
  },
  {
    title: "Conference Rooms",
    image: "/Meetings & Events.png",
  },
  {
    title: "Destination",
    image: "/Homepage/Destination.jpg",
  },
];

export const aboutGalleryImages = [
  "/about/gallery/1.jpg",
  "/about/gallery/2.jpg",
  "/about/gallery/3.jpg",
  "/about/gallery/4.jpg",
  "/about/gallery/5.jpg",
  "/about/gallery/6.jpg",
  "/about/gallery/7.jpg",
  "/about/gallery/8.jpg",
  "/about/gallery/9.jpg",
  "/about/gallery/10.jpg",
  "/about/gallery/11.jpg",
  "/about/gallery/12.jpg",
  "/about/gallery/13.jpg",
  "/about/gallery/14.jpg",
  "/about/gallery/15.jpg",
  "/about/gallery/16.jpg",
  "/about/gallery/17.jpg",
  "/about/gallery/18.jpg",
  "/about/gallery/19.jpg",
  "/about/gallery/20.jpg",
  "/about/gallery/21.jpg",
  "/about/gallery/22.jpg",
  "/about/gallery/23.jpg",
  "/about/gallery/24.jpg",
  "/about/gallery/25.jpg",
  "/about/gallery/26.jpg",
  "/about/gallery/27.jpg",
  "/about/gallery/28.jpg",
  "/about/gallery/29.jpg",
  "/about/gallery/30.jpg",
  "/about/gallery/31.jpg",
  "/about/gallery/32.jpg",
  "/about/gallery/33.jpg",
  "/about/gallery/34.jpg",
  "/about/gallery/35.jpg",
  "/about/gallery/36.jpg",
  "/about/gallery/37.jpg",
  "/about/gallery/38.jpg",
  "/about/gallery/39.jpg",
  "/about/gallery/40.jpg",
  "/about/gallery/41.jpg",
  "/about/gallery/42.jpg",
  "/about/gallery/43.jpg",
  "/about/gallery/44.jpg",
];
