import logo from "../images/logo.svg";
import Nav from "./header/Nav";

const Header = (): JSX.Element => {
  return (
    <header>
      <img src={logo} alt="crowdfund logo" />
      <Nav />
    </header>
  );
};

export default Header;
