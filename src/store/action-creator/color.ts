import { Dispatch } from "redux";
import { ColorActionType } from "../types";

export const ColorAdd = (color: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ColorActionType.ADD_COLOR, payload: color });
    dispatch({ type: ColorActionType.DELETE_COLORPICKER });
  };
};

export const ColorRemove = (id: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ColorActionType.REMOVE_COLOR, payload: id });
  };
};
export const hideColorPicker = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ColorActionType.DELETE_COLORPICKER });
  };
};
export const showColorPicker = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ColorActionType.SHOW_COLORPICKER });
  };
};
