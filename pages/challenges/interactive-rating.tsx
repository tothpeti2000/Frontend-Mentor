import { Overpass } from "@next/font/google";
import Head from "next/head";
import { useState } from "react";
import ErrorToast from "../../components/interactive-rating/ErrorToast";
import RatingForm from "../../components/interactive-rating/RatingForm";
import RatingSubmitted from "../../components/interactive-rating/RatingSubmitted";
import favicon from "../../public/favicon.png";

const overpass = Overpass();

const InteractiveRating = () => {
  const [rating, setRating] = useState<number | undefined>(undefined);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (rating: number | undefined) => {
    if (rating === undefined) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    } else {
      setRating(rating);
    }
  };

  return (
    <>
      <Head>
        <title>Interactive Rating</title>
        <meta
          name="description"
          content="Frontend Mentor Interactive Rating Challenge"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon.src} />
      </Head>

      <main
        className={`${overpass.className} flex min-h-screen items-center justify-center bg-ir-veryDarkBlue`}
      >
        <div className="w-5/6 sm:w-7/12 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/6">
          {rating ? (
            <RatingSubmitted rating={rating} />
          ) : (
            <RatingForm onSubmit={handleSubmit} />
          )}
        </div>
      </main>

      <div
        className={`${
          !rating && showError ? "opacity-100" : "opacity-0"
        } transition-opacity duration-200`}
      >
        <ErrorToast />
      </div>
    </>
  );
};

export default InteractiveRating;
