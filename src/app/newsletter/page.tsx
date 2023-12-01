"use client";
import listIcon from "@/assets/newsletter/icon-list.svg";
import successIcon from "@/assets/newsletter/icon-success.svg";
import desktopImage from "@/assets/newsletter/illustration-sign-up-desktop.svg";
import mobileImage from "@/assets/newsletter/illustration-sign-up-mobile.svg";
import Image from "next/image";
import { emailSchema, subscribeSchema } from "@/lib/validators/newsletter";
import { useFormik } from "formik";
import { useState } from "react";
import { toFormikValidationSchema } from "zod-formik-adapter";

function Newsletter() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  type FormValues = {
    email: string;
  };
  const formik = useFormik<FormValues>({
    initialValues: { email: "" },
    onSubmit: async (values) => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log(values.email);
      setIsLoading(false);
    },

    validationSchema: toFormikValidationSchema(subscribeSchema),
  });
  const setButtonInvalid: () => boolean = () => {
    const { errors, values } = formik;
    if (errors.email || !values.email) {
      return true;
    }
    return false;
  };
  return (
    <main className="flex flex-col rounded-2xl font-roboto sm:max-h-[70vh] sm:max-w-[100vh] sm:flex-row ">
      <section className="flex flex-1 sm:hidden">
        <Image src={mobileImage} alt="image showing sign in" />
      </section>
      <section className="flex min-w-[60%] flex-1 flex-col justify-center gap-5 px-5">
        <h1 className="mt-4 font-roboto text-3xl font-bold">Stay Updated!</h1>
        <p className="text-sm">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="flex flex-col gap-2">
          <li className="flex text-sm">
            <Image alt="list icon" src={listIcon} className="mr-2 h-6 w-6" />
            Product discovery and building what matters
          </li>
          <li className="flex text-sm ">
            <Image
              alt="list icon"
              src={listIcon}
              className="items mr-2 h-6 w-6"
            />
            Measuring to ensure updates are a success
          </li>
          <li className="flex text-sm ">
            <Image alt="list icon" src={listIcon} className="mr-2 h-6 w-6" />
            And much more!
          </li>
        </ul>

        <form className="flex flex-col gap-1" onSubmit={formik.handleSubmit}>
          <div className="flex items-center justify-between text-xs font-bold">
            <label htmlFor="email">Email address</label>
            <p className=" text-newsletterColors-tomato">
              {formik.touched.email && formik.errors.email}
            </p>
          </div>

          <input
            {...formik.getFieldProps("email")}
            type="email"
            name="email"
            id="email"
            className={`h-12 w-full transform rounded-lg border border-newsletterColors-grey p-2 text-sm outline-none duration-300 hover:scale-x-105  focus:bg-qrColors-light-gray ${
              formik.touched.email && formik.errors.email
                ? "border-newsletterColors-tomato bg-[#FFE8E6] "
                : undefined
            }`}
            placeholder="email@company.com"
          />

          <button
            type="submit"
            disabled={setButtonInvalid()}
            className={`mt-2 h-12 w-full scale-100 transform cursor-pointer rounded-lg bg-newsletterColors-dark-slate-grey text-sm font-bold text-newsletterColors-white duration-300 focus:scale-105 ${
              setButtonInvalid() ? "opacity-80" : "undefined"
            }`}
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </section>
      <section className="hidden flex-1 sm:flex">
        <Image
          src={desktopImage}
          alt="image showing sign in"
          className="w-fill h-auto lg:flex"
        />
      </section>
    </main>
  );
}

export default Newsletter;
