import Head from "next/head";
import OrderCard from "../../components/order-summary/OrderCard";
import favicon from "../../public/favicon.png";

const OrderSummary = () => {
  return (
    <>
      <Head>
        <title>Order Summary</title>
        <meta
          name="description"
          content="Frontend Mentor Order Summary Challenge"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon.src} />
      </Head>

      <main className="flex min-h-screen items-center justify-center bg-os-mobile-pattern bg-cover bg-no-repeat lg:bg-os-desktop-pattern lg:bg-contain">
        <div className="w-5/6 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 2xl:w-1/6">
          <OrderCard />
        </div>
      </main>
    </>
  );
};

export default OrderSummary;
