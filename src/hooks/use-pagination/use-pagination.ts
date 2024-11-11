import { useCallback, useReducer, useEffect } from "react";
import reducer, { filterList, createInitialState } from "./reducer";

type usePaginationInputs<C> = {
  list: C[];
  numberItemsNeedToBeShownInEachPage: number;
};

const usePagination = function <T>({
  list,
  numberItemsNeedToBeShownInEachPage,
}: usePaginationInputs<T>) {
  const [state, dispatch] = useReducer(
    reducer,
    list,
    createInitialState.bind(null, numberItemsNeedToBeShownInEachPage)
  );

  useEffect(() => {
    const newState = createInitialState(
      numberItemsNeedToBeShownInEachPage,
      list
    );

    dispatch({
      type: "LIST_CHANGE",
      payload: newState,
    });
  }, [list, dispatch, numberItemsNeedToBeShownInEachPage]);

  const { selectedNumber, maxPaginationNumbers } = state;
  const shownItems = state.shownItems as T[];

  const paginationNumberClickHandler = useCallback(
    (index: number) => {
      const isSelected = index + 1 === selectedNumber;
      if (isSelected) {
        return;
      }
      dispatch({
        type: "JUMP_TO_INDEX",
        payload: {
          index,
          list: filterList(index + 1, numberItemsNeedToBeShownInEachPage, list),
        },
      });
    },
    [list, dispatch, numberItemsNeedToBeShownInEachPage, selectedNumber]
  );

  const goNextHandler = useCallback(() => {
    const isLastNumber = selectedNumber === maxPaginationNumbers;
    if (isLastNumber) {
      return;
    }

    dispatch({
      type: "MOVE_TO_NEXT_INDEX",
      payload: filterList(
        selectedNumber + 1,
        numberItemsNeedToBeShownInEachPage,
        list
      ),
    });
  }, [
    list,
    dispatch,
    numberItemsNeedToBeShownInEachPage,
    selectedNumber,
    maxPaginationNumbers,
  ]);

  const goPreviousHandler = useCallback(() => {
    const isFirstNumber = selectedNumber === 1;
    if (isFirstNumber) {
      return;
    }

    dispatch({
      type: "MOVE_TO_PREVIOUS_INDEX",
      payload: filterList(
        selectedNumber - 1,
        numberItemsNeedToBeShownInEachPage,
        list
      ),
    });
  }, [list, dispatch, numberItemsNeedToBeShownInEachPage, selectedNumber]);

  return {
    selectedNumber,
    maxPaginationNumbers,
    shownItems,
    goNextHandler,
    goPreviousHandler,
    paginationNumberClickHandler,
  };
};

export default usePagination;
