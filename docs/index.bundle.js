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

/***/ "./src/deleteComment.ts":
/*!******************************!*\
  !*** ./src/deleteComment.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.ts");
/* harmony import */ var _renderComments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderComments */ "./src/renderComments.ts");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ "./src/events.ts");



const deleteComment = (id, level) => {
    const data = (0,_index__WEBPACK_IMPORTED_MODULE_0__.fromLocalStorage)('data');
    if (level === "outer") {
        (0,_index__WEBPACK_IMPORTED_MODULE_0__.toLocalStorage)('data', {
            comments: [...data.comments.filter((e) => e.id !== id)],
        });
        (0,_renderComments__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_index__WEBPACK_IMPORTED_MODULE_0__.fromLocalStorage)('data'));
    }
    else {
        const filtered = data.comments.map((e) => {
            return e.commentsArray.filter((e) => e.id !== id);
        });
        for (let i = 0; i < data.comments.length; i++) {
            let firstarr = filtered[i];
            data.comments[i].commentsArray = [...firstarr];
        }
        (0,_index__WEBPACK_IMPORTED_MODULE_0__.toLocalStorage)('data', data);
        (0,_renderComments__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_index__WEBPACK_IMPORTED_MODULE_0__.fromLocalStorage)('data'));
    }
    (0,_events__WEBPACK_IMPORTED_MODULE_2__.events)();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteComment);


/***/ }),

/***/ "./src/events.ts":
/*!***********************!*\
  !*** ./src/events.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "events": () => (/* binding */ events)
/* harmony export */ });
/* harmony import */ var _likeComment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likeComment */ "./src/likeComment.ts");
/* harmony import */ var _deleteComment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteComment */ "./src/deleteComment.ts");
/* harmony import */ var _sendComment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sendComment */ "./src/sendComment.ts");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validate */ "./src/validate.ts");
/* harmony import */ var _getDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getDate */ "./src/getDate.ts");





const events = () => {
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
    const likeButtons = document.querySelectorAll(".likeButton");
    let likedArray = new Array(likeButtons.length);
    let textValidationArray = new Array(likeButtons.length);
    let nameValidationArray = new Array(likeButtons.length);
    let dateValidationArray = new Array(likeButtons.length);
    const openFormButtons = document.querySelectorAll(".openForm");
    const answerCommentButtons = document.querySelectorAll(".answerComment");
    const deleteButtons = document.querySelectorAll(".deleteButton");
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
    for (let i = 0; i < textarea.length; i++) {
        let input = textarea[i];
        if (input.getAttribute("listener") !== "true") {
            input.setAttribute("listener", "true");
            input.addEventListener("input", (e) => {
                const target = e.target;
                textArray[i] = target.value;
                textValidationArray[i] = (0,_validate__WEBPACK_IMPORTED_MODULE_3__.removeErrors)(input, textValidationArray[i], ".invalidText");
            });
            input.addEventListener("keypress", (e) => {
                if (e.key === "Enter") {
                    e.preventDefault();
                    let parentId = +input.parentElement.parentElement.parentElement.id;
                    nameValidationArray[i] = (0,_validate__WEBPACK_IMPORTED_MODULE_3__.removeErrors)(input, nameValidationArray[i], ".invalidName");
                    textValidationArray[i] = (0,_validate__WEBPACK_IMPORTED_MODULE_3__.removeErrors)(input, textValidationArray[i], ".invalidText");
                    nameValidationArray[i] = (0,_validate__WEBPACK_IMPORTED_MODULE_3__.validate)(input, nameArray[i], nameValidationArray[i], errors.name, 3, 10, "nameinput");
                    textValidationArray[i] = (0,_validate__WEBPACK_IMPORTED_MODULE_3__.validate)(input, textArray[i], textValidationArray[i], errors.text, 3, 200, "textarea");
                    if (!textValidationArray[i] && !nameValidationArray[i]) {
                        (0,_sendComment__WEBPACK_IMPORTED_MODULE_2__["default"])(textArray[i], nameArray[i], timeArray[i], dateArray[i], parentId);
                    }
                }
            });
            input.addEventListener("focusout", () => {
                textValidationArray[i] = (0,_validate__WEBPACK_IMPORTED_MODULE_3__.removeErrors)(input, textValidationArray[i], ".invalidText");
                textValidationArray[i] = (0,_validate__WEBPACK_IMPORTED_MODULE_3__.validate)(input, textArray[i], textValidationArray[i], errors.text, 3, 200, "textarea");
            });
        }
    }
    for (let i = 0; i < nameinput.length; i++) {
        let input = nameinput[i];
        if (input.getAttribute("listener") !== "true") {
            input.setAttribute("listener", "true");
            nameinput[i].addEventListener("input", (e) => {
                nameArray[i] = e.target.value;
                nameValidationArray[i] = (0,_validate__WEBPACK_IMPORTED_MODULE_3__.removeErrors)(input, nameValidationArray[i], ".invalidName");
            });
            input.addEventListener("focusout", () => {
                nameValidationArray[i] = (0,_validate__WEBPACK_IMPORTED_MODULE_3__.removeErrors)(input, nameValidationArray[i], ".invalidName");
                nameValidationArray[i] = (0,_validate__WEBPACK_IMPORTED_MODULE_3__.validate)(input, nameArray[i], nameValidationArray[i], errors.name, 3, 10, "nameinput");
            });
        }
    }
    for (let i = 0; i < datepicker.length; i++) {
        let picker = datepicker[i];
        let currentDate = new Date().toISOString().split("T")[0];
        picker.max = currentDate;
        dateArray[i] = (0,_getDate__WEBPACK_IMPORTED_MODULE_4__["default"])(errors, currentDate, picker, dateValidationArray[i], false);
        datepicker[i].addEventListener("change", (e) => {
            const target = e.target.value;
            if (target) {
                dateArray[i] = (0,_getDate__WEBPACK_IMPORTED_MODULE_4__["default"])(errors, target, picker, dateValidationArray[i], true);
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
                nameValidationArray[i] = (0,_validate__WEBPACK_IMPORTED_MODULE_3__.removeErrors)(button, nameValidationArray[i], ".invalidName");
                textValidationArray[i] = (0,_validate__WEBPACK_IMPORTED_MODULE_3__.removeErrors)(button, textValidationArray[i], ".invalidText");
                nameValidationArray[i] = (0,_validate__WEBPACK_IMPORTED_MODULE_3__.validate)(button, nameArray[i], nameValidationArray[i], errors.name, 3, 10, "nameinput");
                textValidationArray[i] = (0,_validate__WEBPACK_IMPORTED_MODULE_3__.validate)(button, textArray[i], textValidationArray[i], errors.text, 3, 200, "textarea");
                if (!textValidationArray[i] &&
                    !nameValidationArray[i] &&
                    !dateValidationArray[i]) {
                    (0,_sendComment__WEBPACK_IMPORTED_MODULE_2__["default"])(textArray[i], nameArray[i], dateArray[i], timeArray[i], parentId);
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
                (0,_deleteComment__WEBPACK_IMPORTED_MODULE_1__["default"])(parentId, level);
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
                (0,_likeComment__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, level);
            });
        }
    }
};


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

/***/ "./src/getDate.ts":
/*!************************!*\
  !*** ./src/getDate.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate */ "./src/validate.ts");

const getDate = (errors, date, picker, dateValidationArray, shuoldValidate) => {
    const array = date.split("-");
    const day = array[2];
    const month = array[1];
    const year = array[0];
    const result = day + "." + month + "." + year;
    const resultToValidate = year + '-' + month + '-' + day;
    if (shuoldValidate) {
        dateValidationArray = (0,_validate__WEBPACK_IMPORTED_MODULE_0__.removeErrors)(picker, dateValidationArray, ".invalidDate");
        dateValidationArray = (0,_validate__WEBPACK_IMPORTED_MODULE_0__.validate)(picker, resultToValidate, dateValidationArray, errors.date, 3, picker.max, "datepicker");
    }
    return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDate);


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
/* harmony import */ var _renderComments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderComments */ "./src/renderComments.ts");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events */ "./src/events.ts");




const toLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};
const fromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
};
toLocalStorage('data', _data_json__WEBPACK_IMPORTED_MODULE_0__);
const storedData = fromLocalStorage('data');
(0,_renderComments__WEBPACK_IMPORTED_MODULE_1__["default"])(storedData);
(0,_events__WEBPACK_IMPORTED_MODULE_3__.events)();


/***/ }),

/***/ "./src/likeComment.ts":
/*!****************************!*\
  !*** ./src/likeComment.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.ts");
/* harmony import */ var _renderComments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderComments */ "./src/renderComments.ts");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ "./src/events.ts");



const likeComment = (id, level) => {
    const data = (0,_index__WEBPACK_IMPORTED_MODULE_0__.fromLocalStorage)('data');
    if (level === "outer") {
        data.comments
            .filter((e) => e.id === id)
            .map((el) => {
            if (el.currentUserLiked) {
                el.likes -= 1;
                el.currentUserLiked = false;
                (0,_index__WEBPACK_IMPORTED_MODULE_0__.toLocalStorage)('data', data);
                (0,_renderComments__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_index__WEBPACK_IMPORTED_MODULE_0__.fromLocalStorage)('data'));
            }
            else {
                el.likes += 1;
                el.currentUserLiked = true;
                (0,_index__WEBPACK_IMPORTED_MODULE_0__.toLocalStorage)('data', data);
                (0,_renderComments__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_index__WEBPACK_IMPORTED_MODULE_0__.fromLocalStorage)('data'));
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
                    (0,_index__WEBPACK_IMPORTED_MODULE_0__.toLocalStorage)('data', data);
                    (0,_renderComments__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_index__WEBPACK_IMPORTED_MODULE_0__.fromLocalStorage)('data'));
                }
                else {
                    el.currentUserLiked = true;
                    el.likes += 1;
                    (0,_index__WEBPACK_IMPORTED_MODULE_0__.toLocalStorage)('data', data);
                    (0,_renderComments__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_index__WEBPACK_IMPORTED_MODULE_0__.fromLocalStorage)('data'));
                }
            });
        });
    }
    (0,_events__WEBPACK_IMPORTED_MODULE_2__.events)();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likeComment);


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
                        <button key="inner" class="deleteButton"><img src=${_icons_delete_svg__WEBPACK_IMPORTED_MODULE_0__} width="20" height="20"></button>
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

/***/ "./src/sendComment.ts":
/*!****************************!*\
  !*** ./src/sendComment.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.ts");
/* harmony import */ var _renderComments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderComments */ "./src/renderComments.ts");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ "./src/events.ts");



const sendComment = (text, name, date, time, parentId) => {
    const data = (0,_index__WEBPACK_IMPORTED_MODULE_0__.fromLocalStorage)('data');
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
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.toLocalStorage)('data', data);
    (0,_renderComments__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_index__WEBPACK_IMPORTED_MODULE_0__.fromLocalStorage)('data'));
    (0,_events__WEBPACK_IMPORTED_MODULE_2__.events)();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendComment);


/***/ }),

/***/ "./src/validate.ts":
/*!*************************!*\
  !*** ./src/validate.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeErrors": () => (/* binding */ removeErrors),
