import { toLocalStorage, fromLocalStorage } from "./index";
import RootObject from "./interfaces/Comment";
import renderComments from "./renderComments";
import { events } from "./events";


const deleteComment = (id: number, level: String) => {

    const data: RootObject = fromLocalStorage('data');

    if (level === "outer") {
      toLocalStorage('data',{
        comments: [...data.comments.filter((e) => e.id !== id)],
      });
      renderComments(fromLocalStorage('data'));
    } else {
      
      const filtered = data.comments.map((e) => {
        return e.commentsArray.filter((e) => e.id !== id);
      });

      for (let i = 0; i < data.comments.length; i++) {
        let firstarr = filtered[i];
        data.comments[i].commentsArray = [...firstarr];
      }
      toLocalStorage('data' ,data);
      renderComments(fromLocalStorage('data'));
    }
    events();
  };

  export default deleteComment