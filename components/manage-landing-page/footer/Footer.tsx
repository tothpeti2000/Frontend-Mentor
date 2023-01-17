import CTAButton from "../CTAButton";
import Logo from "../Logo";
import Copyright from "./Copyright";
import NavLinks from "./NavLinks";
import Social from "./Social";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between bg-mlp-veryDarkBlue px-6 pt-12 pb-8 sm:px-10 md:px-16 lg:flex-row-reverse lg:px-20 lg:pb-12 xl:px-32">
      <div className="sm:max-lg:w-3/4 sm:max-lg:self-center lg:flex lg:flex-col lg:items-end lg:justify-between">
        <div className="mb-12 flex lg:mb-0">
          {/* w-full is necessary for the input because otherwise, it would exceed the flex container */}
          <input
            type="text"
            placeholder="Updates in your inbox..."
            className="mr-2 w-full rounded-full px-8 text-sm"
          />

          <CTAButton label="GO" hasShadow={false} />
        </div>

        <div className="hidden lg:block ">
          <Copyright />
        </div>
      </div>

      <div className="mb-10 flex justify-around lg:mb-0 lg:w-1/3 lg:justify-between">
        <NavLinks />
      </div>

      <div className="flex flex-col justify-between lg:flex-col-reverse">
        <div className="mb-10 flex justify-around lg:mb-0 lg:justify-between">
          <Social />
        </div>

        <div className="mb-12 self-center lg:mb-0">
          <Logo isLight />
        </div>
      </div>

      <div className="lg:hidden">
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
