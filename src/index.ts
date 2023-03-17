import RootObject from "./interfaces/Comment";
import styles from "./styles.module.css";
import data from "./data.json";
import sendComments from "./sendComments";
import renderComments from "./renderComments";
import "./styles.css";

export const toLocalStorage = (data: RootObject) => {
  localStorage.setItem("data", JSON.stringify(data));
};

export const fromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("data"));
};

toLocalStorage(data);
const storedData: RootObject = fromLocalStorage();

renderComments(storedData);
sendComments();
