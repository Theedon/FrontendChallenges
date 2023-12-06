import bookmark_logo from "@/assets/blanding/logo-bookmark-black.svg";
import facebook_logo from "@/assets/blanding/icon-facebook.svg";
import twitter_logo from "@/assets/blanding/icon-twitter.svg";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bottom-0 mb-0 flex h-[40vh] w-full flex-col items-center justify-center gap-5 overflow-y-hidden bg-blandingColors-dBlue px-10 md:h-16 md:flex-row md:justify-between">
      <section className="flex flex-col items-center gap-4 text-sm text-blandingColors-white md:flex-row">
        <Image src={bookmark_logo} alt="bookmark logo" />
        <h3>FEATURES</h3>
        <h3>PRICING</h3>
        <h3>CONTACT</h3>
      </section>

      <section className="flex gap-7">
        <Image
          className="scale-110 transform cursor-pointer duration-200 hover:scale-105"
          src={facebook_logo}
          alt="facebook logo"
        />
        <Image
          className="scale-110 transform cursor-pointer duration-200 hover:scale-105"
          src={twitter_logo}
          alt="twitter logo"
        />
      </section>
    </footer>
  );
}

export default Footer;
