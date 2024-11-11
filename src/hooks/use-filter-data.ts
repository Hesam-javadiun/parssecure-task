import { useEffect, useRef, useState } from "react";
import { filterHelper } from "@/utils";
import type { FormEvent } from "react";

const useFilterData = function <T>(unfilteredList: T[]) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const isFirstRender = useRef<boolean>(true);

  const [filteredList, setList] = useState(unfilteredList);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const timeoutId = setTimeout(() => {
      const filteredList = filterHelper.filterList(searchTerm, unfilteredList);
      setList(filteredList);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm, unfilteredList]);

  const searchTermChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value);
  };

  return {
    searchTermValue: searchTerm,
    searchTermChangeHandler,
    filteredList,
  };
};

export default useFilterData;
