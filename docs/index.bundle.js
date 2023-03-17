"use strict";
(self["webpackChunkcommentslist"] = self["webpackChunkcommentslist"] || []).push([["index"],{

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/formatDate.ts":
/*!***************************!*\
  !*** ./src/formatDate.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const formatDate = (date, time) => {
    let dateArray = date.split(".");
    let day = +dateArray[0];
    let month = +dateArray[1] - 1;
    let year = +dateArray[2];
    let timeArray = time.split(":");
    let hours = +timeArray[0];
    let minutes = +timeArray[1];
    let seconds = +timeArray[2];
    const formatted = new Date(year, month, day, hours, minutes, seconds);
    let result = new Date().getTime() - formatted.getTime();
    if (result < 86400000 && result > 0) {
        return "Сегодня в " + time;
    }
    if (result >= 86400000 && result < 172800000) {
        return "Вчера в " + time;
    }
    if (result >= 17280000) {
        return date + " в " + time;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDate);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromLocalStorage": () => (/* binding */ fromLocalStorage),
/* harmony export */   "toLocalStorage": () => (/* binding */ toLocalStorage)
/* harmony export */ });
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.json */ "./src/data.json");
/* harmony import */ var _sendComments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sendComments */ "./src/sendComments.ts");
/* harmony import */ var _renderComments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderComments */ "./src/renderComments.ts");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");




const toLocalStorage = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
};
const fromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("data"));
};
toLocalStorage(_data_json__WEBPACK_IMPORTED_MODULE_0__);
const storedData = fromLocalStorage();
(0,_renderComments__WEBPACK_IMPORTED_MODULE_2__["default"])(storedData);
(0,_sendComments__WEBPACK_IMPORTED_MODULE_1__["default"])();


/***/ }),

/***/ "./src/renderComments.ts":
/*!*******************************!*\
  !*** ./src/renderComments.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icons_delete_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/delete.svg */ "./src/icons/delete.svg");
/* harmony import */ var _formatDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatDate */ "./src/formatDate.ts");


const renderComments = (data) => {
    const list = document.querySelector(".list");
    list.innerHTML = "";
    data.comments.map((e) => {
        const newDiv = document.createElement("div");
        let date = (0,_formatDate__WEBPACK_IMPORTED_MODULE_1__["default"])(e.date, e.time);
        list.insertAdjacentHTML("afterbegin", '<div class="commentTree"></div>');
        const div = document.querySelector(".commentTree");
        div.insertAdjacentHTML("beforebegin", '<hr class="hr-horizontal">');
        let templateOuter = `
        <div id=${e.id} class="item">
            <div class="flex">
                <p class="name">${e.name}</p>
                <p class="date">${date}</p>
            </div>
            <div class="flex">
                <p class="text">${e.text}</p>
                <div class="flex--small">
                    <p class="likes">${e.likes}</p>
                    <button key="outer" class="likeButton" >
                    <svg class=${e.currentUserLiked && "red"} width="25px" height="25px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="icomoon-ignore">
                    </g>
                    <path d="M21.886 5.115c3.521 0 6.376 2.855 6.376 6.376 0 1.809-0.754 3.439-1.964 4.6l-10.297 10.349-10.484-10.536c-1.1-1.146-1.778-2.699-1.778-4.413 0-3.522 2.855-6.376 6.376-6.376 2.652 0 4.925 1.62 5.886 3.924 0.961-2.304 3.234-3.924 5.886-3.924zM21.886 4.049c-2.345 0-4.499 1.089-5.886 2.884-1.386-1.795-3.54-2.884-5.886-2.884-4.104 0-7.442 3.339-7.442 7.442 0 1.928 0.737 3.758 2.075 5.152l11.253 11.309 11.053-11.108c1.46-1.402 2.275-3.308 2.275-5.352 0-4.104-3.339-7.442-7.442-7.442v0z">
                    
                    </path>
                    </svg></button>
                </div>
            </div>
 
                <button class="openForm">Ответить</button>
                <button key="outer" class="deleteButton"><img src=${_icons_delete_svg__WEBPACK_IMPORTED_MODULE_0__} width="20" height="20"></button>

            <form class="formAnswer">
            <div class="fields">
                <input id="name" class="nameinput" type="text">
                <input id="datePicker" class="datepicker" type="date">

                <textarea id="textArea" class="textarea" type="text" name="comment" placeholder="Написать комментарий"></textarea>
                <button class="answerComment" type="submit">Отправить</button>
            </div>
          
            <div class="controls">
            <div class="errors">
            </div>

            </form>
        </div>
        
        `;
        div.insertAdjacentHTML("afterbegin", templateOuter);
        const innerArr = e.commentsArray;
        e.commentsArray.map((inner) => {
            let date = (0,_formatDate__WEBPACK_IMPORTED_MODULE_1__["default"])(inner.date, inner.time);
            let answered;
            innerArr.map((e) => {
                if (inner.answeredComment === e.id) {
                    answered = `
                    <div class="answered">
                        <p class="text"> ответ ${e.name}</p>
                        <p class="text">${e.text}</p>
                    </div>`;
                }
            });
            if (inner.answeredComment === e.id) {
                answered = `
                                    <div class="answered">
                                        <p class="text"> ответ <b>${e.name}</b></p>
                                        <p class="text">${e.text}</p>
                                    </div>`;
            }
            let templateInner = `          
                <div id=${inner.id} class="item2">
                    
                    <div class="flex">
                        <p class="name">${inner.name}</p>
                        <p class="date">${date}</p>
                    </div>
                    <div class ="answeredFlex">
                    <hr>
                    ${answered}
                    </div>
                   
                    <div class="flex">       
                        <p class="text text-inner">${inner.text}</p>
                        <div class="flex--small">
                        <p class="likes">${inner.likes}</p>
                        <button key="inner" class="likeButton" >
                        <svg class=${inner.currentUserLiked && "red"}  width="25px" height="25px"  viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="icomoon-ignore">
                        </g>
                        <path d="M21.886 5.115c3.521 0 6.376 2.855 6.376 6.376 0 1.809-0.754 3.439-1.964 4.6l-10.297 10.349-10.484-10.536c-1.1-1.146-1.778-2.699-1.778-4.413 0-3.522 2.855-6.376 6.376-6.376 2.652 0 4.925 1.62 5.886 3.924 0.961-2.304 3.234-3.924 5.886-3.924zM21.886 4.049c-2.345 0-4.499 1.089-5.886 2.884-1.386-1.795-3.54-2.884-5.886-2.884-4.104 0-7.442 3.339-7.442 7.442 0 1.928 0.737 3.758 2.075 5.152l11.253 11.309 11.053-11.108c1.46-1.402 2.275-3.308 2.275-5.352 0-4.104-3.339-7.442-7.442-7.442v0z" >
                        
                        </path>
                        </svg>
                        </button>
                    </div>
                    </div>
                  

                        <button class="openForm">Ответить</button>
                        <button key="outer" class="deleteButton"><img src=${_icons_delete_svg__WEBPACK_IMPORTED_MODULE_0__} width="20" height="20"></button>


                    <form class="formAnswer">
                    <div class="fields">
                        <input id="name" class="nameinput" type="text">
                        <input id="datePicker" class="datepicker" type="date">

                        <textarea id="textArea" class="textarea" type="text" name="comment" placeholder="Написать комментарий"></textarea>
                        <button class="answerComment" type="submit">Отправить</button>
                    </div>
                    <div class="controls">
                    <div class="errors">
                    </div>
        
                    </form>

                </div>
            
            `;
            div.insertAdjacentHTML("beforeend", templateInner);
        });
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderComments);


/***/ }),

/***/ "./src/sendComments.ts":
/*!*****************************!*\
  !*** ./src/sendComments.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _renderComments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderComments */ "./src/renderComments.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.ts");


