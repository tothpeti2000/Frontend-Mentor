interface Props {
  isReversed?: boolean;
}

const CTAButton = (props: Props) => {
  return (
    <button
      className={`${
        props.isReversed
          ? "bg-mlp-veryLightGrey text-mlp-brightRed shadow-none"
          : "bg-mlp-brightRed text-mlp-veryLightGrey shadow-lg shadow-red-400"
      } rounded-full px-10 py-4 transition hover:bg-opacity-60 lg:px-8 lg:py-3 lg:text-xs`}
    >
      Get Started
    </button>
  );
};

export default CTAButton;
