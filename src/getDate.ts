import { removeErrors, validate } from "./validate";

const getDate = (
    errors:any,
    date: string,
    picker: HTMLInputElement,
    dateValidationArray: boolean,
    shuoldValidate: boolean
  ) => {
    const array = date.split("-");
    const day: string = array[2];

    const month: string = array[1];
    const year: string = array[0];

    const result = day + "." + month + "." + year;

    const resultToValidate = year + '-' + month + '-' + day;


    if (shuoldValidate) {
      dateValidationArray = removeErrors(
        picker,
        dateValidationArray,
        ".invalidDate"
      );
      dateValidationArray = validate(
        picker,
        resultToValidate,
        dateValidationArray,
        errors.date,
        3,
        picker.max,
        "datepicker"
      );
    }

    return result;
  };

  export default getDate;