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
