import { Kumbh_Sans } from "@next/font/google";
import Image from "next/image";
import avatar from "../../public/assets/profile-card/avatar.jpg";
import bgCard from "../../public/assets/profile-card/bg-pattern-card.svg";

const kumbhSans = Kumbh_Sans();

const Card = () => {
  return (
    <div
      className={`${kumbhSans.className} flex flex-col overflow-hidden rounded-xl bg-white shadow-2xl`}
    >
      <Image src={bgCard} alt="Card background" className="w-full" />

      <div className="relative mb-5 flex flex-col pt-16 text-center">
        <Image
          src={avatar}
          alt="Avatar"
          className="absolute left-1/2 -top-12 -translate-x-1/2 rounded-full border-4"
        />

        <h1 className="text-lg font-bold">
          Victor Crest{" "}
          <span className="ml-1 font-normal text-pc-darkGrayishBlue">26</span>
        </h1>

        <h2 className="text-sm text-pc-darkGrayishBlue">London</h2>
      </div>

      <hr className="w-full border-gray-200" />

      <div className="flex w-full justify-around p-5">
        <div className="text-center">
          <p className="mb-1 text-lg font-bold tracking-wider">80K</p>
          <p className="text-[10px] tracking-widest text-pc-darkGrayishBlue">
            Followers
          </p>
        </div>

        <div className="text-center">
          <p className="mb-1 text-lg font-bold tracking-wider">803K</p>
          <p className="text-[10px] tracking-widest text-pc-darkGrayishBlue">
            Likes
          </p>
        </div>

        <div className="text-center">
          <p className="mb-1 text-lg font-bold tracking-wider">1.4K</p>
          <p className="text-[10px] tracking-widest text-pc-darkGrayishBlue">
            Photos
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
