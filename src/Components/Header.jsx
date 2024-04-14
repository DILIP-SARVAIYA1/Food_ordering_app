import { LOGO_URL } from "../Utils/Constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const header = useSelector((store) => store.header?.corsPlugin);
  return (
    <div className="flex w-full sticky top-0 justify-between px-20 py-1 items-center bg-gray-50 shadow-md z-50">
      <div className="">
        <Link to="/">
          <img className="w-14" src={LOGO_URL} alt="Swiggy logo" />
        </Link>
      </div>
      {header && (
        <div>
          <a
            className=" font-bold text-xl underline"
            href="https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf"
            target="_blank"
          >
            Please Install and enable CORS Extension for make this App work
          </a>
        </div>
      )}
      <div className="">
        <ul className="flex font-bold gap-6 ">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/contact">
            <li>Contact US</li>
          </Link>
          <Link to="/cart">
            <li className="font-bold flex">
              <svg
                className="fill-orange-600"
                id="Flat"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                width="24"
              >
                <path d="M217.06543,146.8623l13.09082-72.00048A16.00086,16.00086,0,0,0,214.41406,56H46.67676L41.793,29.13818A15.9918,15.9918,0,0,0,26.05078,16H8A8,8,0,0,0,8,32H26.05078L52.75293,178.86182a16.0028,16.0028,0,0,0,1.187,3.76489A27.99341,27.99341,0,1,0,97.293,192H166.707A27.99678,27.99678,0,1,0,192,176H68.49512l-2.90918-16h135.7373A15.99184,15.99184,0,0,0,217.06543,146.8623ZM84,204a12,12,0,1,1-12-12A12.01343,12.01343,0,0,1,84,204Zm120,0a12,12,0,1,1-12-12A12.01343,12.01343,0,0,1,204,204ZM49.58594,72H214.41406l-13.09082,72H62.67676Z" />
              </svg>
              {cartItems.length === 0 ? " Empty" : cartItems.length + " items"}
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
