export const Button = ({ children, className = "", to, onClick, ...props }) => {
  const handleClick = (e) => {
    if (to) {
      const element = document.getElementById(to);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (onClick) onClick(e);
  };
  return (
    <button
      onClick={handleClick}
      className={`group relative select-none font-medium text-[13px] text-[#9490ac] hover:text-white transition-all duration-300 ease-in-out cursor-pointer ${className}`}
      {...props}
    >
      <span>{children}</span>

      {/* Linha animada em baixo */}
      <span className="absolute -bottom-1 left-0 h-0.5 w-full scale-x-0 origin-left bg-purple-500 transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
    </button>
  );
};
