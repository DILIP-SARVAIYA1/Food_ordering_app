import { useState, useEffect } from "react";
import { RES_CARD_DETAILS } from "../Utils/Constants";

export const useRestaurantData = (ID) => {
  const [restaurantsData, setRestaurantsData] = useState(null);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const menuData = await fetch(RES_CARD_DETAILS + ID);
    const menuJson = await menuData.json();
    setRestaurantsData(menuJson.data);
  };
  return restaurantsData;
};
