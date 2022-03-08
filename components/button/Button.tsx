import React from "react";
import ButtonProps from "./Button.props";
import styles from "./Button.module.css";
import cn from "classNames";
import ArrowIcon from "./arrow.svg";
export default function Button({
  mode,
  className,
  children,
  arrow = "none",
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      // {...props.className}
      className={cn(styles.button, className, {
        [styles.primary]: mode == "primary",
        [styles.ghost]: mode == "ghost",
      })}
      {...props}
    >
      {children}
      {arrow != "none" && (
        <span
          className={cn(styles.arrow, className, {
            [styles.down]: arrow == "down",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
}
