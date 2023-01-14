import Head from "next/head";
import StatsCard from "../../components/stats-preview-card/StatsCard";
import favicon from "../../public/favicon.png";

const StatsPreviewCard = () => {
  return (
    <>
      <Head>
        <title>Stats Preview Card</title>
        <meta
          name="description"
          content="Frontend Mentor Stats Preview Card Challenge"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon.src} />
      </Head>

      <main className="flex min-h-screen items-center justify-center">
        <div className="w-5/6 md:w-2/3 lg:w-1/2 xl:w-5/12 2xl:w-1/3">
          <StatsCard />
        </div>
      </main>
    </>
  );
};

export default StatsPreviewCard;
