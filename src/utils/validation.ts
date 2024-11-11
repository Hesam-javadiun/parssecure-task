class Validation {
  

  isEmpty(str: string | unknown[]) {
    return str.length !== 0
  }

  doesItHaveAValidLength(str:string ){
    return str.length < 20
  }

  
}

export default Validation;
