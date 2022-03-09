import { createContext, FC, PropsWithChildren, useReducer } from "react";
import { IContextPicker, IContextPickerProdider } from "./ColorPicker.Props";

const initState: IContextPicker = {
  color: "#000",
  CHANGE_COLOR: ({ color }: { color: string }) => {
    console.log("con", color);

    dispath({
      type: "CHANGE_COLOR",
      color,
    });
  },
};

export const ContextColorPicker = createContext<IContextPicker>(initState);

const reducer = (state: IContextPicker, action: any) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.color };

    default:
      return state;
  }
};

export const ContextColorPickerProvider = ({
  children,
}: PropsWithChildren<IContextPickerProdider>) => {
  const [value, dispath] = useReducer(reducer, initState);

  // value.CHANGE_COLOR = ({ color }: { color: string }) => {
  //   console.log("con", color);

  //   dispath({
  //     type: "CHANGE_COLOR",
  //     color,
  //   });
  // };

  return (
    <ContextColorPicker.Provider value={value}>
      {children}
    </ContextColorPicker.Provider>
  );
};
