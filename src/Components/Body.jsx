import RestaurantCard from "./RestaurantCard";
import { MAIN_API } from "../Utils/Constants";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCorsPlugin } from "../Utils/headerSlice";

const Body = () => {
  const [resData, setResData] = useState(null);
  const dispatch = useDispatch();
  resData === null
    ? dispatch(setCorsPlugin(true))
    : dispatch(setCorsPlugin(false));
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MAIN_API);
    const json = await data.json();
    console.log(json);
    setResData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return resData === null ? (
    <ShimmerUi />
  ) : (
    <div
      className="flex flex-wrap gap-5 justify-between my-10 mx-36"
      onLoad={() => {
        window.scrollTo({ top: 0, left: 0 });
      }}
    >
      {resData?.map((res) => {
        return (
          <Link to={"Restaurants/" + res?.info?.id}>
            <RestaurantCard key={res?.info?.id} resData={res} />
          </Link>
        );
      })}
    </div>
  );
};
export default Body;
