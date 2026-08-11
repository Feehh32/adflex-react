import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children, variant = "default" }) => {
  const location = useLocation();

  const transitionClass =
    variant === "auth" ? "page-transition-auth" : "page-transition";

  return (
    <div key={location.pathname} className={transitionClass}>
      {children}
    </div>
  );
};

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["default", "auth"]),
};

export default PageTransition;
