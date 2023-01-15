import { Big_Shoulders_Display, Lexend_Deca } from "@next/font/google";
import { getBorderRadiusClasses, getColor } from "./utils";

const lexendDeca = Lexend_Deca();
const bigShouldersDisplay = Big_Shoulders_Display();

export interface Props {
  idx: number;
  title: string;
  description: string;
  icon: React.ReactElement;
}

const Card = (props: Props) => {
  const radius = getBorderRadiusClasses(props.idx);
  const color = getColor(props.idx);

  return (
    <div
      className={`${lexendDeca.className} ${radius} flex flex-col items-start justify-between bg-ccs-${color} p-10 lg:p-12`}
    >
      <div className="mb-8">{props.icon}</div>

      <h1
        className={`${bigShouldersDisplay.className} mb-7 text-4xl font-bold uppercase text-ccs-veryLightGrey`}
      >
        {props.title}
      </h1>

      <p className="mb-5 text-sm leading-6 text-ccs-transparentWhite lg:mb-14">
        {props.description}
      </p>

      <button
        className={`rounded-full bg-ccs-veryLightGrey px-8 py-3 text-sm text-ccs-${color} border-2 transition-colors hover:bg-transparent hover:text-ccs-veryLightGrey`}
      >
        Learn More
      </button>
    </div>
  );
};

export default Card;
