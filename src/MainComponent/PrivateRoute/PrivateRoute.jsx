import { useContext } from "react";

import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/signin"></Navigate>;
};

export default PrivateRouter;
