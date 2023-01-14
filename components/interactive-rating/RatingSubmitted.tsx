import SubmittedIcon from "./icons/SubmittedIcon";

interface Props {
  rating: number;
}

const RatingSubmitted = (props: Props) => {
  return (
    <div className="flex flex-col items-center rounded-2xl bg-ir-darkBlue px-5 py-6 text-white lg:py-9">
      <div className="mb-6">
        <SubmittedIcon />
      </div>

      <p className="mb-6 rounded-full bg-gray-700 px-4 py-2 text-sm text-ir-orange">
        You selected {props.rating} out of 5
      </p>

      <h1 className="mb-3 text-xl font-bold tracking-wide lg:text-2xl">
        Thank you!
      </h1>

      <p className="text-center text-sm text-gray-400">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don&apos;t hesitate to get in touch!
      </p>
    </div>
  );
};

export default RatingSubmitted;
