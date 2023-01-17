interface Props {
  label?: string;
  isReversed?: boolean;
  hasShadow?: boolean;
}

const CTAButton = (props: Props) => {
  const displayShadow = props.hasShadow !== false && !props.isReversed;

  return (
    <button
      className={`${
        props.isReversed
          ? "bg-mlp-veryLightGrey text-mlp-brightRed hover:text-opacity-60"
          : "bg-mlp-brightRed text-mlp-veryLightGrey hover:opacity-60"
      } ${
        displayShadow ? "shadow-lg shadow-red-400" : "shadow-none"
      } rounded-full px-9 py-3 font-semibold transition lg:px-8 lg:py-3 lg:text-xs`}
    >
      {props.label || "Get Started"}
    </button>
  );
};

export default CTAButton;
