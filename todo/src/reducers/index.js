import { combineReducers } from "redux";
import showModalReducer from "./showModalReducer";
import { reducer as formReducer } from 'redux-form';


export default combineReducers({
  modal: showModalReducer,
  form: formReducer
});