import { DataContext } from "@/component/data-provider/context";
import { useContext } from "react";

export default function useDataContext() {
  const state = useContext(DataContext);
  const list = state?.list ?? [];
  const mutateListItem = state?.mutateListItem ?? null;
  return { list, mutateListItem };
}
