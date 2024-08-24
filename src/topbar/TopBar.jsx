

import { useContext, useState } from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="top">
      <div className="topLeft">
        <h2 className="contact">Contact</h2>
        <Link to="https://www.linkedin.com/in/nitin-k666/">
          <i className="topIcon fa-brands fa-linkedin"></i>
        </Link>
        <Link to="https://www.facebook.com/profile.php?id=100057349644056">
          <i className="topIcon fa-brands fa-square-facebook"></i>
        </Link>
        <Link to="https://www.instagram.com/nitin.x6/">
          <i className="topIcon fa-brands fa-instagram"></i>
        </Link>
        <Link to="https://twitter.com/home">
          <i className="topIcon fa-brands fa-twitter"></i>
        </Link>
      </div>
      <div className="topCenter">
        <button className="menuButton" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </button>
        <ul className={`topList ${isMenuOpen ? "showMenu" : ""}`}>
          <li className="topListItem">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link
              to="/write"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Write
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {user && "Logout"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Login
              </Link>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "inherit", marginLeft: "10px" }}
              >
                Register
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
