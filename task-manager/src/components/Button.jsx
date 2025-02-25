const Button = ({ children, text="", onClick, className="", type="button" }) => {
  return (
    <button
      type={type}
      className={`${className} text-center text-white bg-[#2563DC] px-4 py-2 rounded-md`}
    >
      {text}
      {children}
    </button>
  );
};
export default Button;
