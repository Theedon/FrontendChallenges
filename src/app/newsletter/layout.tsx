import { Roboto } from "next/font/google";
import { ReactNode } from "react";
const roboto = Roboto({ weight: ["400", "700"], subsets: ["cyrillic"] });
function NewsLetterLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${roboto.className} flex w-full bg-newsletterColors-charcoal-grey sm:h-[100vh] sm:items-center sm:justify-center`}
    >
      {children}
    </div>
  );
}

export default NewsLetterLayout;
