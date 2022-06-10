import { CLOSE_MODAL, SHOW_MODAL } from "./types";
import todo from "../apis/todo";

export const ShowModal = () => {
  return {
    type: SHOW_MODAL,
  }
};
export const CloseModal = () => {
  return {
    type: CLOSE_MODAL
  }
};
export const createTodo = formValues => async dispatch => {
  todo.post('/todo', formValues);
}