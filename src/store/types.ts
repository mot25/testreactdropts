export interface IColorChange {
  colors: IColorWithMap[] | any;
  changeColor: string | null;
  isColorPicker: boolean;
}

export enum ColorActionType {
  ADD_COLOR = "ADD_COLOR",
  REMOVE_COLOR = "REMOVE_COLOR",
  DELETE_COLORPICKER = "DELETE_COLORPICKER"
}

export interface IColorActionType {
  type: string;
  payload: string | null;
}

export interface IEventColorPicker {
  hex: string;
}

export interface IColorWithMap {
  id: number;
  color: string;
}
