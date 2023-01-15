import Card, { Props } from "./Card";
import LuxuryIcon from "./icons/LuxuryIcon";
import SedanIcon from "./icons/SedanIcon";
import SUVIcon from "./icons/SUVIcon";

const cards: Props[] = [
  {
    idx: 0,
    title: "Sedans",
    description:
      "Choose a Sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    icon: <SedanIcon />,
  },
  {
    idx: 1,
    title: "SUVs",
    description:
      "Take an SUV for its spacious interior, power and versatility. Perfect for your next family vacation and off-road adventures.",
    icon: <SUVIcon />,
  },
  {
    idx: 2,
    title: "Luxury",
    description:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    icon: <LuxuryIcon />,
  },
];

const Cards = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {cards.map((c) => (
        <Card key={c.idx} {...c} />
      ))}
    </div>
  );
};

export default Cards;
