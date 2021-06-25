import { ADD_ARTICLE, CLICK_SPACE, CREATE_GRID } from "../constants/action-types";
import { createBoard, clickHandler } from "./boardFunctions.js";

var gameBoard = createBoard();

const initialState = {
  gameBoard: gameBoard
};

function testReducer(state=initialState, action) {
  if (action.type === CLICK_SPACE) {
    // clickSpace();
    return state;
  }
}

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;