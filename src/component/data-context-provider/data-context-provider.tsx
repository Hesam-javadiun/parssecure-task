import { DataContext } from "./context";
import type { ReactNode } from "react";
import { useCallback, useState } from "react";
import type { ListItem } from "@/api";

export type StateType = {
  list: ListItem[];
  mutateListItem: (index: number, newItem: ListItem) => void;
};

type DataContextProviderPropsType = {
  children: ReactNode;
  listOfData: ListItem[];
};

const DataContextProvider = ({
  children,
  listOfData,
}: DataContextProviderPropsType) => {
  //   ToDo
  //   const sortedList = useMemo(() => {}, []);

  const [list, setList] = useState<ListItem[]>(listOfData);

  const mutateList = useCallback(
    (index: number, newItem: ListItem) => {
      setList((pervList: ListItem[]) => {
        const newList = [...pervList];
        newList[index] = newItem;
        return newList;
      });
    },
    [setList]
  );

  return (
    <DataContext.Provider
      value={{
        list,
        mutateListItem: mutateList,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
