type PaginationPartsType = {
  rightNumbers: number[];
  middleNumbers?: number[];
  leftNumbers?: number[];
};

export default function howDoesPaginationShowLookLike(
  selectedNumber: number,
  maxPaginationNumbers: number
) {
  let showThreeDotBeforeSelectedPage = true,
    showThreeDotAfterSelectedPage = true;

  const paginationParts: PaginationPartsType = { rightNumbers: [] };

  //scenario one    < 1 2 3 4 5 > 
  if (isThereAMaximumFivePaginateNumberOrBelow(maxPaginationNumbers)) {
    showThreeDotBeforeSelectedPage = false;
    showThreeDotAfterSelectedPage = false;

    let i = 1;
    while (i <= maxPaginationNumbers) {
      paginationParts.rightNumbers.push(i);
      i++;
    }
  }

  //scenario two  < 1 2 3 4 ... 100 > 
  if (
    !isThereAMaximumFivePaginateNumberOrBelow(maxPaginationNumbers) &&
    isSelectedPaginateCloseToStart(selectedNumber)
  ) {
    showThreeDotBeforeSelectedPage = false;

    let i = 1;
    while (i <= selectedNumber + 1) {
      paginationParts.rightNumbers.push(i);
      i++;
    }
  }

  //scenario three  < 1 2 ... 96 97 98 99 100 > 
  if (
    !isThereAMaximumFivePaginateNumberOrBelow(maxPaginationNumbers) &&
    isSelectedPaginateCloseToEnd(selectedNumber, maxPaginationNumbers)
  ) {
    showThreeDotAfterSelectedPage = false;

    paginationParts.rightNumbers = [1, 2];
    paginationParts.leftNumbers = [];
    let i = selectedNumber - 1;
    while (i <= maxPaginationNumbers) {
      paginationParts.leftNumbers.push(i);
      i++;
    }
  }


  //scenario four   < 1 2 ... 49 50 51 ... 99 100 >
  if (
    !isThereAMaximumFivePaginateNumberOrBelow(maxPaginationNumbers) &&
    !isSelectedPaginateCloseToEnd(selectedNumber, maxPaginationNumbers) &&
    !isSelectedPaginateCloseToStart(selectedNumber)
  ) {
    paginationParts.rightNumbers = [1, 2];
    paginationParts.middleNumbers = [
      selectedNumber - 1,
      selectedNumber,
      selectedNumber + 1,
    ];
    paginationParts.leftNumbers = [maxPaginationNumbers - 1, maxPaginationNumbers];
  }

  return {
    ...paginationParts,
    showThreeDotBeforeSelectedPage,
    showThreeDotAfterSelectedPage,
  };
}

function isThereAMaximumFivePaginateNumberOrBelow(
  maxPaginationNumbers: number
) {
  return maxPaginationNumbers <= 5;
}

function isSelectedPaginateCloseToStart(selectedNumber: number) {
  return selectedNumber <= 4;
}

function isSelectedPaginateCloseToEnd(
  selectedNumber: number,
  maxPaginationNumbers: number
) {
  return selectedNumber >= maxPaginationNumbers - 4;
}
