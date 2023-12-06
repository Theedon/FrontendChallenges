import { Rubik } from "next/font/google";
import { ReactNode } from "react";
import Footer from "@/components/blanding/Footer";
import Navbar from "@/components/blanding/Navbar";
import FormSection from "@/components/blanding/FormSection";

const rubik = Rubik({ weight: ["400", "500"], subsets: ["latin", "cyrillic"] });

function BlandingLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={` ${rubik.className} flex max-w-full flex-col justify-around overflow-x-hidden`}
    >
      <Navbar />
      <div className=" p-10">{children}</div>

      <FormSection />

      <Footer />
    </div>
  );
}

export default BlandingLayout;
