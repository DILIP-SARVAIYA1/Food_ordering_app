import { LOGO_URL } from "../Utils/Constants";

const Header = () => {
  return (
    <div className="flex justify-between mb-3 px-20 py-1 items-center bg-gray-100 shadow-md">
      <div className="">
        <img className="w-16" src={LOGO_URL} alt="Swiggy logo" />
      </div>
      <div className="">
        <ul className="flex gap-6 ">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About US</li>
          <li className="cursor-pointer">Contact US</li>
          <button className="cursor-pointer">Sign in</button>
          <li className="cursor-pointer">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
