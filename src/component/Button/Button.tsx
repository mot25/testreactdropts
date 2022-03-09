import React, { FC } from "react";
import { ButtonProps } from "./Button.Props";
import styles from "./Button.module.css";
import cn from "classnames";
const Button: FC<ButtonProps> = ({ children, className }) => {
  return <button className={cn(styles.button, className)}>{children}</button>;
};

export default Button;
