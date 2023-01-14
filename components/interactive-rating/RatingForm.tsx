import { useState } from "react";
import StarIcon from "./icons/StarIcon";
import RatingButton from "./RatingButton";

interface Props {
  onSubmit: (rating: number | undefined) => void;
}

const RatingForm = (props: Props) => {
  const [selectedRating, setSelectedRating] = useState<number | undefined>(
    undefined
  );

  const handleClick = (value: number) =>
    value === selectedRating
      ? setSelectedRating(undefined)
      : setSelectedRating(value);

  const handleSubmit = () => props.onSubmit(selectedRating);

  return (
    <div className="flex flex-col rounded-2xl bg-ir-darkBlue p-6 text-white lg:p-7">
      <div className="mb-4 w-fit rounded-full bg-gray-700 p-3 lg:mb-6">
        <StarIcon />
      </div>

      <h1 className="mb-3 text-xl font-bold lg:text-2xl">How did we do?</h1>

      <p className="text-sm text-gray-400">
        Please, let us know how we did with your support request. All feedback
        is appreciated to help us improve our offering!
      </p>

      <div className="my-6 flex justify-between">
        {Array.from({ length: 5 }, (_, n) => n + 1).map((value) => (
          <div key={value} className="w-1/6">
            <RatingButton
              value={value}
              onClick={handleClick}
              isSelected={selectedRating === value}
            />
          </div>
        ))}
      </div>

      <button
        className="rounded-full bg-ir-orange p-3 text-sm font-bold uppercase tracking-widest transition-colors hover:bg-white hover:text-ir-orange active:bg-gray-200"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default RatingForm;
