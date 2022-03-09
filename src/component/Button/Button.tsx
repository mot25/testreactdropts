import React, { FC } from "react";
import { ButtonProps } from "./Button.Props";
import styles from "./Button.module.css";
import cn from "classnames";
const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return <button {...props} className={cn(styles.button, className)}>{children}</button>;
};

export default Button;
