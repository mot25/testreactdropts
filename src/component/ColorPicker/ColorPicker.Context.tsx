import { createContext, FC, PropsWithChildren, useReducer } from "react";
interface IContextPicker {
  color: string;
}
interface IContextPickerProdider {
  children: React.ReactNode;
}
const initState: IContextPicker = {
  color: "#F5A623",
};

export const ContextColorPicker = createContext<IContextPicker>(initState);

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.hex };

    default:
      return state;
  }
};

export const ContextColorPicker = ({
  children,
}: PropsWithChildren<IContextPickerProdider>) => {
  const [value, dispath] = useReducer(reducer, initState);

  value.CHANGE_COLOR = (c: string) => {
    dispath({ type: "CHANGE_COLOR", hex: c });
  };

  return (
    <ContextColorPicker.Provider value={value}>
      {children}
    </ContextColorPicker.Provider>
  );
};
// -----------------
// import { createContext, PropsWithChildren, ReactNode, useState } from "react";
// import { MenuItem } from "../interfaces/menu.interface";
// import { TopLevelCategory } from "../interfaces/page.interface";

// export interface IAppContext {
//   menu: MenuItem[];
//   firstCategory: TopLevelCategory;
//   setMenu?: (newMenu: MenuItem[]) => void;
// }

// export const AppContext = createContext<IAppContext>({
//   menu: [],
//   firstCategory: TopLevelCategory.Courses,
// });

// export const AppContextProvider = ({
//   children,
//   menu,
//   firstCategory,
// }: PropsWithChildren<IAppContext>): JSX.Element => {
//   const [menuState, setMenuState] = useState<MenuItem[]>(menu);
//   const setMenu = (newMenu: MenuItem[]) => {
//     setMenuState(newMenu);
//   };
//   return (
//     <AppContext.Provider
//       value={{
//         menu: menuState,
//         firstCategory,
//         setMenu,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };
