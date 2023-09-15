import { RES_CARD_IMG } from "../Utils/Constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="text-left flex justify-between items-center border-b-2"
          >
            <div className="flex flex-col w-9/12 p-4 m-4">
              <span> {item?.card?.info?.name}</span>
              <span className="text-sm mt-4">
                <span>₹ </span>
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </span>
              <p className="text-xs text-gray-500 mt-2">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="relative">
              <img
                className="w-[130px] h-[100px] shadow-lg object-cover rounded-md"
                src={RES_CARD_IMG + item?.card?.info?.imageId}
                alt="Error"
              />
              <button className="absolute bottom-[-10px] left-4 rounded-md shadow-lg font-bold text-green-500 bg-gray-50 py-1 w-9/12">
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
