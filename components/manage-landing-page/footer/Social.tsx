import Image from "next/image";
import { socialIcons } from ".";

const Social = () => {
  return (
    <>
      {socialIcons.map((icon, idx) => (
        <Image
          key={idx}
          src={icon}
          alt="Social icon"
          className="aspect-square w-1/12 max-w-[40px] lg:w-[14%]"
        />
      ))}
    </>
  );
};

export default Social;
