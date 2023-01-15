import Head from "next/head";
import Cards from "../../components/card-columns/Cards";
import favicon from "../../public/favicon.png";

const CardColumns = () => {
  return (
    <>
      <Head>
        <title>Card Columns</title>
        <meta
          name="description"
          content="Frontend Mentor Card Columns Challenge"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon.src} />
      </Head>

      <main className="flex min-h-screen items-center justify-center">
        <div className="w-[87%] py-10 sm:w-2/3 md:w-1/2 lg:w-3/4 xl:w-2/3 2xl:w-7/12">
          <Cards />
        </div>
      </main>
    </>
  );
};

export default CardColumns;
