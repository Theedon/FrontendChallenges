import listIcon from "@/assets/newsletter/icon-list.svg";
import successIcon from "@/assets/newsletter/icon-success.svg";
import desktopImage from "@/assets/newsletter/illustration-sign-up-desktop.svg";
import mobileImage from "@/assets/newsletter/illustration-sign-up-desktop.svg";
import Image from "next/image";

function Newsletter() {
  return (
    <main className="font-roboto flex max-h-[70vh] max-w-[100vh] rounded-2xl">
      <section className="flex flex-1 flex-col justify-center gap-5 px-5">
        <h2 className="font-roboto text-2xl font-bold">Stay Updated!</h2>
        <p className="text-sm">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="flex items-center text-sm ">
          <Image alt="list icon" src={listIcon} className="mr-2 h-6 w-6" />
          Product discovery and building what matters
        </ul>
        <ul className="flex items-center text-sm ">
          <Image
            alt="list icon"
            src={listIcon}
            className="items mr-2 h-6 w-6"
          />
          Measuring to ensure updates are a success
        </ul>
        <ul className="flex items-center text-sm ">
          <Image alt="list icon" src={listIcon} className="mr-2 h-6 w-6" />
          And much more!
        </ul>

        <div className="">
          <label htmlFor="email" className="text-xs font-bold">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border-newsletterColors-grey focus:border-newsletterColors-tomato focus:bg-qrColors-light-gray hover:border-newsletterColors-tomato h-10 w-full rounded-lg border-2 p-4 text-sm outline-none"
            placeholder="email@company.com"
          />
        </div>
        <button className="text-newsletterColors-white bg-newsletterColors-dark-slate-grey h-10 w-full rounded-lg text-sm">
          Subscribe to monthly newsletter
        </button>
      </section>
      <section className="flex-1">
        <Image
          src={desktopImage}
          alt="image showing sign in"
          className="w-fill h-fill lg:flex"
        />
      </section>
    </main>
  );
}

export default Newsletter;
