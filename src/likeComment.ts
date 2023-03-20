import { toLocalStorage, fromLocalStorage } from "./index";
import RootObject from "./interfaces/Comment";
import renderComments from "./renderComments";
import { events } from "./events";


const likeComment = (id: number, level: String) => {
    const data: RootObject = fromLocalStorage('data');

    if (level === "outer") {
      data.comments
        .filter((e) => e.id === id)
        .map((el) => {

          if (el.currentUserLiked) {
            el.likes -= 1;

            el.currentUserLiked = false;
            toLocalStorage('data' ,data);
            renderComments(fromLocalStorage('data'));
          } else {
            el.likes += 1;
            el.currentUserLiked = true;
            toLocalStorage('data' ,data);
            renderComments(fromLocalStorage('data'));
          }
        });
    } else {
      data.comments.flatMap((e) => {
        e.commentsArray
          .filter((e) => e.id === id)
          .map((el) => {
            if (el.currentUserLiked) {
              el.currentUserLiked = false;
              el.likes -= 1;

              toLocalStorage('data' ,data);
              renderComments(fromLocalStorage('data'));
            } else {
              el.currentUserLiked = true;
              el.likes += 1;

              toLocalStorage('data' ,data);
              renderComments(fromLocalStorage('data'));
            }
          });
      });
    }
    events();
};

export default likeComment;