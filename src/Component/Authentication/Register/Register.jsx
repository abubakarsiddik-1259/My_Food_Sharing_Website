import community from "../../../assets/reg_epidemiology.png";
import food_donnet from "../../../assets/reg-food-donation.png";

import world from "../../../assets/reg_world.png";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { toast } from "react-toastify";
import { use, useState } from "react";
import { AuthContext } from "../../../MainComponent/Context/AuthContext";

const Register = () => {
  const { registerFun, setLoading, updateProfileFunction, signinWithGoogle } =
    use(AuthContext);
  const [show, setShow] = useState(false);
  const handleSignup = (e) => {
    e.preventDefault();

    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log("DOm", { email, password, displayName, photoURL });

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.",
      );

      setLoading(false);
      return;
    }

    registerFun(email, password)
      .then((res) => {
        console.log(res);

        updateProfileFunction(displayName, photoURL)
          .then((res) => {
            console.log(res);

            toast.success("Signup success");

            e.target.reset();
          })
          .catch((e) => {
            toast.error(e.message);
          })
          .finally(() => {
            setLoading(false);
          });
      })
      .catch((e) => {
        if (e.code === "auth/email-already-in-use") {
          toast.error("This email is already in use.");
        } else if (e.code === "auth/invalid-email") {
          toast.error("Please enter a valid email address.");
        } else if (e.code === "auth/operation-not-allowed") {
          toast.error("Email/password accounts are not enabled.");
        } else if (e.code === "auth/weak-password") {
          toast.error("Password is too weak. Use 6 or more characters.");
        } else if (e.code === "auth/too-many-requests") {
          toast.error("Too many attempts. Please try again later.");
        } else if (e.code === "auth/network-request-failed") {
          toast.error("Network error. Check your internet connection.");
        } else if (e.code === "auth/user-disabled") {
          toast.error("This user account has been disabled.");
        } else if (e.code === "auth/internal-error") {
          toast.error("Internal server error. Try again later.");
        } else if (e.code === "auth/missing-email") {
          toast.error("Please enter your email.");
        } else if (e.code === "auth/missing-password") {
          toast.error("Please enter your password.");
        } else {
          toast.error(e.message);
        }

        setLoading(false);
      });
  };

  const handleGoogleSignin = () => {
    signinWithGoogle()
      .then((res) => {
        console.log(res);
        setLoading(false);
        toast.success("Signup success");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      <div className="hidden lg:flex h-screen w-full flex-col justify-center bg-gradient-to-r from-green-700 via-emerald-600 to-lime-600 text-white px-16 xl:px-24">
        <p className="uppercase tracking-[6px]  text-sm font-semibold text-green-100">
          Welcome To
        </p>

        <h1 className="text-6xl font-extrabold leading-tight mt-3">
          PlateShare
        </h1>

        <h2 className="text-3xl font-bold mt-4 text-yellow-200">
          Share Food. Spread Smiles.
        </h2>

        <p className="mt-6 text-lg text-green-100 leading-8">
          PlateShare is a community-driven platform where people can donate
          their surplus food to those in need. Help reduce food waste and make a
          positive impact in your community.
        </p>

        <div className="mt-10 space-y-5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-3xl">
              <img src={food_donnet} className="h-8 w-8" alt="" />
            </div>

            <div>
              <h3 className="font-bold text-xl">Donate Extra Food</h3>
              <p className="text-green-100 text-sm">
                Share your unused food with nearby people
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-3xl">
              <img src={community} className="h-8 w-8" alt="" />
            </div>

            <div>
              <h3 className="font-bold text-xl">Build Community</h3>
              <p className="text-green-100 text-sm">
                Connect people through kindness and support
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-3xl">
              <img src={world} className="h-8 w-8" alt="" />
            </div>

            <div>
              <h3 className="font-bold text-xl">Reduce Food Waste</h3>
              <p className="text-green-100 text-sm">
                Together we can create a cleaner and better future
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200  p-6">
        <div className="card w-full max-w-lg bg-white shadow-2xl rounded-3xl border border-slate-200">
          <div className="card-body p-6 md:p-8">
            <div className="text-center mb-4">
              <h1 className="text-4xl font-bold text-green-600">
                Create Account
              </h1>

              <p className="text-gray-500 mt-2">
                Join PlateShare and start sharing food today
              </p>
            </div>
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="label font-semibold">Full Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="input input-bordered w-full rounded-xl"
                />
              </div>

              <div>
                <label className="label font-semibold">Email Address</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="input input-bordered w-full rounded-xl"
                />
              </div>

              <div>
                <label className="label font-semibold">Photo URL</label>
                <input
                  name="photo"
                  type="url"
                  required
                  placeholder="Enter your photo URL"
                  className="input input-bordered w-full rounded-xl"
                />
              </div>

              <div className="relative">
                <label className="label font-semibold">Password</label>

                <input
                  name="password"
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  required
                  className="input input-bordered w-full rounded-xl pr-10"
                />

                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-4 top-8 cursor-pointer text-lg text-gray-500 hover:text-green-600"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

              <button
                type="submit"
                className="btn w-full rounded-xl border-0 text-white bg-gradient-to-r from-green-600 to-lime-500 hover:scale-105 transition duration-300"
              >
                Register
              </button>

              <div className="flex items-center gap-3 my-2">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="text-gray-500 text-sm">OR</span>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              <button
                onClick={handleGoogleSignin}
                type="button"
                className="btn bg-white w-full text-black border border-gray-300 hover:bg-gray-100"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                <span className="ml-2">Login with Google</span>
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                Already have an account?
                <span className="text-green-600 font-bold cursor-pointer hover:underline ml-1">
                  Login
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
