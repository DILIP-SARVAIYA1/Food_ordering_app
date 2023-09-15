import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const { title, itemCards } = data;

  const handleClick = () => {
    showItems === true ? setShowItems(!showItems) : setShowItems(!showItems);
  };

  //   console.log(props.data);
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
