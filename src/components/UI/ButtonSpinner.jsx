const ButtonSpinner = ({ color = "prim2" }) => {
  return (
    <div
      className={`border-4 border-gray-dark  border-t-${color} w-6 h-6 rounded-full animate-spin`}
    ></div>
  );
};

export default ButtonSpinner;
