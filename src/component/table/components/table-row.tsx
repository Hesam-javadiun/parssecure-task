import type { ComponentPropsWithoutRef, ReactNode } from "react";

type TableRowProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<"tr">;

const TableRow = function ({ children, ...restOfProps }: TableRowProps) {
  const { className, ...attributes } = restOfProps;
  return (
    <tr
      {...attributes}
      className={`flex items-center gap-4 justify-evenly  ${
        className ?? ""
      }`}
    >
      {children}
    </tr>
  );
};

export default TableRow;
