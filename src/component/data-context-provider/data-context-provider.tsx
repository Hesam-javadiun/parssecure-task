import { DataContext } from "./context";
import type { ReactNode } from "react";
import { useCallback, useState } from "react";
import data from "@/data/data.json";
type ListItem = {
  id: string;
  name: string;
  tags: string[];
  contain: ["Link", "HTML"];
  level: "Normal" | "Low" | "High";
  Date: Date;
};

const fetchData = () => {
  console.log("data", typeof data, data);
  return data;
};
export type StateType = {
  list: ListItem[];
  mutateListItem: (index: number, newItem: ListItem) => void;
};

type DataContextProviderPropsType = {
  children: ReactNode;
};

const DataContextProvider = ({ children }: DataContextProviderPropsType) => {
  const data = fetchData();
  const [list, setList] = useState<ListItem[]>(data);

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
