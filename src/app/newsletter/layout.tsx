import { Roboto } from "next/font/google";
import { ReactNode } from "react";
const roboto = Roboto({ weight: ["400", "700"], subsets: ["cyrillic"] });
function NewsLetterLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${roboto.className} flex h-[100vh] w-full items-center justify-center`}
    >
      {children}
    </div>
  );
}

export default NewsLetterLayout;
