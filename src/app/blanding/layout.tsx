import { Rubik } from "next/font/google";
import { ReactNode } from "react";

const rubik = Rubik({ weight: ["400", "500"], subsets: ["latin", "cyrillic"] });

function BlandingLayout({ children }: { children: ReactNode }) {
  return <div className={` ${rubik.className}`}>{children}</div>;
}

export default BlandingLayout;
