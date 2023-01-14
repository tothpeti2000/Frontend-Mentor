import { Red_Hat_Display } from "@next/font/google";
import Image from "next/image";
import hero from "../../public/assets/order-summary/hero.svg";
import MusicIcon from "./icons/MusicIcon";

const redHatDisplay = Red_Hat_Display();

const OrderCard = () => {
  return (
    <div
      className={`${redHatDisplay.className} flex flex-col overflow-hidden rounded-2xl bg-white text-center shadow-lg shadow-indigo-200`}
    >
      <Image src={hero} alt="Hero" className="w-full" />

      <div className="px-6 py-7 lg:p-9">
        <h1 className="mb-4 text-xl font-black text-os-darkBlue">
          Order Summary
        </h1>

        <p className="mb-5 text-os-darkBlue">
          You can now listen to millions of songs, audiobooks and podcasts on
          any device anywhere you like!
        </p>

        <div className="mb-6 flex items-center justify-between rounded-xl bg-os-veryPaleBlue p-4 text-sm">
          <div className="flex items-center space-x-4">
            <MusicIcon />

            <div>
              <p className="font-black text-os-darkBlue">Annual Plan</p>
              <p className="font-medium text-os-desaturatedBlue">$59.99/year</p>
            </div>
          </div>

          <p className="cursor-pointer text-xs font-black text-os-brightBlue underline transition-opacity hover:no-underline hover:opacity-60">
            Change
          </p>
        </div>

        <button className="mb-5 w-full rounded-lg bg-os-brightBlue p-3 text-sm font-bold text-white shadow-xl shadow-indigo-200 transition-opacity hover:opacity-70">
          Proceed to Payment
        </button>

        <p className="cursor-pointer text-sm font-black text-os-desaturatedBlue transition-colors hover:text-os-darkBlue">
          Cancel Order
        </p>
      </div>
    </div>
  );
};

export default OrderCard;
