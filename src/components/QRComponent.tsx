import QRCode from "@/src/assets/images/image-qr-code.png";
import Image from "next/image";

function QRComponent() {
  return (
    <main className="flex min-h-[60vh] w-[38vh] flex-col gap-3 rounded-2xl border border-none bg-white p-3 shadow-2xl">
      <Image
        // className="min-h-40 w-full rounded-2xl"
        className="min-h-40 w-full scale-100 transform rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105"
        src={QRCode}
        alt="QRCode"
      ></Image>
      <section className="flex flex-col gap-3 p-2">
        <h1 className="font-outfit text-lg text-center font-bold">
          Improve your front-end skills by building projects
        </h1>
        <p className="font-outfit text-sm text-center">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </section>
    </main>
  );
}

export default QRComponent;
