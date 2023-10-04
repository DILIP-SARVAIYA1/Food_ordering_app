import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowItems }) => {
  const { title, itemCards } = data;

  const handleClick = () => {
    setShowItems();
  };

  return (
    <div className="w-6/12 mx-auto bg-gray-50 p-4 my-4 rounded-lg shadow-md">
      <div
        className="flex justify-between cursor-pointer font-bold"
        onClick={handleClick}
      >
        <span>
          {title} ({itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItems && <ItemList items={itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
