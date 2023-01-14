import { Inter, Lexend_Deca } from "@next/font/google";
import Image from "next/image";
import desktopHeader from "../../public/assets/stats-preview-card/image-header-desktop.jpg";
import mobileHeader from "../../public/assets/stats-preview-card/image-header-mobile.jpg";

const inter = Inter();
const lexendDeca = Lexend_Deca();

const StatsCard = () => {
  return (
    <div
      className={`${inter.className} flex flex-col overflow-hidden rounded-lg bg-spc-darkDesaturatedBlue lg:flex-row-reverse`}
    >
      <div className="relative lg:shrink-0">
        <Image src={mobileHeader} alt="Hero" className="lg:hidden" />
        <Image src={desktopHeader} alt="Hero" className="hidden lg:block" />

        <div className="absolute left-0 top-0 h-full w-full bg-spc-softViolet bg-opacity-50 brightness-50" />
      </div>

      <div className="flex flex-col justify-between px-8 py-9 text-center lg:px-9 lg:py-10 lg:text-left xl:p-16">
        <div className="mb-8">
          <h1 className="mb-4 text-2xl font-bold tracking-wider text-white lg:mb-6 lg:text-3xl">
            Get <span className="text-spc-softViolet">insights</span> that help
            your business grow.
          </h1>

          <p className="text-sm leading-6 tracking-wider text-spc-whiteParagraph">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience and overall efficiency.
          </p>
        </div>

        <div className="flex flex-col justify-between space-y-6 lg:flex-row lg:space-y-0 xl:w-5/6">
          <div>
            <p className="mb-1 text-xl font-bold tracking-wider text-white">
              10k+
            </p>
            <p
              className={`${lexendDeca.className} text-xs uppercase tracking-widest text-spc-whiteHeading`}
            >
              Companies
            </p>
          </div>

          <div>
            <p className="mb-1 text-xl font-bold tracking-wider text-white">
              314
            </p>
            <p
              className={`${lexendDeca.className} text-xs uppercase tracking-widest text-spc-whiteHeading`}
            >
              Templates
            </p>
          </div>

          <div>
            <p className="mb-1 text-xl font-bold tracking-wider text-white">
              12M+
            </p>
            <p
              className={`${lexendDeca.className} text-xs uppercase tracking-widest text-spc-whiteHeading`}
            >
              Queries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
