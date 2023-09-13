import { RES_CARD_IMG } from "../Utils/Constants";

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, cuisines, sla } = props.resData.info;
  return (
    <div className="w-[250px] h-full p-5 shadow-lg bg-gray-200 cursor-pointer rounded-md hover:bg-gray-300">
      <img
        className="w-full h-[180px] object-cover rounded-md"
        src={RES_CARD_IMG + cloudinaryImageId}
        alt="Restaurants image"
      />
      <p className="mt-2 font-bold">{name}</p>
      <p className="text-gray-600">{cuisines.join(", ")}</p>
      <p className="text-gray-700">{sla.deliveryTime} Minutes</p>
    </div>
  );
};

export default RestaurantCard;
