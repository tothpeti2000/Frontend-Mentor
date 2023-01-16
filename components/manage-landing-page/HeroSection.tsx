import Image from "next/image";
import heroIllustration from "../../public/assets/manage-landing-page/hero-illustration.svg";
import CTAButton from "./CTAButton";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-between px-6 sm:px-10 md:px-16 lg:flex-row-reverse lg:px-20 xl:px-32">
      <Image
        src={heroIllustration}
        alt="Hero"
        className="mb-3 w-full sm:w-3/4 md:w-[65%] lg:w-1/2"
      />

      <div className="flex flex-col items-center text-center md:w-3/4 lg:w-[40%] lg:items-start lg:text-left">
        <h1 className="mb-4 text-4xl font-black leading-[45px] text-mlp-darkBlue lg:text-5xl lg:leading-tight">
          Bring everyone together to build better products.
        </h1>

        <h2 className="mb-9 leading-7 text-mlp-darkGrayishBlue lg:mb-10 lg:w-3/4 lg:leading-6">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </h2>

        <div>
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
