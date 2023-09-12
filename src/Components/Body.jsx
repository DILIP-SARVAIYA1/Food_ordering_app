import RestaurantCard from "./RestaurantCard";
import { MAIN_API } from "../Utils/Constants";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";

const Body = () => {
  const [resData, setResData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MAIN_API);
    const json = await data.json();
    setResData(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return resData === null ? (
    <ShimmerUi />
  ) : (
    <div className="flex flex-wrap gap-5 justify-between my-10 px-20">
      {resData?.map((res) => {
        return <RestaurantCard key={res.info.id} resData={res} />;
      })}
    </div>
  );
};
export default Body;
