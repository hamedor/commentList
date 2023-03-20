import { toLocalStorage, fromLocalStorage } from "./index";
import RootObject from "./interfaces/Comment";
import renderComments from "./renderComments";
import { events } from "./events";


const sendComment = (
    text: string,
    name: string,
    date: string,
    time: string,
    parentId: number
  ) => {
    const data: RootObject = fromLocalStorage('data');


    const searchMaxId = (data: RootObject) => {
      const outerId = data.comments.map((e) => e.id);
      const innerId = data.comments.flatMap((e) =>
        e.commentsArray.map((el) => el.id)
      );

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

      const result = Math.max(
        outerId[outerId.length - 1],
        innerId[innerId.length - 1] || 0
      );

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
        } else {
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
    } else {
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


    toLocalStorage('data' ,data);
    renderComments(fromLocalStorage('data'));

    events();
  };

export default sendComment;