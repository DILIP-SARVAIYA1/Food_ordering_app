import { RES_CARD_IMG } from "../Utils/Constants";

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, cuisines, sla } = props.resData.info;
  console.log(props.resData.info);
  return (
    <div className="w-[250px] p-5 shadow-lg bg-slate-100 cursor-pointer rounded-md hover:bg-slate-200">
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
