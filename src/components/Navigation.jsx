export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Jadoo</div>

        <ul className="nav-menu">
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#hotels">Hotels</a></li>
          <li><a href="#flights">Flights</a></li>
          <li><a href="#bookings">Bookings</a></li>
        </ul>

        <div className="nav-right">
          <a href="#login" className="login-btn">Login</a>
          <button className="signup-btn">Sign up</button>
          <select className="language-select">
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="fr">FR</option>
          </select>
        </div>
      </div>
    </nav>
  );
}
