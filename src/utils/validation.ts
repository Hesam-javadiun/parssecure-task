class Validation {
  

  isEmpty(str: string | unknown[]) {
    return str.length === 0
  }

  itHasAValidLength(str:string ){
    return str.length <= 20
  }

  endDateIsSmallerThanStartDate(startDate: Date, endDate: Date){
    return endDate < startDate
  }
  
}

export default Validation;
