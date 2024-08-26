import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const NavBar = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };

  const [users, setUser] = useState([]);
  const [logo, setLogo] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu open/close

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((info) => setUser(info));
  }, []);

  const [footerSocial, setFooterSocial] = useState([]);
  const [footerAddress, setFooterAddress] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);

  useEffect(() => {
    fetch(`http://localhost:5000/footer-social`)
      .then((res) => res.json())
      .then((info) => setFooterSocial(info));
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the state
  };

  return (
    <>
      {logo.map((l) => (
        <div key={l.id}>
          <header className="navbar-info">
            <nav className="navbar navbar-expand-lg navbar-light navbar-me header">
              <div className="container">
                <a className="navbar-brand" href="/">
                  <img src={l.logo} alt="logo" />
                </a>
                <button
                  className={`navbar-toggler navbar-icon ${menuOpen ? 'open' : ''}`} // Apply 'open' class conditionally
                  type="button"
                  aria-controls="navbarNav"
                  aria-expanded={menuOpen}
                  aria-label="Toggle navigation"
                  onClick={toggleMenu} // Toggle menu on click
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className={`collapse navbar-collapse float-right pt-0 mt-0 ${
                    menuOpen ? "show" : ""
                  }`}
                  id="navbarNav"
                >
                  <ul className="nav navbar-nav ml-lg-auto mr-lg-0">
                    <li className="page-scroll nav-item active">
                      <a className="nav-link active" href="/">
                        HOME
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#services-sec">
                        SERVICES
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#pricing-sec">
                        PRICING
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#testimonial-sec">
                        TESTIMONIAL
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#contact-sec">
                        CONTACT
                      </a>
                    </li>

                    {user?.email ? (
                      <li>
                        <Link to="/dashboard" className="quote-btn text-decoration-none">
                          Dashboard
                        </Link>
                      </li>
                    ) : (
                      <li>
                        <Link to="/login" className="quote-btn text-decoration-none">
                          Log in
                        </Link>
                      </li>
                    )}

                    {users.map(
                      (u) =>
                        u.userEmail === user?.email &&
                        u.userRole === "Admin" && (
                          <li key={u.id}>
                            <Link to="/admin" className="quote-btn text-decoration-none">
                              Admin
                            </Link>
                          </li>
                        )
                    )}
                  </ul>
                </div>
              </div>
            </nav>
          </header>
        </div>
      ))}
    </>
  );
};

export default NavBar;
