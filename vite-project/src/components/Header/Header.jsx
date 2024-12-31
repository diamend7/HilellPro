import ThemeButton from "../themeButton/themeButton";
import { NavLink } from "react-router-dom";

const Header = ({ toggleTheme }) => (
  <header className="header">
    <h1>Welcome!</h1>
    <div className="header_links">
      <NavLink to="/" className="link">
        Main
      </NavLink>
      <NavLink to="/contacts" className="link">
        Contacts
      </NavLink>
      <NavLink to="/aboutme" className="link">
        About Me
      </NavLink>
    </div>
    <ThemeButton toggleTheme={toggleTheme} />
  </header>
);

export default Header;
