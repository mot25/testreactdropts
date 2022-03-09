import { ColorActionType, IColorActionType, IColorChange } from "./types";

const initColorState: IColorChange = {
  colors: [],
  isColorPicker: true
};

export const colorReducer = (
  state = initColorState,
  action: IColorActionType
) => {
  switch (action.type) {
    case ColorActionType.ADD_COLOR:
      return {
        ...state,
        colors: [...state.colors, { id: Date.now(), color: action.payload }]
      };
    case ColorActionType.REMOVE_COLOR:
      return {
        ...state,
        colors: state.colors.filter((c: any) => c.id !== action.payload)
      };
    case ColorActionType.DELETE_COLORPICKER:
      return { ...state, isColorPicker: false };
    case ColorActionType.SHOW_COLORPICKER:
      return { ...state, isColorPicker: true };

    default:
      return state;
  }
};
