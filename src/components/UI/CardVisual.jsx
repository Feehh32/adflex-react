import bgInnerHome from "../../assets/img/bgInnerHome.jpg";

const CardVisual = ({
  children,
  // eslint-disable-next-line no-unused-vars
  as: Component = "div",
  className = "",
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
      }}
      className={`rounded-lg shadow-lg p-4 ${className}`}
    >
      {children}
    </Component>
  );
};

export default CardVisual;
