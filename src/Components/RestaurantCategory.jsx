import { setCorsPlugin } from "../Utils/headerSlice";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";

const RestaurantCategory = ({ data, showItems, setShowItems }) => {
  const { title, itemCards } = data;
  const dispatch = useDispatch();
  console.log(showItems);

  const handleClick = () => {
    setShowItems();
  };
  data === true
    ? dispatch(setCorsPlugin(true))
    : dispatch(setCorsPlugin(false));

  return (
    <div className="w-6/12 mx-auto bg-gray-50 p-4 my-4 rounded-lg shadow-md">
      <div
        className="flex justify-between cursor-pointer font-bold"
        onClick={handleClick}
      >
        <span>
          {title} ({itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItems && <ItemList items={itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