const sendComments = () => {
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
            max: "<p class='invalidDate invalid'>год не может быть больше текущего</p>",
        },
    };
    const likeButtons = document.querySelectorAll(".likeButton");
    let likedArray = new Array(likeButtons.length);
    let textValidationArray = new Array(likeButtons.length);
    let nameValidationArray = new Array(likeButtons.length);
    let dateValidationArray = new Array(likeButtons.length);
    const events = () => {
        const openFormButtons = document.querySelectorAll(".openForm");
        const answerCommentButtons = document.querySelectorAll(".answerComment");
        const deleteButtons = document.querySelectorAll(".deleteButton");
        const likeButtons = document.querySelectorAll(".likeButton");
        const textarea = document.querySelectorAll(".textarea");
        const datepicker = document.querySelectorAll(".datepicker");
        const nameinput = document.querySelectorAll(".nameinput");
        let textArray = new Array(textarea.length);
        let nameArray = new Array(textarea.length);
        let dateArray = new Array(textarea.length);
        let timeArray = new Array(textarea.length);
        for (let i = 0; i < openFormButtons.length; i++) {
            openFormButtons[i].addEventListener("click", () => {
                openFormButtons[i].parentElement.classList.add("opened");
            });
        }
        const removeErrors = (element, validationStatus, toRemove) => {
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
        const validate = (element, text, validationStatus, err, allowedMin, allowedMax, whatIsChecked) => {
            const makeBorderRed = () => {
                let el = element.parentElement.children;
                for (let item of el) {
                    let a = item;
                    if (a.className === whatIsChecked) {
                        a.style.border = "1px solid red";
                    }
                }
            };
            if (whatIsChecked === "datepicker") {
                if (+text > allowedMax) {
                    element.parentElement.nextElementSibling.firstElementChild.insertAdjacentHTML("afterbegin", err.max);
                    validationStatus = true;
                    makeBorderRed();
                    return validationStatus;
                }
            }
            if (!text) {
                element.parentElement.nextElementSibling.firstElementChild.insertAdjacentHTML("afterbegin", err.empty);
                validationStatus = true;
                makeBorderRed();
                return validationStatus;
            }
            if (!text || text.length < allowedMin) {
                element.parentElement.nextElementSibling.firstElementChild.insertAdjacentHTML("afterbegin", err.min);
                validationStatus = true;
                makeBorderRed();
                return validationStatus;
            }
            if (text.length > allowedMax) {
                element.parentElement.nextElementSibling.firstElementChild.insertAdjacentHTML("afterbegin", err.max);
                validationStatus = true;
                makeBorderRed();
                return validationStatus;
            }
        };
        const getDate = (date, picker, dateValidationArray, shuoldValidate) => {
            const array = date.split("-");
            const day = array[2];
            const month = array[1];
            const year = array[0];
            const result = day + "." + month + "." + year;
            if (shuoldValidate) {
                dateValidationArray = removeErrors(picker, dateValidationArray, ".invalidDate");
                dateValidationArray = validate(picker, year, dateValidationArray, errors.date, 3, +picker.max.split("-")[0], "datepicker");
            }
            return result;
        };
        for (let i = 0; i < textarea.length; i++) {
            let input = textarea[i];
            if (input.getAttribute("listener") !== "true") {
                input.setAttribute("listener", "true");
                input.addEventListener("input", (e) => {
                    const target = e.target;
                    textArray[i] = target.value;
                    textValidationArray[i] = removeErrors(input, textValidationArray[i], ".invalidText");
                });
                input.addEventListener("keypress", (e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        let parentId = +input.parentElement.parentElement.parentElement.id;
                        nameValidationArray[i] = removeErrors(input, nameValidationArray[i], ".invalidName");
                        textValidationArray[i] = removeErrors(input, textValidationArray[i], ".invalidText");
                        nameValidationArray[i] = validate(input, nameArray[i], nameValidationArray[i], errors.name, 3, 10, "nameinput");
                        textValidationArray[i] = validate(input, textArray[i], textValidationArray[i], errors.text, 3, 200, "textarea");
                        if (!textValidationArray[i] && !nameValidationArray[i]) {
                            sendComment(textArray[i], nameArray[i], timeArray[i], dateArray[i], parentId);
                        }
                    }
                });
                input.addEventListener("focusout", () => {
                    textValidationArray[i] = removeErrors(input, textValidationArray[i], ".invalidText");
                    textValidationArray[i] = validate(input, textArray[i], textValidationArray[i], errors.text, 3, 200, "textarea");
                });
            }
        }
        for (let i = 0; i < nameinput.length; i++) {
            let input = nameinput[i];
            if (input.getAttribute("listener") !== "true") {
                input.setAttribute("listener", "true");
                nameinput[i].addEventListener("input", (e) => {
                    nameArray[i] = e.target.value;
                    nameValidationArray[i] = removeErrors(input, nameValidationArray[i], ".invalidName");
                });
                input.addEventListener("focusout", () => {
                    nameValidationArray[i] = removeErrors(input, nameValidationArray[i], ".invalidName");
                    nameValidationArray[i] = validate(input, nameArray[i], nameValidationArray[i], errors.name, 3, 10, "nameinput");
                });
            }
        }
        for (let i = 0; i < datepicker.length; i++) {
            let picker = datepicker[i];
            let currentDate = new Date().toISOString().split("T")[0];
            picker.max = currentDate;
            dateArray[i] = getDate(currentDate, picker, dateValidationArray[i], false);
            datepicker[i].addEventListener("change", (e) => {
                const target = e.target.value;
                if (target) {
                    dateArray[i] = getDate(target, picker, dateValidationArray[i], true);
                }
            });
        }
        for (let i = 0; i < answerCommentButtons.length; i++) {
            let button = answerCommentButtons[i];
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
                    nameValidationArray[i] = removeErrors(button, nameValidationArray[i], ".invalidName");
                    textValidationArray[i] = removeErrors(button, textValidationArray[i], ".invalidText");
                    nameValidationArray[i] = validate(button, nameArray[i], nameValidationArray[i], errors.name, 3, 10, "nameinput");
                    textValidationArray[i] = validate(button, textArray[i], textValidationArray[i], errors.text, 3, 200, "textarea");
                    if (!textValidationArray[i] &&
                        !nameValidationArray[i] &&
                        !dateValidationArray[i]) {
                        sendComment(textArray[i], nameArray[i], dateArray[i], timeArray[i], parentId);
                    }
                });
            }
        }
        for (let i = 0; i < deleteButtons.length; i++) {
            let button = deleteButtons[i];
            if (button.getAttribute("listener") !== "true") {
                button.addEventListener("click", (e) => {
                    e.preventDefault();
                    const target = e.target;
                    target.setAttribute("listener", "true");
                    let parentId = +button.parentElement.id;
                    let level = button.getAttribute("key");
                    deleteComment(parentId, level);
                });
            }
        }
        for (let i = 0; i < likeButtons.length; i++) {
            let button = likeButtons[i];
            if (button.getAttribute("listener") !== "true") {
                button.addEventListener("click", (e) => {
                    e.preventDefault();
                    const target = e.target;
                    target.classList.add("red");
                    if (!likedArray[i]) {
                        likedArray[i] = true;
                    }
                    else {
                        likedArray[i] = false;
                    }
                    target.setAttribute("listener", "true");
                    let parentId = +button.parentElement.parentElement.parentElement.id;
                    let level = button.getAttribute("key");
                    likeComment(parentId, level);
                });
            }
        }
    };
    const likeComment = (id, level) => {
        const data = (0,_index__WEBPACK_IMPORTED_MODULE_1__.fromLocalStorage)();
        if (level === "outer") {
            data.comments
                .filter((e) => e.id === id)
                .map((el) => {
                if (el.currentUserLiked) {
                    el.likes -= 1;
                    el.currentUserLiked = false;
                    (0,_index__WEBPACK_IMPORTED_MODULE_1__.toLocalStorage)(data);
                    (0,_renderComments__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_index__WEBPACK_IMPORTED_MODULE_1__.fromLocalStorage)());
                }
                else {
                    el.likes += 1;
                    el.currentUserLiked = true;
                    (0,_index__WEBPACK_IMPORTED_MODULE_1__.toLocalStorage)(data);
                    (0,_renderComments__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_index__WEBPACK_IMPORTED_MODULE_1__.fromLocalStorage)());
                }
            });
        }
        else {
            data.comments.flatMap((e) => {
                e.commentsArray
                    .filter((e) => e.id === id)
                    .map((el) => {
                    if (el.currentUserLiked) {
                        el.currentUserLiked = false;
                        el.likes -= 1;
                        (0,_index__WEBPACK_IMPORTED_MODULE_1__.toLocalStorage)(data);
                        (0,_renderComments__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_index__WEBPACK_IMPORTED_MODULE_1__.fromLocalStorage)());
                    }
                    else {
                        el.currentUserLiked = true;
                        el.likes += 1;
                        (0,_index__WEBPACK_IMPORTED_MODULE_1__.toLocalStorage)(data);
                        (0,_renderComments__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_index__WEBPACK_IMPORTED_MODULE_1__.fromLocalStorage)());
                    }
                });
            });
        }
        events();
    };
    const deleteComment = (id, level) => {
        const data = (0,_index__WEBPACK_IMPORTED_MODULE_1__.fromLocalStorage)();
        if (level === "outer") {
            (0,_index__WEBPACK_IMPORTED_MODULE_1__.toLocalStorage)({
                comments: [...data.comments.filter((e) => e.id !== id)],
            });
            (0,_renderComments__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_index__WEBPACK_IMPORTED_MODULE_1__.fromLocalStorage)());
        }
        else {
            const filtered = data.comments.map((e) => {
                return e.commentsArray.filter((e) => e.id !== id);
            });
            for (let i = 0; i < data.comments.length; i++) {
                let firstarr = filtered[i];
                data.comments[i].commentsArray = [...firstarr];
            }
            (0,_index__WEBPACK_IMPORTED_MODULE_1__.toLocalStorage)(data);
            (0,_renderComments__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_index__WEBPACK_IMPORTED_MODULE_1__.fromLocalStorage)());
        }
        events();
    };
    const sendComment = (text, name, date, time, parentId) => {
        const data = (0,_index__WEBPACK_IMPORTED_MODULE_1__.fromLocalStorage)();
        const searchMaxId = (data) => {
            const outerId = data.comments.map((e) => e.id);
            const innerId = data.comments.flatMap((e) => e.commentsArray.map((el) => el.id));
            const outer = outerId[outerId.length - 1];
            const inner = innerId[innerId.length - 1];
            if (outer && inner) {
                return Math.max(outer, inner);
            }
            if (!outer && !inner) {
                return 0;
            }
            if (!outer && inner) {
                return inner;
            }
            if (!inner && outer) {
                return outer;
            }
            const result = Math.max(outerId[outerId.length - 1], innerId[innerId.length - 1] || 0);
            return result;
        };
        let id = searchMaxId(data) + 1;
        if (parentId) {
            data.comments.map((el) => {
                if (parentId === el.id) {
                    el.commentsArray.push({
                        name,
                        text,
                        date,
                        time,
                        id,
                        likes: 0,
                        currentUserLiked: false,
                        answeredComment: parentId,
                    });
                }
                else {
                    el.commentsArray.map((e) => {
                        if (parentId === e.id) {
                            el.commentsArray.push({
                                name,
                                text,
                                date,
                                time,
                                id,
                                likes: 0,
                                currentUserLiked: false,
                                answeredComment: parentId,
                            });
                        }
                    });
                }
            });
        }
        else {
            data.comments.push({
                name,
                text,
                date,
                time,
                id,
                likes: 0,
                currentUserLiked: false,
                commentsArray: [],
            });
        }
        (0,_index__WEBPACK_IMPORTED_MODULE_1__.toLocalStorage)(data);
        (0,_renderComments__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_index__WEBPACK_IMPORTED_MODULE_1__.fromLocalStorage)());
        events();
    };
    events();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendComments);


