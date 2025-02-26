const Button = ({
  children,
  text = "",
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} flex space-x-4 justify-center items-center text-center text-white bg-[#2563DC] px-4  py-2 rounded-md hover:bg-blue-400 duration-200`}
    >
      <p>{text}</p>
      {children}
    </button>
  );
};
export default Button;
