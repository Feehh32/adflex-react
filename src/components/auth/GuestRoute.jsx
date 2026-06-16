import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Spinner from "../UI/Spinner";

const GuestRoute = ({ children }) => {
  const { loading, user } = useAuth();

  if (loading) {
    return <Spinner />;
  }

  if (user) {
    return <Navigate to="/" replace />;
  }
  return children;
};

GuestRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GuestRoute;
