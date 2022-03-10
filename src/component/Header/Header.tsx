import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { HeaderProps, PropsItemsHeader } from "./Header.Props";

const Header = ({ title }: HeaderProps): JSX.Element => {
  return (
    <div className={styles.header}>
      {title.map((link: PropsItemsHeader) => {
        return (
          <Link key={link.route} className={styles.header_link} to={link.route}>
            {link.routeru}
          </Link>
        );
      })}
    </div>
  );
};

export default Header;
