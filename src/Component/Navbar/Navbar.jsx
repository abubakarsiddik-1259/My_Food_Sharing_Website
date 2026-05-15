import MyLink from "../MyLink/MyLink";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
import { use } from "react";
import { AuthContext } from "../../MainComponent/Context/AuthContext";
const Navbar = () => {
  const { user, singnOutUser } = use(AuthContext);

  const handleSignOut = () => {
    singnOutUser().then().catch();
  };

  const link = (
    <>
      <li>
        <MyLink to="/">Home</MyLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <img
          src={logo}
          className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 ml-2 sm:ml-4"
          alt="logo"
        />

        <Link
          to="/"
          className="ml-2 sm:ml-3 text-lg sm:text-2xl md:text-3xl italic font-semibold"
        >
          Food <span className="text-purple-500">Share</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <Link onClick={handleSignOut} className="btn btn-btns">
            Sing Out
          </Link>
        ) : (
          <Link to="/signin" className="btn btn-btns">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
