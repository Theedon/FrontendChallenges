import bookmark_logo from "@/assets/blanding/logo-bookmark-black.svg";
import facebook_logo from "@/assets/blanding/icon-facebook.svg";
import twitter_logo from "@/assets/blanding/icon-twitter.svg";
import Image from "next/image";
function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 flex h-16 w-full items-center justify-between bg-blandingColors-dBlue px-10">
      <section className="text-blandingColors-white flex items-center gap-4 text-sm">
        <Image src={bookmark_logo} alt="bookmark logo" />
        <h3>FEATURES</h3>
        <h3>PRICING</h3>
        <h3>CONTACT</h3>
      </section>

      <section className="flex gap-4">
        <Image src={facebook_logo} alt="facebook logo" />
        <Image src={twitter_logo} alt="twitter logo" />
      </section>
    </footer>
  );
}

export default Footer;
