import Button from "../Button/Button";
import styles from "./Color.module.css";
const ColorPicker = () => {
  return (
    <div>
      <div className={styles.block_container}>
        <div className={styles.block_red}></div>
        <div className={styles.block_red}></div>
        <div className={styles.block_red}></div>
        <div className={styles.block_red}></div>
        <div className={styles.block_red}></div>
        <div className={styles.block_red}></div>
        <div className={styles.block_red}></div>
        <div className={styles.block_red}></div>
      </div>
      <Button className={styles.button_color}>Добавить цвет</Button>
    </div>
  );
};

export default ColorPicker;
