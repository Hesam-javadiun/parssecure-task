import { TableCell, TableRow, Tag } from ".";
import type { ListItem } from "@/api";
import icons from "@/component/UI/icons";
// type ListItemKeys = keyof ListItem;
import { memo } from "react";

type TableHeaderSchema = Partial<{
  [key in keyof ListItem]: string;
}>;

const tableHeaders: TableHeaderSchema = {
  name: "Name",
  tags: "Tags",
  contain: "Contain",
  level: "Level",
  date: "Date",
};

type TableGridProps = {
  list: ListItem[];
  clickHandler: (id: string) => void;
};

const TableGrid = memo(function ({ list, clickHandler }: TableGridProps) {
  return (
    <table className="w-full text-[0.7em] mt-4">
      <thead>
        <TableRow>
          <TableCell
            scope="col"
            as="th"
            alignCenter={false}
            className="basis-1/4"
          >
            {tableHeaders.name}
          </TableCell>
          <TableCell scope="col" as="th" className=" basis-1/3">
            {tableHeaders.tags}
          </TableCell>
          <TableCell scope="col" as="th" className="basis-1/12">
            {tableHeaders.contain}
          </TableCell>
          <TableCell scope="col" as="th" className="basis-1/12">
            {tableHeaders.level}
          </TableCell>
          <TableCell scope="col" as="th" className="basis-1/12">
            {tableHeaders.date}
          </TableCell>
          <TableCell scope="col" as="th" className="basis-1/12">
            {"id"}
          </TableCell>
        </TableRow>
      </thead>
      <tbody className="flex flex-col gap-4 mt-4">
        {list.map((item) => (
          <TableRow key={item.id}>
            <TableCell
              scope="row"
              as="th"
              alignCenter={false}
              className="basis-1/4"
            >
              {item.name}
            </TableCell>
            <TableCell alignCenter={false} className=" basis-1/3">
              {item.tags.map((tag) => (
                <Tag key={tag} tagText={tag} />
              ))}
            </TableCell>
            <TableCell className="basis-1/12">{item.contain}</TableCell>
            <TableCell className="basis-1/12">{item.level}</TableCell>
            <TableCell className="basis-1/12">{item.date}</TableCell>
            <TableCell className="basis-1/12">
              <button onClick={clickHandler.bind(null, item.id)}>
                <p>{item.id}</p>
                <icons.dotsVertical className="font-semibold "></icons.dotsVertical>
              </button>
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </table>
  );
}, arePropsEqual);

export default TableGrid;

function arePropsEqual(oldProps: TableGridProps, newProps: TableGridProps) {
  const firstOldItem = oldProps.list[0];
  const lastOldItem = oldProps.list[oldProps.list.length - 1];
  const firstNewItem = newProps.list[0];
  const lastNewItem = newProps.list[newProps.list.length - 1];
  return (
    firstOldItem.id === lastOldItem.id && firstNewItem.id === lastNewItem.id
  );
}
