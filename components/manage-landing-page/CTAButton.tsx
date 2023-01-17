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
          ? "bg-mlp-veryLightGrey text-mlp-brightRed"
          : "bg-mlp-brightRed text-mlp-veryLightGrey"
      } ${
        displayShadow ? "shadow-lg shadow-red-400" : "shadow-none"
      } rounded-full px-9 py-3 font-semibold transition hover:bg-opacity-60 lg:px-8 lg:py-3 lg:text-xs`}
    >
      {props.label || "Get Started"}
    </button>
  );
};

export default CTAButton;
