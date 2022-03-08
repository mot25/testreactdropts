import React, { useContext } from "react";
import {
  ContextColorPicker,
  ContextColorPickerProvider,
} from "./ColorPicker.Context";
import { SketchPicker } from "react-color";

const ColorPicker = () => {
  const { color, CHANGE_COLOR } = useContext(ContextColorPicker);

  return (
    <div>
      <ContextColorPickerProvider>
        <SketchPicker color={color} onChangeComplete={CHANGE_COLOR} />
      </ContextColorPickerProvider>
    </div>
  );
};

export default ColorPicker;
