import { useLoaderData } from "react-router";
import FoodCart from "../HomePage/FoodCart/FoodCart";

const AvailableFoods = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="text-2xl text-center font-bold">
        <p className="text-center my-15 text-4xl md:text-5xl font-extrabold tracking-wide leading-tight">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Available Donated Foods
          </span>
          <br />
          <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            for Those in Need
          </span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-15  md">
          {data.map((food) => (
            <FoodCart key={food._id} food={food}></FoodCart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableFoods;
