export interface IContextPicker {
  color: string;
  CHANGE_COLOR: (color: any) => void;
}
export interface IContextPickerProdider {
  children: React.ReactNode;
}
