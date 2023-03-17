/* interface Comment {
    name:string
    text:string
    date:Date
    id:number
    likes:number
    nestLevel:number
    commentsArray:Comments[]
}
interface Comments{
    name:string
    text:string
    date:Date
    id:number
    answeredComment:number
    likes:number
}
interface CommentArray extends Array<Comment>{}

export default CommentArray; */

interface CommentsArray {
  name: string;
  text: string;
  date: string;
  time: string;
  id: number;
  answeredComment: number;
  likes: number;
  currentUserLiked: boolean;
}

interface Comment {
  name: string;
  text: string;
  date: string;
  time: string;
  id: number;
  likes: number;
  currentUserLiked: boolean;
  commentsArray: CommentsArray[];
}

interface RootObject {
  comments: Comment[];
}

export default RootObject;
