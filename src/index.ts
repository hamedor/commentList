import RootObject from "./interfaces/Comment";
import styles from "./styles.module.css";
import data from "./data.json";
import renderComments from "./renderComments";
import "./styles.css";
import { events } from "./events";



export const toLocalStorage = (key:string ,data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const fromLocalStorage = (key:string) => {
  return JSON.parse(localStorage.getItem(key));
};



toLocalStorage('data' ,data);
const storedData: RootObject = fromLocalStorage('data');

renderComments(storedData);

events();
