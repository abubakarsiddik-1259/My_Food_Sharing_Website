import { use, useState } from "react";
import { AuthContext } from "../../../MainComponent/Context/AuthContext";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const Signin = () => {
  const { signinFuntion, setLoading, signinWithGoogle } = use(AuthContext);

  const location = useLocation();
  const from = location.state || "/";
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const hendleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("DOm", { email, password });

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.",
      );
      return;
    }

    signinFuntion(email, password)
      .then((res) => {
        console.log(res);

        setLoading(false);
        toast.success("Signin success");
        navigate(from);
      })
      .catch((e) => {
        toast.error(e.message);
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
        <p className="uppercase tracking-[6px] text-sm font-semibold text-green-100">
          Welcome Back
        </p>

        <h1 className="text-6xl font-extrabold leading-tight mt-3">
          PlateShare
        </h1>

        <h2 className="text-3xl font-bold mt-4 text-yellow-200">
          Let's Continue Sharing Food
        </h2>

        <p className="mt-6 text-lg text-green-100 leading-8">
          Sign in to your account and continue helping reduce food waste and
          connect with your community.
        </p>
      </div>

      <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200 p-6">
        <div className="card w-full max-w-lg bg-white shadow-2xl rounded-3xl border border-slate-200">
          <div className="card-body p-6 md:p-8">
            <div className="text-center mb-4">
              <h1 className="text-4xl font-bold text-green-600">Sign In</h1>

              <p className="text-gray-500 mt-2">
                Welcome back! Please login to continue
              </p>
            </div>

            <form onSubmit={hendleSignup} className="space-y-4">
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

              <div className="relative">
                <label className="label font-semibold">Password</label>

                <input
                  name="password"
                  type={show ? "text" : "password"}
                  required
                  placeholder="Enter your password"
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
                Login
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
                <svg width="16" height="16" viewBox="0 0 512 512">
                  <path fill="#fff" d="M0 0H512V512H0" />
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  />
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  />
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  />
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  />
                </svg>

                <span className="ml-2">Login with Google</span>
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                Don't have an account?
                <Link
                  to="/register"
                  className="text-green-600 font-bold cursor-pointer hover:underline ml-1"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
