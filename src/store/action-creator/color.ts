import { Dispatch } from "redux";
import { ColorActionType } from "../types";

export const ColorAdd = (color: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ColorActionType.ADD_COLOR, payload: color });
  };
};

export const ColorRemove = () => {
  return async (dispatch: Dispatch) => {};
};
