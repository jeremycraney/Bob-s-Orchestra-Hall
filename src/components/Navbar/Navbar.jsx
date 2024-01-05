import Button from "../Button/Button";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="https://i.ibb.co/3kNPY89/Cream-Banquet-Hall-Logo-1-removebg-preview-1.png"
          alt="Logo"
          className="logo"
        />
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#events">Events</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <Button title={"Sign Up Now"}/>
      </div>
    </nav>
  );
};

export default Navbar;
