import bookmark_logo from "@/assets/blanding/logo-bookmark.svg";
import Image from "next/image";
import Button from "./Button";

function Navbar() {
  return (
    <nav className=" flex md:justify-between">
      <div className="min-w-10 flex-1 ">
        <Image src={bookmark_logo} alt="bookmark logo"></Image>
      </div>

      <section className="flex-grow-1 flex flex-1 flex-shrink items-center justify-evenly font-rubik">
        <h3>FEATURES</h3>
        <h3>PRICING</h3>
        <h3>CONTACT</h3>
        <Button size="medium">LOGIN</Button>
      </section>
    </nav>
  );
}

export default Navbar;
