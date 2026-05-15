import { use } from "react";
import FoodCart from "../FoodCart/FoodCart";
import { Link } from "react-router";

const LatestFoods = ({ latestFoodsPromice }) => {
  const foods = use(latestFoodsPromice);

  return (
    <div className="my-20 ">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center py-8 mt-15 mb-10">
        <span className="text-gray-800">Featured</span>{" "}
        <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
          Food Donations
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-10">
        {foods.map((food) => (
          <FoodCart key={food._id} food={food}></FoodCart>
        ))}
      </div>

      <div className="text-center my-12">
        <Link to="/availablefoods" className="btn-btns">
          Show All Foods
        </Link>
      </div>
    </div>
  );
};

export default LatestFoods;
