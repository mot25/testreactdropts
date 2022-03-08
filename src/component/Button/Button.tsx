import React, { FC } from "react";
import { ButtonProps } from "./Button.Props";
import styles from "./Button.module.css";
const Button: FC<ButtonProps> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
