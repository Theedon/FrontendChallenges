import { Rubik } from "next/font/google";
import { ReactNode } from "react";
import Footer from "@/components/blanding/Footer";
import Navbar from "@/components/blanding/Navbar";

const rubik = Rubik({ weight: ["400", "500"], subsets: ["latin", "cyrillic"] });

function BlandingLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={` ${rubik.className} flex flex-col justify-around px-10 pt-4`}
    >
      <Navbar />
      {children} <Footer />
    </div>
  );
}

export default BlandingLayout;
