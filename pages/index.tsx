import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>Frontend Mentor Challenges</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ul>
          <li>
            <Link href="/challenges/product-preview-card">
              Product Preview Card
            </Link>
          </li>

          <li>
            <Link href="/challenges/interactive-rating">
              Interactive Rating
            </Link>
          </li>

          <li>
            <Link href="/challenges/qr-code">QR Code</Link>
          </li>

          <li>
            <Link href="/challenges/nft-preview-card">NFT Preview Card</Link>
          </li>

          <li>
            <Link href="/challenges/order-summary">Order Summary</Link>
          </li>

          <li>
            <Link href="/challenges/stats-preview-card">
              Stats Preview Card
            </Link>
          </li>

          <li>
            <Link href="/challenges/card-columns">Card Columns</Link>
          </li>

          <li>
            <Link href="/challenges/profile-card">Profile Card</Link>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Home;
