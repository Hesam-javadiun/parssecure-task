type StateType<T> = {
  maxPaginationNumbers: number;
  selectedNumber: number;
  shownItems: T[];
};

type PreviousOrNextAction<T> = {
  type: "MOVE_TO_PREVIOUS_INDEX" | "MOVE_TO_NEXT_INDEX";
  payload: T[];
};

type JumpToIndexAction<T> = {
  type: "JUMP_TO_INDEX";
  payload: {
    index: number;
    list: T[];
  };
};

type ListChangeAction<T> = {
  type: "LIST_CHANGE";
  payload: StateType<T>;
};

type ActionType<T> =
  | PreviousOrNextAction<T>
  | JumpToIndexAction<T>
  | ListChangeAction<T>;

const reducer = function <T>(
  pervState: StateType<T>,
  action: ActionType<T>
): StateType<T> {
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
    case "LIST_CHANGE": {
      return action.payload;
    }
    default: {
      return pervState;
    }
  }
};

export default reducer;

export const filterList = function (
  selectedNumber: number,
  numberItemsNeedToBeShownInEachPage: number,
  list: unknown[]
) {
  const copyOfList = [...list];
  const selectedIndex = selectedNumber - 1;
  const shownItems = copyOfList.splice(
    selectedIndex * numberItemsNeedToBeShownInEachPage,
    numberItemsNeedToBeShownInEachPage
  );

  return shownItems;
};

export const createInitialState = (
  numberItemsNeedToBeShownInEachPage: number,
  list: unknown[]
) => ({
  maxPaginationNumbers: +(
    list.length / numberItemsNeedToBeShownInEachPage
  ).toFixed(),
  selectedNumber: 1,
  shownItems: filterList(1, numberItemsNeedToBeShownInEachPage, list),
});
