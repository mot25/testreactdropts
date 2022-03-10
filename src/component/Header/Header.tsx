import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { HeaderProps, PropsItemsHeader } from "./Header.Props";
import { useLocation } from "react-router-dom";
import cn from "classnames";
const Header = ({ title }: HeaderProps): JSX.Element => {
  const hist = useLocation();

  return (
    <div className={styles.header}>
      {title.map((link: PropsItemsHeader) => {
        return (
          <Link
            key={link.route}
            className={cn(styles.header_link, {
              [styles.mainPage]: hist.pathname === link.route
            })}
            to={link.route}
          >
            {link.routeru}
          </Link>
        );
      })}
    </div>
  );
};

export default Header;
