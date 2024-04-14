import RestaurantCard from "./RestaurantCard";
import { MAIN_API } from "../Utils/Constants";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCorsPlugin } from "../Utils/headerSlice";

const Body = () => {
  const [resData, setResData] = useState(null);
  console.log(resData);
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
    setResData(json?.data?.cards[1]?.card?.card);
  };

  return resData === null ? (
    <ShimmerUi />
  ) : (
    <div className="bg-gray-100">
      <div className="font-bold text-2xl py-5 px-36">
        {resData?.header?.title}
      </div>
      <div
        className="flex flex-wrap gap-5 justify-between px-36"
        onLoad={() => {
          window.scrollTo({ top: 0, left: 0 });
        }}
      >
        {resData?.gridElements?.infoWithStyle?.restaurants?.map((res) => {
          return (
            <Link key={res?.info?.id} to={"Restaurants/" + res?.info?.id}>
              <RestaurantCard resData={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
