import PropTypes from "prop-types";
import bgInnerHome from "../../assets/img/bgInnerHome.jpg";

const CardVisual = ({
  children,
  // eslint-disable-next-line no-unused-vars
  as: Component = "div",
  className = "",
  style,
  ...props
}) => {
  return (
    <Component
      {...props}
      style={{
        backgroundImage: `url(${bgInnerHome})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        ...style,
      }}
      className={`rounded-lg shadow-lg p-4 ${className}`}
    >
      {children}
    </Component>
  );
};

CardVisual.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.elementType,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default CardVisual;
