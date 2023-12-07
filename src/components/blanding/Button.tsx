import { ButtonHTMLAttributes, Children, ReactNode, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import cn from "@/lib/utils";
import { FC } from "react";

const buttonVariants = cva(
  "font-semibold shadow-md px-3 hover:bg-blandingColors-black hover:text-blandingColors-white h-fit transform scale-100 hover:scale-105 hover:shadow-2xl duration-200 rounded-md py-2 text-blandingColors-white text-sm items-center",
  {
    variants: {
      variant: {
        primary: "bg-blandingColors-sRed ",
        info: "bg-blandingColors-sBlue ",
        navigation:
          "font-semibold bg-none text-blandingColors-white shadow-none text-md  rounded-none border-none",
      },
      size: {
        small: "px-3 h-10",
        medium: "px-6 h-12",
        full: "py-2 px-4 w-full h-14 ",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "small",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  ref?: React.Ref<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = forwardRef(
  ({ size, variant, className, children, ...props }, ref?) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(buttonVariants({ className, variant, size }))}
        {...props}
      >
        {children}{" "}
      </button>
    );
  },
);

Button.displayName = "Button";
export default Button;
