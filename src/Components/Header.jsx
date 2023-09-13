import { LOGO_URL } from "../Utils/Constants";
import { Link } from "react-router-dom";

const Header = () => {
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
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
