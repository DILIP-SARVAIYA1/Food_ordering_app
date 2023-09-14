const RestaurantCategory = (props) => {
  const { title, itemCards } = props.data;
  //   console.log(props.data);
  return (
    <div>
      <div className="w-6/12 mx-auto flex justify-between bg-gray-200 p-4 font-bold my-4 cursor-pointer rounded-lg">
        <span>
          {title} ({itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      <div>Category data</div>
    </div>
  );
};

export default RestaurantCategory;
