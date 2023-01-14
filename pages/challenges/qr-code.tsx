import Head from "next/head";
import favicon from "../../public/favicon.png";

const QRCode = () => {
  return (
    <>
      <Head>
        <title>QR Code</title>
        <meta name="description" content="Frontend Mentor QR Code Challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon.src} />
      </Head>

      <main className="flex min-h-screen items-center justify-center bg-ppc-cream">
        <div className="w-5/6 md:w-2/3 lg:w-1/2 xl:w-5/12 2xl:w-1/3"></div>
      </main>
    </>
  );
};

export default QRCode;
