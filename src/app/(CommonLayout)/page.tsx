import First5Star from "@/components/pages/homepage/First5Star";
import HeartOf from "@/components/pages/homepage/HeartOf";
import Hero from "@/components/pages/homepage/Hero";
import KnowMore from "@/components/pages/homepage/KnowMore";
import Services from "@/components/pages/homepage/Services";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <First5Star />
      <Services />
      <HeartOf />
      <KnowMore />
    </main>
  );
};

export default HomePage;
