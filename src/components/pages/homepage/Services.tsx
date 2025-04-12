import { homepageServices } from "@/constants";
import Image from "next/image";

const Services = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {homepageServices.map((service, index) => (
        <div
          className="relative min-h-[310px] w-full overflow-hidden"
          key={index}
        >
          <Image
            className="object-cover object-center duration-300 hover:scale-110"
            src={service.image}
            alt={service.title}
            fill
          />
          <div className="size-full bg-black bg-opacity-50"></div>
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-default text-center text-2xl font-semibold text-white">
            {service.title}
          </span>
        </div>
      ))}
    </section>
  );
};

export default Services;
