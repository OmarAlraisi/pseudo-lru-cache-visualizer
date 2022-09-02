import classNames from "classnames";

interface ChevronDownIconProps {
  className?: string;
  height?: number;
  width?: number;
  color?: string;
}

const ChevronDownIcon = ({
  className,
  width = 30,
  height = 30,
  color = "#9ACAA1",
}: ChevronDownIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color}
      viewBox="0 0 30 30"
      className={classNames(className)}
    >
      <path
        fill={color}
        d="M4.394 10.581L15 21.188 25.606 10.58 23.84 8.813 15 17.652l-8.839-8.84-1.767 1.768z"
      ></path>
    </svg>
  );
};

export default ChevronDownIcon;
