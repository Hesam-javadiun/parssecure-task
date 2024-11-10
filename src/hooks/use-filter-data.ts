import { useEffect, useRef, useState } from "react";
import { filterHelper } from "@/utils";
import type { FormEvent } from "react";

const useFilterData = function (unfilteredList: unknown[]) {
  const searchTermRef = useRef<string>("");
  const isFirstRender = useRef<boolean>(true);

  const [filteredList, setList] = useState(unfilteredList);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const timeoutId = setTimeout(() => {
      const filteredList = filterHelper.filterList(searchTermRef.current, unfilteredList);
      setList(filteredList);
    }, 1500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTermRef.current]);

  const searchTermChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    searchTermRef.current = event.currentTarget.value;
  };

  return {
    value: searchTermRef.current,
    searchTermChangeHandler,
    filteredList,
  };
};

export default useFilterData;
