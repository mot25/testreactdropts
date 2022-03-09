import { ColorActionType, IColorActionType, IColorChange } from "./types";

const initColorState: IColorChange = {
  colors: [],
  changeColor: null,
  isColorPicker: false
};

export const colorReducer = (
  state = initColorState,
  action: IColorActionType
) => {
  switch (action.type) {
    case ColorActionType.CHANGE_COLOR:
      return { ...state, isColorPicker: true };
    case ColorActionType.ADD_COLOR:
      return {
        ...state,
        isColorPicker: false,
        colors: [...state.colors, action.payload],
        changeColor: action.payload
      };
    case ColorActionType.REMOVE_COLOR:
      return { ...state, isColorPicker: false };

    default:
      return state;
  }
};
