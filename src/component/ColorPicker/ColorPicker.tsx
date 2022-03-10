import { useState } from "react";
import { BlockPicker } from "react-color";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import {
  ColorAdd,
  ColorRemove,
  hideColorPicker,
  showColorPicker
} from "../../store/action-creator/color";
import { IColorWithMap, IEventColorPicker } from "../../store/types";
import Button from "../Button/Button";
import { useTypedSelector } from "../hook/useTypedSelecror";
import styles from "./Color.module.css";
import delete_icon from "./img/delete_block.svg";
import "react-toastify/dist/ReactToastify.css";
const ColorPicker = () => {
  const [valueColor, setvalueColor] = useState<string>(
    `#${Math.ceil(Math.random() * 9)}5${Math.ceil(
      Math.random() * 9
    )}54${Math.ceil(Math.random() * 9)}`
  );

  const { colors, isColorPicker } = useTypedSelector(state => state.color);

  const dispatch = useDispatch();

  // ColorAdd
  // ColorRemove
  // hideColorPicker
  // showColorPicker

  const handleColor = (e: IEventColorPicker) => {
    setvalueColor(e.hex);
    dispatch(ColorAdd(e.hex));
  };

  const handleClickBtn = () => {
    if (colors.length > 7) {
      return toast.error("Нельзя больше 8 цветов", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    }
    dispatch(showColorPicker());
  };

  const deleteBlock = (id: number) => {
    console.log(id);

    dispatch(ColorRemove(id));
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
                  <img
                    onClick={() => deleteBlock(color.id)}
                    src={delete_icon}
                  />
                </span>
              </div>
            );
          })}
      </div>
      <div className={styles.btn_wrapper}>
        <Button onClick={handleClickBtn} className={styles.button_color}>
          Добавить цвет
        </Button>
        {isColorPicker &&
          <BlockPicker color={valueColor} onChangeComplete={handleColor} />}
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="dark"
        pauseOnHover
      />
    </div>
  );
};

export default ColorPicker;
