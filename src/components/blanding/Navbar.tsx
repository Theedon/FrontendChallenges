"use client";
import bookmark_logo from "@/assets/blanding/logo-bookmark.svg";
import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import { Menu } from "lucide-react";
import facebook_logo from "@/assets/blanding/icon-facebook.svg";
import twitter_logo from "@/assets/blanding/icon-twitter.svg";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((s) => !s);
  };
  return (
    <nav className="fixed top-0 z-10 flex w-full bg-opacity-20 p-5 backdrop-blur-md md:justify-between">
      <div className="min-w-10 flex-1">
        <Image src={bookmark_logo} alt="bookmark logo" />
      </div>

      <div>
        <Menu className="z-50 cursor-pointer md:hidden" onClick={toggleMenu} />
        <section
          className={`${
            menuOpen ? "flex " : "hidden "
          } fixed inset-0 z-[-1] h-[100vh] w-[100vw] transform flex-col justify-center gap-5 bg-blandingColors-sBlue opacity-90 backdrop-blur-md transition-transform duration-300 ease-in-out md:hidden`}
        >
          <Button variant="navigation">FEATURES</Button>
          <Button variant="navigation">PRICING</Button>
          <Button variant="navigation">CONTACT</Button>

          <section className="flex items-center justify-center gap-5">
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
        </section>
      </div>

      <section className="flex-grow-1 hidden flex-1 flex-shrink items-center justify-evenly font-rubik md:flex">
        <Button variant="navigation">FEATURES</Button>
        <Button variant="navigation">PRICING</Button>
        <Button variant="navigation">CONTACT</Button>
        <Button size="medium">LOGIN</Button>
      </section>
    </nav>
  );
}

export default Navbar;
