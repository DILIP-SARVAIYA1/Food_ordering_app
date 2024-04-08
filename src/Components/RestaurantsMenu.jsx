import { useParams } from "react-router-dom";
import { useRestaurantData } from "../Utils/useGetRestaurantData";
import RestaurantCategory from "./RestaurantCategory";
import ShimmerUiOfItemList from "./ShimmerUiOfItemList";
import { useState } from "react";

const RestaurantsMenu = () => {
  const { ID } = useParams();
  const restaurantsData = useRestaurantData(ID);
  const [showItems, setShowItems] = useState(0);

  if (restaurantsData === null) {
    return <ShimmerUiOfItemList />;
  } else {
    const { name, cuisines } = restaurantsData?.cards[2]?.card?.card?.info;

    const category =
      restaurantsData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) =>
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    return (
      <div className="text-center mt-5">
        <h1 className="font-bold text-2xl">{name}</h1>
        <p>{cuisines.join(", ")}</p>
        {category.map((item, index) => {
          return (
            <RestaurantCategory
              key={item?.card?.card?.title}
              data={item?.card?.card}
              showItems={index === showItems}
              setShowItems={() =>
                showItems === index ? setShowItems(false) : setShowItems(index)
              }
            />
          );
        })}
      </div>
    );
  }
};

export default RestaurantsMenu;
