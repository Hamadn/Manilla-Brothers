import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[16px]",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700",
    gray_300: "bg-gray-300",
    blue_gray_100_01: "bg-blue_gray-100_01",
    red_400: "bg-red-400 text-white-A700",
  },
};
const sizes = {
  "8xl": "h-[100px] px-[33px] text-[25px]",
  md: "h-[50px] px-[34px] text-sm",
  lg: "h-[50px]",
  "3xl": "h-[60px] px-[15px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "3xl",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${
        (shape && shapes[shape]) || ""
      } ${(size && sizes[size]) || ""} ${
        (variant && variants[variant]?.[color]) || ""
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["8xl", "md", "lg", "3xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "white_A700",
    "gray_300",
    "blue_gray_100_01",
    "red_400",
  ]),
};

export { Button };
