import { useContext, useState } from "react";
import logo from "../images/ziggylogo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  // Subscribing to store using Selector
  // (store) => store.cart.items - means what portion of the store I want to subscribe inorder to get access to it

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="header">
      <div>
        <img alt="company-logo" className="company-logo" src={logo} />
      </div>

      <div className="nav-items">
        <ul className="nav-links">
          <li className="nav-links">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li>
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-links">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-links">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="nav-links">
              Grocery
            </Link>
          </li>
          <li className="cart-container">
            <Link to="/cart" className="nav-links">
              {" "}
              <button className="cart-count">{cartItems.length}</button>🛒{" "}
            </Link>
          </li>
          <li className="nav-links">
            {" "}
            <button
              className="login-btn"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>{" "}
          </li>
          <li className="nav-links">👤 {loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
