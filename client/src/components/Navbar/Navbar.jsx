import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faChevronDown,
  faMagnifyingGlass,
  faBell,
  faUser,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="wrapper">
          <div className="left">
            <div className="item">
              <img src="/img/uk-flag.jpg" alt="" height={"15px"} />
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div className="item">
              <span>USD</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div className="item">
              <Link className="link" to="/products/1">
                Women
              </Link>
            </div>
            <div className="item">
              <Link className="link" to="/products/2">
                Men
              </Link>
            </div>
            <div className="item">
              <Link className="link" to="/products/3">
                Children
              </Link>
            </div>
          </div>

          <div className="center">
            <Link className="link" to="/">
              Asep Store
            </Link>
          </div>

          <div className="right">
            <div className="item">
              <Link className="link" to="/">
                Homepage
              </Link>
            </div>
            <div className="item">
              <Link className="link" to="/">
                About
              </Link>
            </div>
            <div className="item">
              <Link className="link" to="/">
                Contact
              </Link>
            </div>
            <div className="item">
              <Link className="link" to="/">
                Stores
              </Link>
            </div>
            <div className="icons">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <FontAwesomeIcon icon={faUser} />
              <FontAwesomeIcon icon={faHeart} />
              <div className="cartIcon">
                <FontAwesomeIcon icon={faCartShopping} />
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
