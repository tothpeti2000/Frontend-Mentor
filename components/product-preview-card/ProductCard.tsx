import { Fraunces, Montserrat } from "@next/font/google";
import Image from "next/image";
import desktopProduct from "../../public/assets/product-preview-card/image-product-desktop.jpg";
import mobileProduct from "../../public/assets/product-preview-card/image-product-mobile.jpg";
import CartIcon from "./icons/CartIcon";

const fraunces = Fraunces();
const montserrat = Montserrat();

const ProductCard = () => (
  <div
    className={`${montserrat.className} flex flex-col overflow-hidden rounded-xl bg-white sm:flex-row`}
  >
    <Image src={mobileProduct} alt="Product" className="sm:hidden" />
    <Image
      src={desktopProduct}
      alt="Product"
      className="hidden sm:block sm:w-1/2"
    />

    <div className="flex flex-col justify-between p-5 sm:p-8">
      <p className="mb-2 text-xs font-medium tracking-extraWide text-ppc-darkGrayishBlue">
        PERFUME
      </p>

      <h1 className={`${fraunces.className} mb-3 text-3xl font-bold`}>
        Gabrielle Essence Eau De Parfum
      </h1>

      <p className="mb-4 text-sm leading-5 text-ppc-veryDarkBlue">
        A floral, soral and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL
      </p>

      <div className="mb-3 flex items-center">
        <p
          className={`${fraunces.className} mr-4 text-3xl font-bold text-ppc-darkCyan`}
        >
          $149.99
        </p>
        <p className="text-xs text-ppc-darkGrayishBlue line-through">$169.99</p>
      </div>

      <button className="flex w-full items-center justify-center rounded-lg bg-ppc-darkCyan py-4 text-xs font-semibold tracking-wider text-white transition-colors hover:bg-green-900 active:bg-ppc-veryDarkBlue">
        <CartIcon />
        <p className="ml-3">Add to Cart</p>
      </button>
    </div>
  </div>
);

export default ProductCard;
