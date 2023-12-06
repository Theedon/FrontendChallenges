"use client";
import Button from "./Button";
import { emailValidator } from "@/lib/validators/blanding";
import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { AlertCircle } from "lucide-react";

type FormValues = {
  email: string;
};
function FormSection() {
  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
    },
    onSubmit: () => {
      alert("thanks for your submission!");
    },
    validationSchema: toFormikValidationSchema(emailValidator),
  });

  const disableButton = () => {
    const { values, errors } = formik;
    if (!values.email || errors.email) return true;
    else return false;
  };
  return (
    <main className="flex h-[50vh] flex-col items-center justify-center gap-5 bg-blandingColors-sBlue text-blandingColors-white md:h-[40vh]">
      <h3 className="text-sm font-semibold">35,000+ already joined</h3>
      <p className="text-center text-3xl font-semibold">
        Stay up-to-date with what <br /> we are doing
      </p>
      <form
        className="flex flex-col gap-3 md:flex-row"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col justify-center gap-2">
          <input
            type="email"
            id="email"
            {...formik.getFieldProps("email")}
            placeholder="enter your email address "
            className={`h-10 rounded-md px-3 text-sm text-blandingColors-black outline-none ${
              formik.touched.email && formik.errors.email
                ? "border-blandingColors-sRed"
                : ""
            }`}
          />
          <p className="flex items-center gap-1 text-sm  text-blandingColors-sRed">
            {formik.errors.email && (
              <AlertCircle className="text-blandingColors-sRed" />
            )}
            {formik.touched.email && formik.errors.email}
          </p>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="small"
          disabled={disableButton()}
          className={`${disableButton() ? "cursor-not-allowed" : ""}`}
        >
          Contact Us
        </Button>
      </form>
    </main>
  );
}

export default FormSection;
