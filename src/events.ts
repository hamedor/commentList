import RootObject from "./interfaces/Comment";
import renderComments from "./renderComments";
import { toLocalStorage, fromLocalStorage } from "./index";

import likeComment from "./likeComment";
import deleteComment from "./deleteComment";
import sendComment from "./sendComment";
import { removeErrors, validate } from "./validate";
import getDate from "./getDate";

export const events = () => {

  const errors = {
    text: {
      min: "<p class='invalidText invalid'>в поле текст должно быть не меньше 3 символов</p>",
      max: "<p class='invalidText invalid'>в поле текст должно быть не больше 200 символов</p>",
      empty: "<p class='invalidText invalid'>поле текст не заполнено</p>",
    },
    name: {
      min: "<p class='invalidName invalid'>в поле имя должно быть не меньше 3 символов</p>",
      max: "<p class='invalidName invalid'>в поле имя должно быть не больше 10 символов</p>",
      empty: "<p class='invalidName invalid'>поле имя не заполнено</p>",
    },
    date: {
      max: "<p class='invalidDate invalid'>дата не может быть больше текущей</p>",
    },
  };
  

  const likeButtons = document.querySelectorAll(".likeButton") as NodeList;
  let likedArray = new Array(likeButtons.length);
  
  let textValidationArray = new Array(likeButtons.length);
  let nameValidationArray = new Array(likeButtons.length);
  let dateValidationArray = new Array(likeButtons.length);


    const openFormButtons = document.querySelectorAll(".openForm") as NodeList;
    const answerCommentButtons = document.querySelectorAll(
      ".answerComment"
    ) as NodeList;
    const deleteButtons = document.querySelectorAll(
      ".deleteButton"
    ) as NodeList;
   

    const textarea = document.querySelectorAll(".textarea") as NodeList;
    const datepicker = document.querySelectorAll(".datepicker") as NodeList;
    const nameinput = document.querySelectorAll(".nameinput") as NodeList;

    let textArray = new Array(textarea.length);
    let nameArray = new Array(textarea.length);
    let dateArray = new Array(textarea.length);
    let timeArray = new Array(textarea.length);

    for (let i = 0; i < openFormButtons.length; i++) {
      openFormButtons[i].addEventListener("click", () => {
        openFormButtons[i].parentElement.classList.add("opened");
      });
    }




    for (let i = 0; i < textarea.length; i++) {
      let input = textarea[i] as HTMLElement;
      if (input.getAttribute("listener") !== "true") {
        input.setAttribute("listener", "true");
        input.addEventListener("input", (e) => {
          const target = e.target as HTMLElement;
          textArray[i] = (target as HTMLTextAreaElement).value;

          textValidationArray[i] = removeErrors(
            input,
            textValidationArray[i],
            ".invalidText"
          );
        });
        input.addEventListener("keypress", (e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            let parentId = +input.parentElement.parentElement.parentElement.id;

            nameValidationArray[i] = removeErrors(
              input,
              nameValidationArray[i],
              ".invalidName"
            );
            textValidationArray[i] = removeErrors(
              input,
              textValidationArray[i],
              ".invalidText"
            );

            nameValidationArray[i] = validate(
              input,
              nameArray[i],
              nameValidationArray[i],
              errors.name,
              3,
              10,
              "nameinput"
            );
            textValidationArray[i] = validate(
              input,
              textArray[i],
              textValidationArray[i],
              errors.text,
              3,
              200,
              "textarea"
            );

            if (!textValidationArray[i] && !nameValidationArray[i]) {
              sendComment(
                textArray[i],
                nameArray[i],
                timeArray[i],
                dateArray[i],
                parentId
              );
            }
          }
        });

        input.addEventListener("focusout", () => {
          textValidationArray[i] = removeErrors(
            input,
            textValidationArray[i],
            ".invalidText"
          );
          textValidationArray[i] = validate(
            input,
            textArray[i],
            textValidationArray[i],
            errors.text,
            3,
            200,
            "textarea"
          );
        });
      }
    }

    for (let i = 0; i < nameinput.length; i++) {
      let input = nameinput[i] as HTMLElement;
      if (input.getAttribute("listener") !== "true") {
        input.setAttribute("listener", "true");
        nameinput[i].addEventListener("input", (e) => {
          nameArray[i] = (e.target as HTMLTextAreaElement).value;

          nameValidationArray[i] = removeErrors(
            input,
            nameValidationArray[i],
            ".invalidName"
          );
        });
        input.addEventListener("focusout", () => {
          nameValidationArray[i] = removeErrors(
            input,
            nameValidationArray[i],
            ".invalidName"
          );
          nameValidationArray[i] = validate(
            input,
            nameArray[i],
            nameValidationArray[i],
            errors.name,
            3,
            10,
            "nameinput"
          );
        });
      }
    }

    for (let i = 0; i < datepicker.length; i++) {
      let picker = datepicker[i] as HTMLInputElement;

      let currentDate = new Date().toISOString().split("T")[0];


      picker.max = currentDate;

      dateArray[i] = getDate(
        errors,
        currentDate,
        picker,
        dateValidationArray[i],
        false
      );

      datepicker[i].addEventListener("change", (e) => {
        const target = (e.target as HTMLInputElement).value;
        
        if (target) {
          dateArray[i] = getDate(errors, target, picker, dateValidationArray[i], true);
        }
      });
    }

    for (let i = 0; i < answerCommentButtons.length; i++) {
      let button = answerCommentButtons[i] as HTMLElement;

      if (button.getAttribute("listener") !== "true") {
        button.setAttribute("listener", "true");
        button.addEventListener("click", (e) => {
          e.preventDefault();

          const parentId = +button.parentElement.parentElement.parentElement.id;

          const time = new Date().toLocaleString().split(",")[1].split(":");

          const hours = time[0];
          const minutes = time[1];
          const secound = time[2];

          timeArray[i] = hours + ":" + minutes + ":" + secound;

          nameValidationArray[i] = removeErrors(
            button,
            nameValidationArray[i],
            ".invalidName"
          );
          textValidationArray[i] = removeErrors(
            button,
            textValidationArray[i],
            ".invalidText"
          );

          nameValidationArray[i] = validate(
            button,
            nameArray[i],
            nameValidationArray[i],
            errors.name,
            3,
            10,
            "nameinput"
          );
          textValidationArray[i] = validate(
            button,
            textArray[i],
            textValidationArray[i],
            errors.text,
            3,
            200,
            "textarea"
          );

          if (
            !textValidationArray[i] &&
            !nameValidationArray[i] &&
            !dateValidationArray[i]
          ) {
            sendComment(
              textArray[i],
              nameArray[i],
              dateArray[i],
              timeArray[i],
              parentId
            );
          }
        });
      }
    }

    for (let i = 0; i < deleteButtons.length; i++) {
      let button = deleteButtons[i] as HTMLElement;

      if (button.getAttribute("listener") !== "true") {
        button.addEventListener("click", (e) => {
          e.preventDefault();
          const target = e.target as HTMLElement;
          target.setAttribute("listener", "true");

          let parentId = +button.parentElement.id;

          let level: String = button.getAttribute("key");

          deleteComment(parentId, level);
        });
      }
    }
    for (let i = 0; i < likeButtons.length; i++) {
      let button = likeButtons[i] as HTMLElement;

      if (button.getAttribute("listener") !== "true") {
        button.addEventListener("click", (e) => {
          e.preventDefault();
          const target = e.target as HTMLElement;

          target.classList.add("red");
          if (!likedArray[i]) {
            likedArray[i] = true;
          } else {
            likedArray[i] = false;
          }

          target.setAttribute("listener", "true");

          let parentId = +button.parentElement.parentElement.parentElement.id;

          let level: String = button.getAttribute("key");
          likeComment(parentId, level);
        });
      }
    }
};
