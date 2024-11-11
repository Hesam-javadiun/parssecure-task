import { useDataContext, usePagination, useFilterData } from "@/hooks";
import Pagination from "@/component/UI/pagination";
import inputs from "@/component/UI/inputs";
import icons from "@/component/UI/icons";
import { TableLayout, TableGrid } from "./components";
import { useCallback, useRef } from "react";

const Table = function () {
  const { list } = useDataContext();
  const selectedItemRef = useRef<null | string>(null);

  const { filteredList, searchTermValue, searchTermChangeHandler } =
    useFilterData(list);

  const {
    goNextHandler,
    goPreviousHandler,
    paginationNumberClickHandler,
    maxPaginationNumbers,
    selectedNumber,
    shownItems,
  } = usePagination({
    list: filteredList,
    numberItemsNeedToBeShownInEachPage: 10,
  });

  const threeDotClickHandler = useCallback((id: string) => {
    selectedItemRef.current = id;
  }, []);

  return (
    <TableLayout
      searchInput={
        <inputs.textInput
          className="text-[0.8em] font-semibold text-slate-700 rounded-3xl"
          placeholder="search text ..."
          value={searchTermValue}
          onChange={searchTermChangeHandler}
          icon={<icons.search className="text-gray-300" />}
        />
      }
      pagination={
        <Pagination
          goNextHandler={goNextHandler}
          goPreviousHandler={goPreviousHandler}
          paginationNumberClickHandler={paginationNumberClickHandler}
          maxPaginationNumbers={maxPaginationNumbers}
          selectedNumber={selectedNumber}
        />
      }
    >
      <TableGrid list={shownItems} clickHandler={threeDotClickHandler} />
    </TableLayout>
  );
};

export default Table;
