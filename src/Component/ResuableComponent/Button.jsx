function Button({
  children,
  onClick,
  className = "",
  type = "button",
  ...rest
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
