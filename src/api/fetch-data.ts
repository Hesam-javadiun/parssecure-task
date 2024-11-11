import data from "@/data/data.json";

export type ListItem = {
  id: string;
  name: string;
  tags: string[];
  contain: string[];
  level: string;
  date: string;
};



const fetchData = (): ListItem[] => {
  return data.items

};

export default fetchData;
