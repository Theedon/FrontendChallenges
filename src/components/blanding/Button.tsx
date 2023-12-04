import { ButtonHTMLAttributes, Children, ReactNode, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import cn from "@/lib/utils";
import { FC } from "react";

const buttonVariants = cva(
  "shadow-md px-3 transform scale-100 hover:scale-105 duration-200 rounded-md py-2 text-blandingColors-white text-sm items-center",
  {
    variants: {
      variant: {
        primary: "bg-blandingColors-sRed",
        info: "bg-blandingColors-sBlue",
      },
      size: {
        small: " px-3",
        medium: "px-6",
        full: "py-2 px-4 w-full",
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
export default Button;
