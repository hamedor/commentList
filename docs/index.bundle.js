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
                        <button key="innerr" class="deleteButton"><img src=${_icons_delete_svg__WEBPACK_IMPORTED_MODULE_0__} width="20" height="20"></button>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dCQUNSLGdCQUFnQixFQUFFLEtBQUs7Z0JBQ3ZCLGFBQWEsRUFBRSxFQUFFO2FBQ2xCLENBQUMsQ0FBQztTQUNKO1FBR0Qsc0RBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQiwyREFBYyxDQUFDLHdEQUFnQixFQUFFLENBQUMsQ0FBQztRQUVuQyxNQUFNLEVBQUUsQ0FBQztJQUNYLENBQUMsQ0FBQztJQUVGLE1BQU0sRUFBRSxDQUFDO0FBQ1gsQ0FBQyxDQUFDO0FBRUYsaUVBQWUsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29tbWVudHNsaXN0Ly4vc3JjL3N0eWxlcy5jc3M/MTU1MyIsIndlYnBhY2s6Ly9jb21tZW50c2xpc3QvLi9zcmMvZm9ybWF0RGF0ZS50cyIsIndlYnBhY2s6Ly9jb21tZW50c2xpc3QvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY29tbWVudHNsaXN0Ly4vc3JjL3JlbmRlckNvbW1lbnRzLnRzIiwid2VicGFjazovL2NvbW1lbnRzbGlzdC8uL3NyYy9zZW5kQ29tbWVudHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlOiBzdHJpbmcsIHRpbWU6IHN0cmluZykgPT4ge1xuICBsZXQgZGF0ZUFycmF5ID0gZGF0ZS5zcGxpdChcIi5cIik7XG5cbiAgbGV0IGRheSA9ICtkYXRlQXJyYXlbMF07XG4gIGxldCBtb250aCA9ICtkYXRlQXJyYXlbMV0gLSAxO1xuICBsZXQgeWVhciA9ICtkYXRlQXJyYXlbMl07XG5cbiAgbGV0IHRpbWVBcnJheSA9IHRpbWUuc3BsaXQoXCI6XCIpO1xuXG4gIGxldCBob3VycyA9ICt0aW1lQXJyYXlbMF07XG4gIGxldCBtaW51dGVzID0gK3RpbWVBcnJheVsxXTtcbiAgbGV0IHNlY29uZHMgPSArdGltZUFycmF5WzJdO1xuXG4gIGNvbnN0IGZvcm1hdHRlZCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXksIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKTtcblxuICBsZXQgcmVzdWx0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBmb3JtYXR0ZWQuZ2V0VGltZSgpO1xuXG4gIGlmIChyZXN1bHQgPCA4NjQwMDAwMCAmJiByZXN1bHQgPiAwKSB7XG4gICAgcmV0dXJuIFwi0KHQtdCz0L7QtNC90Y8g0LIgXCIgKyB0aW1lO1xuICB9XG5cbiAgaWYgKHJlc3VsdCA+PSA4NjQwMDAwMCAmJiByZXN1bHQgPCAxNzI4MDAwMDApIHtcbiAgICByZXR1cm4gXCLQktGH0LXRgNCwINCyIFwiICsgdGltZTtcbiAgfVxuICBpZiAocmVzdWx0ID49IDE3MjgwMDAwKSB7XG4gICAgcmV0dXJuIGRhdGUgKyBcIiDQsiBcIiArIHRpbWU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERhdGU7XG4iLCJpbXBvcnQgUm9vdE9iamVjdCBmcm9tIFwiLi9pbnRlcmZhY2VzL0NvbW1lbnRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBkYXRhIGZyb20gXCIuL2RhdGEuanNvblwiO1xuaW1wb3J0IHNlbmRDb21tZW50cyBmcm9tIFwiLi9zZW5kQ29tbWVudHNcIjtcbmltcG9ydCByZW5kZXJDb21tZW50cyBmcm9tIFwiLi9yZW5kZXJDb21tZW50c1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbmV4cG9ydCBjb25zdCB0b0xvY2FsU3RvcmFnZSA9IChkYXRhOiBSb290T2JqZWN0KSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGF0YVwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG59O1xuXG5leHBvcnQgY29uc3QgZnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkYXRhXCIpKTtcbn07XG5cbnRvTG9jYWxTdG9yYWdlKGRhdGEpO1xuY29uc3Qgc3RvcmVkRGF0YTogUm9vdE9iamVjdCA9IGZyb21Mb2NhbFN0b3JhZ2UoKTtcblxucmVuZGVyQ29tbWVudHMoc3RvcmVkRGF0YSk7XG5zZW5kQ29tbWVudHMoKTtcbiIsImltcG9ydCBSb290T2JqZWN0IGZyb20gXCIuL2ludGVyZmFjZXMvQ29tbWVudFwiO1xuLyogaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLmNzc1wiOyAqL1xuaW1wb3J0IGRhdGEgZnJvbSBcIi4vZGF0YS5qc29uXCI7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiLi9pY29ucy9kZWxldGUuc3ZnXCI7XG5pbXBvcnQgbGlrZUljb24gZnJvbSBcIi4vaWNvbnMvbGlrZS5zdmdcIjtcbmltcG9ydCBmb3JtYXREYXRlIGZyb20gXCIuL2Zvcm1hdERhdGVcIjtcbmNvbnN0IHJlbmRlckNvbW1lbnRzID0gKGRhdGE6IFJvb3RPYmplY3QpID0+IHtcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdFwiKTtcbiAgbGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGRhdGEuY29tbWVudHMubWFwKChlKSA9PiB7XG4gICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGxldCBkYXRlID0gZm9ybWF0RGF0ZShlLmRhdGUsIGUudGltZSk7XG5cbiAgICBsaXN0Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgJzxkaXYgY2xhc3M9XCJjb21tZW50VHJlZVwiPjwvZGl2PicpO1xuXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21tZW50VHJlZVwiKTtcbiAgICBkaXYuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlYmVnaW5cIiwgJzxociBjbGFzcz1cImhyLWhvcml6b250YWxcIj4nKTtcbiAgICBsZXQgdGVtcGxhdGVPdXRlciA9IGBcbiAgICAgICAgPGRpdiBpZD0ke2UuaWR9IGNsYXNzPVwiaXRlbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5hbWVcIj4ke2UubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkYXRlXCI+JHtkYXRlfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHRcIj4ke2UudGV4dH08L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtLXNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGlrZXNcIj4ke2UubGlrZXN9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cIm91dGVyXCIgY2xhc3M9XCJsaWtlQnV0dG9uXCIgPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPSR7XG4gICAgICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VXNlckxpa2VkICYmIFwicmVkXCJcbiAgICAgICAgICAgICAgICAgICAgfSB3aWR0aD1cIjI1cHhcIiBoZWlnaHQ9XCIyNXB4XCIgdmlld0JveD1cIjAgMCAzMiAzMlwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiaWNvbW9vbi1pZ25vcmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIxLjg4NiA1LjExNWMzLjUyMSAwIDYuMzc2IDIuODU1IDYuMzc2IDYuMzc2IDAgMS44MDktMC43NTQgMy40MzktMS45NjQgNC42bC0xMC4yOTcgMTAuMzQ5LTEwLjQ4NC0xMC41MzZjLTEuMS0xLjE0Ni0xLjc3OC0yLjY5OS0xLjc3OC00LjQxMyAwLTMuNTIyIDIuODU1LTYuMzc2IDYuMzc2LTYuMzc2IDIuNjUyIDAgNC45MjUgMS42MiA1Ljg4NiAzLjkyNCAwLjk2MS0yLjMwNCAzLjIzNC0zLjkyNCA1Ljg4Ni0zLjkyNHpNMjEuODg2IDQuMDQ5Yy0yLjM0NSAwLTQuNDk5IDEuMDg5LTUuODg2IDIuODg0LTEuMzg2LTEuNzk1LTMuNTQtMi44ODQtNS44ODYtMi44ODQtNC4xMDQgMC03LjQ0MiAzLjMzOS03LjQ0MiA3LjQ0MiAwIDEuOTI4IDAuNzM3IDMuNzU4IDIuMDc1IDUuMTUybDExLjI1MyAxMS4zMDkgMTEuMDUzLTExLjEwOGMxLjQ2LTEuNDAyIDIuMjc1LTMuMzA4IDIuMjc1LTUuMzUyIDAtNC4xMDQtMy4zMzktNy40NDItNy40NDItNy40NDJ2MHpcIj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiBcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwib3BlbkZvcm1cIj7QntGC0LLQtdGC0LjRgtGMPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJvdXRlclwiIGNsYXNzPVwiZGVsZXRlQnV0dG9uXCI+PGltZyBzcmM9JHtkZWxldGVJY29ufSB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIj48L2J1dHRvbj5cblxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJmb3JtQW5zd2VyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmFtZVwiIGNsYXNzPVwibmFtZWlucHV0XCIgdHlwZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJkYXRlUGlja2VyXCIgY2xhc3M9XCJkYXRlcGlja2VyXCIgdHlwZT1cImRhdGVcIj5cblxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cInRleHRBcmVhXCIgY2xhc3M9XCJ0ZXh0YXJlYVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNvbW1lbnRcIiBwbGFjZWhvbGRlcj1cItCd0LDQv9C40YHQsNGC0Ywg0LrQvtC80LzQtdC90YLQsNGA0LjQuVwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFuc3dlckNvbW1lbnRcIiB0eXBlPVwic3VibWl0XCI+0J7RgtC/0YDQsNCy0LjRgtGMPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yc1wiPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICBgO1xuXG4gICAgZGl2Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgdGVtcGxhdGVPdXRlcik7XG5cbiAgICBjb25zdCBpbm5lckFyciA9IGUuY29tbWVudHNBcnJheTtcbiAgICBlLmNvbW1lbnRzQXJyYXkubWFwKChpbm5lcikgPT4ge1xuICAgICAgbGV0IGRhdGUgPSBmb3JtYXREYXRlKGlubmVyLmRhdGUsIGlubmVyLnRpbWUpO1xuXG4gICAgICBsZXQgYW5zd2VyZWQ7XG5cbiAgICAgIGlubmVyQXJyLm1hcCgoZSkgPT4ge1xuICAgICAgICBpZiAoaW5uZXIuYW5zd2VyZWRDb21tZW50ID09PSBlLmlkKSB7XG4gICAgICAgICAgYW5zd2VyZWQgPSBgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnN3ZXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0XCI+INC+0YLQstC10YIgJHtlLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0XCI+JHtlLnRleHR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGlubmVyLmFuc3dlcmVkQ29tbWVudCA9PT0gZS5pZCkge1xuICAgICAgICBhbnN3ZXJlZCA9IGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnN3ZXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dFwiPiDQvtGC0LLQtdGCIDxiPiR7ZS5uYW1lfTwvYj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0XCI+JHtlLnRleHR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgIH1cblxuICAgICAgbGV0IHRlbXBsYXRlSW5uZXIgPSBgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9JHtpbm5lci5pZH0gY2xhc3M9XCJpdGVtMlwiPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibmFtZVwiPiR7aW5uZXIubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRhdGVcIj4ke2RhdGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcyA9XCJhbnN3ZXJlZEZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGhyPlxuICAgICAgICAgICAgICAgICAgICAke2Fuc3dlcmVkfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj4gICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQgdGV4dC1pbm5lclwiPiR7aW5uZXIudGV4dH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC0tc21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGlrZXNcIj4ke2lubmVyLmxpa2VzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwiaW5uZXJcIiBjbGFzcz1cImxpa2VCdXR0b25cIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPSR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyLmN1cnJlbnRVc2VyTGlrZWQgJiYgXCJyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgd2lkdGg9XCIyNXB4XCIgaGVpZ2h0PVwiMjVweFwiICB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiaWNvbW9vbi1pZ25vcmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjEuODg2IDUuMTE1YzMuNTIxIDAgNi4zNzYgMi44NTUgNi4zNzYgNi4zNzYgMCAxLjgwOS0wLjc1NCAzLjQzOS0xLjk2NCA0LjZsLTEwLjI5NyAxMC4zNDktMTAuNDg0LTEwLjUzNmMtMS4xLTEuMTQ2LTEuNzc4LTIuNjk5LTEuNzc4LTQuNDEzIDAtMy41MjIgMi44NTUtNi4zNzYgNi4zNzYtNi4zNzYgMi42NTIgMCA0LjkyNSAxLjYyIDUuODg2IDMuOTI0IDAuOTYxLTIuMzA0IDMuMjM0LTMuOTI0IDUuODg2LTMuOTI0ek0yMS44ODYgNC4wNDljLTIuMzQ1IDAtNC40OTkgMS4wODktNS44ODYgMi44ODQtMS4zODYtMS43OTUtMy41NC0yLjg4NC01Ljg4Ni0yLjg4NC00LjEwNCAwLTcuNDQyIDMuMzM5LTcuNDQyIDcuNDQyIDAgMS45MjggMC43MzcgMy43NTggMi4wNzUgNS4xNTJsMTEuMjUzIDExLjMwOSAxMS4wNTMtMTEuMTA4YzEuNDYtMS40MDIgMi4yNzUtMy4zMDggMi4yNzUtNS4zNTIgMC00LjEwNC0zLjMzOS03LjQ0Mi03LjQ0Mi03LjQ0MnYwelwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm9wZW5Gb3JtXCI+0J7RgtCy0LXRgtC40YLRjDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJpbm5lcnJcIiBjbGFzcz1cImRlbGV0ZUJ1dHRvblwiPjxpbWcgc3JjPSR7ZGVsZXRlSWNvbn0gd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybUFuc3dlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuYW1lXCIgY2xhc3M9XCJuYW1laW5wdXRcIiB0eXBlPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZGF0ZVBpY2tlclwiIGNsYXNzPVwiZGF0ZXBpY2tlclwiIHR5cGU9XCJkYXRlXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cInRleHRBcmVhXCIgY2xhc3M9XCJ0ZXh0YXJlYVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNvbW1lbnRcIiBwbGFjZWhvbGRlcj1cItCd0LDQv9C40YHQsNGC0Ywg0LrQvtC80LzQtdC90YLQsNGA0LjQuVwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYW5zd2VyQ29tbWVudFwiIHR5cGU9XCJzdWJtaXRcIj7QntGC0L/RgNCw0LLQuNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JzXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGA7XG5cbiAgICAgIGRpdi5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgdGVtcGxhdGVJbm5lcik7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQ29tbWVudHM7XG4iLCJpbXBvcnQgUm9vdE9iamVjdCBmcm9tIFwiLi9pbnRlcmZhY2VzL0NvbW1lbnRcIjtcclxuaW1wb3J0IHJlbmRlckNvbW1lbnRzIGZyb20gXCIuL3JlbmRlckNvbW1lbnRzXCI7XHJcbmltcG9ydCB7IHRvTG9jYWxTdG9yYWdlLCBmcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcblxyXG5jb25zdCBzZW5kQ29tbWVudHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgZXJyb3JzID0ge1xyXG4gICAgdGV4dDoge1xyXG4gICAgICBtaW46IFwiPHAgY2xhc3M9J2ludmFsaWRUZXh0IGludmFsaWQnPtCyINC/0L7Qu9C1INGC0LXQutGB0YIg0LTQvtC70LbQvdC+INCx0YvRgtGMINC90LUg0LzQtdC90YzRiNC1IDMg0YHQuNC80LLQvtC70L7QsjwvcD5cIixcclxuICAgICAgbWF4OiBcIjxwIGNsYXNzPSdpbnZhbGlkVGV4dCBpbnZhbGlkJz7QsiDQv9C+0LvQtSDRgtC10LrRgdGCINC00L7Qu9C20L3QviDQsdGL0YLRjCDQvdC1INCx0L7Qu9GM0YjQtSAyMDAg0YHQuNC80LLQvtC70L7QsjwvcD5cIixcclxuICAgICAgZW1wdHk6IFwiPHAgY2xhc3M9J2ludmFsaWRUZXh0IGludmFsaWQnPtC/0L7Qu9C1INGC0LXQutGB0YIg0L3QtSDQt9Cw0L/QvtC70L3QtdC90L48L3A+XCIsXHJcbiAgICB9LFxyXG4gICAgbmFtZToge1xyXG4gICAgICBtaW46IFwiPHAgY2xhc3M9J2ludmFsaWROYW1lIGludmFsaWQnPtCyINC/0L7Qu9C1INC40LzRjyDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0L3QtSDQvNC10L3RjNGI0LUgMyDRgdC40LzQstC+0LvQvtCyPC9wPlwiLFxyXG4gICAgICBtYXg6IFwiPHAgY2xhc3M9J2ludmFsaWROYW1lIGludmFsaWQnPtCyINC/0L7Qu9C1INC40LzRjyDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0L3QtSDQsdC+0LvRjNGI0LUgMTAg0YHQuNC80LLQvtC70L7QsjwvcD5cIixcclxuICAgICAgZW1wdHk6IFwiPHAgY2xhc3M9J2ludmFsaWROYW1lIGludmFsaWQnPtC/0L7Qu9C1INC40LzRjyDQvdC1INC30LDQv9C+0LvQvdC10L3QvjwvcD5cIixcclxuICAgIH0sXHJcbiAgICBkYXRlOiB7XHJcbiAgICAgIG1heDogXCI8cCBjbGFzcz0naW52YWxpZERhdGUgaW52YWxpZCc+0LPQvtC0INC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQsdC+0LvRjNGI0LUg0YLQtdC60YPRidC10LPQvjwvcD5cIixcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbGlrZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpa2VCdXR0b25cIikgYXMgTm9kZUxpc3Q7XHJcbiAgbGV0IGxpa2VkQXJyYXkgPSBuZXcgQXJyYXkobGlrZUJ1dHRvbnMubGVuZ3RoKTtcclxuXHJcbiAgbGV0IHRleHRWYWxpZGF0aW9uQXJyYXkgPSBuZXcgQXJyYXkobGlrZUJ1dHRvbnMubGVuZ3RoKTtcclxuICBsZXQgbmFtZVZhbGlkYXRpb25BcnJheSA9IG5ldyBBcnJheShsaWtlQnV0dG9ucy5sZW5ndGgpO1xyXG4gIGxldCBkYXRlVmFsaWRhdGlvbkFycmF5ID0gbmV3IEFycmF5KGxpa2VCdXR0b25zLmxlbmd0aCk7XHJcblxyXG4gIGNvbnN0IGV2ZW50cyA9ICgpID0+IHtcclxuICAgIGNvbnN0IG9wZW5Gb3JtQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub3BlbkZvcm1cIikgYXMgTm9kZUxpc3Q7XHJcbiAgICBjb25zdCBhbnN3ZXJDb21tZW50QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgIFwiLmFuc3dlckNvbW1lbnRcIlxyXG4gICAgKSBhcyBOb2RlTGlzdDtcclxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBcIi5kZWxldGVCdXR0b25cIlxyXG4gICAgKSBhcyBOb2RlTGlzdDtcclxuICAgIGNvbnN0IGxpa2VCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saWtlQnV0dG9uXCIpIGFzIE5vZGVMaXN0O1xyXG5cclxuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50ZXh0YXJlYVwiKSBhcyBOb2RlTGlzdDtcclxuICAgIGNvbnN0IGRhdGVwaWNrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhdGVwaWNrZXJcIikgYXMgTm9kZUxpc3Q7XHJcbiAgICBjb25zdCBuYW1laW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hbWVpbnB1dFwiKSBhcyBOb2RlTGlzdDtcclxuXHJcbiAgICBsZXQgdGV4dEFycmF5ID0gbmV3IEFycmF5KHRleHRhcmVhLmxlbmd0aCk7XHJcbiAgICBsZXQgbmFtZUFycmF5ID0gbmV3IEFycmF5KHRleHRhcmVhLmxlbmd0aCk7XHJcbiAgICBsZXQgZGF0ZUFycmF5ID0gbmV3IEFycmF5KHRleHRhcmVhLmxlbmd0aCk7XHJcbiAgICBsZXQgdGltZUFycmF5ID0gbmV3IEFycmF5KHRleHRhcmVhLmxlbmd0aCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcGVuRm9ybUJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgb3BlbkZvcm1CdXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgb3BlbkZvcm1CdXR0b25zW2ldLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm9wZW5lZFwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlRXJyb3JzID0gKFxyXG4gICAgICBlbGVtZW50OiBIVE1MRWxlbWVudCxcclxuICAgICAgdmFsaWRhdGlvblN0YXR1czogYm9vbGVhbixcclxuICAgICAgdG9SZW1vdmU6IGFueVxyXG4gICAgKSA9PiB7XHJcbiAgICAgIGxldCBlcnJvcnMgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmNoaWxkcmVuO1xyXG5cclxuICAgICAgZm9yIChsZXQgZXJyIG9mIGVycm9ycykge1xyXG4gICAgICAgIGxldCBjaGlsZCA9IGVyci5xdWVyeVNlbGVjdG9yKGA6c2NvcGUgPiAke3RvUmVtb3ZlfWApO1xyXG5cclxuICAgICAgICBpZiAoY2hpbGQpIHtcclxuICAgICAgICAgIGNoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtZW50LnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIGJsYWNrXCI7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuICh2YWxpZGF0aW9uU3RhdHVzID0gZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB2YWxpZGF0ZSA9IChcclxuICAgICAgZWxlbWVudDogSFRNTEVsZW1lbnQsXHJcbiAgICAgIHRleHQ6IHN0cmluZyxcclxuICAgICAgdmFsaWRhdGlvblN0YXR1czogYm9vbGVhbixcclxuICAgICAgZXJyOiBhbnksXHJcbiAgICAgIGFsbG93ZWRNaW46IG51bWJlcixcclxuICAgICAgYWxsb3dlZE1heDogbnVtYmVyLFxyXG4gICAgICB3aGF0SXNDaGVja2VkOiBzdHJpbmdcclxuICAgICkgPT4ge1xyXG4gICAgICBjb25zdCBtYWtlQm9yZGVyUmVkID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBlbCA9IGVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlbjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBlbCkge1xyXG4gICAgICAgICAgbGV0IGEgPSBpdGVtIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgaWYgKGEuY2xhc3NOYW1lID09PSB3aGF0SXNDaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGEuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgcmVkXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKHdoYXRJc0NoZWNrZWQgPT09IFwiZGF0ZXBpY2tlclwiKSB7XHJcbiAgICAgICAgaWYgKCt0ZXh0ID4gYWxsb3dlZE1heCkge1xyXG4gICAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICAgIFwiYWZ0ZXJiZWdpblwiLFxyXG4gICAgICAgICAgICBlcnIubWF4XHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIHZhbGlkYXRpb25TdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgICAgbWFrZUJvcmRlclJlZCgpO1xyXG4gICAgICAgICAgcmV0dXJuIHZhbGlkYXRpb25TdGF0dXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIXRleHQpIHtcclxuICAgICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgICAgIFwiYWZ0ZXJiZWdpblwiLFxyXG4gICAgICAgICAgZXJyLmVtcHR5XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdmFsaWRhdGlvblN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgbWFrZUJvcmRlclJlZCgpO1xyXG4gICAgICAgIHJldHVybiB2YWxpZGF0aW9uU3RhdHVzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIXRleHQgfHwgdGV4dC5sZW5ndGggPCBhbGxvd2VkTWluKSB7XHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICBcImFmdGVyYmVnaW5cIixcclxuICAgICAgICAgIGVyci5taW5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB2YWxpZGF0aW9uU3RhdHVzID0gdHJ1ZTtcclxuICAgICAgICBtYWtlQm9yZGVyUmVkKCk7XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRpb25TdGF0dXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0ZXh0Lmxlbmd0aCA+IGFsbG93ZWRNYXgpIHtcclxuICAgICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgICAgIFwiYWZ0ZXJiZWdpblwiLFxyXG4gICAgICAgICAgZXJyLm1heFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHZhbGlkYXRpb25TdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgIG1ha2VCb3JkZXJSZWQoKTtcclxuICAgICAgICByZXR1cm4gdmFsaWRhdGlvblN0YXR1cztcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXREYXRlID0gKFxyXG4gICAgICBkYXRlOiBzdHJpbmcsXHJcbiAgICAgIHBpY2tlcjogSFRNTElucHV0RWxlbWVudCxcclxuICAgICAgZGF0ZVZhbGlkYXRpb25BcnJheTogYm9vbGVhbixcclxuICAgICAgc2h1b2xkVmFsaWRhdGU6IGJvb2xlYW5cclxuICAgICkgPT4ge1xyXG4gICAgICBjb25zdCBhcnJheSA9IGRhdGUuc3BsaXQoXCItXCIpO1xyXG4gICAgICBjb25zdCBkYXk6IHN0cmluZyA9IGFycmF5WzJdO1xyXG5cclxuICAgICAgY29uc3QgbW9udGg6IHN0cmluZyA9IGFycmF5WzFdO1xyXG4gICAgICBjb25zdCB5ZWFyOiBzdHJpbmcgPSBhcnJheVswXTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGRheSArIFwiLlwiICsgbW9udGggKyBcIi5cIiArIHllYXI7XHJcblxyXG4gICAgICBpZiAoc2h1b2xkVmFsaWRhdGUpIHtcclxuICAgICAgICBkYXRlVmFsaWRhdGlvbkFycmF5ID0gcmVtb3ZlRXJyb3JzKFxyXG4gICAgICAgICAgcGlja2VyLFxyXG4gICAgICAgICAgZGF0ZVZhbGlkYXRpb25BcnJheSxcclxuICAgICAgICAgIFwiLmludmFsaWREYXRlXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIGRhdGVWYWxpZGF0aW9uQXJyYXkgPSB2YWxpZGF0ZShcclxuICAgICAgICAgIHBpY2tlcixcclxuICAgICAgICAgIHllYXIsXHJcbiAgICAgICAgICBkYXRlVmFsaWRhdGlvbkFycmF5LFxyXG4gICAgICAgICAgZXJyb3JzLmRhdGUsXHJcbiAgICAgICAgICAzLFxyXG4gICAgICAgICAgK3BpY2tlci5tYXguc3BsaXQoXCItXCIpWzBdLFxyXG4gICAgICAgICAgXCJkYXRlcGlja2VyXCJcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHRhcmVhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBpbnB1dCA9IHRleHRhcmVhW2ldIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICBpZiAoaW5wdXQuZ2V0QXR0cmlidXRlKFwibGlzdGVuZXJcIikgIT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwibGlzdGVuZXJcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICB0ZXh0QXJyYXlbaV0gPSAodGFyZ2V0IGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQpLnZhbHVlO1xyXG5cclxuICAgICAgICAgIHRleHRWYWxpZGF0aW9uQXJyYXlbaV0gPSByZW1vdmVFcnJvcnMoXHJcbiAgICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgICB0ZXh0VmFsaWRhdGlvbkFycmF5W2ldLFxyXG4gICAgICAgICAgICBcIi5pbnZhbGlkVGV4dFwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBsZXQgcGFyZW50SWQgPSAraW5wdXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQ7XHJcblxyXG4gICAgICAgICAgICBuYW1lVmFsaWRhdGlvbkFycmF5W2ldID0gcmVtb3ZlRXJyb3JzKFxyXG4gICAgICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgICAgIG5hbWVWYWxpZGF0aW9uQXJyYXlbaV0sXHJcbiAgICAgICAgICAgICAgXCIuaW52YWxpZE5hbWVcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0ZXh0VmFsaWRhdGlvbkFycmF5W2ldID0gcmVtb3ZlRXJyb3JzKFxyXG4gICAgICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgICAgIHRleHRWYWxpZGF0aW9uQXJyYXlbaV0sXHJcbiAgICAgICAgICAgICAgXCIuaW52YWxpZFRleHRcIlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgbmFtZVZhbGlkYXRpb25BcnJheVtpXSA9IHZhbGlkYXRlKFxyXG4gICAgICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgICAgIG5hbWVBcnJheVtpXSxcclxuICAgICAgICAgICAgICBuYW1lVmFsaWRhdGlvbkFycmF5W2ldLFxyXG4gICAgICAgICAgICAgIGVycm9ycy5uYW1lLFxyXG4gICAgICAgICAgICAgIDMsXHJcbiAgICAgICAgICAgICAgMTAsXHJcbiAgICAgICAgICAgICAgXCJuYW1laW5wdXRcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0ZXh0VmFsaWRhdGlvbkFycmF5W2ldID0gdmFsaWRhdGUoXHJcbiAgICAgICAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgICAgICAgdGV4dEFycmF5W2ldLFxyXG4gICAgICAgICAgICAgIHRleHRWYWxpZGF0aW9uQXJyYXlbaV0sXHJcbiAgICAgICAgICAgICAgZXJyb3JzLnRleHQsXHJcbiAgICAgICAgICAgICAgMyxcclxuICAgICAgICAgICAgICAyMDAsXHJcbiAgICAgICAgICAgICAgXCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRleHRWYWxpZGF0aW9uQXJyYXlbaV0gJiYgIW5hbWVWYWxpZGF0aW9uQXJyYXlbaV0pIHtcclxuICAgICAgICAgICAgICBzZW5kQ29tbWVudChcclxuICAgICAgICAgICAgICAgIHRleHRBcnJheVtpXSxcclxuICAgICAgICAgICAgICAgIG5hbWVBcnJheVtpXSxcclxuICAgICAgICAgICAgICAgIHRpbWVBcnJheVtpXSxcclxuICAgICAgICAgICAgICAgIGRhdGVBcnJheVtpXSxcclxuICAgICAgICAgICAgICAgIHBhcmVudElkXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgdGV4dFZhbGlkYXRpb25BcnJheVtpXSA9IHJlbW92ZUVycm9ycyhcclxuICAgICAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgICAgIHRleHRWYWxpZGF0aW9uQXJyYXlbaV0sXHJcbiAgICAgICAgICAgIFwiLmludmFsaWRUZXh0XCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0ZXh0VmFsaWRhdGlvbkFycmF5W2ldID0gdmFsaWRhdGUoXHJcbiAgICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgICB0ZXh0QXJyYXlbaV0sXHJcbiAgICAgICAgICAgIHRleHRWYWxpZGF0aW9uQXJyYXlbaV0sXHJcbiAgICAgICAgICAgIGVycm9ycy50ZXh0LFxyXG4gICAgICAgICAgICAzLFxyXG4gICAgICAgICAgICAyMDAsXHJcbiAgICAgICAgICAgIFwidGV4dGFyZWFcIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZWlucHV0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBpbnB1dCA9IG5hbWVpbnB1dFtpXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgaWYgKGlucHV0LmdldEF0dHJpYnV0ZShcImxpc3RlbmVyXCIpICE9PSBcInRydWVcIikge1xyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImxpc3RlbmVyXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBuYW1laW5wdXRbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICAgICAgICBuYW1lQXJyYXlbaV0gPSAoZS50YXJnZXQgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWU7XHJcblxyXG4gICAgICAgICAgbmFtZVZhbGlkYXRpb25BcnJheVtpXSA9IHJlbW92ZUVycm9ycyhcclxuICAgICAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgICAgIG5hbWVWYWxpZGF0aW9uQXJyYXlbaV0sXHJcbiAgICAgICAgICAgIFwiLmludmFsaWROYW1lXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcclxuICAgICAgICAgIG5hbWVWYWxpZGF0aW9uQXJyYXlbaV0gPSByZW1vdmVFcnJvcnMoXHJcbiAgICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgICBuYW1lVmFsaWRhdGlvbkFycmF5W2ldLFxyXG4gICAgICAgICAgICBcIi5pbnZhbGlkTmFtZVwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgbmFtZVZhbGlkYXRpb25BcnJheVtpXSA9IHZhbGlkYXRlKFxyXG4gICAgICAgICAgICBpbnB1dCxcclxuICAgICAgICAgICAgbmFtZUFycmF5W2ldLFxyXG4gICAgICAgICAgICBuYW1lVmFsaWRhdGlvbkFycmF5W2ldLFxyXG4gICAgICAgICAgICBlcnJvcnMubmFtZSxcclxuICAgICAgICAgICAgMyxcclxuICAgICAgICAgICAgMTAsXHJcbiAgICAgICAgICAgIFwibmFtZWlucHV0XCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGVwaWNrZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IHBpY2tlciA9IGRhdGVwaWNrZXJbaV0gYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XHJcblxyXG5cclxuICAgICAgcGlja2VyLm1heCA9IGN1cnJlbnREYXRlO1xyXG5cclxuICAgICAgZGF0ZUFycmF5W2ldID0gZ2V0RGF0ZShcclxuICAgICAgICBjdXJyZW50RGF0ZSxcclxuICAgICAgICBwaWNrZXIsXHJcbiAgICAgICAgZGF0ZVZhbGlkYXRpb25BcnJheVtpXSxcclxuICAgICAgICBmYWxzZVxyXG4gICAgICApO1xyXG5cclxuICAgICAgZGF0ZXBpY2tlcltpXS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gKGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICAgIGRhdGVBcnJheVtpXSA9IGdldERhdGUodGFyZ2V0LCBwaWNrZXIsIGRhdGVWYWxpZGF0aW9uQXJyYXlbaV0sIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbnN3ZXJDb21tZW50QnV0dG9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgYnV0dG9uID0gYW5zd2VyQ29tbWVudEJ1dHRvbnNbaV0gYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICBpZiAoYnV0dG9uLmdldEF0dHJpYnV0ZShcImxpc3RlbmVyXCIpICE9PSBcInRydWVcIikge1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJsaXN0ZW5lclwiLCBcInRydWVcIik7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHBhcmVudElkID0gK2J1dHRvbi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZDtcclxuXHJcbiAgICAgICAgICBjb25zdCB0aW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLnNwbGl0KFwiLFwiKVsxXS5zcGxpdChcIjpcIik7XHJcblxyXG4gICAgICAgICAgY29uc3QgaG91cnMgPSB0aW1lWzBdO1xyXG4gICAgICAgICAgY29uc3QgbWludXRlcyA9IHRpbWVbMV07XHJcbiAgICAgICAgICBjb25zdCBzZWNvdW5kID0gdGltZVsyXTtcclxuXHJcbiAgICAgICAgICB0aW1lQXJyYXlbaV0gPSBob3VycyArIFwiOlwiICsgbWludXRlcyArIFwiOlwiICsgc2Vjb3VuZDtcclxuXHJcbiAgICAgICAgICBuYW1lVmFsaWRhdGlvbkFycmF5W2ldID0gcmVtb3ZlRXJyb3JzKFxyXG4gICAgICAgICAgICBidXR0b24sXHJcbiAgICAgICAgICAgIG5hbWVWYWxpZGF0aW9uQXJyYXlbaV0sXHJcbiAgICAgICAgICAgIFwiLmludmFsaWROYW1lXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0ZXh0VmFsaWRhdGlvbkFycmF5W2ldID0gcmVtb3ZlRXJyb3JzKFxyXG4gICAgICAgICAgICBidXR0b24sXHJcbiAgICAgICAgICAgIHRleHRWYWxpZGF0aW9uQXJyYXlbaV0sXHJcbiAgICAgICAgICAgIFwiLmludmFsaWRUZXh0XCJcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgbmFtZVZhbGlkYXRpb25BcnJheVtpXSA9IHZhbGlkYXRlKFxyXG4gICAgICAgICAgICBidXR0b24sXHJcbiAgICAgICAgICAgIG5hbWVBcnJheVtpXSxcclxuICAgICAgICAgICAgbmFtZVZhbGlkYXRpb25BcnJheVtpXSxcclxuICAgICAgICAgICAgZXJyb3JzLm5hbWUsXHJcbiAgICAgICAgICAgIDMsXHJcbiAgICAgICAgICAgIDEwLFxyXG4gICAgICAgICAgICBcIm5hbWVpbnB1dFwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGV4dFZhbGlkYXRpb25BcnJheVtpXSA9IHZhbGlkYXRlKFxyXG4gICAgICAgICAgICBidXR0b24sXHJcbiAgICAgICAgICAgIHRleHRBcnJheVtpXSxcclxuICAgICAgICAgICAgdGV4dFZhbGlkYXRpb25BcnJheVtpXSxcclxuICAgICAgICAgICAgZXJyb3JzLnRleHQsXHJcbiAgICAgICAgICAgIDMsXHJcbiAgICAgICAgICAgIDIwMCxcclxuICAgICAgICAgICAgXCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgIXRleHRWYWxpZGF0aW9uQXJyYXlbaV0gJiZcclxuICAgICAgICAgICAgIW5hbWVWYWxpZGF0aW9uQXJyYXlbaV0gJiZcclxuICAgICAgICAgICAgIWRhdGVWYWxpZGF0aW9uQXJyYXlbaV1cclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBzZW5kQ29tbWVudChcclxuICAgICAgICAgICAgICB0ZXh0QXJyYXlbaV0sXHJcbiAgICAgICAgICAgICAgbmFtZUFycmF5W2ldLFxyXG4gICAgICAgICAgICAgIGRhdGVBcnJheVtpXSxcclxuICAgICAgICAgICAgICB0aW1lQXJyYXlbaV0sXHJcbiAgICAgICAgICAgICAgcGFyZW50SWRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVsZXRlQnV0dG9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgYnV0dG9uID0gZGVsZXRlQnV0dG9uc1tpXSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgIGlmIChidXR0b24uZ2V0QXR0cmlidXRlKFwibGlzdGVuZXJcIikgIT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKFwibGlzdGVuZXJcIiwgXCJ0cnVlXCIpO1xyXG5cclxuICAgICAgICAgIGxldCBwYXJlbnRJZCA9ICtidXR0b24ucGFyZW50RWxlbWVudC5pZDtcclxuXHJcbiAgICAgICAgICBsZXQgbGV2ZWw6IFN0cmluZyA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJrZXlcIik7XHJcblxyXG4gICAgICAgICAgZGVsZXRlQ29tbWVudChwYXJlbnRJZCwgbGV2ZWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpa2VCdXR0b25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBidXR0b24gPSBsaWtlQnV0dG9uc1tpXSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgIGlmIChidXR0b24uZ2V0QXR0cmlidXRlKFwibGlzdGVuZXJcIikgIT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJyZWRcIik7XHJcbiAgICAgICAgICBpZiAoIWxpa2VkQXJyYXlbaV0pIHtcclxuICAgICAgICAgICAgbGlrZWRBcnJheVtpXSA9IHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaWtlZEFycmF5W2ldID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShcImxpc3RlbmVyXCIsIFwidHJ1ZVwiKTtcclxuXHJcbiAgICAgICAgICBsZXQgcGFyZW50SWQgPSArYnV0dG9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkO1xyXG5cclxuICAgICAgICAgIGxldCBsZXZlbDogU3RyaW5nID0gYnV0dG9uLmdldEF0dHJpYnV0ZShcImtleVwiKTtcclxuICAgICAgICAgIGxpa2VDb21tZW50KHBhcmVudElkLCBsZXZlbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBsaWtlQ29tbWVudCA9IChpZDogbnVtYmVyLCBsZXZlbDogU3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhOiBSb290T2JqZWN0ID0gZnJvbUxvY2FsU3RvcmFnZSgpO1xyXG5cclxuICAgIGlmIChsZXZlbCA9PT0gXCJvdXRlclwiKSB7XHJcbiAgICAgIGRhdGEuY29tbWVudHNcclxuICAgICAgICAuZmlsdGVyKChlKSA9PiBlLmlkID09PSBpZClcclxuICAgICAgICAubWFwKChlbCkgPT4ge1xyXG5cclxuICAgICAgICAgIGlmIChlbC5jdXJyZW50VXNlckxpa2VkKSB7XHJcbiAgICAgICAgICAgIGVsLmxpa2VzIC09IDE7XHJcblxyXG4gICAgICAgICAgICBlbC5jdXJyZW50VXNlckxpa2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRvTG9jYWxTdG9yYWdlKGRhdGEpO1xyXG4gICAgICAgICAgICByZW5kZXJDb21tZW50cyhmcm9tTG9jYWxTdG9yYWdlKCkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWwubGlrZXMgKz0gMTtcclxuICAgICAgICAgICAgZWwuY3VycmVudFVzZXJMaWtlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRvTG9jYWxTdG9yYWdlKGRhdGEpO1xyXG4gICAgICAgICAgICByZW5kZXJDb21tZW50cyhmcm9tTG9jYWxTdG9yYWdlKCkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGF0YS5jb21tZW50cy5mbGF0TWFwKChlKSA9PiB7XHJcbiAgICAgICAgZS5jb21tZW50c0FycmF5XHJcbiAgICAgICAgICAuZmlsdGVyKChlKSA9PiBlLmlkID09PSBpZClcclxuICAgICAgICAgIC5tYXAoKGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbC5jdXJyZW50VXNlckxpa2VkKSB7XHJcbiAgICAgICAgICAgICAgZWwuY3VycmVudFVzZXJMaWtlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIGVsLmxpa2VzIC09IDE7XHJcblxyXG4gICAgICAgICAgICAgIHRvTG9jYWxTdG9yYWdlKGRhdGEpO1xyXG4gICAgICAgICAgICAgIHJlbmRlckNvbW1lbnRzKGZyb21Mb2NhbFN0b3JhZ2UoKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgZWwuY3VycmVudFVzZXJMaWtlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgZWwubGlrZXMgKz0gMTtcclxuXHJcbiAgICAgICAgICAgICAgdG9Mb2NhbFN0b3JhZ2UoZGF0YSk7XHJcbiAgICAgICAgICAgICAgcmVuZGVyQ29tbWVudHMoZnJvbUxvY2FsU3RvcmFnZSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZXZlbnRzKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlQ29tbWVudCA9IChpZDogbnVtYmVyLCBsZXZlbDogU3RyaW5nKSA9PiB7XHJcblxyXG4gICAgY29uc3QgZGF0YTogUm9vdE9iamVjdCA9IGZyb21Mb2NhbFN0b3JhZ2UoKTtcclxuXHJcbiAgICBpZiAobGV2ZWwgPT09IFwib3V0ZXJcIikge1xyXG4gICAgICB0b0xvY2FsU3RvcmFnZSh7XHJcbiAgICAgICAgY29tbWVudHM6IFsuLi5kYXRhLmNvbW1lbnRzLmZpbHRlcigoZSkgPT4gZS5pZCAhPT0gaWQpXSxcclxuICAgICAgfSk7XHJcbiAgICAgIHJlbmRlckNvbW1lbnRzKGZyb21Mb2NhbFN0b3JhZ2UoKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBcclxuICAgICAgY29uc3QgZmlsdGVyZWQgPSBkYXRhLmNvbW1lbnRzLm1hcCgoZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBlLmNvbW1lbnRzQXJyYXkuZmlsdGVyKChlKSA9PiBlLmlkICE9PSBpZCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmNvbW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGZpcnN0YXJyID0gZmlsdGVyZWRbaV07XHJcbiAgICAgICAgZGF0YS5jb21tZW50c1tpXS5jb21tZW50c0FycmF5ID0gWy4uLmZpcnN0YXJyXTtcclxuICAgICAgfVxyXG4gICAgICB0b0xvY2FsU3RvcmFnZShkYXRhKTtcclxuICAgICAgcmVuZGVyQ29tbWVudHMoZnJvbUxvY2FsU3RvcmFnZSgpKTtcclxuICAgIH1cclxuICAgIGV2ZW50cygpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNlbmRDb21tZW50ID0gKFxyXG4gICAgdGV4dDogc3RyaW5nLFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgZGF0ZTogc3RyaW5nLFxyXG4gICAgdGltZTogc3RyaW5nLFxyXG4gICAgcGFyZW50SWQ6IG51bWJlclxyXG4gICkgPT4ge1xyXG4gICAgY29uc3QgZGF0YTogUm9vdE9iamVjdCA9IGZyb21Mb2NhbFN0b3JhZ2UoKTtcclxuXHJcblxyXG4gICAgY29uc3Qgc2VhcmNoTWF4SWQgPSAoZGF0YTogUm9vdE9iamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBvdXRlcklkID0gZGF0YS5jb21tZW50cy5tYXAoKGUpID0+IGUuaWQpO1xyXG4gICAgICBjb25zdCBpbm5lcklkID0gZGF0YS5jb21tZW50cy5mbGF0TWFwKChlKSA9PlxyXG4gICAgICAgIGUuY29tbWVudHNBcnJheS5tYXAoKGVsKSA9PiBlbC5pZClcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IG91dGVyID0gb3V0ZXJJZFtvdXRlcklkLmxlbmd0aCAtIDFdO1xyXG4gICAgICBjb25zdCBpbm5lciA9IGlubmVySWRbaW5uZXJJZC5sZW5ndGggLSAxXTtcclxuXHJcbiAgICAgIGlmIChvdXRlciAmJiBpbm5lcikge1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1heChvdXRlciwgaW5uZXIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghb3V0ZXIgJiYgIWlubmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFvdXRlciAmJiBpbm5lcikge1xyXG4gICAgICAgIHJldHVybiBpbm5lcjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIWlubmVyICYmIG91dGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG91dGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByZXN1bHQgPSBNYXRoLm1heChcclxuICAgICAgICBvdXRlcklkW291dGVySWQubGVuZ3RoIC0gMV0sXHJcbiAgICAgICAgaW5uZXJJZFtpbm5lcklkLmxlbmd0aCAtIDFdIHx8IDBcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBpZCA9IHNlYXJjaE1heElkKGRhdGEpICsgMTtcclxuIFxyXG5cclxuICAgIGlmIChwYXJlbnRJZCkge1xyXG4gICAgICBkYXRhLmNvbW1lbnRzLm1hcCgoZWwpID0+IHtcclxuICAgICAgICBpZiAocGFyZW50SWQgPT09IGVsLmlkKSB7XHJcbiAgICAgICAgICBlbC5jb21tZW50c0FycmF5LnB1c2goe1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICB0ZXh0LFxyXG4gICAgICAgICAgICBkYXRlLFxyXG4gICAgICAgICAgICB0aW1lLFxyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgbGlrZXM6IDAsXHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VyTGlrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBhbnN3ZXJlZENvbW1lbnQ6IHBhcmVudElkLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGVsLmNvbW1lbnRzQXJyYXkubWFwKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwYXJlbnRJZCA9PT0gZS5pZCkge1xyXG4gICAgICAgICAgICAgIGVsLmNvbW1lbnRzQXJyYXkucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgdGV4dCxcclxuICAgICAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgICAgICB0aW1lLFxyXG4gICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICBsaWtlczogMCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VyTGlrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYW5zd2VyZWRDb21tZW50OiBwYXJlbnRJZCxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRhdGEuY29tbWVudHMucHVzaCh7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICB0ZXh0LFxyXG4gICAgICAgIGRhdGUsXHJcbiAgICAgICAgdGltZSxcclxuICAgICAgICBpZCxcclxuICAgICAgICBsaWtlczogMCxcclxuICAgICAgICBjdXJyZW50VXNlckxpa2VkOiBmYWxzZSxcclxuICAgICAgICBjb21tZW50c0FycmF5OiBbXSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRvTG9jYWxTdG9yYWdlKGRhdGEpO1xyXG4gICAgcmVuZGVyQ29tbWVudHMoZnJvbUxvY2FsU3RvcmFnZSgpKTtcclxuXHJcbiAgICBldmVudHMoKTtcclxuICB9O1xyXG5cclxuICBldmVudHMoKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlbmRDb21tZW50cztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9