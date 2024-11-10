import howDoesPaginationShowLookLike from "./pagination-helper";

type PaginationProps = {
  maxPaginationNumbers: number;
  selectedNumber: number;
  goNextHandler: () => void;
  goPreviousHandler: () => void;
  paginationNumberClickHandler: (index: number) => void;
};

const Pagination = function ({
  maxPaginationNumbers,
  selectedNumber,
  goNextHandler,
  goPreviousHandler,
  paginationNumberClickHandler,
}: PaginationProps) {
    
  const {
    rightNumbers,
    showThreeDotBeforeSelectedPage,
    middleNumbers,
    showThreeDotAfterSelectedPage,
    leftNumbers,
  } = howDoesPaginationShowLookLike(selectedNumber, maxPaginationNumbers);

  return (
    <ul>
      <li>
        <button>previous</button>
      </li>
      {rightNumbers && <></>}
      {showThreeDotBeforeSelectedPage && <></>}
      {middleNumbers && <></>}
      {showThreeDotAfterSelectedPage && <></>}
      {leftNumbers && <></>}
      <li>
        <button>next</button>
      </li>
    </ul>
  );
};

export default Pagination;
