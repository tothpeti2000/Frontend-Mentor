import { Outfit } from "@next/font/google";
import Image from "next/image";
import qrCode from "../../public/assets/qr-code/image-qr-code.png";

const outfit = Outfit();

const QRCodeCard = () => {
  return (
    <div
      className={`${outfit.className} flex flex-col rounded-3xl bg-white p-4 text-center`}
    >
      <Image src={qrCode} alt="QR Code" className="rounded-xl" />

      <div className="space-y-3 p-4">
        <h1 className="text-xl font-bold text-qrc-darkBlue">
          Improve your front-end skills by building projects
        </h1>

        <p className="text-sm text-qrc-grayishBlue">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default QRCodeCard;
