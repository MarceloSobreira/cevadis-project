

import { Reducer } from "redux";
import { IBeerState } from "./types";

const INITIAL_STATE: IBeerState = {
  itens: [],
}

const beerList: Reducer<IBeerState> = (state, action) => {
  console.log(state, action)
  return INITIAL_STATE;
}

export default beerList;