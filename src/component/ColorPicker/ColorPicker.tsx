import React, { useContext, useEffect, useState } from "react";
import {
  ContextColorPicker,
  ContextColorPickerProvider,
} from "./ColorPicker.Context";
import { BlockPicker } from "react-color";
import { IColorEvent } from "./ColorPicker.Props";

const ColorPicker = () => {
  const { color, CHANGE_COLOR } = useContext(ContextColorPicker);
  // const [color, setColor] = useState();
  useEffect(() => console.log(color), [color]);
  const handleColor = (color: IColorEvent) => {
    console.log(color.hex);
    CHANGE_COLOR(color.hex);
  };
  return (
    <div>
      <ContextColorPickerProvider>
        <BlockPicker color={color} onChangeComplete={handleColor} />
      </ContextColorPickerProvider>
    </div>
  );
};

export default ColorPicker;
