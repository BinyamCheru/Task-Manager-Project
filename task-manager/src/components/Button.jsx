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
      className={`${className} flex space-x-4 justify-center items-center text-center text-white bg-[#2563DC] px-4 py-2 rounded-md`}
    >
      <p>{text}</p>
      {children}
    </button>
  );
};
export default Button;
