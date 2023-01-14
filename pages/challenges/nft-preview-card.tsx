import Head from "next/head";
import NFTCard from "../../components/nft-preview-card/NFTCard";
import favicon from "../../public/favicon.png";

const NFTPreviewCard = () => {
  return (
    <>
      <Head>
        <title>NFT Preview Card</title>
        <meta
          name="description"
          content="Frontend Mentor NFT Preview Card Challenge"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon.src} />
      </Head>

      <main className="flex min-h-screen items-center justify-center bg-nftc-veryDarkBlueMain">
        <div className="w-5/6 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 2xl:w-1/6">
          <NFTCard />
        </div>
      </main>
    </>
  );
};

export default NFTPreviewCard;
