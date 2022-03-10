export interface IColorChange {
  colors: any[];
  changeColor: string | null;
  isColorPicker: boolean;
}

export enum ColorActionType {
  ADD_COLOR = "ADD_COLOR",
  CHANGE_COLOR = "CHANGE_COLOR",
  REMOVE_COLOR = "REMOVE_COLOR"
}

export interface IColorActionType {
  type: string;
  payload: string | null;
}
