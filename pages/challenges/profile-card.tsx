import Head from "next/head";
import Image from "next/image";
import Card from "../../components/profile-card/Card";
import bgBottom from "../../public/assets/profile-card/bg-pattern-bottom.svg";
import bgTop from "../../public/assets/profile-card/bg-pattern-top.svg";
import favicon from "../../public/favicon.png";

const ProfileCard = () => {
  return (
    <>
      <Head>
        <title>Profile Card</title>
        <meta
          name="description"
          content="Frontend Mentor Profile Card Challenge"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon.src} />
      </Head>

      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-pc-darkCyan">
        <div className="z-10 w-5/6 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 2xl:w-1/6">
          <Card />
        </div>

        <Image
          src={bgTop}
          alt="Top bg"
          className="absolute -left-[45%] -top-[30%] z-0 sm:-top-[45%] md:-top-[60%] lg:-top-[75%] lg:-left-[32%] xl:-left-[21%] 2xl:-left-[16%]"
        />

        <Image
          src={bgBottom}
          alt="Bottom bg"
          className="absolute -right-[45%] -bottom-[30%] z-0 sm:-bottom-[45%] md:-bottom-[60%] lg:-bottom-[75%] lg:-right-[32%] xl:-right-[21%] 2xl:-right-[16%]"
        />
      </main>
    </>
  );
};

export default ProfileCard;
