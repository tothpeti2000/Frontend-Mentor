import Image from "next/image";
import { useState } from "react";
import closeIcon from "../../../public/assets/manage-landing-page/icon-close.svg";
import hamburgerIcon from "../../../public/assets/manage-landing-page/icon-hamburger.svg";
import logo from "../../../public/assets/manage-landing-page/logo.svg";
import CTAButton from "../CTAButton";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen((isOpen) => !isOpen);

  return (
    <nav className="fixed flex h-32 w-full items-center justify-between px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32">
      <Image src={logo} alt="Logo" />

      <MobileNav isOpen={isOpen} />
      <DesktopNav />

      {/* Margin is necessary because the logo has some bottom blank space so we need to raise the icon */}
      <button className="relative mb-2 lg:hidden" onClick={handleClick}>
        <Image
          src={hamburgerIcon}
          alt="Nav icon"
          className={`${
            isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
          } transition duration-300`}
        />

        <Image
          src={closeIcon}
          alt="Nav icon"
          className={`${
            isOpen ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
          } absolute top-0 transition duration-300`}
        />
      </button>

      <div className="hidden lg:block">
        <CTAButton />
      </div>
    </nav>
  );
};

export default Navbar;
