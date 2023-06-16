import React from "react";
import { NavLink} from "react-router-dom";
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
          <NavLink to="/" className="Navigation-logo-brandname">
            HairHeaven
          </NavLink>
        </div>
        <div className="Navigation-list">
          <NavLink to="/" className="Navigation-list-item">
            HOME
          </NavLink>
          <NavLink to="/shop" className="Navigation-list-item">
            SHOP 
          </NavLink>
          <NavLink to="/helpme" className="Navigation-list-item">
            HELP ME
          </NavLink>
          <NavLink to="/trial" className="Navigation-list-item">
            BOOK A TRIAL
          </NavLink>
          <NavLink to="/reviews" className="Navigation-list-item">
            REVIEWS
          </NavLink>
        </div>
        <div className="Navigation-search">
          <img src={SearchIcon} alt="seach" />
          <input placeholder="What are you loooking for?"></input>
        </div>
        <div className="Navigation-options">
        <div className="Navigation-options-item">
        <NavLink to="/products" className="Navigation-list-item">
            EXPLORE
          </NavLink>
          </div>
          <div className="Navigation-options-item">
          <i className="fa fa-heart"></i>
          </div>
          <div className="Navigation-options-item">
          <i class="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="Navigation-options-item">
            <NavLink to="/signup">
            <i class="fa-solid fa-user"></i>
            </NavLink>
           
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
