import { Link } from "react-router";

const FoodCart = ({ food }) => {
  const {
    food_name,
    food_quantity,
    donator_name,
    pickup_location,
    food_image,
    _id,
    expire_date,
  } = food;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   pl-8 ">
      <div
        className="card w-[340px] bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#581c87]
  shadow-md hover:shadow-purple-500/30 border border-white/10
  rounded-2xl  overflow-hidden transition-all duration-300 hover:-translate-y-1 "
      >
        <figure className="p-3">
          <img
            src={food_image}
            alt={food_name}
            className="rounded-xl h-48 w-full object-cover hover:scale-105 transition duration-300"
          />
        </figure>

        <div className="card-body p-3 pt-1">
          <h2
            className="text-center text-2xl font-bold
      bg-gradient-to-r from-pink-400 via-fuchsia-300 to-violet-300
      bg-clip-text text-transparent"
          >
            {food_name}
          </h2>

          <div className="space-y-2 mt-2 text-sm">
            <div className="flex justify-between items-center bg-white/10 p-2 rounded-lg">
              <h2 className="text-pink-300 font-medium">Quantity</h2>
              <h3 className="text-white font-semibold">{food_quantity}</h3>
            </div>

            <div className="flex justify-between items-center bg-white/10 p-2 rounded-lg">
              <h2 className="text-fuchsia-300 font-medium">Donator</h2>
              <h3 className="text-white font-semibold">{donator_name}</h3>
            </div>

            <div className="flex justify-between items-center bg-white/10 p-2 rounded-lg">
              <h2 className="text-violet-300 font-medium">Location</h2>
              <h3 className="text-white font-semibold">{pickup_location}</h3>
            </div>

            <div className="flex justify-between items-center bg-white/10 p-2 rounded-lg">
              <h2 className="text-indigo-300 font-medium">Expire</h2>
              <h3 className="text-white font-semibold">{expire_date}</h3>
            </div>
          </div>

          <div className="card-actions mt-3">
            <Link
              to={`/foods-details/${_id}`}
              className="w-full text-center py-2 rounded-xl font-semibold text-white
          bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600
          hover:scale-105 transition duration-300"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
