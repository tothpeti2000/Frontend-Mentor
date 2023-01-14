import { Outfit } from "@next/font/google";
import Image from "next/image";
import avatar from "../../public/assets/nft-preview-card/image-avatar.png";
import nft from "../../public/assets/nft-preview-card/image-equilibrium.jpg";
import ClockIcon from "./icons/ClockIcon";
import EthereumIcon from "./icons/EthereumIcon";
import ViewIcon from "./icons/ViewIcon";

const outfit = Outfit();

const NFTCard = () => {
  return (
    <div
      className={`${outfit.className} flex flex-col space-y-5 rounded-2xl bg-nftc-veryDarkBlueCard p-6 shadow-2xl`}
    >
      <div className="group relative">
        <Image src={nft} alt="Equilibrium" className="rounded-xl" />

        <div className="absolute left-0 top-0 flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-nftc-cyan bg-opacity-0 transition-colors group-hover:bg-opacity-40">
          <div className="opacity-0 transition-opacity group-hover:opacity-100">
            <ViewIcon />
          </div>
        </div>
      </div>

      <div>
        <div>
          <h1 className="mb-3 cursor-pointer text-xl font-semibold tracking-wide text-white transition-colors hover:text-nftc-cyan">
            Equilibrium #3429
          </h1>

          <p className="mb-4 font-light text-nftc-softBlue">
            Our Equilibrium collection promotes balance and calm.
          </p>

          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <EthereumIcon />
              <p className="text-nftc-cyan">0.041 ETH</p>
            </div>

            <div className="flex items-center space-x-2">
              <ClockIcon />
              <p className="font-light text-nftc-softBlue">3 days left</p>
            </div>
          </div>
        </div>

        <hr className="my-4 border-nftc-veryDarkBlueLine" />

        <div className="flex items-center space-x-3">
          <Image
            src={avatar}
            alt="Avatar"
            className="w-8 rounded-full border-2"
          />

          <p className="font-light text-nftc-softBlue">
            Creation of{" "}
            <span className="cursor-pointer text-white transition-colors hover:text-nftc-cyan">
              Jules Wyvern
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
