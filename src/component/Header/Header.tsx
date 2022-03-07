import React, { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export interface HeaderProps {
  route: string;
  routeru: string;
}

const Header = ({ title }: HeaderProps): JSX.Element => {
  //   console.log(title);
  return (
    <div className={styles.header}>
      {/* {title.map((link: HeaderProps) => {
        return (
          <Link className={styles.header_link} to={link.route}>
            {link.title_ru}
          </Link>
        );
      })} */}
      <Link to={title.route}>rged</Link>
    </div>
  );
};

export default Header;
