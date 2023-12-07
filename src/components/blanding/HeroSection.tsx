import Button from "./Button";
import bgHero from "@/assets/blanding/bgHero.svg";
import Image from "next/image";
import illustration_hero from "@/assets/blanding/illustration-hero.svg";

function HeroSection() {
  return (
    <section className="grid grid-cols-1 items-center justify-center text-blandingColors-gBlue md:grid-cols-2">
      <div className="order-last mt-28 flex w-[80%] flex-col justify-items-center gap-3 md:order-first md:mt-0">
        <h2 className="font-rubik text-5xl font-medium text-blandingColors-dBlue">
          A Simple Bookmark Manager
        </h2>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex flex-col items-center justify-start gap-3 sm:flex-row md:items-start">
          <Button size="full" variant="info">
            Get it on Chrome
          </Button>
          <Button
            size="full"
            className=" border-blandingColors-dBlue bg-newsletterColors-white text-[#000]"
          >
            Get it on Firefox
          </Button>
        </div>
      </div>

      <div className="relative">
        <Image
          src={illustration_hero}
          alt="illustration_hero"
          className="z-[1000]"
          priority
        />
        <Image
          className="absolute bottom-0 right-0 z-[-1] max-h-[70%] w-[90%] translate-x-1/4 translate-y-[10%]"
          src={bgHero}
          alt="background image"
        />
      </div>
    </section>
  );
}

export default HeroSection;
