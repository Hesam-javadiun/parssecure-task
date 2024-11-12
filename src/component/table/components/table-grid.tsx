import { TableCell, TableRow, Tag } from ".";
import type { ListItem } from "@/api";
import icons from "@/component/UI/icons";
// type ListItemKeys = keyof ListItem;

type TableHeaderSchema = Partial<{
  [key in keyof ListItem]: string;
}>;

const tableHeaders: TableHeaderSchema = {
  name: "Name",
  tags: "Tags",
  contain: "Contain",
  level: "Level",
  date: "Start Date",
};

type TableGridProps = {
  list: ListItem[];
  clickHandler: (id: string) => void;
  searchTerm: string;
};

//todo
//add memo with arePropsEqual condition to avoid searchTerm changes uncessaryly rerender

const TableGrid = function ({ list, clickHandler }: TableGridProps) {
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
                <icons.dotsVertical className="font-semibold "></icons.dotsVertical>
              </button>
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </table>
  );
};

export default TableGrid;

// function arePropsEqual(oldProps: TableGridProps, newProps: TableGridProps) {
//   if (oldProps.searchTerm === newProps.searchTerm) {
//     return false;
//   };

//   const oldList = oldProps.list;
//   const newList = newProps.list;

//   if(oldList.length !== newList.length){
//     return false
//   }

//   console.log('old list', oldList, 'new list', newList);
//   const condition = oldList.every(
//     (oldItem, index) => oldItem.id === newList[index].id
//   );
//   return condition;
// }
