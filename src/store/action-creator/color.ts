import { Dispatch } from "redux";
import { ColorActionType } from "../types";

export const ColorAdd = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ColorActionType.CHANGE_COLOR });
  };
};

export const ColorRemove = () => {
  return async (dispatch: Dispatch) => {};
};
