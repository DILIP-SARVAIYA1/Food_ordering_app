import { useContext } from "react";
import { LOGO_URL } from "../Utils/Constants";
import { Link } from "react-router-dom";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { userLogIn } = useContext(UserContext);

  // Subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex w-full top-0 justify-between mb-3 px-20 py-1 items-center bg-gray-100 shadow-md">
      <div className="">
        <Link to="/">
          <img className="w-16" src={LOGO_URL} alt="Swiggy logo" />
        </Link>
      </div>
      <div className="">
        <ul className="flex gap-6 ">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/About">
            <li>About US</li>
          </Link>
          <li>Contact US</li>
          <button>Sign in</button>
          <li className="font-bold">Cart - ({cartItems.length} items)</li>
          <li className="">{userLogIn}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
