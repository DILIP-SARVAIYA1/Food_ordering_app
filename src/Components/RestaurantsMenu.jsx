import { useParams } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";
import { useRestaurantData } from "../Utils/useGetRestaurantData";
import RestaurantCategory from "./RestaurantCategory";
import ShimmerUiOfItemList from "./ShimmerUiOfItemList";

const RestaurantsMenu = () => {
  const { ID } = useParams();

  const restaurantsData = useRestaurantData(ID);

  if (restaurantsData === null) {
    return <ShimmerUiOfItemList />;
  } else {
    const { name, cuisines } = restaurantsData?.cards[0]?.card?.card?.info;
    const category =
      restaurantsData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) =>
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    return (
      <div className="text-center mt-5">
        <h1 className="font-bold text-2xl">{name}</h1>
        <p>{cuisines.join(", ")}</p>
        {category.map((item) => {
          return (
            <RestaurantCategory
              key={item?.card?.card?.title}
              data={item?.card?.card}
            />
          );
        })}
      </div>
    );
  }
};

export default RestaurantsMenu;
