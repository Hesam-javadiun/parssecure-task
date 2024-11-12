import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import Typography from "@/component/UI/typography";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  icon?: ReactNode;
  gotError?: boolean;
};

const Input = function Input({
  icon,
  gotError = false,
  ...inputAttributes
}: InputProps) {
  return (
    <Typography className="relative">
      <input
        {...inputAttributes}
        className={`border-[1px] border-solid py-2 ${
          gotError ? "border-red-500" : "border-gray-300"
        } w-full flex items-center rounded-full  px-4 ${
          inputAttributes.className
        } ${icon && "pr-8"}`}
      />
      {icon && (
        <span className="absolute -translate-y-1/2 right-2 top-1/2">
          {icon}
        </span>
      )}
    </Typography>
  );
};

export default Input;
