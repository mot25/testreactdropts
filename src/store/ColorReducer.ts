import { ColorActionType, IColorActionType, IColorChange } from "./types";

const initColorState: IColorChange = {
  colors: [],
  changeColor: null,
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
        colors: [...state.colors, { id: Date.now(), color: action.payload }],
        changeColor: action.payload
      };
    case ColorActionType.REMOVE_COLOR:
      return { ...state };

    default:
      return state;
  }
};
