import RootObject from "./interfaces/Comment";
/* import styles from "./styles.module.css"; */
import data from "./data.json";
import deleteIcon from "./icons/delete.svg";
import likeIcon from "./icons/like.svg";
import formatDate from "./formatDate";
const renderComments = (data: RootObject) => {
  const list = document.querySelector(".list");
  list.innerHTML = "";

  data.comments.map((e) => {
    const newDiv = document.createElement("div");

    let date = formatDate(e.date, e.time);

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
                    <svg class=${
                      e.currentUserLiked && "red"
                    } width="25px" height="25px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="icomoon-ignore">
                    </g>
                    <path d="M21.886 5.115c3.521 0 6.376 2.855 6.376 6.376 0 1.809-0.754 3.439-1.964 4.6l-10.297 10.349-10.484-10.536c-1.1-1.146-1.778-2.699-1.778-4.413 0-3.522 2.855-6.376 6.376-6.376 2.652 0 4.925 1.62 5.886 3.924 0.961-2.304 3.234-3.924 5.886-3.924zM21.886 4.049c-2.345 0-4.499 1.089-5.886 2.884-1.386-1.795-3.54-2.884-5.886-2.884-4.104 0-7.442 3.339-7.442 7.442 0 1.928 0.737 3.758 2.075 5.152l11.253 11.309 11.053-11.108c1.46-1.402 2.275-3.308 2.275-5.352 0-4.104-3.339-7.442-7.442-7.442v0z">
                    
                    </path>
                    </svg></button>
                </div>
            </div>
 
                <button class="openForm">Ответить</button>
                <button key="outer" class="deleteButton"><img src=${deleteIcon} width="20" height="20"></button>

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
      let date = formatDate(inner.date, inner.time);

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
                        <svg class=${
                          inner.currentUserLiked && "red"
                        }  width="25px" height="25px"  viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="icomoon-ignore">
                        </g>
                        <path d="M21.886 5.115c3.521 0 6.376 2.855 6.376 6.376 0 1.809-0.754 3.439-1.964 4.6l-10.297 10.349-10.484-10.536c-1.1-1.146-1.778-2.699-1.778-4.413 0-3.522 2.855-6.376 6.376-6.376 2.652 0 4.925 1.62 5.886 3.924 0.961-2.304 3.234-3.924 5.886-3.924zM21.886 4.049c-2.345 0-4.499 1.089-5.886 2.884-1.386-1.795-3.54-2.884-5.886-2.884-4.104 0-7.442 3.339-7.442 7.442 0 1.928 0.737 3.758 2.075 5.152l11.253 11.309 11.053-11.108c1.46-1.402 2.275-3.308 2.275-5.352 0-4.104-3.339-7.442-7.442-7.442v0z" >
                        
                        </path>
                        </svg>
                        </button>
                    </div>
                    </div>
                        <button class="openForm">Ответить</button>
                        <button key="innerr" class="deleteButton"><img src=${deleteIcon} width="20" height="20"></button>
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

export default renderComments;
