import CTAButton from "./CTAButton";

const CTASection = () => {
  return (
    <section className="flex flex-col items-center bg-mlp-brightRed bg-mlp-mobile-simplify-pattern bg-left bg-no-repeat py-24 px-9 sm:py-20 sm:px-10 md:flex-row md:justify-between md:bg-mlp-desktop-simplify-pattern md:px-16 md:py-16 lg:py-12 lg:px-20 xl:px-32">
      <h2 className="mb-7 text-center text-4xl font-bold leading-normal text-white md:mb-0 md:w-1/2 md:text-left lg:w-2/5">
        Simplify how your team works today.
      </h2>

      <CTAButton isReversed />
    </section>
  );
};

export default CTASection;
