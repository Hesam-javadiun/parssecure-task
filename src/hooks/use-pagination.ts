import { useCallback, useReducer } from "react";

type StateType = {
  maxPaginationNumbers: number;
  selectedNumber: number;
  shownItems: unknown[];
};

type PreviousOrNextAction = {
  type: "MOVE_TO_PREVIOUS_INDEX" | "MOVE_TO_NEXT_INDEX";
  payload: unknown[];
};

type JumpToIndexAction = {
  type: "JUMP_TO_INDEX";
  payload: {
    index: number;
    list: unknown[];
  };
};

type ActionType = PreviousOrNextAction | JumpToIndexAction;

const reducer = function (pervState: StateType, action: ActionType) {
  switch (action.type) {
    case "MOVE_TO_NEXT_INDEX": {
      return {
        ...pervState,
        selectedNumber: pervState.selectedNumber + 1,
        shownItems: action.payload,
      };
    }
    case "MOVE_TO_PREVIOUS_INDEX": {
      return {
        ...pervState,
        selectedNumber: pervState.selectedNumber - 1,
        shownItems: action.payload,
      };
    }
    case "JUMP_TO_INDEX": {
      return {
        ...pervState,
        selectedNumber: action.payload.index + 1,
        shownItems: action.payload.list,
      };
    }
    default: {
      return pervState;
    }
  }
};

const filterList = function (
  selectedNumber: number,
  numberItemsNeedToBeShownInEachPage: number,
  list: unknown[]
) {
  const copyOfList = [...list];
  const selectedIndex = selectedNumber - 1;
  const shownItems = copyOfList.splice(
    selectedIndex * (numberItemsNeedToBeShownInEachPage - 1),
    numberItemsNeedToBeShownInEachPage
  );

  return shownItems;
};

const createInitialState = (
  numberItemsNeedToBeShownInEachPage: number,
  list: unknown[]
) => ({
  maxPaginationNumbers: +(
    list.length / numberItemsNeedToBeShownInEachPage
  ).toFixed(),
  selectedNumber: 1,
  shownItems: filterList(1, numberItemsNeedToBeShownInEachPage, list),
});

type usePaginationInputs = {
  list: unknown[];
  numberItemsNeedToBeShownInEachPage: number;
};

const usePagination = function ({
  list,
  numberItemsNeedToBeShownInEachPage,
}: usePaginationInputs) {
  const [state, dispatch] = useReducer(
    reducer,
    list,
    createInitialState.bind(null, numberItemsNeedToBeShownInEachPage)
    // {
    //   maxPaginationNumbers: 10,
    //   selectedNumber: 1,
    //   shownItems: list,
    // }
  );
  const { selectedNumber } = state;
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
    const isLastNumber = selectedNumber === numberItemsNeedToBeShownInEachPage;
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
  }, [list, dispatch, numberItemsNeedToBeShownInEachPage, selectedNumber]);

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
    ...state,
    goNextHandler,
    goPreviousHandler,
    paginationNumberClickHandler,
  };
};

export default usePagination;
