import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <div className="header-content">
        <button className="hamburger-menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className="nav-buttons">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/recipes">Recipes</NavLink>
          <NavLink to="/tracker">Tracker</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;