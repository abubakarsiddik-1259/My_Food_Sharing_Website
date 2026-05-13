import { NavLink } from "react-router";

const MyLink = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-purple-700 underline" : `${className} font-semibold`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
