import successIcon from "@/assets/newsletter/icon-success.svg";
import Image from "next/image";
import Link from "next/link";
function SuccessDesktopNotification({
  email,
  setShowModal,
}: {
  email: string | undefined;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <main className="z-50 flex min-w-[200px] max-w-[35%] flex-shrink-0  flex-col gap-3 rounded-xl bg-newsletterColors-white p-4 font-roboto shadow-2xl">
      <Image src={successIcon} alt="success icon" className="h-10 w-10"></Image>
      <h1 className="text-3xl font-bold">Thanks for Subscribing!</h1>
      <p>
        A confirmation email has been sent to {email}. Please open it and click
        the button inside to confirm your subscription.
      </p>
      <Link href="/newsletter" className="items-center justify-center">
        <button
          onClick={() => setShowModal(false)}
          className="h-12 w-full scale-100 transform cursor-pointer rounded-lg bg-newsletterColors-dark-slate-grey text-center text-sm font-bold text-newsletterColors-white duration-300 hover:scale-105 "
        >
          Dismiss message
        </button>
      </Link>
    </main>
  );
}

export default SuccessDesktopNotification;
