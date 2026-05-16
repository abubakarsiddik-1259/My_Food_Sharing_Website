import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../../MainComponent/Context/AuthContext";

const AddFoods = () => {
  const { user } = useContext(AuthContext);

  const [expireDate, setExpireDate] = useState(new Date());
  const [foods, setFoods] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBid = {
      food_name: e.target.FoodName.value,
      food_quantity: e.target.FoodQuantity.value,
      pickup_location: e.target.PickupLocation.value,
      additional_notes: e.target.AdditionalNotes.value,
      food_image: e.target.FoodImage.value,

      expire_date: expireDate.toISOString().split("T")[0],

      downloads: 0,
      donator_email: user.email,
      donator_image: user.photoURL,
      donator_name: user.displayName,
      food_status: "Available",
    };

    fetch("http://localhost:5000/foods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("hiiiiii", data);

        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            width: "400px",
            title: "Your bid  has been saved",
            showConfirmButton: false,
            timer: 1500,
          });

          newBid._id = data.insertedId;

          const newfoods = [...foods, newBid];
          newfoods.sort((a, b) => b.food_quantity - a.food_quantity);
          setFoods(newfoods);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="py-10 px-4 ">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
        Share Your Food
      </h2>

      <p className="text-center text-pink-600 mt-3 mb-10 text-lg">
        Don't waste extra food — share it with someone who needs it.
      </p>

      <div className="card mx-auto w-full lg:w-[800px] bg-[#0b1020] border border-indigo-500/20 shadow-2xl rounded-3xl pb-5 ">
        <div className="card-body p-8">
          <form onSubmit={handleSubmit} className="text-left">
            <fieldset className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-indigo-200 font-medium">
                    Food Name
                  </label>
                  <input
                    name="FoodName"
                    type="text"
                    className="input w-full rounded-xl bg-[#111a33] border border-indigo-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                    placeholder="Enter Food Name"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-indigo-200 font-medium">
                    Food Quantity
                  </label>
                  <select
                    name="FoodQuantity"
                    defaultValue=""
                    required
                    className="select w-full rounded-xl bg-[#111a33] border border-indigo-500/30 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                  >
                    <option value="" disabled>
                      Select Quantity
                    </option>
                    <option value="Serves 1 people">Serves 1 people</option>
                    <option value="Serves 2 people">Serves 2 people</option>
                    <option value="Serves 3 people">Serves 3 people</option>
                    <option value="Serves 4 people">Serves 4 people</option>
                    <option value="Serves 5 people">Serves 5 people</option>
                    <option value="Serves 6 people">Serves 6 people</option>
                    <option value="Serves 7 people">Serves 7 people</option>
                    <option value="Serves 8 people">Serves 8 people</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                <div>
                  <label className="block mb-2 text-indigo-200 font-medium">
                    Pickup Location
                  </label>
                  <input
                    name="PickupLocation"
                    type="text"
                    className="input w-full rounded-xl bg-[#111a33] border border-indigo-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                    placeholder="Enter Pickup Location"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-indigo-200 font-medium">
                    Expire Date
                  </label>
                  <DatePicker
                    selected={expireDate}
                    onChange={(date) => setExpireDate(date)}
                    minDate={new Date()}
                    dateFormat="yyyy-MM-dd"
                    className="input w-full rounded-xl bg-[#111a33] border border-indigo-500/30 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-indigo-200 font-medium">
                  Additional Notes
                </label>
                <textarea
                  name="AdditionalNotes"
                  rows="3"
                  className="textarea w-full rounded-xl bg-[#111a33] border border-indigo-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                  placeholder="Enter Additional Notes"
                  required
                ></textarea>
              </div>

              <div>
                <label className="block mb-2 text-indigo-200 font-medium">
                  Food Image
                </label>
                <input
                  name="FoodImage"
                  type="url"
                  className="input w-full rounded-xl bg-[#111a33] border border-indigo-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <button className="w-full py-3 mt-6 rounded-xl font-semibold text-white btn-btns  hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                Add Food
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFoods;
