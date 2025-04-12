// CommonLayout.tsx
import "../globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`flex min-h-screen flex-col antialiased ${montserrat.className}`}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
}
