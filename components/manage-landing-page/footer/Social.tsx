import { icons } from ".";
import SocialIcon from "./SocialIcon";

const Social = () => {
  return (
    <>
      {icons.map((icon) => (
        <SocialIcon key={icon.name} svgPath={icon.svgPath} />
      ))}
    </>
  );
};

export default Social;
