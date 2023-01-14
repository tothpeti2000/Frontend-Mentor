interface Props {
  value: number;
  onClick: (value: number) => void;
  isSelected: boolean;
}

const RatingButton = (props: Props) => {
  const handleClick = () => props.onClick(props.value);

  return (
    <button
      className={`${
        props.isSelected
          ? "bg-ir-mediumGrey hover:bg-ir-mediumGrey"
          : "bg-gray-700 text-gray-400 hover:bg-ir-orange"
      } aspect-square w-full rounded-full transition-colors hover:text-white active:bg-ir-mediumGrey active:text-white`}
      onClick={handleClick}
    >
      {props.value}
    </button>
  );
};

export default RatingButton;
