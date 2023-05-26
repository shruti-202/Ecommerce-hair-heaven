import React from "react";
import { Link } from "react-router-dom";
import HeartIcon from "../../assets/icons/HeartIcon.svg";
import CartIcon from "../../assets/icons/CartIcon.svg";
import LoginIcon from "../../assets/icons/LoginIcon.svg";
import SearchIcon from "../../assets/icons/SearchIcon.svg";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="Navigation">
      <div className="Navigation-container">
        <div className="Navigation-logo">
          <Link to="/" className="Navigation-logo-brandname">
            HairHeaven
          </Link>
        </div>
        <div className="Navigation-list">
          <Link to="/" className="Navigation-list-item">
            HOME
          </Link>
          <Link to="/" className="Navigation-list-item">
            SHOP
          </Link>
          <Link to="/" className="Navigation-list-item">
            HELP ME
          </Link>
          <Link to="/" className="Navigation-list-item">
            BOOK A TRIAL
          </Link>
          <Link to="/" className="Navigation-list-item">
            REVIEWS
          </Link>
        </div>
        <div className="Navigation-search">
          <img src={SearchIcon} alt="seach" />
          <input placeholder="What are you loooking for?"></input>
        </div>
        <div className="Navigation-options">
          <div className="Navigation-options-item">
            <img src={HeartIcon} alt="hearticon" />
          </div>
          <div className="Navigation-options-item">
            <img src={CartIcon} alt="carticon" />
          </div>
          <div className="Navigation-options-item">
            <img src={LoginIcon} alt="loginicon" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
