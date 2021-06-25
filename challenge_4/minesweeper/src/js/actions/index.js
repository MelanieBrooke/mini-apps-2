// src/js/actions/index.js

import { ADD_ARTICLE, CREATE_GRID, CLICK_SPACE } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function createGame(payload) {
  return { type: CREATE_GRID, payload };
}

// export function clickSpace(payload) {
//   return { type: CLICK_SPACE, payload };
// }