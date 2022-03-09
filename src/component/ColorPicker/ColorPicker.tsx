import { useState } from "react";
import { BlockPicker } from "react-color";
import { useDispatch } from "react-redux";
import { ColorAdd } from "../../store/action-creator/color";
import Button from "../Button/Button";
import { useTypedSelector } from "../hook/useTypedSelecror";
import styles from "./Color.module.css";
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

  const handleColor = (e: any) => {
    // setvalueColor(e.target.value);
    setvalueColor(e.hex);
  };

  const handleClickBtn = () => {
    dispatch(ColorAdd());
  };

  return (
    <div>
      <div className={styles.block_container}>
        {/* <div className={styles.block_item}></div> */}
        {colors &&
          colors.map((color: string): JSX.Element => {
            return (
              <div
                className={styles.block_item}
                style={{ backgroundColor: color }}
              ></div>
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
