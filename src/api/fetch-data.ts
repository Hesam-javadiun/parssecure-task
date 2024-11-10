import data from "@/data/data.json";

export type ListItem = {
  id: string;
  name: string;
  tags: string[];
  contain: string[];
  level: string;
  date: Date;
};

type DataItem = Omit<ListItem, "date"> & { date: string };

const fetchData = (): ListItem[] => {
  return (data.items as DataItem[]).map((item: DataItem) => {
    return {
      ...item,
      date: new Date(item.date),
    };
  });
};

export default fetchData;
