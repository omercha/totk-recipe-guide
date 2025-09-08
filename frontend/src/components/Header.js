import "./Header.css";

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
          <a href="/">Homepage</a>
          <a href="/recipes">Recipes</a>
          <a href="/tracker">Tracker</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;