/* harmony export */   "validate": () => (/* binding */ validate)
/* harmony export */ });
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
        if (Date.parse(text) > Date.parse(allowedMax)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGtCQUFrQixDQUMzRSxZQUFZLEVBQ1osR0FBRyxDQUFDLEtBQUssQ0FDVixDQUFDO1FBRUYsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLGFBQWEsRUFBRSxDQUFDO1FBQ2hCLE9BQU8sZ0JBQWdCLENBQUM7S0FDekI7SUFFRCxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxFQUFFO1FBQ3JDLE9BQU8sQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQzNFLFlBQVksRUFDWixHQUFHLENBQUMsR0FBRyxDQUNSLENBQUM7UUFFRixnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDeEIsYUFBYSxFQUFFLENBQUM7UUFDaEIsT0FBTyxnQkFBZ0IsQ0FBQztLQUN6QjtJQUVELElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLEVBQUU7UUFDNUIsT0FBTyxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FDM0UsWUFBWSxFQUNaLEdBQUcsQ0FBQyxHQUFHLENBQ1IsQ0FBQztRQUVGLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixhQUFhLEVBQUUsQ0FBQztRQUNoQixPQUFPLGdCQUFnQixDQUFDO0tBQ3pCO0FBQ0gsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29tbWVudHNsaXN0Ly4vc3JjL3N0eWxlcy5jc3M/MTU1MyIsIndlYnBhY2s6Ly9jb21tZW50c2xpc3QvLi9zcmMvZGVsZXRlQ29tbWVudC50cyIsIndlYnBhY2s6Ly9jb21tZW50c2xpc3QvLi9zcmMvZXZlbnRzLnRzIiwid2VicGFjazovL2NvbW1lbnRzbGlzdC8uL3NyYy9mb3JtYXREYXRlLnRzIiwid2VicGFjazovL2NvbW1lbnRzbGlzdC8uL3NyYy9nZXREYXRlLnRzIiwid2VicGFjazovL2NvbW1lbnRzbGlzdC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9jb21tZW50c2xpc3QvLi9zcmMvbGlrZUNvbW1lbnQudHMiLCJ3ZWJwYWNrOi8vY29tbWVudHNsaXN0Ly4vc3JjL3JlbmRlckNvbW1lbnRzLnRzIiwid2VicGFjazovL2NvbW1lbnRzbGlzdC8uL3NyYy9zZW5kQ29tbWVudC50cyIsIndlYnBhY2s6Ly9jb21tZW50c2xpc3QvLi9zcmMvdmFsaWRhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgdG9Mb2NhbFN0b3JhZ2UsIGZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgUm9vdE9iamVjdCBmcm9tIFwiLi9pbnRlcmZhY2VzL0NvbW1lbnRcIjtcclxuaW1wb3J0IHJlbmRlckNvbW1lbnRzIGZyb20gXCIuL3JlbmRlckNvbW1lbnRzXCI7XHJcbmltcG9ydCB7IGV2ZW50cyB9IGZyb20gXCIuL2V2ZW50c1wiO1xyXG5cclxuXHJcbmNvbnN0IGRlbGV0ZUNvbW1lbnQgPSAoaWQ6IG51bWJlciwgbGV2ZWw6IFN0cmluZykgPT4ge1xyXG5cclxuICAgIGNvbnN0IGRhdGE6IFJvb3RPYmplY3QgPSBmcm9tTG9jYWxTdG9yYWdlKCdkYXRhJyk7XHJcblxyXG4gICAgaWYgKGxldmVsID09PSBcIm91dGVyXCIpIHtcclxuICAgICAgdG9Mb2NhbFN0b3JhZ2UoJ2RhdGEnLHtcclxuICAgICAgICBjb21tZW50czogWy4uLmRhdGEuY29tbWVudHMuZmlsdGVyKChlKSA9PiBlLmlkICE9PSBpZCldLFxyXG4gICAgICB9KTtcclxuICAgICAgcmVuZGVyQ29tbWVudHMoZnJvbUxvY2FsU3RvcmFnZSgnZGF0YScpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBmaWx0ZXJlZCA9IGRhdGEuY29tbWVudHMubWFwKChlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGUuY29tbWVudHNBcnJheS5maWx0ZXIoKGUpID0+IGUuaWQgIT09IGlkKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuY29tbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgZmlyc3RhcnIgPSBmaWx0ZXJlZFtpXTtcclxuICAgICAgICBkYXRhLmNvbW1lbnRzW2ldLmNvbW1lbnRzQXJyYXkgPSBbLi4uZmlyc3RhcnJdO1xyXG4gICAgICB9XHJcbiAgICAgIHRvTG9jYWxTdG9yYWdlKCdkYXRhJyAsZGF0YSk7XHJcbiAgICAgIHJlbmRlckNvbW1lbnRzKGZyb21Mb2NhbFN0b3JhZ2UoJ2RhdGEnKSk7XHJcbiAgICB9XHJcbiAgICBldmVudHMoKTtcclxuICB9O1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBkZWxldGVDb21tZW50IiwiaW1wb3J0IFJvb3RPYmplY3QgZnJvbSBcIi4vaW50ZXJmYWNlcy9Db21tZW50XCI7XHJcbmltcG9ydCByZW5kZXJDb21tZW50cyBmcm9tIFwiLi9yZW5kZXJDb21tZW50c1wiO1xyXG5pbXBvcnQgeyB0b0xvY2FsU3RvcmFnZSwgZnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5pbXBvcnQgbGlrZUNvbW1lbnQgZnJvbSBcIi4vbGlrZUNvbW1lbnRcIjtcclxuaW1wb3J0IGRlbGV0ZUNvbW1lbnQgZnJvbSBcIi4vZGVsZXRlQ29tbWVudFwiO1xyXG5pbXBvcnQgc2VuZENvbW1lbnQgZnJvbSBcIi4vc2VuZENvbW1lbnRcIjtcclxuaW1wb3J0IHsgcmVtb3ZlRXJyb3JzLCB2YWxpZGF0ZSB9IGZyb20gXCIuL3ZhbGlkYXRlXCI7XHJcbmltcG9ydCBnZXREYXRlIGZyb20gXCIuL2dldERhdGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBldmVudHMgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IGVycm9ycyA9IHtcclxuICAgIHRleHQ6IHtcclxuICAgICAgbWluOiBcIjxwIGNsYXNzPSdpbnZhbGlkVGV4dCBpbnZhbGlkJz7QsiDQv9C+0LvQtSDRgtC10LrRgdGCINC00L7Qu9C20L3QviDQsdGL0YLRjCDQvdC1INC80LXQvdGM0YjQtSAzINGB0LjQvNCy0L7Qu9C+0LI8L3A+XCIsXHJcbiAgICAgIG1heDogXCI8cCBjbGFzcz0naW52YWxpZFRleHQgaW52YWxpZCc+0LIg0L/QvtC70LUg0YLQtdC60YHRgiDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0L3QtSDQsdC+0LvRjNGI0LUgMjAwINGB0LjQvNCy0L7Qu9C+0LI8L3A+XCIsXHJcbiAgICAgIGVtcHR5OiBcIjxwIGNsYXNzPSdpbnZhbGlkVGV4dCBpbnZhbGlkJz7Qv9C+0LvQtSDRgtC10LrRgdGCINC90LUg0LfQsNC/0L7Qu9C90LXQvdC+PC9wPlwiLFxyXG4gICAgfSxcclxuICAgIG5hbWU6IHtcclxuICAgICAgbWluOiBcIjxwIGNsYXNzPSdpbnZhbGlkTmFtZSBpbnZhbGlkJz7QsiDQv9C+0LvQtSDQuNC80Y8g0LTQvtC70LbQvdC+INCx0YvRgtGMINC90LUg0LzQtdC90YzRiNC1IDMg0YHQuNC80LLQvtC70L7QsjwvcD5cIixcclxuICAgICAgbWF4OiBcIjxwIGNsYXNzPSdpbnZhbGlkTmFtZSBpbnZhbGlkJz7QsiDQv9C+0LvQtSDQuNC80Y8g0LTQvtC70LbQvdC+INCx0YvRgtGMINC90LUg0LHQvtC70YzRiNC1IDEwINGB0LjQvNCy0L7Qu9C+0LI8L3A+XCIsXHJcbiAgICAgIGVtcHR5OiBcIjxwIGNsYXNzPSdpbnZhbGlkTmFtZSBpbnZhbGlkJz7Qv9C+0LvQtSDQuNC80Y8g0L3QtSDQt9Cw0L/QvtC70L3QtdC90L48L3A+XCIsXHJcbiAgICB9LFxyXG4gICAgZGF0ZToge1xyXG4gICAgICBtYXg6IFwiPHAgY2xhc3M9J2ludmFsaWREYXRlIGludmFsaWQnPtC00LDRgtCwINC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQsdC+0LvRjNGI0LUg0YLQtdC60YPRidC10Lk8L3A+XCIsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgXHJcblxyXG4gIGNvbnN0IGxpa2VCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saWtlQnV0dG9uXCIpIGFzIE5vZGVMaXN0O1xyXG4gIGxldCBsaWtlZEFycmF5ID0gbmV3IEFycmF5KGxpa2VCdXR0b25zLmxlbmd0aCk7XHJcbiAgXHJcbiAgbGV0IHRleHRWYWxpZGF0aW9uQXJyYXkgPSBuZXcgQXJyYXkobGlrZUJ1dHRvbnMubGVuZ3RoKTtcclxuICBsZXQgbmFtZVZhbGlkYXRpb25BcnJheSA9IG5ldyBBcnJheShsaWtlQnV0dG9ucy5sZW5ndGgpO1xyXG4gIGxldCBkYXRlVmFsaWRhdGlvbkFycmF5ID0gbmV3IEFycmF5KGxpa2VCdXR0b25zLmxlbmd0aCk7XHJcblxyXG5cclxuICAgIGNvbnN0IG9wZW5Gb3JtQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub3BlbkZvcm1cIikgYXMgTm9kZUxpc3Q7XHJcbiAgICBjb25zdCBhbnN3ZXJDb21tZW50QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgIFwiLmFuc3dlckNvbW1lbnRcIlxyXG4gICAgKSBhcyBOb2RlTGlzdDtcclxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBcIi5kZWxldGVCdXR0b25cIlxyXG4gICAgKSBhcyBOb2RlTGlzdDtcclxuICAgXHJcblxyXG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRleHRhcmVhXCIpIGFzIE5vZGVMaXN0O1xyXG4gICAgY29uc3QgZGF0ZXBpY2tlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGF0ZXBpY2tlclwiKSBhcyBOb2RlTGlzdDtcclxuICAgIGNvbnN0IG5hbWVpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmFtZWlucHV0XCIpIGFzIE5vZGVMaXN0O1xyXG5cclxuICAgIGxldCB0ZXh0QXJyYXkgPSBuZXcgQXJyYXkodGV4dGFyZWEubGVuZ3RoKTtcclxuICAgIGxldCBuYW1lQXJyYXkgPSBuZXcgQXJyYXkodGV4dGFyZWEubGVuZ3RoKTtcclxuICAgIGxldCBkYXRlQXJyYXkgPSBuZXcgQXJyYXkodGV4dGFyZWEubGVuZ3RoKTtcclxuICAgIGxldCB0aW1lQXJyYXkgPSBuZXcgQXJyYXkodGV4dGFyZWEubGVuZ3RoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wZW5Gb3JtQnV0dG9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBvcGVuRm9ybUJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBvcGVuRm9ybUJ1dHRvbnNbaV0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwib3BlbmVkXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHRhcmVhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBpbnB1dCA9IHRleHRhcmVhW2ldIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICBpZiAoaW5wdXQuZ2V0QXR0cmlidXRlKFwibGlzdGVuZXJcIikgIT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwibGlzdGVuZXJcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICB0ZXh0QXJyYXlbaV0gPSAodGFyZ2V0IGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQpLnZhbHVlO1xyXG5cclxuICAgICAgICAgIHRleHRWYWxpZGF0aW9uQXJyYXlbaV0gPSByZW1vdmVFcnJvcnMoXHJcbiAgICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgICB0ZXh0VmFsaWRhdGlvbkFycmF5W2ldLFxyXG4gICAgICAgICAgICBcIi5pbnZhbGlkVGV4dFwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBsZXQgcGFyZW50SWQgPSAraW5wdXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQ7XHJcblxyXG4gICAgICAgICAgICBuYW1lVmFsaWRhdGlvbkFycmF5W2ldID0gcmVtb3ZlRXJyb3JzKFxyXG4gICAgICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgICAgIG5hbWVWYWxpZGF0aW9uQXJyYXlbaV0sXHJcbiAgICAgICAgICAgICAgXCIuaW52YWxpZE5hbWVcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0ZXh0VmFsaWRhdGlvbkFycmF5W2ldID0gcmVtb3ZlRXJyb3JzKFxyXG4gICAgICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgICAgIHRleHRWYWxpZGF0aW9uQXJyYXlbaV0sXHJcbiAgICAgICAgICAgICAgXCIuaW52YWxpZFRleHRcIlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgbmFtZVZhbGlkYXRpb25BcnJheVtpXSA9IHZhbGlkYXRlKFxyXG4gICAgICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgICAgIG5hbWVBcnJheVtpXSxcclxuICAgICAgICAgICAgICBuYW1lVmFsaWRhdGlvbkFycmF5W2ldLFxyXG4gICAgICAgICAgICAgIGVycm9ycy5uYW1lLFxyXG4gICAgICAgICAgICAgIDMsXHJcbiAgICAgICAgICAgICAgMTAsXHJcbiAgICAgICAgICAgICAgXCJuYW1laW5wdXRcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0ZXh0VmFsaWRhdGlvbkFycmF5W2ldID0gdmFsaWRhdGUoXHJcbiAgICAgICAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgICAgICAgdGV4dEFycmF5W2ldLFxyXG4gICAgICAgICAgICAgIHRleHRWYWxpZGF0aW9uQXJyYXlbaV0sXHJcbiAgICAgICAgICAgICAgZXJyb3JzLnRleHQsXHJcbiAgICAgICAgICAgICAgMyxcclxuICAgICAgICAgICAgICAyMDAsXHJcbiAgICAgICAgICAgICAgXCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRleHRWYWxpZGF0aW9uQXJyYXlbaV0gJiYgIW5hbWVWYWxpZGF0aW9uQXJyYXlbaV0pIHtcclxuICAgICAgICAgICAgICBzZW5kQ29tbWVudChcclxuICAgICAgICAgICAgICAgIHRleHRBcnJheVtpXSxcclxuICAgICAgICAgICAgICAgIG5hbWVBcnJheVtpXSxcclxuICAgICAgICAgICAgICAgIHRpbWVBcnJheVtpXSxcclxuICAgICAgICAgICAgICAgIGRhdGVBcnJheVtpXSxcclxuICAgICAgICAgICAgICAgIHBhcmVudElkXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgdGV4dFZhbGlkYXRpb25BcnJheVtpXSA9IHJlbW92ZUVycm9ycyhcclxuICAgICAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgICAgIHRleHRWYWxpZGF0aW9uQXJyYXlbaV0sXHJcbiAgICAgICAgICAgIFwiLmludmFsaWRUZXh0XCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0ZXh0VmFsaWRhdGlvbkFycmF5W2ldID0gdmFsaWRhdGUoXHJcbiAgICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgICB0ZXh0QXJyYXlbaV0sXHJcbiAgICAgICAgICAgIHRleHRWYWxpZGF0aW9uQXJyYXlbaV0sXHJcbiAgICAgICAgICAgIGVycm9ycy50ZXh0LFxyXG4gICAgICAgICAgICAzLFxyXG4gICAgICAgICAgICAyMDAsXHJcbiAgICAgICAgICAgIFwidGV4dGFyZWFcIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZWlucHV0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBpbnB1dCA9IG5hbWVpbnB1dFtpXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgaWYgKGlucHV0LmdldEF0dHJpYnV0ZShcImxpc3RlbmVyXCIpICE9PSBcInRydWVcIikge1xyXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImxpc3RlbmVyXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBuYW1laW5wdXRbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICAgICAgICBuYW1lQXJyYXlbaV0gPSAoZS50YXJnZXQgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWU7XHJcblxyXG4gICAgICAgICAgbmFtZVZhbGlkYXRpb25BcnJheVtpXSA9IHJlbW92ZUVycm9ycyhcclxuICAgICAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgICAgIG5hbWVWYWxpZGF0aW9uQXJyYXlbaV0sXHJcbiAgICAgICAgICAgIFwiLmludmFsaWROYW1lXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcclxuICAgICAgICAgIG5hbWVWYWxpZGF0aW9uQXJyYXlbaV0gPSByZW1vdmVFcnJvcnMoXHJcbiAgICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgICBuYW1lVmFsaWRhdGlvbkFycmF5W2ldLFxyXG4gICAgICAgICAgICBcIi5pbnZhbGlkTmFtZVwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgbmFtZVZhbGlkYXRpb25BcnJheVtpXSA9IHZhbGlkYXRlKFxyXG4gICAgICAgICAgICBpbnB1dCxcclxuICAgICAgICAgICAgbmFtZUFycmF5W2ldLFxyXG4gICAgICAgICAgICBuYW1lVmFsaWRhdGlvbkFycmF5W2ldLFxyXG4gICAgICAgICAgICBlcnJvcnMubmFtZSxcclxuICAgICAgICAgICAgMyxcclxuICAgICAgICAgICAgMTAsXHJcbiAgICAgICAgICAgIFwibmFtZWlucHV0XCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGVwaWNrZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IHBpY2tlciA9IGRhdGVwaWNrZXJbaV0gYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XHJcblxyXG5cclxuICAgICAgcGlja2VyLm1heCA9IGN1cnJlbnREYXRlO1xyXG5cclxuICAgICAgZGF0ZUFycmF5W2ldID0gZ2V0RGF0ZShcclxuICAgICAgICBlcnJvcnMsXHJcbiAgICAgICAgY3VycmVudERhdGUsXHJcbiAgICAgICAgcGlja2VyLFxyXG4gICAgICAgIGRhdGVWYWxpZGF0aW9uQXJyYXlbaV0sXHJcbiAgICAgICAgZmFsc2VcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGRhdGVwaWNrZXJbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IChlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICBkYXRlQXJyYXlbaV0gPSBnZXREYXRlKGVycm9ycywgdGFyZ2V0LCBwaWNrZXIsIGRhdGVWYWxpZGF0aW9uQXJyYXlbaV0sIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbnN3ZXJDb21tZW50QnV0dG9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgYnV0dG9uID0gYW5zd2VyQ29tbWVudEJ1dHRvbnNbaV0gYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICBpZiAoYnV0dG9uLmdldEF0dHJpYnV0ZShcImxpc3RlbmVyXCIpICE9PSBcInRydWVcIikge1xyXG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJsaXN0ZW5lclwiLCBcInRydWVcIik7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHBhcmVudElkID0gK2J1dHRvbi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZDtcclxuXHJcbiAgICAgICAgICBjb25zdCB0aW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLnNwbGl0KFwiLFwiKVsxXS5zcGxpdChcIjpcIik7XHJcblxyXG4gICAgICAgICAgY29uc3QgaG91cnMgPSB0aW1lWzBdO1xyXG4gICAgICAgICAgY29uc3QgbWludXRlcyA9IHRpbWVbMV07XHJcbiAgICAgICAgICBjb25zdCBzZWNvdW5kID0gdGltZVsyXTtcclxuXHJcbiAgICAgICAgICB0aW1lQXJyYXlbaV0gPSBob3VycyArIFwiOlwiICsgbWludXRlcyArIFwiOlwiICsgc2Vjb3VuZDtcclxuXHJcbiAgICAgICAgICBuYW1lVmFsaWRhdGlvbkFycmF5W2ldID0gcmVtb3ZlRXJyb3JzKFxyXG4gICAgICAgICAgICBidXR0b24sXHJcbiAgICAgICAgICAgIG5hbWVWYWxpZGF0aW9uQXJyYXlbaV0sXHJcbiAgICAgICAgICAgIFwiLmludmFsaWROYW1lXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0ZXh0VmFsaWRhdGlvbkFycmF5W2ldID0gcmVtb3ZlRXJyb3JzKFxyXG4gICAgICAgICAgICBidXR0b24sXHJcbiAgICAgICAgICAgIHRleHRWYWxpZGF0aW9uQXJyYXlbaV0sXHJcbiAgICAgICAgICAgIFwiLmludmFsaWRUZXh0XCJcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgbmFtZVZhbGlkYXRpb25BcnJheVtpXSA9IHZhbGlkYXRlKFxyXG4gICAgICAgICAgICBidXR0b24sXHJcbiAgICAgICAgICAgIG5hbWVBcnJheVtpXSxcclxuICAgICAgICAgICAgbmFtZVZhbGlkYXRpb25BcnJheVtpXSxcclxuICAgICAgICAgICAgZXJyb3JzLm5hbWUsXHJcbiAgICAgICAgICAgIDMsXHJcbiAgICAgICAgICAgIDEwLFxyXG4gICAgICAgICAgICBcIm5hbWVpbnB1dFwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGV4dFZhbGlkYXRpb25BcnJheVtpXSA9IHZhbGlkYXRlKFxyXG4gICAgICAgICAgICBidXR0b24sXHJcbiAgICAgICAgICAgIHRleHRBcnJheVtpXSxcclxuICAgICAgICAgICAgdGV4dFZhbGlkYXRpb25BcnJheVtpXSxcclxuICAgICAgICAgICAgZXJyb3JzLnRleHQsXHJcbiAgICAgICAgICAgIDMsXHJcbiAgICAgICAgICAgIDIwMCxcclxuICAgICAgICAgICAgXCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgIXRleHRWYWxpZGF0aW9uQXJyYXlbaV0gJiZcclxuICAgICAgICAgICAgIW5hbWVWYWxpZGF0aW9uQXJyYXlbaV0gJiZcclxuICAgICAgICAgICAgIWRhdGVWYWxpZGF0aW9uQXJyYXlbaV1cclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICBzZW5kQ29tbWVudChcclxuICAgICAgICAgICAgICB0ZXh0QXJyYXlbaV0sXHJcbiAgICAgICAgICAgICAgbmFtZUFycmF5W2ldLFxyXG4gICAgICAgICAgICAgIGRhdGVBcnJheVtpXSxcclxuICAgICAgICAgICAgICB0aW1lQXJyYXlbaV0sXHJcbiAgICAgICAgICAgICAgcGFyZW50SWRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVsZXRlQnV0dG9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgYnV0dG9uID0gZGVsZXRlQnV0dG9uc1tpXSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgIGlmIChidXR0b24uZ2V0QXR0cmlidXRlKFwibGlzdGVuZXJcIikgIT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKFwibGlzdGVuZXJcIiwgXCJ0cnVlXCIpO1xyXG5cclxuICAgICAgICAgIGxldCBwYXJlbnRJZCA9ICtidXR0b24ucGFyZW50RWxlbWVudC5pZDtcclxuXHJcbiAgICAgICAgICBsZXQgbGV2ZWw6IFN0cmluZyA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJrZXlcIik7XHJcblxyXG4gICAgICAgICAgZGVsZXRlQ29tbWVudChwYXJlbnRJZCwgbGV2ZWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpa2VCdXR0b25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBidXR0b24gPSBsaWtlQnV0dG9uc1tpXSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgIGlmIChidXR0b24uZ2V0QXR0cmlidXRlKFwibGlzdGVuZXJcIikgIT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJyZWRcIik7XHJcbiAgICAgICAgICBpZiAoIWxpa2VkQXJyYXlbaV0pIHtcclxuICAgICAgICAgICAgbGlrZWRBcnJheVtpXSA9IHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaWtlZEFycmF5W2ldID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShcImxpc3RlbmVyXCIsIFwidHJ1ZVwiKTtcclxuXHJcbiAgICAgICAgICBsZXQgcGFyZW50SWQgPSArYnV0dG9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkO1xyXG5cclxuICAgICAgICAgIGxldCBsZXZlbDogU3RyaW5nID0gYnV0dG9uLmdldEF0dHJpYnV0ZShcImtleVwiKTtcclxuICAgICAgICAgIGxpa2VDb21tZW50KHBhcmVudElkLCBsZXZlbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxufTtcclxuIiwiY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlOiBzdHJpbmcsIHRpbWU6IHN0cmluZykgPT4ge1xuICBsZXQgZGF0ZUFycmF5ID0gZGF0ZS5zcGxpdChcIi5cIik7XG5cbiAgbGV0IGRheSA9ICtkYXRlQXJyYXlbMF07XG4gIGxldCBtb250aCA9ICtkYXRlQXJyYXlbMV0gLSAxO1xuICBsZXQgeWVhciA9ICtkYXRlQXJyYXlbMl07XG5cbiAgbGV0IHRpbWVBcnJheSA9IHRpbWUuc3BsaXQoXCI6XCIpO1xuXG4gIGxldCBob3VycyA9ICt0aW1lQXJyYXlbMF07XG4gIGxldCBtaW51dGVzID0gK3RpbWVBcnJheVsxXTtcbiAgbGV0IHNlY29uZHMgPSArdGltZUFycmF5WzJdO1xuXG4gIGNvbnN0IGZvcm1hdHRlZCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXksIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKTtcblxuICBsZXQgcmVzdWx0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBmb3JtYXR0ZWQuZ2V0VGltZSgpO1xuXG4gIGlmIChyZXN1bHQgPCA4NjQwMDAwMCAmJiByZXN1bHQgPiAwKSB7XG4gICAgcmV0dXJuIFwi0KHQtdCz0L7QtNC90Y8g0LIgXCIgKyB0aW1lO1xuICB9XG5cbiAgaWYgKHJlc3VsdCA+PSA4NjQwMDAwMCAmJiByZXN1bHQgPCAxNzI4MDAwMDApIHtcbiAgICByZXR1cm4gXCLQktGH0LXRgNCwINCyIFwiICsgdGltZTtcbiAgfVxuICBpZiAocmVzdWx0ID49IDE3MjgwMDAwKSB7XG4gICAgcmV0dXJuIGRhdGUgKyBcIiDQsiBcIiArIHRpbWU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERhdGU7XG4iLCJpbXBvcnQgeyByZW1vdmVFcnJvcnMsIHZhbGlkYXRlIH0gZnJvbSBcIi4vdmFsaWRhdGVcIjtcclxuXHJcbmNvbnN0IGdldERhdGUgPSAoXHJcbiAgICBlcnJvcnM6YW55LFxyXG4gICAgZGF0ZTogc3RyaW5nLFxyXG4gICAgcGlja2VyOiBIVE1MSW5wdXRFbGVtZW50LFxyXG4gICAgZGF0ZVZhbGlkYXRpb25BcnJheTogYm9vbGVhbixcclxuICAgIHNodW9sZFZhbGlkYXRlOiBib29sZWFuXHJcbiAgKSA9PiB7XHJcbiAgICBjb25zdCBhcnJheSA9IGRhdGUuc3BsaXQoXCItXCIpO1xyXG4gICAgY29uc3QgZGF5OiBzdHJpbmcgPSBhcnJheVsyXTtcclxuXHJcbiAgICBjb25zdCBtb250aDogc3RyaW5nID0gYXJyYXlbMV07XHJcbiAgICBjb25zdCB5ZWFyOiBzdHJpbmcgPSBhcnJheVswXTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBkYXkgKyBcIi5cIiArIG1vbnRoICsgXCIuXCIgKyB5ZWFyO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdFRvVmFsaWRhdGUgPSB5ZWFyICsgJy0nICsgbW9udGggKyAnLScgKyBkYXk7XHJcblxyXG5cclxuICAgIGlmIChzaHVvbGRWYWxpZGF0ZSkge1xyXG4gICAgICBkYXRlVmFsaWRhdGlvbkFycmF5ID0gcmVtb3ZlRXJyb3JzKFxyXG4gICAgICAgIHBpY2tlcixcclxuICAgICAgICBkYXRlVmFsaWRhdGlvbkFycmF5LFxyXG4gICAgICAgIFwiLmludmFsaWREYXRlXCJcclxuICAgICAgKTtcclxuICAgICAgZGF0ZVZhbGlkYXRpb25BcnJheSA9IHZhbGlkYXRlKFxyXG4gICAgICAgIHBpY2tlcixcclxuICAgICAgICByZXN1bHRUb1ZhbGlkYXRlLFxyXG4gICAgICAgIGRhdGVWYWxpZGF0aW9uQXJyYXksXHJcbiAgICAgICAgZXJyb3JzLmRhdGUsXHJcbiAgICAgICAgMyxcclxuICAgICAgICBwaWNrZXIubWF4LFxyXG4gICAgICAgIFwiZGF0ZXBpY2tlclwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9O1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBnZXREYXRlOyIsImltcG9ydCBSb290T2JqZWN0IGZyb20gXCIuL2ludGVyZmFjZXMvQ29tbWVudFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLmNzc1wiO1xuaW1wb3J0IGRhdGEgZnJvbSBcIi4vZGF0YS5qc29uXCI7XG5pbXBvcnQgcmVuZGVyQ29tbWVudHMgZnJvbSBcIi4vcmVuZGVyQ29tbWVudHNcIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSBcIi4vZXZlbnRzXCI7XG5cblxuXG5leHBvcnQgY29uc3QgdG9Mb2NhbFN0b3JhZ2UgPSAoa2V5OnN0cmluZyAsZGF0YTogYW55KSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZyb21Mb2NhbFN0b3JhZ2UgPSAoa2V5OnN0cmluZykgPT4ge1xuICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcbn07XG5cblxuXG50b0xvY2FsU3RvcmFnZSgnZGF0YScgLGRhdGEpO1xuY29uc3Qgc3RvcmVkRGF0YTogUm9vdE9iamVjdCA9IGZyb21Mb2NhbFN0b3JhZ2UoJ2RhdGEnKTtcblxucmVuZGVyQ29tbWVudHMoc3RvcmVkRGF0YSk7XG5cbmV2ZW50cygpO1xuIiwiaW1wb3J0IHsgdG9Mb2NhbFN0b3JhZ2UsIGZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgUm9vdE9iamVjdCBmcm9tIFwiLi9pbnRlcmZhY2VzL0NvbW1lbnRcIjtcclxuaW1wb3J0IHJlbmRlckNvbW1lbnRzIGZyb20gXCIuL3JlbmRlckNvbW1lbnRzXCI7XHJcbmltcG9ydCB7IGV2ZW50cyB9IGZyb20gXCIuL2V2ZW50c1wiO1xyXG5cclxuXHJcbmNvbnN0IGxpa2VDb21tZW50ID0gKGlkOiBudW1iZXIsIGxldmVsOiBTdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IGRhdGE6IFJvb3RPYmplY3QgPSBmcm9tTG9jYWxTdG9yYWdlKCdkYXRhJyk7XHJcblxyXG4gICAgaWYgKGxldmVsID09PSBcIm91dGVyXCIpIHtcclxuICAgICAgZGF0YS5jb21tZW50c1xyXG4gICAgICAgIC5maWx0ZXIoKGUpID0+IGUuaWQgPT09IGlkKVxyXG4gICAgICAgIC5tYXAoKGVsKSA9PiB7XHJcblxyXG4gICAgICAgICAgaWYgKGVsLmN1cnJlbnRVc2VyTGlrZWQpIHtcclxuICAgICAgICAgICAgZWwubGlrZXMgLT0gMTtcclxuXHJcbiAgICAgICAgICAgIGVsLmN1cnJlbnRVc2VyTGlrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdG9Mb2NhbFN0b3JhZ2UoJ2RhdGEnICxkYXRhKTtcclxuICAgICAgICAgICAgcmVuZGVyQ29tbWVudHMoZnJvbUxvY2FsU3RvcmFnZSgnZGF0YScpKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsLmxpa2VzICs9IDE7XHJcbiAgICAgICAgICAgIGVsLmN1cnJlbnRVc2VyTGlrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0b0xvY2FsU3RvcmFnZSgnZGF0YScgLGRhdGEpO1xyXG4gICAgICAgICAgICByZW5kZXJDb21tZW50cyhmcm9tTG9jYWxTdG9yYWdlKCdkYXRhJykpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGF0YS5jb21tZW50cy5mbGF0TWFwKChlKSA9PiB7XHJcbiAgICAgICAgZS5jb21tZW50c0FycmF5XHJcbiAgICAgICAgICAuZmlsdGVyKChlKSA9PiBlLmlkID09PSBpZClcclxuICAgICAgICAgIC5tYXAoKGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbC5jdXJyZW50VXNlckxpa2VkKSB7XHJcbiAgICAgICAgICAgICAgZWwuY3VycmVudFVzZXJMaWtlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIGVsLmxpa2VzIC09IDE7XHJcblxyXG4gICAgICAgICAgICAgIHRvTG9jYWxTdG9yYWdlKCdkYXRhJyAsZGF0YSk7XHJcbiAgICAgICAgICAgICAgcmVuZGVyQ29tbWVudHMoZnJvbUxvY2FsU3RvcmFnZSgnZGF0YScpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBlbC5jdXJyZW50VXNlckxpa2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBlbC5saWtlcyArPSAxO1xyXG5cclxuICAgICAgICAgICAgICB0b0xvY2FsU3RvcmFnZSgnZGF0YScgLGRhdGEpO1xyXG4gICAgICAgICAgICAgIHJlbmRlckNvbW1lbnRzKGZyb21Mb2NhbFN0b3JhZ2UoJ2RhdGEnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGV2ZW50cygpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGlrZUNvbW1lbnQ7IiwiaW1wb3J0IFJvb3RPYmplY3QgZnJvbSBcIi4vaW50ZXJmYWNlcy9Db21tZW50XCI7XG4vKiBpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuY3NzXCI7ICovXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi9kYXRhLmpzb25cIjtcbmltcG9ydCBkZWxldGVJY29uIGZyb20gXCIuL2ljb25zL2RlbGV0ZS5zdmdcIjtcbmltcG9ydCBsaWtlSWNvbiBmcm9tIFwiLi9pY29ucy9saWtlLnN2Z1wiO1xuaW1wb3J0IGZvcm1hdERhdGUgZnJvbSBcIi4vZm9ybWF0RGF0ZVwiO1xuY29uc3QgcmVuZGVyQ29tbWVudHMgPSAoZGF0YTogUm9vdE9iamVjdCkgPT4ge1xuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0XCIpO1xuICBsaXN0LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgZGF0YS5jb21tZW50cy5tYXAoKGUpID0+IHtcbiAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgbGV0IGRhdGUgPSBmb3JtYXREYXRlKGUuZGF0ZSwgZS50aW1lKTtcblxuICAgIGxpc3QuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCAnPGRpdiBjbGFzcz1cImNvbW1lbnRUcmVlXCI+PC9kaXY+Jyk7XG5cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbW1lbnRUcmVlXCIpO1xuICAgIGRpdi5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmViZWdpblwiLCAnPGhyIGNsYXNzPVwiaHItaG9yaXpvbnRhbFwiPicpO1xuICAgIGxldCB0ZW1wbGF0ZU91dGVyID0gYFxuICAgICAgICA8ZGl2IGlkPSR7ZS5pZH0gY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibmFtZVwiPiR7ZS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRhdGVcIj4ke2RhdGV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dFwiPiR7ZS50ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC0tc21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsaWtlc1wiPiR7ZS5saWtlc308L3A+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PVwib3V0ZXJcIiBjbGFzcz1cImxpa2VCdXR0b25cIiA+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9JHtcbiAgICAgICAgICAgICAgICAgICAgICBlLmN1cnJlbnRVc2VyTGlrZWQgJiYgXCJyZWRcIlxuICAgICAgICAgICAgICAgICAgICB9IHdpZHRoPVwiMjVweFwiIGhlaWdodD1cIjI1cHhcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJpY29tb29uLWlnbm9yZVwiPlxuICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjEuODg2IDUuMTE1YzMuNTIxIDAgNi4zNzYgMi44NTUgNi4zNzYgNi4zNzYgMCAxLjgwOS0wLjc1NCAzLjQzOS0xLjk2NCA0LjZsLTEwLjI5NyAxMC4zNDktMTAuNDg0LTEwLjUzNmMtMS4xLTEuMTQ2LTEuNzc4LTIuNjk5LTEuNzc4LTQuNDEzIDAtMy41MjIgMi44NTUtNi4zNzYgNi4zNzYtNi4zNzYgMi42NTIgMCA0LjkyNSAxLjYyIDUuODg2IDMuOTI0IDAuOTYxLTIuMzA0IDMuMjM0LTMuOTI0IDUuODg2LTMuOTI0ek0yMS44ODYgNC4wNDljLTIuMzQ1IDAtNC40OTkgMS4wODktNS44ODYgMi44ODQtMS4zODYtMS43OTUtMy41NC0yLjg4NC01Ljg4Ni0yLjg4NC00LjEwNCAwLTcuNDQyIDMuMzM5LTcuNDQyIDcuNDQyIDAgMS45MjggMC43MzcgMy43NTggMi4wNzUgNS4xNTJsMTEuMjUzIDExLjMwOSAxMS4wNTMtMTEuMTA4YzEuNDYtMS40MDIgMi4yNzUtMy4zMDggMi4yNzUtNS4zNTIgMC00LjEwNC0zLjMzOS03LjQ0Mi03LjQ0Mi03LjQ0MnYwelwiPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuIFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJvcGVuRm9ybVwiPtCe0YLQstC10YLQuNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cIm91dGVyXCIgY2xhc3M9XCJkZWxldGVCdXR0b25cIj48aW1nIHNyYz0ke2RlbGV0ZUljb259IHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiPjwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm1BbnN3ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZHNcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuYW1lXCIgY2xhc3M9XCJuYW1laW5wdXRcIiB0eXBlPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImRhdGVQaWNrZXJcIiBjbGFzcz1cImRhdGVwaWNrZXJcIiB0eXBlPVwiZGF0ZVwiPlxuXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwidGV4dEFyZWFcIiBjbGFzcz1cInRleHRhcmVhXCIgdHlwZT1cInRleHRcIiBuYW1lPVwiY29tbWVudFwiIHBsYWNlaG9sZGVyPVwi0J3QsNC/0LjRgdCw0YLRjCDQutC+0LzQvNC10L3RgtCw0YDQuNC5XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYW5zd2VyQ29tbWVudFwiIHR5cGU9XCJzdWJtaXRcIj7QntGC0L/RgNCw0LLQuNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JzXCI+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIGA7XG5cbiAgICBkaXYuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCB0ZW1wbGF0ZU91dGVyKTtcblxuICAgIGNvbnN0IGlubmVyQXJyID0gZS5jb21tZW50c0FycmF5O1xuICAgIGUuY29tbWVudHNBcnJheS5tYXAoKGlubmVyKSA9PiB7XG4gICAgICBsZXQgZGF0ZSA9IGZvcm1hdERhdGUoaW5uZXIuZGF0ZSwgaW5uZXIudGltZSk7XG5cbiAgICAgIGxldCBhbnN3ZXJlZDtcblxuICAgICAgaW5uZXJBcnIubWFwKChlKSA9PiB7XG4gICAgICAgIGlmIChpbm5lci5hbnN3ZXJlZENvbW1lbnQgPT09IGUuaWQpIHtcbiAgICAgICAgICBhbnN3ZXJlZCA9IGBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFuc3dlcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHRcIj4g0L7RgtCy0LXRgiAke2UubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHRcIj4ke2UudGV4dH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaW5uZXIuYW5zd2VyZWRDb21tZW50ID09PSBlLmlkKSB7XG4gICAgICAgIGFuc3dlcmVkID0gYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFuc3dlcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0XCI+INC+0YLQstC10YIgPGI+JHtlLm5hbWV9PC9iPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHRcIj4ke2UudGV4dH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgfVxuXG4gICAgICBsZXQgdGVtcGxhdGVJbm5lciA9IGAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBpZD0ke2lubmVyLmlkfSBjbGFzcz1cIml0ZW0yXCI+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJuYW1lXCI+JHtpbm5lci5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGF0ZVwiPiR7ZGF0ZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzID1cImFuc3dlcmVkRmxleFwiPlxuICAgICAgICAgICAgICAgICAgICA8aHI+XG4gICAgICAgICAgICAgICAgICAgICR7YW5zd2VyZWR9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPiAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dCB0ZXh0LWlubmVyXCI+JHtpbm5lci50ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LS1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsaWtlc1wiPiR7aW5uZXIubGlrZXN9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9XCJpbm5lclwiIGNsYXNzPVwibGlrZUJ1dHRvblwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9JHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXIuY3VycmVudFVzZXJMaWtlZCAmJiBcInJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICB3aWR0aD1cIjI1cHhcIiBoZWlnaHQ9XCIyNXB4XCIgIHZpZXdCb3g9XCIwIDAgMzIgMzJcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJpY29tb29uLWlnbm9yZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMS44ODYgNS4xMTVjMy41MjEgMCA2LjM3NiAyLjg1NSA2LjM3NiA2LjM3NiAwIDEuODA5LTAuNzU0IDMuNDM5LTEuOTY0IDQuNmwtMTAuMjk3IDEwLjM0OS0xMC40ODQtMTAuNTM2Yy0xLjEtMS4xNDYtMS43NzgtMi42OTktMS43NzgtNC40MTMgMC0zLjUyMiAyLjg1NS02LjM3NiA2LjM3Ni02LjM3NiAyLjY1MiAwIDQuOTI1IDEuNjIgNS44ODYgMy45MjQgMC45NjEtMi4zMDQgMy4yMzQtMy45MjQgNS44ODYtMy45MjR6TTIxLjg4NiA0LjA0OWMtMi4zNDUgMC00LjQ5OSAxLjA4OS01Ljg4NiAyLjg4NC0xLjM4Ni0xLjc5NS0zLjU0LTIuODg0LTUuODg2LTIuODg0LTQuMTA0IDAtNy40NDIgMy4zMzktNy40NDIgNy40NDIgMCAxLjkyOCAwLjczNyAzLjc1OCAyLjA3NSA1LjE1MmwxMS4yNTMgMTEuMzA5IDExLjA1My0xMS4xMDhjMS40Ni0xLjQwMiAyLjI3NS0zLjMwOCAyLjI3NS01LjM1MiAwLTQuMTA0LTMuMzM5LTcuNDQyLTcuNDQyLTcuNDQydjB6XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwib3BlbkZvcm1cIj7QntGC0LLQtdGC0LjRgtGMPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT1cImlubmVyXCIgY2xhc3M9XCJkZWxldGVCdXR0b25cIj48aW1nIHNyYz0ke2RlbGV0ZUljb259IHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm1BbnN3ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmFtZVwiIGNsYXNzPVwibmFtZWlucHV0XCIgdHlwZT1cInRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImRhdGVQaWNrZXJcIiBjbGFzcz1cImRhdGVwaWNrZXJcIiB0eXBlPVwiZGF0ZVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJ0ZXh0QXJlYVwiIGNsYXNzPVwidGV4dGFyZWFcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJjb21tZW50XCIgcGxhY2Vob2xkZXI9XCLQndCw0L/QuNGB0LDRgtGMINC60L7QvNC80LXQvdGC0LDRgNC40LlcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFuc3dlckNvbW1lbnRcIiB0eXBlPVwic3VibWl0XCI+0J7RgtC/0YDQsNCy0LjRgtGMPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yc1wiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBgO1xuXG4gICAgICBkaXYuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIHRlbXBsYXRlSW5uZXIpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckNvbW1lbnRzO1xuIiwiaW1wb3J0IHsgdG9Mb2NhbFN0b3JhZ2UsIGZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgUm9vdE9iamVjdCBmcm9tIFwiLi9pbnRlcmZhY2VzL0NvbW1lbnRcIjtcclxuaW1wb3J0IHJlbmRlckNvbW1lbnRzIGZyb20gXCIuL3JlbmRlckNvbW1lbnRzXCI7XHJcbmltcG9ydCB7IGV2ZW50cyB9IGZyb20gXCIuL2V2ZW50c1wiO1xyXG5cclxuXHJcbmNvbnN0IHNlbmRDb21tZW50ID0gKFxyXG4gICAgdGV4dDogc3RyaW5nLFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgZGF0ZTogc3RyaW5nLFxyXG4gICAgdGltZTogc3RyaW5nLFxyXG4gICAgcGFyZW50SWQ6IG51bWJlclxyXG4gICkgPT4ge1xyXG4gICAgY29uc3QgZGF0YTogUm9vdE9iamVjdCA9IGZyb21Mb2NhbFN0b3JhZ2UoJ2RhdGEnKTtcclxuXHJcblxyXG4gICAgY29uc3Qgc2VhcmNoTWF4SWQgPSAoZGF0YTogUm9vdE9iamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBvdXRlcklkID0gZGF0YS5jb21tZW50cy5tYXAoKGUpID0+IGUuaWQpO1xyXG4gICAgICBjb25zdCBpbm5lcklkID0gZGF0YS5jb21tZW50cy5mbGF0TWFwKChlKSA9PlxyXG4gICAgICAgIGUuY29tbWVudHNBcnJheS5tYXAoKGVsKSA9PiBlbC5pZClcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IG91dGVyID0gb3V0ZXJJZFtvdXRlcklkLmxlbmd0aCAtIDFdO1xyXG4gICAgICBjb25zdCBpbm5lciA9IGlubmVySWRbaW5uZXJJZC5sZW5ndGggLSAxXTtcclxuXHJcbiAgICAgIGlmIChvdXRlciAmJiBpbm5lcikge1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1heChvdXRlciwgaW5uZXIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghb3V0ZXIgJiYgIWlubmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFvdXRlciAmJiBpbm5lcikge1xyXG4gICAgICAgIHJldHVybiBpbm5lcjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIWlubmVyICYmIG91dGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG91dGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByZXN1bHQgPSBNYXRoLm1heChcclxuICAgICAgICBvdXRlcklkW291dGVySWQubGVuZ3RoIC0gMV0sXHJcbiAgICAgICAgaW5uZXJJZFtpbm5lcklkLmxlbmd0aCAtIDFdIHx8IDBcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBpZCA9IHNlYXJjaE1heElkKGRhdGEpICsgMTtcclxuIFxyXG5cclxuICAgIGlmIChwYXJlbnRJZCkge1xyXG4gICAgICBkYXRhLmNvbW1lbnRzLm1hcCgoZWwpID0+IHtcclxuICAgICAgICBpZiAocGFyZW50SWQgPT09IGVsLmlkKSB7XHJcbiAgICAgICAgICBlbC5jb21tZW50c0FycmF5LnB1c2goe1xyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICB0ZXh0LFxyXG4gICAgICAgICAgICBkYXRlLFxyXG4gICAgICAgICAgICB0aW1lLFxyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgbGlrZXM6IDAsXHJcbiAgICAgICAgICAgIGN1cnJlbnRVc2VyTGlrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBhbnN3ZXJlZENvbW1lbnQ6IHBhcmVudElkLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGVsLmNvbW1lbnRzQXJyYXkubWFwKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwYXJlbnRJZCA9PT0gZS5pZCkge1xyXG4gICAgICAgICAgICAgIGVsLmNvbW1lbnRzQXJyYXkucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgdGV4dCxcclxuICAgICAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgICAgICB0aW1lLFxyXG4gICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICBsaWtlczogMCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VyTGlrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYW5zd2VyZWRDb21tZW50OiBwYXJlbnRJZCxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRhdGEuY29tbWVudHMucHVzaCh7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICB0ZXh0LFxyXG4gICAgICAgIGRhdGUsXHJcbiAgICAgICAgdGltZSxcclxuICAgICAgICBpZCxcclxuICAgICAgICBsaWtlczogMCxcclxuICAgICAgICBjdXJyZW50VXNlckxpa2VkOiBmYWxzZSxcclxuICAgICAgICBjb21tZW50c0FycmF5OiBbXSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRvTG9jYWxTdG9yYWdlKCdkYXRhJyAsZGF0YSk7XHJcbiAgICByZW5kZXJDb21tZW50cyhmcm9tTG9jYWxTdG9yYWdlKCdkYXRhJykpO1xyXG5cclxuICAgIGV2ZW50cygpO1xyXG4gIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZW5kQ29tbWVudDsiLCJleHBvcnQgY29uc3QgcmVtb3ZlRXJyb3JzID0gKFxyXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQsXHJcbiAgICB2YWxpZGF0aW9uU3RhdHVzOiBib29sZWFuLFxyXG4gICAgdG9SZW1vdmU6IGFueVxyXG4gICkgPT4ge1xyXG4gICAgbGV0IGVycm9ycyA9IGVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuY2hpbGRyZW47XHJcblxyXG4gICAgZm9yIChsZXQgZXJyIG9mIGVycm9ycykge1xyXG4gICAgICBsZXQgY2hpbGQgPSBlcnIucXVlcnlTZWxlY3RvcihgOnNjb3BlID4gJHt0b1JlbW92ZX1gKTtcclxuXHJcbiAgICAgIGlmIChjaGlsZCkge1xyXG4gICAgICAgIGNoaWxkLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsZW1lbnQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgYmxhY2tcIjtcclxuICAgIH1cclxuICAgIHJldHVybiAodmFsaWRhdGlvblN0YXR1cyA9IGZhbHNlKTtcclxuICB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlID0gKFxyXG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQsXHJcbiAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICB2YWxpZGF0aW9uU3RhdHVzOiBib29sZWFuLFxyXG4gICAgZXJyOiBhbnksXHJcbiAgICBhbGxvd2VkTWluOiBudW1iZXIsXHJcbiAgICBhbGxvd2VkTWF4OiBhbnksXHJcbiAgICB3aGF0SXNDaGVja2VkOiBzdHJpbmdcclxuICApID0+IHtcclxuXHJcbiAgICBjb25zdCBtYWtlQm9yZGVyUmVkID0gKCkgPT4ge1xyXG4gICAgICBsZXQgZWwgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW47XHJcblxyXG4gICAgICBmb3IgKGxldCBpdGVtIG9mIGVsKSB7XHJcbiAgICAgICAgbGV0IGEgPSBpdGVtIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIGlmIChhLmNsYXNzTmFtZSA9PT0gd2hhdElzQ2hlY2tlZCkge1xyXG4gICAgICAgICAgYS5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCByZWRcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKHdoYXRJc0NoZWNrZWQgPT09IFwiZGF0ZXBpY2tlclwiKSB7XHJcbiAgICAgIGlmIChEYXRlLnBhcnNlKHRleHQpID4gRGF0ZS5wYXJzZShhbGxvd2VkTWF4KSkge1xyXG4gICAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICAgICAgXCJhZnRlcmJlZ2luXCIsXHJcbiAgICAgICAgICBlcnIubWF4XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdmFsaWRhdGlvblN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgbWFrZUJvcmRlclJlZCgpO1xyXG4gICAgICAgIHJldHVybiB2YWxpZGF0aW9uU3RhdHVzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0ZXh0KSB7XHJcbiAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICAgIFwiYWZ0ZXJiZWdpblwiLFxyXG4gICAgICAgIGVyci5lbXB0eVxyXG4gICAgICApO1xyXG5cclxuICAgICAgdmFsaWRhdGlvblN0YXR1cyA9IHRydWU7XHJcbiAgICAgIG1ha2VCb3JkZXJSZWQoKTtcclxuICAgICAgcmV0dXJuIHZhbGlkYXRpb25TdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0ZXh0IHx8IHRleHQubGVuZ3RoIDwgYWxsb3dlZE1pbikge1xyXG4gICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgICBcImFmdGVyYmVnaW5cIixcclxuICAgICAgICBlcnIubWluXHJcbiAgICAgICk7XHJcblxyXG4gICAgICB2YWxpZGF0aW9uU3RhdHVzID0gdHJ1ZTtcclxuICAgICAgbWFrZUJvcmRlclJlZCgpO1xyXG4gICAgICByZXR1cm4gdmFsaWRhdGlvblN0YXR1cztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGV4dC5sZW5ndGggPiBhbGxvd2VkTWF4KSB7XHJcbiAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICAgIFwiYWZ0ZXJiZWdpblwiLFxyXG4gICAgICAgIGVyci5tYXhcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHZhbGlkYXRpb25TdGF0dXMgPSB0cnVlO1xyXG4gICAgICBtYWtlQm9yZGVyUmVkKCk7XHJcbiAgICAgIHJldHVybiB2YWxpZGF0aW9uU3RhdHVzO1xyXG4gICAgfVxyXG4gIH07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==