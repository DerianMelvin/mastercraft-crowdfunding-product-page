import headerStyles from "../../css/Header.module.css";

const Nav = (): JSX.Element => {
  return (
    <nav className={headerStyles.nav}>
      <ul>
        <li>
          <a href="#link">About</a>
        </li>
        <li>
          <a href="#link">Discover</a>
        </li>
        <li>
          <a href="#link">Get Started</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
