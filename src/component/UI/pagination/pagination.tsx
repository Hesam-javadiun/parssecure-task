import howDoesPaginationShowLookLike from "./pagination-helper";
import icons from "../icons";
import Button from "@/component/UI/button";

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
    firstNumbers,
    showThreeDotBeforeSelectedPage,
    middleNumbers,
    showThreeDotAfterSelectedPage,
    endNumbers,
  } = howDoesPaginationShowLookLike(selectedNumber, maxPaginationNumbers);

  // console.log(
  //   "firstNumbers",
  //   firstNumbers,
  //   "showThreeDotBeforeSelectedPage",
  //   showThreeDotBeforeSelectedPage,
  //   "middleNumbers",
  //   middleNumbers,
  //   "showThreeDotAfterSelectedPage",
  //   showThreeDotAfterSelectedPage,
  //   "endNumbers",
  //   endNumbers
  // );

  return (
    <ul className="flex flex-row items-center justify-center w-full gap-1 text-[0.6em]">
      {firstNumbers.length > 1 && (
        <li className="">
          <Button
            className=""
            onClick={goPreviousHandler}
            isSelected={false}
            disabled={selectedNumber === 1}
          >
            <icons.angleLeft className="w-4 h-4 text-gray-500"></icons.angleLeft>
          </Button>
        </li>
      )}
      {firstNumbers &&
        firstNumbers.map((number) => (
          <li className="" key={number}>
            <Button
              isSelected={number === selectedNumber}
              onClick={paginationNumberClickHandler.bind(null, number - 1)}
            >
              {number}
            </Button>
          </li>
        ))}
      {showThreeDotBeforeSelectedPage && (
        <icons.dotsHorizon className="text-slate-600"></icons.dotsHorizon>
      )}
      {middleNumbers &&
        middleNumbers.map((number) => (
          <li className="" key={number}>
            <Button
              isSelected={number === selectedNumber}
              onClick={paginationNumberClickHandler.bind(null, number - 1)}
            >
              {number}
            </Button>
          </li>
        ))}
      {showThreeDotAfterSelectedPage && (
        <icons.dotsHorizon className="text-slate-600"></icons.dotsHorizon>
      )}
      {endNumbers &&
        endNumbers.map((number) => (
          <li className="" key={number}>
            <Button
              isSelected={number === selectedNumber}
              onClick={paginationNumberClickHandler.bind(null, number - 1)}
            >
              {number}
            </Button>
          </li>
        ))}
      {firstNumbers.length > 1 && (
        <li className="">
          <Button
            onClick={goNextHandler}
            isSelected={false}
            disabled={selectedNumber === maxPaginationNumbers}
          >
            <icons.angleRight className="w-4 h-4 text-gray-500"></icons.angleRight>
          </Button>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
