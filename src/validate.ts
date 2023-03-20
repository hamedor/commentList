export const removeErrors = (
    element: HTMLElement,
    validationStatus: boolean,
    toRemove: any
  ) => {
    let errors = element.parentElement.nextElementSibling.children;

    for (let err of errors) {
      let child = err.querySelector(`:scope > ${toRemove}`);

      if (child) {
        child.remove();
      }
      element.style.border = "1px solid black";
    }
    return (validationStatus = false);
  };

export const validate = (
    element: HTMLElement,
    text: string,
    validationStatus: boolean,
    err: any,
    allowedMin: number,
    allowedMax: any,
    whatIsChecked: string
  ) => {

    const makeBorderRed = () => {
      let el = element.parentElement.children;

      for (let item of el) {
        let a = item as HTMLElement;
        if (a.className === whatIsChecked) {
          a.style.border = "1px solid red";
        }
      }
    };

    if (whatIsChecked === "datepicker") {
      if (Date.parse(text) > Date.parse(allowedMax)) {
        element.parentElement.nextElementSibling.firstElementChild.insertAdjacentHTML(
          "afterbegin",
          err.max
        );

        validationStatus = true;
        makeBorderRed();
        return validationStatus;
      }
    }

    if (!text) {
      element.parentElement.nextElementSibling.firstElementChild.insertAdjacentHTML(
        "afterbegin",
        err.empty
      );

      validationStatus = true;
      makeBorderRed();
      return validationStatus;
    }

    if (!text || text.length < allowedMin) {
      element.parentElement.nextElementSibling.firstElementChild.insertAdjacentHTML(
        "afterbegin",
        err.min
      );

      validationStatus = true;
      makeBorderRed();
      return validationStatus;
    }

    if (text.length > allowedMax) {
      element.parentElement.nextElementSibling.firstElementChild.insertAdjacentHTML(
        "afterbegin",
        err.max
      );

      validationStatus = true;
      makeBorderRed();
      return validationStatus;
    }
  };
