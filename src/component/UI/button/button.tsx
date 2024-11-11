import { ComponentPropsWithoutRef, ReactNode } from "react";
type ButtonProps = {
  children: ReactNode;
  isSelected?: boolean;
} & ComponentPropsWithoutRef<"button">;

const Button = function ({
  children,
  isSelected = false,
  ...buttonAttribute
}: ButtonProps) {
  const { className, ...attributes } = buttonAttribute;

  return (
    <button
      {...attributes}
      className={`rounded-full px-3 py-1 custom-transition ${
        attributes.disabled ? "" : "hover:bg-indigo-400"
      } ${isSelected ? "bg-indigo-400" : ""} ${className ?? ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
