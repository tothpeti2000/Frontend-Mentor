import { Feature } from ".";

const FeatureCard = (props: Feature) => {
  return (
    <>
      {/* Flex layout */}
      <div className="flex flex-col pl-6 sm:pl-10 md:hidden">
        <div className="mb-3 flex items-center rounded-l-full bg-mlp-veryPaleRed text-sm">
          <p className="mr-3 rounded-full bg-mlp-brightRed py-2 px-6 font-bold text-mlp-veryLightGrey">
            {props.id}
          </p>

          <h3 className="py-2 font-extrabold text-mlp-darkBlue">
            {props.title}
          </h3>
        </div>

        <p className="pr-6 text-sm leading-[27px] tracking-wide text-mlp-darkGrayishBlue sm:pr-10">
          {props.description}
        </p>
      </div>

      {/* Grid layout */}
      <div className="hidden md:row-auto md:grid md:columns-auto md:place-items-center md:justify-items-start md:gap-x-6 md:gap-y-3">
        <p className="md:rounded-full md:bg-mlp-brightRed md:py-2 md:px-6 md:font-bold md:text-mlp-veryLightGrey">
          {props.id}
        </p>

        <h3 className="md:bg-inherit md:font-extrabold md:text-mlp-darkBlue">
          {props.title}
        </h3>

        <p className="md:col-start-2 md:text-sm md:leading-6 md:tracking-wide md:text-mlp-darkGrayishBlue">
          {props.description}
        </p>
      </div>
    </>
  );
};

export default FeatureCard;
