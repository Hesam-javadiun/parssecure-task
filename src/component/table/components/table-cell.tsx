import type { ComponentPropsWithoutRef, ReactNode } from "react";

type TableCellPropsTypes<T extends "th" | "td"> = {
  children: ReactNode;
  as?: T;
  alignCenter?: boolean
} & ComponentPropsWithoutRef<T>;

const TableCell = function <C extends "th" | "td">({
  children,
  alignCenter = true,
  as,
  ...restOfProps
}: TableCellPropsTypes<C>) {
  const TableCellTag = as || "td";

  const { className, ...attributes } = restOfProps;
  return (
    <TableCellTag
      {...attributes}
      className={`flex items-center flex-grow-0 truncate flex-shrink-1  ${
        className ?? ""
      } ${alignCenter ? 'justify-center' : ''}`}
    >
      {children}
    </TableCellTag>
  );
};

export default TableCell;
