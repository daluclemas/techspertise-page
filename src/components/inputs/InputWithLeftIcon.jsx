const InputWithLeftIcon = ({ children, placeholder = "Search", ...props }) => {
  return (
    <div {...props}>
      <span className="icon font-medium">{children}</span>
      <div className={`w-full h-full`}>
        <input
          type="text"
          className="py-2 px-3 outline-none w-full h-full bg-transparent text-sm"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default InputWithLeftIcon;
