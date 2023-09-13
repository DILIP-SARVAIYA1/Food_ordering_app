import { useState, useEffect } from "react";
import { RES_CARD_DETAILS } from "../Utils/Constants";
import { useParams } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";

const RestaurantsMenu = () => {
  const [restaurantsData, setRestaurantsData] = useState(null);

  const { ID } = useParams();

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const menuData = await fetch(RES_CARD_DETAILS + ID);
    const menuJson = await menuData.json();
    setRestaurantsData(menuJson.data);
  };
  if (restaurantsData === null) {
    return <ShimmerUi />;
  } else {
    const { cards } =
      restaurantsData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
    const { name } = restaurantsData?.cards[0]?.card?.card?.info;
    console.log(restaurantsData?.cards[0]?.card?.card?.info);
    return (
      <div>
        <p>{name}</p>
        <p>name</p>
      </div>
    );
  }
};

export default RestaurantsMenu;
