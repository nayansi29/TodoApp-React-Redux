import { CLOSE_MODAL, SHOW_MODAL } from "../actions/types";

const initalState = {
  open: null
}
const showModalReducer = (state = initalState, action) => {
  switch (action.type) {
    case CLOSE_MODAL:
      return { ...state, open: false }
    case SHOW_MODAL:
      return { ...state, open: true }
    default:
      return state;
  }
}

export default showModalReducer;