import { useState } from "react";

interface Props {
  svgPath: string;
}

const SocialIcon = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => setIsHovered((isHovered) => !isHovered);

  return (
    <div
      className="aspect-square w-1/12 max-w-[30px] cursor-pointer lg:w-[14%]"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20">
        <path fill={isHovered ? "#F25F3A" : "#FFF"} d={props.svgPath} />
      </svg>
    </div>
  );
};

export default SocialIcon;
