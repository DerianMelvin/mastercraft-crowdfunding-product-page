import logo from "../images/logo.svg";
import Nav from "./header/Nav";
import headerStyles from "../css/Header.module.css";

const Header = (): JSX.Element => {
  return (
    <header className={headerStyles.header}>
      <img src={logo} alt="crowdfund logo" />
      <Nav />
    </header>
  );
};

export default Header;
