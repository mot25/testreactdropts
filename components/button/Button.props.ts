import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export default interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  mode: "primary" | "ghost";
  arrow?: "down" | "right" | "none";
}
