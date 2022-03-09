import { useState } from "react";
import { BlockPicker } from "react-color";
import { useDispatch } from "react-redux";
import { ColorAdd, hideColorPicker } from "../../store/action-creator/color";
import { IColorWithMap, IEventColorPicker } from "../../store/types";
import Button from "../Button/Button";
import { useTypedSelector } from "../hook/useTypedSelecror";
import styles from "./Color.module.css";
import delete_icon from "./img/delete_block.svg";

const ColorPicker = () => {
  const [valueColor, setvalueColor] = useState<string>("#fff");
  console.log(valueColor);

  const { colors, changeColor, isColorPicker } = useTypedSelector(
    (state) => state.color
  );
  console.log("colors", colors);
  console.log("changeColor", changeColor);
  console.log("isColorPicker", isColorPicker);

  const dispatch = useDispatch();

  const handleColor = (e: IEventColorPicker) => {
    setvalueColor(e.hex);
  };

  const handleClickBtn = () => {
    if (colors.length >= 8) {
      dispatch(hideColorPicker());
      return alert("Please");
    }
    dispatch(ColorAdd(valueColor));
  };

  return (
    <div>
      <div className={styles.block_container}>
        {colors &&
          colors.map((color: IColorWithMap): JSX.Element => {
            return (
              <div
                key={color.id}
                className={styles.block_item}
                style={{ backgroundColor: color.color }}
              >
                <span className={styles.block_delete}>
                  <img src={delete_icon} />
                </span>
              </div>
            );
          })}
      </div>
      <div className={styles.btn_wrapper}>
        <Button onClick={handleClickBtn} className={styles.button_color}>
          Добавить цвет
        </Button>
        {isColorPicker && (
          <BlockPicker color={valueColor} onChangeComplete={handleColor} />
        )}
      </div>
    </div>
  );
};

export default ColorPicker;
