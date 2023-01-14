import Head from "next/head";
import QRCodeCard from "../../components/qr-code/QRCodeCard";
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

      <main className="flex min-h-screen items-center justify-center bg-qrc-lightGrey">
        <div className="w-5/6 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 2xl:w-1/6">
          <QRCodeCard />
        </div>
      </main>
    </>
  );
};

export default QRCode;
