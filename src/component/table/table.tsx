import { useDataContext, usePagination, useFilterData } from "@/hooks";
import Pagination from "@/component/UI/pagination";
import inputs from "@/component/UI/inputs";
import icons from "@/component/UI/icons";
import Modal from "@/component/UI/modal/modal";
import { TableLayout, TableGrid } from "./components";
import { useCallback, useRef, useState } from "react";
import Form from "@/component/form";

const Table = function () {
  const { list } = useDataContext();
  const selectedItemRef = useRef<null | string>(null);
  const [needToShowModal, setNeedToShowModal] = useState(false);
  
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
    setNeedToShowModal(true);
  }, []);

  const closeModalHandler = useCallback(() => {
    setNeedToShowModal(false);
  }, []);

  const modal = needToShowModal && (
    <Modal>
      <Form
        id={selectedItemRef.current as string}
        closeModalHandler={closeModalHandler}
      />
    </Modal>
  );

  return (
    <>
      <TableLayout
        searchInput={
          <inputs.Input
            className="text-[0.8em] font-semibold text-slate-700 rounded-3xl"
            placeholder="search text ..."
            value={searchTermValue}
            type="text"
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
      {modal}
    </>
  );
};

export default Table;