/***/ }),

/***/ "./src/icons/delete.svg":
/*!******************************!*\
  !*** ./src/icons/delete.svg ***!
  \******************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgY2xhc3M9Imljb24iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMyIDI0MS42Yy0xMS4yIDAtMjAtOC44LTIwLTIwczguOC0yMCAyMC0yMGw5NDAgMS42YzExLjIgMCAyMCA4LjggMjAgMjBzLTguOCAyMC0yMCAyMGwtOTQwLTEuNnptMTU0LjQgNDAuOGMwLTExLjIgOC44LTIwIDIwLTIwczIwIDguOCAyMCAyMHY2ODguOGw1ODUuNi02LjRWMjg5LjZjMC0xMS4yIDguOC0yMCAyMC0yMHMyMCA4LjggMjAgMjB2NzE2LjhsLTY2Ni40IDcuMlYyODIuNHoiLz48cGF0aCBkPSJNNjgyLjQgODY3LjJjLTExLjIgMC0yMC04LjgtMjAtMjBWMzcyYzAtMTEuMiA4LjgtMjAgMjAtMjBzMjAgOC44IDIwIDIwdjQ3NS4yYy44IDExLjItOC44IDIwLTIwIDIwem0tMzE1LjIgMGMtMTEuMiAwLTIwLTguOC0yMC0yMFYzNzJjMC0xMS4yIDguOC0yMCAyMC0yMHMyMCA4LjggMjAgMjB2NDc1LjJjLjggMTEuMi04LjggMjAtMjAgMjB6bTE1Ny42IDBjLTExLjIgMC0yMC04LjgtMjAtMjBWMzcyYzAtMTEuMiA4LjgtMjAgMjAtMjBzMjAgOC44IDIwIDIwdjQ3NS4yYy44IDExLjItOC44IDIwLTIwIDIwem0xMzAuNC02NTMuNnYtNDguOGMwLTE3LjYtMTQuNC0zMi0zMi0zMkg0MTguNGMtMTguNCAwLTMyIDE0LjQtMzIgMzIuOFYyMDhoLTQwdi00Mi40YzAtNDAgMzIuOC03Mi44IDcyLjgtNzIuOEg2MjRjNDAgMCA3Mi44IDMyLjggNzIuOCA3Mi44djQ4LjhoLTQxLjZ6Ii8+PC9zdmc+";

/***/ }),

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/***/ ((module) => {

module.exports = JSON.parse('{"comments":[{"name":"person","text":"первый","date":"13.03.2023","time":"19:08:56","id":1,"likes":2,"currentUserLiked":false,"commentsArray":[{"name":"person2","text":"второй","date":"14.03.2023","time":"13:08:56","id":2,"answeredComment":1,"likes":0,"currentUserLiked":false},{"name":"admin","text":"забаню","date":"14.03.2023","time":"14:08:56","id":3,"answeredComment":1,"likes":12,"currentUserLiked":false},{"name":"someuser23141","text":"lorem lllll asda ddddd","date":"14.03.2023","time":"15:18:56","id":4,"answeredComment":1,"likes":2,"currentUserLiked":false},{"name":"person1","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel massa placerat, maximus ex venenatis, fringilla tortor. Sed malesuada ut augue eget dictum.","date":"14.03.2023","time":"19:08:56","id":5,"answeredComment":4,"likes":2,"currentUserLiked":false},{"name":"someuser2312341","text":"А что это за язык такой?","date":"14.03.2023","time":"19:58:56","id":6,"answeredComment":5,"likes":2,"currentUserLiked":false}]},{"name":"person2","text":"Вторая ветка","date":"13.03.2023","time":"23:08:56","id":7,"likes":2,"currentUserLiked":false,"commentsArray":[{"name":"person131","text":"круто","date":"01.12.2020","time":"19:08:56","id":8,"answeredComment":7,"likes":0,"currentUserLiked":false}]}]}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztnQkFDUixnQkFBZ0IsRUFBRSxLQUFLO2dCQUN2QixhQUFhLEVBQUUsRUFBRTthQUNsQixDQUFDLENBQUM7U0FDSjtRQUdELHNEQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsMkRBQWMsQ0FBQyx3REFBZ0IsRUFBRSxDQUFDLENBQUM7UUFFbkMsTUFBTSxFQUFFLENBQUM7SUFDWCxDQUFDLENBQUM7SUFFRixNQUFNLEVBQUUsQ0FBQztBQUNYLENBQUMsQ0FBQztBQUVGLGlFQUFlLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbW1lbnRzbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzE1NTMiLCJ3ZWJwYWNrOi8vY29tbWVudHNsaXN0Ly4vc3JjL2Zvcm1hdERhdGUudHMiLCJ3ZWJwYWNrOi8vY29tbWVudHNsaXN0Ly4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2NvbW1lbnRzbGlzdC8uL3NyYy9yZW5kZXJDb21tZW50cy50cyIsIndlYnBhY2s6Ly9jb21tZW50c2xpc3QvLi9zcmMvc2VuZENvbW1lbnRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IGZvcm1hdERhdGUgPSAoZGF0ZTogc3RyaW5nLCB0aW1lOiBzdHJpbmcpID0+IHtcbiAgbGV0IGRhdGVBcnJheSA9IGRhdGUuc3BsaXQoXCIuXCIpO1xuXG4gIGxldCBkYXkgPSArZGF0ZUFycmF5WzBdO1xuICBsZXQgbW9udGggPSArZGF0ZUFycmF5WzFdIC0gMTtcbiAgbGV0IHllYXIgPSArZGF0ZUFycmF5WzJdO1xuXG4gIGxldCB0aW1lQXJyYXkgPSB0aW1lLnNwbGl0KFwiOlwiKTtcblxuICBsZXQgaG91cnMgPSArdGltZUFycmF5WzBdO1xuICBsZXQgbWludXRlcyA9ICt0aW1lQXJyYXlbMV07XG4gIGxldCBzZWNvbmRzID0gK3RpbWVBcnJheVsyXTtcblxuICBjb25zdCBmb3JtYXR0ZWQgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5LCBob3VycywgbWludXRlcywgc2Vjb25kcyk7XG5cbiAgbGV0IHJlc3VsdCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gZm9ybWF0dGVkLmdldFRpbWUoKTtcblxuICBpZiAocmVzdWx0IDwgODY0MDAwMDAgJiYgcmVzdWx0ID4gMCkge1xuICAgIHJldHVybiBcItCh0LXQs9C+0LTQvdGPINCyIFwiICsgdGltZTtcbiAgfVxuXG4gIGlmIChyZXN1bHQgPj0gODY0MDAwMDAgJiYgcmVzdWx0IDwgMTcyODAwMDAwKSB7XG4gICAgcmV0dXJuIFwi0JLRh9C10YDQsCDQsiBcIiArIHRpbWU7XG4gIH1cbiAgaWYgKHJlc3VsdCA+PSAxNzI4MDAwMCkge1xuICAgIHJldHVybiBkYXRlICsgXCIg0LIgXCIgKyB0aW1lO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXREYXRlO1xuIiwiaW1wb3J0IFJvb3RPYmplY3QgZnJvbSBcIi4vaW50ZXJmYWNlcy9Db21tZW50XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiLi9kYXRhLmpzb25cIjtcbmltcG9ydCBzZW5kQ29tbWVudHMgZnJvbSBcIi4vc2VuZENvbW1lbnRzXCI7XG5pbXBvcnQgcmVuZGVyQ29tbWVudHMgZnJvbSBcIi4vcmVuZGVyQ29tbWVudHNcIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5leHBvcnQgY29uc3QgdG9Mb2NhbFN0b3JhZ2UgPSAoZGF0YTogUm9vdE9iamVjdCkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRhdGFcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZyb21Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGF0YVwiKSk7XG59O1xuXG50b0xvY2FsU3RvcmFnZShkYXRhKTtcbmNvbnN0IHN0b3JlZERhdGE6IFJvb3RPYmplY3QgPSBmcm9tTG9jYWxTdG9yYWdlKCk7XG5cbnJlbmRlckNvbW1lbnRzKHN0b3JlZERhdGEpO1xuc2VuZENvbW1lbnRzKCk7XG4iLCJpbXBvcnQgUm9vdE9iamVjdCBmcm9tIFwiLi9pbnRlcmZhY2VzL0NvbW1lbnRcIjtcbi8qIGltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5jc3NcIjsgKi9cbmltcG9ydCBkYXRhIGZyb20gXCIuL2RhdGEuanNvblwiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4vaWNvbnMvZGVsZXRlLnN2Z1wiO1xuaW1wb3J0IGxpa2VJY29uIGZyb20gXCIuL2ljb25zL2xpa2Uuc3ZnXCI7XG5pbXBvcnQgZm9ybWF0RGF0ZSBmcm9tIFwiLi9mb3JtYXREYXRlXCI7XG5jb25zdCByZW5kZXJDb21tZW50cyA9IChkYXRhOiBSb290T2JqZWN0KSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RcIik7XG4gIGxpc3QuaW5uZXJIVE1MID0gXCJcIjtcblxuICBkYXRhLmNvbW1lbnRzLm1hcCgoZSkgPT4ge1xuICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBsZXQgZGF0ZSA9IGZvcm1hdERhdGUoZS5kYXRlLCBlLnRpbWUpO1xuXG4gICAgbGlzdC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsICc8ZGl2IGNsYXNzPVwiY29tbWVudFRyZWVcIj48L2Rpdj4nKTtcblxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tbWVudFRyZWVcIik7XG4gICAgZGl2Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWJlZ2luXCIsICc8aHIgY2xhc3M9XCJoci1ob3Jpem9udGFsXCI+Jyk7XG4gICAgbGV0IHRlbXBsYXRlT3V0ZXIgPSBgXG4gICAgICAgIDxkaXYgaWQ9JHtlLmlkfSBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJuYW1lXCI+JHtlLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGF0ZVwiPiR7ZGF0ZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0XCI+JHtlLnRleHR9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LS1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxpa2VzXCI+JHtlLmxpa2VzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJvdXRlclwiIGNsYXNzPVwibGlrZUJ1dHRvblwiID5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz0ke1xuICAgICAgICAgICAgICAgICAgICAgIGUuY3VycmVudFVzZXJMaWtlZCAmJiBcInJlZFwiXG4gICAgICAgICAgICAgICAgICAgIH0gd2lkdGg9XCIyNXB4XCIgaGVpZ2h0PVwiMjVweFwiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cImljb21vb24taWdub3JlXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMS44ODYgNS4xMTVjMy41MjEgMCA2LjM3NiAyLjg1NSA2LjM3NiA2LjM3NiAwIDEuODA5LTAuNzU0IDMuNDM5LTEuOTY0IDQuNmwtMTAuMjk3IDEwLjM0OS0xMC40ODQtMTAuNTM2Yy0xLjEtMS4xNDYtMS43NzgtMi42OTktMS43NzgtNC40MTMgMC0zLjUyMiAyLjg1NS02LjM3NiA2LjM3Ni02LjM3NiAyLjY1MiAwIDQuOTI1IDEuNjIgNS44ODYgMy45MjQgMC45NjEtMi4zMDQgMy4yMzQtMy45MjQgNS44ODYtMy45MjR6TTIxLjg4NiA0LjA0OWMtMi4zNDUgMC00LjQ5OSAxLjA4OS01Ljg4NiAyLjg4NC0xLjM4Ni0xLjc5NS0zLjU0LTIuODg0LTUuODg2LTIuODg0LTQuMTA0IDAtNy40NDIgMy4zMzktNy40NDIgNy40NDIgMCAxLjkyOCAwLjczNyAzLjc1OCAyLjA3NSA1LjE1MmwxMS4yNTMgMTEuMzA5IDExLjA1My0xMS4xMDhjMS40Ni0xLjQwMiAyLjI3NS0zLjMwOCAyLjI3NS01LjM1MiAwLTQuMTA0LTMuMzM5LTcuNDQyLTcuNDQyLTcuNDQydjB6XCI+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm9wZW5Gb3JtXCI+0J7RgtCy0LXRgtC40YLRjDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwib3V0ZXJcIiBjbGFzcz1cImRlbGV0ZUJ1dHRvblwiPjxpbWcgc3JjPSR7ZGVsZXRlSWNvbn0gd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCI+PC9idXR0b24+XG5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybUFuc3dlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkc1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiBjbGFzcz1cIm5hbWVpbnB1dFwiIHR5cGU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZGF0ZVBpY2tlclwiIGNsYXNzPVwiZGF0ZXBpY2tlclwiIHR5cGU9XCJkYXRlXCI+XG5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJ0ZXh0QXJlYVwiIGNsYXNzPVwidGV4dGFyZWFcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJjb21tZW50XCIgcGxhY2Vob2xkZXI9XCLQndCw0L/QuNGB0LDRgtGMINC60L7QvNC80LXQvdGC0LDRgNC40LlcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhbnN3ZXJDb21tZW50XCIgdHlwZT1cInN1Ym1pdFwiPtCe0YLQv9GA0LDQstC40YLRjDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvcnNcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgYDtcblxuICAgIGRpdi5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIHRlbXBsYXRlT3V0ZXIpO1xuXG4gICAgY29uc3QgaW5uZXJBcnIgPSBlLmNvbW1lbnRzQXJyYXk7XG4gICAgZS5jb21tZW50c0FycmF5Lm1hcCgoaW5uZXIpID0+IHtcbiAgICAgIGxldCBkYXRlID0gZm9ybWF0RGF0ZShpbm5lci5kYXRlLCBpbm5lci50aW1lKTtcblxuICAgICAgbGV0IGFuc3dlcmVkO1xuXG4gICAgICBpbm5lckFyci5tYXAoKGUpID0+IHtcbiAgICAgICAgaWYgKGlubmVyLmFuc3dlcmVkQ29tbWVudCA9PT0gZS5pZCkge1xuICAgICAgICAgIGFuc3dlcmVkID0gYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW5zd2VyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dFwiPiDQvtGC0LLQtdGCICR7ZS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dFwiPiR7ZS50ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChpbm5lci5hbnN3ZXJlZENvbW1lbnQgPT09IGUuaWQpIHtcbiAgICAgICAgYW5zd2VyZWQgPSBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW5zd2VyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHRcIj4g0L7RgtCy0LXRgiA8Yj4ke2UubmFtZX08L2I+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dFwiPiR7ZS50ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICB9XG5cbiAgICAgIGxldCB0ZW1wbGF0ZUlubmVyID0gYCAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPSR7aW5uZXIuaWR9IGNsYXNzPVwiaXRlbTJcIj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5hbWVcIj4ke2lubmVyLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkYXRlXCI+JHtkYXRlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3MgPVwiYW5zd2VyZWRGbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgICAgICAgICAgJHthbnN3ZXJlZH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+ICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0IHRleHQtaW5uZXJcIj4ke2lubmVyLnRleHR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtLXNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxpa2VzXCI+JHtpbm5lci5saWtlc308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImlubmVyXCIgY2xhc3M9XCJsaWtlQnV0dG9uXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz0ke1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lci5jdXJyZW50VXNlckxpa2VkICYmIFwicmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gIHdpZHRoPVwiMjVweFwiIGhlaWdodD1cIjI1cHhcIiAgdmlld0JveD1cIjAgMCAzMiAzMlwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cImljb21vb24taWdub3JlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIxLjg4NiA1LjExNWMzLjUyMSAwIDYuMzc2IDIuODU1IDYuMzc2IDYuMzc2IDAgMS44MDktMC43NTQgMy40MzktMS45NjQgNC42bC0xMC4yOTcgMTAuMzQ5LTEwLjQ4NC0xMC41MzZjLTEuMS0xLjE0Ni0xLjc3OC0yLjY5OS0xLjc3OC00LjQxMyAwLTMuNTIyIDIuODU1LTYuMzc2IDYuMzc2LTYuMzc2IDIuNjUyIDAgNC45MjUgMS42MiA1Ljg4NiAzLjkyNCAwLjk2MS0yLjMwNCAzLjIzNC0zLjkyNCA1Ljg4Ni0zLjkyNHpNMjEuODg2IDQuMDQ5Yy0yLjM0NSAwLTQuNDk5IDEuMDg5LTUuODg2IDIuODg0LTEuMzg2LTEuNzk1LTMuNTQtMi44ODQtNS44ODYtMi44ODQtNC4xMDQgMC03LjQ0MiAzLjMzOS03LjQ0MiA3LjQ0MiAwIDEuOTI4IDAuNzM3IDMuNzU4IDIuMDc1IDUuMTUybDExLjI1MyAxMS4zMDkgMTEuMDUzLTExLjEwOGMxLjQ2LTEuNDAyIDIuMjc1LTMuMzA4IDIuMjc1LTUuMzUyIDAtNC4xMDQtMy4zMzktNy40NDItNy40NDItNy40NDJ2MHpcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwib3BlbkZvcm1cIj7QntGC0LLQtdGC0LjRgtGMPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cIm91dGVyXCIgY2xhc3M9XCJkZWxldGVCdXR0b25cIj48aW1nIHNyYz0ke2RlbGV0ZUljb259IHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiPjwvYnV0dG9uPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJmb3JtQW5zd2VyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiBjbGFzcz1cIm5hbWVpbnB1dFwiIHR5cGU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJkYXRlUGlja2VyXCIgY2xhc3M9XCJkYXRlcGlja2VyXCIgdHlwZT1cImRhdGVcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwidGV4dEFyZWFcIiBjbGFzcz1cInRleHRhcmVhXCIgdHlwZT1cInRleHRcIiBuYW1lPVwiY29tbWVudFwiIHBsYWNlaG9sZGVyPVwi0J3QsNC/0LjRgdCw0YLRjCDQutC+0LzQvNC10L3RgtCw0YDQuNC5XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhbnN3ZXJDb21tZW50XCIgdHlwZT1cInN1Ym1pdFwiPtCe0YLQv9GA0LDQstC40YLRjDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYDtcblxuICAgICAgZGl2Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCB0ZW1wbGF0ZUlubmVyKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJDb21tZW50cztcbiIsImltcG9ydCBSb290T2JqZWN0IGZyb20gXCIuL2ludGVyZmFjZXMvQ29tbWVudFwiO1xuaW1wb3J0IHJlbmRlckNvbW1lbnRzIGZyb20gXCIuL3JlbmRlckNvbW1lbnRzXCI7XG5pbXBvcnQgeyB0b0xvY2FsU3RvcmFnZSwgZnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2luZGV4XCI7XG5cblxuY29uc3Qgc2VuZENvbW1lbnRzID0gKCkgPT4ge1xuICBjb25zdCBlcnJvcnMgPSB7XG4gICAgdGV4dDoge1xuICAgICAgbWluOiBcIjxwIGNsYXNzPSdpbnZhbGlkVGV4dCBpbnZhbGlkJz7QsiDQv9C+0LvQtSDRgtC10LrRgdGCINC00L7Qu9C20L3QviDQsdGL0YLRjCDQvdC1INC80LXQvdGM0YjQtSAzINGB0LjQvNCy0L7Qu9C+0LI8L3A+XCIsXG4gICAgICBtYXg6IFwiPHAgY2xhc3M9J2ludmFsaWRUZXh0IGludmFsaWQnPtCyINC/0L7Qu9C1INGC0LXQutGB0YIg0LTQvtC70LbQvdC+INCx0YvRgtGMINC90LUg0LHQvtC70YzRiNC1IDIwMCDRgdC40LzQstC+0LvQvtCyPC9wPlwiLFxuICAgICAgZW1wdHk6IFwiPHAgY2xhc3M9J2ludmFsaWRUZXh0IGludmFsaWQnPtC/0L7Qu9C1INGC0LXQutGB0YIg0L3QtSDQt9Cw0L/QvtC70L3QtdC90L48L3A+XCIsXG4gICAgfSxcbiAgICBuYW1lOiB7XG4gICAgICBtaW46IFwiPHAgY2xhc3M9J2ludmFsaWROYW1lIGludmFsaWQnPtCyINC/0L7Qu9C1INC40LzRjyDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0L3QtSDQvNC10L3RjNGI0LUgMyDRgdC40LzQstC+0LvQvtCyPC9wPlwiLFxuICAgICAgbWF4OiBcIjxwIGNsYXNzPSdpbnZhbGlkTmFtZSBpbnZhbGlkJz7QsiDQv9C+0LvQtSDQuNC80Y8g0LTQvtC70LbQvdC+INCx0YvRgtGMINC90LUg0LHQvtC70YzRiNC1IDEwINGB0LjQvNCy0L7Qu9C+0LI8L3A+XCIsXG4gICAgICBlbXB0eTogXCI8cCBjbGFzcz0naW52YWxpZE5hbWUgaW52YWxpZCc+0L/QvtC70LUg0LjQvNGPINC90LUg0LfQsNC/0L7Qu9C90LXQvdC+PC9wPlwiLFxuICAgIH0sXG4gICAgZGF0ZToge1xuICAgICAgbWF4OiBcIjxwIGNsYXNzPSdpbnZhbGlkRGF0ZSBpbnZhbGlkJz7Qs9C+0LQg0L3QtSDQvNC+0LbQtdGCINCx0YvRgtGMINCx0L7Qu9GM0YjQtSDRgtC10LrRg9GJ0LXQs9C+PC9wPlwiLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgbGlrZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpa2VCdXR0b25cIikgYXMgTm9kZUxpc3Q7XG4gIGxldCBsaWtlZEFycmF5ID0gbmV3IEFycmF5KGxpa2VCdXR0b25zLmxlbmd0aCk7XG5cbiAgbGV0IHRleHRWYWxpZGF0aW9uQXJyYXkgPSBuZXcgQXJyYXkobGlrZUJ1dHRvbnMubGVuZ3RoKTtcbiAgbGV0IG5hbWVWYWxpZGF0aW9uQXJyYXkgPSBuZXcgQXJyYXkobGlrZUJ1dHRvbnMubGVuZ3RoKTtcbiAgbGV0IGRhdGVWYWxpZGF0aW9uQXJyYXkgPSBuZXcgQXJyYXkobGlrZUJ1dHRvbnMubGVuZ3RoKTtcblxuICBjb25zdCBldmVudHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgb3BlbkZvcm1CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vcGVuRm9ybVwiKSBhcyBOb2RlTGlzdDtcbiAgICBjb25zdCBhbnN3ZXJDb21tZW50QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIi5hbnN3ZXJDb21tZW50XCJcbiAgICApIGFzIE5vZGVMaXN0O1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCIuZGVsZXRlQnV0dG9uXCJcbiAgICApIGFzIE5vZGVMaXN0O1xuICAgIGNvbnN0IGxpa2VCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saWtlQnV0dG9uXCIpIGFzIE5vZGVMaXN0O1xuXG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRleHRhcmVhXCIpIGFzIE5vZGVMaXN0O1xuICAgIGNvbnN0IGRhdGVwaWNrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhdGVwaWNrZXJcIikgYXMgTm9kZUxpc3Q7XG4gICAgY29uc3QgbmFtZWlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYW1laW5wdXRcIikgYXMgTm9kZUxpc3Q7XG5cbiAgICBsZXQgdGV4dEFycmF5ID0gbmV3IEFycmF5KHRleHRhcmVhLmxlbmd0aCk7XG4gICAgbGV0IG5hbWVBcnJheSA9IG5ldyBBcnJheSh0ZXh0YXJlYS5sZW5ndGgpO1xuICAgIGxldCBkYXRlQXJyYXkgPSBuZXcgQXJyYXkodGV4dGFyZWEubGVuZ3RoKTtcbiAgICBsZXQgdGltZUFycmF5ID0gbmV3IEFycmF5KHRleHRhcmVhLmxlbmd0aCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wZW5Gb3JtQnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgb3BlbkZvcm1CdXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIG9wZW5Gb3JtQnV0dG9uc1tpXS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJvcGVuZWRcIik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVFcnJvcnMgPSAoXG4gICAgICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICAgIHZhbGlkYXRpb25TdGF0dXM6IGJvb2xlYW4sXG4gICAgICB0b1JlbW92ZTogYW55XG4gICAgKSA9PiB7XG4gICAgICBsZXQgZXJyb3JzID0gZWxlbWVudC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5jaGlsZHJlbjtcblxuICAgICAgZm9yIChsZXQgZXJyIG9mIGVycm9ycykge1xuICAgICAgICBsZXQgY2hpbGQgPSBlcnIucXVlcnlTZWxlY3RvcihgOnNjb3BlID4gJHt0b1JlbW92ZX1gKTtcblxuICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICBjaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIGJsYWNrXCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gKHZhbGlkYXRpb25TdGF0dXMgPSBmYWxzZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHZhbGlkYXRlID0gKFxuICAgICAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgICB0ZXh0OiBzdHJpbmcsXG4gICAgICB2YWxpZGF0aW9uU3RhdHVzOiBib29sZWFuLFxuICAgICAgZXJyOiBhbnksXG4gICAgICBhbGxvd2VkTWluOiBudW1iZXIsXG4gICAgICBhbGxvd2VkTWF4OiBudW1iZXIsXG4gICAgICB3aGF0SXNDaGVja2VkOiBzdHJpbmdcbiAgICApID0+IHtcbiAgICAgIGNvbnN0IG1ha2VCb3JkZXJSZWQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBlbCA9IGVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlbjtcblxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGVsKSB7XG4gICAgICAgICAgbGV0IGEgPSBpdGVtIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgIGlmIChhLmNsYXNzTmFtZSA9PT0gd2hhdElzQ2hlY2tlZCkge1xuICAgICAgICAgICAgYS5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCByZWRcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmICh3aGF0SXNDaGVja2VkID09PSBcImRhdGVwaWNrZXJcIikge1xuICAgICAgICBpZiAoK3RleHQgPiBhbGxvd2VkTWF4KSB7XG4gICAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICAgICBcImFmdGVyYmVnaW5cIixcbiAgICAgICAgICAgIGVyci5tYXhcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgdmFsaWRhdGlvblN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgbWFrZUJvcmRlclJlZCgpO1xuICAgICAgICAgIHJldHVybiB2YWxpZGF0aW9uU3RhdHVzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghdGV4dCkge1xuICAgICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICBcImFmdGVyYmVnaW5cIixcbiAgICAgICAgICBlcnIuZW1wdHlcbiAgICAgICAgKTtcblxuICAgICAgICB2YWxpZGF0aW9uU3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgbWFrZUJvcmRlclJlZCgpO1xuICAgICAgICByZXR1cm4gdmFsaWRhdGlvblN0YXR1cztcbiAgICAgIH1cblxuICAgICAgaWYgKCF0ZXh0IHx8IHRleHQubGVuZ3RoIDwgYWxsb3dlZE1pbikge1xuICAgICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICBcImFmdGVyYmVnaW5cIixcbiAgICAgICAgICBlcnIubWluXG4gICAgICAgICk7XG5cbiAgICAgICAgdmFsaWRhdGlvblN0YXR1cyA9IHRydWU7XG4gICAgICAgIG1ha2VCb3JkZXJSZWQoKTtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRpb25TdGF0dXM7XG4gICAgICB9XG5cbiAgICAgIGlmICh0ZXh0Lmxlbmd0aCA+IGFsbG93ZWRNYXgpIHtcbiAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICAgXCJhZnRlcmJlZ2luXCIsXG4gICAgICAgICAgZXJyLm1heFxuICAgICAgICApO1xuXG4gICAgICAgIHZhbGlkYXRpb25TdGF0dXMgPSB0cnVlO1xuICAgICAgICBtYWtlQm9yZGVyUmVkKCk7XG4gICAgICAgIHJldHVybiB2YWxpZGF0aW9uU3RhdHVzO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXREYXRlID0gKFxuICAgICAgZGF0ZTogc3RyaW5nLFxuICAgICAgcGlja2VyOiBIVE1MSW5wdXRFbGVtZW50LFxuICAgICAgZGF0ZVZhbGlkYXRpb25BcnJheTogYm9vbGVhbixcbiAgICAgIHNodW9sZFZhbGlkYXRlOiBib29sZWFuXG4gICAgKSA9PiB7XG4gICAgICBjb25zdCBhcnJheSA9IGRhdGUuc3BsaXQoXCItXCIpO1xuICAgICAgY29uc3QgZGF5OiBzdHJpbmcgPSBhcnJheVsyXTtcblxuICAgICAgY29uc3QgbW9udGg6IHN0cmluZyA9IGFycmF5WzFdO1xuICAgICAgY29uc3QgeWVhcjogc3RyaW5nID0gYXJyYXlbMF07XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGRheSArIFwiLlwiICsgbW9udGggKyBcIi5cIiArIHllYXI7XG5cbiAgICAgIGlmIChzaHVvbGRWYWxpZGF0ZSkge1xuICAgICAgICBkYXRlVmFsaWRhdGlvbkFycmF5ID0gcmVtb3ZlRXJyb3JzKFxuICAgICAgICAgIHBpY2tlcixcbiAgICAgICAgICBkYXRlVmFsaWRhdGlvbkFycmF5LFxuICAgICAgICAgIFwiLmludmFsaWREYXRlXCJcbiAgICAgICAgKTtcbiAgICAgICAgZGF0ZVZhbGlkYXRpb25BcnJheSA9IHZhbGlkYXRlKFxuICAgICAgICAgIHBpY2tlcixcbiAgICAgICAgICB5ZWFyLFxuICAgICAgICAgIGRhdGVWYWxpZGF0aW9uQXJyYXksXG4gICAgICAgICAgZXJyb3JzLmRhdGUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICArcGlja2VyLm1heC5zcGxpdChcIi1cIilbMF0sXG4gICAgICAgICAgXCJkYXRlcGlja2VyXCJcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0YXJlYS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGlucHV0ID0gdGV4dGFyZWFbaV0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoaW5wdXQuZ2V0QXR0cmlidXRlKFwibGlzdGVuZXJcIikgIT09IFwidHJ1ZVwiKSB7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImxpc3RlbmVyXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgdGV4dEFycmF5W2ldID0gKHRhcmdldCBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZTtcblxuICAgICAgICAgIHRleHRWYWxpZGF0aW9uQXJyYXlbaV0gPSByZW1vdmVFcnJvcnMoXG4gICAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAgIHRleHRWYWxpZGF0aW9uQXJyYXlbaV0sXG4gICAgICAgICAgICBcIi5pbnZhbGlkVGV4dFwiXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsZXQgcGFyZW50SWQgPSAraW5wdXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQ7XG5cbiAgICAgICAgICAgIG5hbWVWYWxpZGF0aW9uQXJyYXlbaV0gPSByZW1vdmVFcnJvcnMoXG4gICAgICAgICAgICAgIGlucHV0LFxuICAgICAgICAgICAgICBuYW1lVmFsaWRhdGlvbkFycmF5W2ldLFxuICAgICAgICAgICAgICBcIi5pbnZhbGlkTmFtZVwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGV4dFZhbGlkYXRpb25BcnJheVtpXSA9IHJlbW92ZUVycm9ycyhcbiAgICAgICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgICAgIHRleHRWYWxpZGF0aW9uQXJyYXlbaV0sXG4gICAgICAgICAgICAgIFwiLmludmFsaWRUZXh0XCJcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIG5hbWVWYWxpZGF0aW9uQXJyYXlbaV0gPSB2YWxpZGF0ZShcbiAgICAgICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgICAgIG5hbWVBcnJheVtpXSxcbiAgICAgICAgICAgICAgbmFtZVZhbGlkYXRpb25BcnJheVtpXSxcbiAgICAgICAgICAgICAgZXJyb3JzLm5hbWUsXG4gICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgIDEwLFxuICAgICAgICAgICAgICBcIm5hbWVpbnB1dFwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGV4dFZhbGlkYXRpb25BcnJheVtpXSA9IHZhbGlkYXRlKFxuICAgICAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAgICAgdGV4dEFycmF5W2ldLFxuICAgICAgICAgICAgICB0ZXh0VmFsaWRhdGlvbkFycmF5W2ldLFxuICAgICAgICAgICAgICBlcnJvcnMudGV4dCxcbiAgICAgICAgICAgICAgMyxcbiAgICAgICAgICAgICAgMjAwLFxuICAgICAgICAgICAgICBcInRleHRhcmVhXCJcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGlmICghdGV4dFZhbGlkYXRpb25BcnJheVtpXSAmJiAhbmFtZVZhbGlkYXRpb25BcnJheVtpXSkge1xuICAgICAgICAgICAgICBzZW5kQ29tbWVudChcbiAgICAgICAgICAgICAgICB0ZXh0QXJyYXlbaV0sXG4gICAgICAgICAgICAgICAgbmFtZUFycmF5W2ldLFxuICAgICAgICAgICAgICAgIHRpbWVBcnJheVtpXSxcbiAgICAgICAgICAgICAgICBkYXRlQXJyYXlbaV0sXG4gICAgICAgICAgICAgICAgcGFyZW50SWRcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiB7XG4gICAgICAgICAgdGV4dFZhbGlkYXRpb25BcnJheVtpXSA9IHJlbW92ZUVycm9ycyhcbiAgICAgICAgICAgIGlucHV0LFxuICAgICAgICAgICAgdGV4dFZhbGlkYXRpb25BcnJheVtpXSxcbiAgICAgICAgICAgIFwiLmludmFsaWRUZXh0XCJcbiAgICAgICAgICApO1xuICAgICAgICAgIHRleHRWYWxpZGF0aW9uQXJyYXlbaV0gPSB2YWxpZGF0ZShcbiAgICAgICAgICAgIGlucHV0LFxuICAgICAgICAgICAgdGV4dEFycmF5W2ldLFxuICAgICAgICAgICAgdGV4dFZhbGlkYXRpb25BcnJheVtpXSxcbiAgICAgICAgICAgIGVycm9ycy50ZXh0LFxuICAgICAgICAgICAgMyxcbiAgICAgICAgICAgIDIwMCxcbiAgICAgICAgICAgIFwidGV4dGFyZWFcIlxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZWlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaW5wdXQgPSBuYW1laW5wdXRbaV0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoaW5wdXQuZ2V0QXR0cmlidXRlKFwibGlzdGVuZXJcIikgIT09IFwidHJ1ZVwiKSB7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImxpc3RlbmVyXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgbmFtZWlucHV0W2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgICAgICAgIG5hbWVBcnJheVtpXSA9IChlLnRhcmdldCBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZTtcblxuICAgICAgICAgIG5hbWVWYWxpZGF0aW9uQXJyYXlbaV0gPSByZW1vdmVFcnJvcnMoXG4gICAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAgIG5hbWVWYWxpZGF0aW9uQXJyYXlbaV0sXG4gICAgICAgICAgICBcIi5pbnZhbGlkTmFtZVwiXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiB7XG4gICAgICAgICAgbmFtZVZhbGlkYXRpb25BcnJheVtpXSA9IHJlbW92ZUVycm9ycyhcbiAgICAgICAgICAgIGlucHV0LFxuICAgICAgICAgICAgbmFtZVZhbGlkYXRpb25BcnJheVtpXSxcbiAgICAgICAgICAgIFwiLmludmFsaWROYW1lXCJcbiAgICAgICAgICApO1xuICAgICAgICAgIG5hbWVWYWxpZGF0aW9uQXJyYXlbaV0gPSB2YWxpZGF0ZShcbiAgICAgICAgICAgIGlucHV0LFxuICAgICAgICAgICAgbmFtZUFycmF5W2ldLFxuICAgICAgICAgICAgbmFtZVZhbGlkYXRpb25BcnJheVtpXSxcbiAgICAgICAgICAgIGVycm9ycy5uYW1lLFxuICAgICAgICAgICAgMyxcbiAgICAgICAgICAgIDEwLFxuICAgICAgICAgICAgXCJuYW1laW5wdXRcIlxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0ZXBpY2tlci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHBpY2tlciA9IGRhdGVwaWNrZXJbaV0gYXMgSFRNTElucHV0RWxlbWVudDtcblxuICAgICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcblxuICAgICAgcGlja2VyLm1heCA9IGN1cnJlbnREYXRlO1xuXG4gICAgICBkYXRlQXJyYXlbaV0gPSBnZXREYXRlKFxuICAgICAgICBjdXJyZW50RGF0ZSxcbiAgICAgICAgcGlja2VyLFxuICAgICAgICBkYXRlVmFsaWRhdGlvbkFycmF5W2ldLFxuICAgICAgICBmYWxzZVxuICAgICAgKTtcblxuICAgICAgZGF0ZXBpY2tlcltpXS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IChlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgIGRhdGVBcnJheVtpXSA9IGdldERhdGUodGFyZ2V0LCBwaWNrZXIsIGRhdGVWYWxpZGF0aW9uQXJyYXlbaV0sIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFuc3dlckNvbW1lbnRCdXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgYnV0dG9uID0gYW5zd2VyQ29tbWVudEJ1dHRvbnNbaV0gYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgIGlmIChidXR0b24uZ2V0QXR0cmlidXRlKFwibGlzdGVuZXJcIikgIT09IFwidHJ1ZVwiKSB7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJsaXN0ZW5lclwiLCBcInRydWVcIik7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICBjb25zdCBwYXJlbnRJZCA9ICtidXR0b24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQ7XG5cbiAgICAgICAgICBjb25zdCB0aW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLnNwbGl0KFwiLFwiKVsxXS5zcGxpdChcIjpcIik7XG5cbiAgICAgICAgICBjb25zdCBob3VycyA9IHRpbWVbMF07XG4gICAgICAgICAgY29uc3QgbWludXRlcyA9IHRpbWVbMV07XG4gICAgICAgICAgY29uc3Qgc2Vjb3VuZCA9IHRpbWVbMl07XG5cbiAgICAgICAgICB0aW1lQXJyYXlbaV0gPSBob3VycyArIFwiOlwiICsgbWludXRlcyArIFwiOlwiICsgc2Vjb3VuZDtcblxuICAgICAgICAgIG5hbWVWYWxpZGF0aW9uQXJyYXlbaV0gPSByZW1vdmVFcnJvcnMoXG4gICAgICAgICAgICBidXR0b24sXG4gICAgICAgICAgICBuYW1lVmFsaWRhdGlvbkFycmF5W2ldLFxuICAgICAgICAgICAgXCIuaW52YWxpZE5hbWVcIlxuICAgICAgICAgICk7XG4gICAgICAgICAgdGV4dFZhbGlkYXRpb25BcnJheVtpXSA9IHJlbW92ZUVycm9ycyhcbiAgICAgICAgICAgIGJ1dHRvbixcbiAgICAgICAgICAgIHRleHRWYWxpZGF0aW9uQXJyYXlbaV0sXG4gICAgICAgICAgICBcIi5pbnZhbGlkVGV4dFwiXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIG5hbWVWYWxpZGF0aW9uQXJyYXlbaV0gPSB2YWxpZGF0ZShcbiAgICAgICAgICAgIGJ1dHRvbixcbiAgICAgICAgICAgIG5hbWVBcnJheVtpXSxcbiAgICAgICAgICAgIG5hbWVWYWxpZGF0aW9uQXJyYXlbaV0sXG4gICAgICAgICAgICBlcnJvcnMubmFtZSxcbiAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAxMCxcbiAgICAgICAgICAgIFwibmFtZWlucHV0XCJcbiAgICAgICAgICApO1xuICAgICAgICAgIHRleHRWYWxpZGF0aW9uQXJyYXlbaV0gPSB2YWxpZGF0ZShcbiAgICAgICAgICAgIGJ1dHRvbixcbiAgICAgICAgICAgIHRleHRBcnJheVtpXSxcbiAgICAgICAgICAgIHRleHRWYWxpZGF0aW9uQXJyYXlbaV0sXG4gICAgICAgICAgICBlcnJvcnMudGV4dCxcbiAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAyMDAsXG4gICAgICAgICAgICBcInRleHRhcmVhXCJcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXRleHRWYWxpZGF0aW9uQXJyYXlbaV0gJiZcbiAgICAgICAgICAgICFuYW1lVmFsaWRhdGlvbkFycmF5W2ldICYmXG4gICAgICAgICAgICAhZGF0ZVZhbGlkYXRpb25BcnJheVtpXVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgc2VuZENvbW1lbnQoXG4gICAgICAgICAgICAgIHRleHRBcnJheVtpXSxcbiAgICAgICAgICAgICAgbmFtZUFycmF5W2ldLFxuICAgICAgICAgICAgICBkYXRlQXJyYXlbaV0sXG4gICAgICAgICAgICAgIHRpbWVBcnJheVtpXSxcbiAgICAgICAgICAgICAgcGFyZW50SWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlbGV0ZUJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBidXR0b24gPSBkZWxldGVCdXR0b25zW2ldIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICBpZiAoYnV0dG9uLmdldEF0dHJpYnV0ZShcImxpc3RlbmVyXCIpICE9PSBcInRydWVcIikge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJsaXN0ZW5lclwiLCBcInRydWVcIik7XG5cbiAgICAgICAgICBsZXQgcGFyZW50SWQgPSArYnV0dG9uLnBhcmVudEVsZW1lbnQuaWQ7XG5cbiAgICAgICAgICBsZXQgbGV2ZWw6IFN0cmluZyA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJrZXlcIik7XG5cbiAgICAgICAgICBkZWxldGVDb21tZW50KHBhcmVudElkLCBsZXZlbCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpa2VCdXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgYnV0dG9uID0gbGlrZUJ1dHRvbnNbaV0gYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgIGlmIChidXR0b24uZ2V0QXR0cmlidXRlKFwibGlzdGVuZXJcIikgIT09IFwidHJ1ZVwiKSB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChcInJlZFwiKTtcbiAgICAgICAgICBpZiAoIWxpa2VkQXJyYXlbaV0pIHtcbiAgICAgICAgICAgIGxpa2VkQXJyYXlbaV0gPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaWtlZEFycmF5W2ldID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShcImxpc3RlbmVyXCIsIFwidHJ1ZVwiKTtcblxuICAgICAgICAgIGxldCBwYXJlbnRJZCA9ICtidXR0b24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQ7XG5cbiAgICAgICAgICBsZXQgbGV2ZWw6IFN0cmluZyA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJrZXlcIik7XG4gICAgICAgICAgbGlrZUNvbW1lbnQocGFyZW50SWQsIGxldmVsKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGxpa2VDb21tZW50ID0gKGlkOiBudW1iZXIsIGxldmVsOiBTdHJpbmcpID0+IHtcbiAgICBjb25zdCBkYXRhOiBSb290T2JqZWN0ID0gZnJvbUxvY2FsU3RvcmFnZSgpO1xuXG4gICAgaWYgKGxldmVsID09PSBcIm91dGVyXCIpIHtcbiAgICAgIGRhdGEuY29tbWVudHNcbiAgICAgICAgLmZpbHRlcigoZSkgPT4gZS5pZCA9PT0gaWQpXG4gICAgICAgIC5tYXAoKGVsKSA9PiB7XG5cbiAgICAgICAgICBpZiAoZWwuY3VycmVudFVzZXJMaWtlZCkge1xuICAgICAgICAgICAgZWwubGlrZXMgLT0gMTtcblxuICAgICAgICAgICAgZWwuY3VycmVudFVzZXJMaWtlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdG9Mb2NhbFN0b3JhZ2UoZGF0YSk7XG4gICAgICAgICAgICByZW5kZXJDb21tZW50cyhmcm9tTG9jYWxTdG9yYWdlKCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbC5saWtlcyArPSAxO1xuICAgICAgICAgICAgZWwuY3VycmVudFVzZXJMaWtlZCA9IHRydWU7XG4gICAgICAgICAgICB0b0xvY2FsU3RvcmFnZShkYXRhKTtcbiAgICAgICAgICAgIHJlbmRlckNvbW1lbnRzKGZyb21Mb2NhbFN0b3JhZ2UoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YS5jb21tZW50cy5mbGF0TWFwKChlKSA9PiB7XG4gICAgICAgIGUuY29tbWVudHNBcnJheVxuICAgICAgICAgIC5maWx0ZXIoKGUpID0+IGUuaWQgPT09IGlkKVxuICAgICAgICAgIC5tYXAoKGVsKSA9PiB7XG4gICAgICAgICAgICBpZiAoZWwuY3VycmVudFVzZXJMaWtlZCkge1xuICAgICAgICAgICAgICBlbC5jdXJyZW50VXNlckxpa2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgIGVsLmxpa2VzIC09IDE7XG5cbiAgICAgICAgICAgICAgdG9Mb2NhbFN0b3JhZ2UoZGF0YSk7XG4gICAgICAgICAgICAgIHJlbmRlckNvbW1lbnRzKGZyb21Mb2NhbFN0b3JhZ2UoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbC5jdXJyZW50VXNlckxpa2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZWwubGlrZXMgKz0gMTtcblxuICAgICAgICAgICAgICB0b0xvY2FsU3RvcmFnZShkYXRhKTtcbiAgICAgICAgICAgICAgcmVuZGVyQ29tbWVudHMoZnJvbUxvY2FsU3RvcmFnZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBldmVudHMoKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVDb21tZW50ID0gKGlkOiBudW1iZXIsIGxldmVsOiBTdHJpbmcpID0+IHtcbiAgICBjb25zdCBkYXRhOiBSb290T2JqZWN0ID0gZnJvbUxvY2FsU3RvcmFnZSgpO1xuXG4gICAgaWYgKGxldmVsID09PSBcIm91dGVyXCIpIHtcbiAgICAgIHRvTG9jYWxTdG9yYWdlKHtcbiAgICAgICAgY29tbWVudHM6IFsuLi5kYXRhLmNvbW1lbnRzLmZpbHRlcigoZSkgPT4gZS5pZCAhPT0gaWQpXSxcbiAgICAgIH0pO1xuICAgICAgcmVuZGVyQ29tbWVudHMoZnJvbUxvY2FsU3RvcmFnZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlsdGVyZWQgPSBkYXRhLmNvbW1lbnRzLm1hcCgoZSkgPT4ge1xuICAgICAgICByZXR1cm4gZS5jb21tZW50c0FycmF5LmZpbHRlcigoZSkgPT4gZS5pZCAhPT0gaWQpO1xuICAgICAgfSk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5jb21tZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZmlyc3RhcnIgPSBmaWx0ZXJlZFtpXTtcbiAgICAgICAgZGF0YS5jb21tZW50c1tpXS5jb21tZW50c0FycmF5ID0gWy4uLmZpcnN0YXJyXTtcbiAgICAgIH1cbiAgICAgIHRvTG9jYWxTdG9yYWdlKGRhdGEpO1xuICAgICAgcmVuZGVyQ29tbWVudHMoZnJvbUxvY2FsU3RvcmFnZSgpKTtcbiAgICB9XG4gICAgZXZlbnRzKCk7XG4gIH07XG5cbiAgY29uc3Qgc2VuZENvbW1lbnQgPSAoXG4gICAgdGV4dDogc3RyaW5nLFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBkYXRlOiBzdHJpbmcsXG4gICAgdGltZTogc3RyaW5nLFxuICAgIHBhcmVudElkOiBudW1iZXJcbiAgKSA9PiB7XG4gICAgY29uc3QgZGF0YTogUm9vdE9iamVjdCA9IGZyb21Mb2NhbFN0b3JhZ2UoKTtcblxuXG4gICAgY29uc3Qgc2VhcmNoTWF4SWQgPSAoZGF0YTogUm9vdE9iamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb3V0ZXJJZCA9IGRhdGEuY29tbWVudHMubWFwKChlKSA9PiBlLmlkKTtcbiAgICAgIGNvbnN0IGlubmVySWQgPSBkYXRhLmNvbW1lbnRzLmZsYXRNYXAoKGUpID0+XG4gICAgICAgIGUuY29tbWVudHNBcnJheS5tYXAoKGVsKSA9PiBlbC5pZClcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IG91dGVyID0gb3V0ZXJJZFtvdXRlcklkLmxlbmd0aCAtIDFdO1xuICAgICAgY29uc3QgaW5uZXIgPSBpbm5lcklkW2lubmVySWQubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmIChvdXRlciAmJiBpbm5lcikge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgob3V0ZXIsIGlubmVyKTtcbiAgICAgIH1cbiAgICAgIGlmICghb3V0ZXIgJiYgIWlubmVyKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgICAgaWYgKCFvdXRlciAmJiBpbm5lcikge1xuICAgICAgICByZXR1cm4gaW5uZXI7XG4gICAgICB9XG4gICAgICBpZiAoIWlubmVyICYmIG91dGVyKSB7XG4gICAgICAgIHJldHVybiBvdXRlcjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdWx0ID0gTWF0aC5tYXgoXG4gICAgICAgIG91dGVySWRbb3V0ZXJJZC5sZW5ndGggLSAxXSxcbiAgICAgICAgaW5uZXJJZFtpbm5lcklkLmxlbmd0aCAtIDFdIHx8IDBcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIGxldCBpZCA9IHNlYXJjaE1heElkKGRhdGEpICsgMTtcbiBcblxuICAgIGlmIChwYXJlbnRJZCkge1xuICAgICAgZGF0YS5jb21tZW50cy5tYXAoKGVsKSA9PiB7XG4gICAgICAgIGlmIChwYXJlbnRJZCA9PT0gZWwuaWQpIHtcbiAgICAgICAgICBlbC5jb21tZW50c0FycmF5LnB1c2goe1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICBkYXRlLFxuICAgICAgICAgICAgdGltZSxcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgbGlrZXM6IDAsXG4gICAgICAgICAgICBjdXJyZW50VXNlckxpa2VkOiBmYWxzZSxcbiAgICAgICAgICAgIGFuc3dlcmVkQ29tbWVudDogcGFyZW50SWQsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWwuY29tbWVudHNBcnJheS5tYXAoKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChwYXJlbnRJZCA9PT0gZS5pZCkge1xuICAgICAgICAgICAgICBlbC5jb21tZW50c0FycmF5LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgICAgICBkYXRlLFxuICAgICAgICAgICAgICAgIHRpbWUsXG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgbGlrZXM6IDAsXG4gICAgICAgICAgICAgICAgY3VycmVudFVzZXJMaWtlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYW5zd2VyZWRDb21tZW50OiBwYXJlbnRJZCxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhLmNvbW1lbnRzLnB1c2goe1xuICAgICAgICBuYW1lLFxuICAgICAgICB0ZXh0LFxuICAgICAgICBkYXRlLFxuICAgICAgICB0aW1lLFxuICAgICAgICBpZCxcbiAgICAgICAgbGlrZXM6IDAsXG4gICAgICAgIGN1cnJlbnRVc2VyTGlrZWQ6IGZhbHNlLFxuICAgICAgICBjb21tZW50c0FycmF5OiBbXSxcbiAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgdG9Mb2NhbFN0b3JhZ2UoZGF0YSk7XG4gICAgcmVuZGVyQ29tbWVudHMoZnJvbUxvY2FsU3RvcmFnZSgpKTtcblxuICAgIGV2ZW50cygpO1xuICB9O1xuXG4gIGV2ZW50cygpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VuZENvbW1lbnRzO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9