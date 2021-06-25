import { ADD_ARTICLE } from "../constants/action-types";
import { createBoard, clickSpace } from "./boardFunctions.js";

var gameBoard = createBoard();

const initialState = {
  gameBoard: gameBoard
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;