import Head from "next/head";
import HeroSection from "../../components/social-proof-section/HeroSection";
import Testimonials from "../../components/social-proof-section/Testimonials";
import favicon from "../../public/favicon.png";
import { League_Spartan } from "@next/font/google";

const leagueSpartan = League_Spartan();

const SocialProofSection = () => {
  return (
    <>
      <Head>
        <title>Social Proof Section</title>
        <meta
          name="description"
          content="Frontend Mentor Social Proof Section Challenge"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon.src} />
      </Head>

      <main className={`${leagueSpartan.className}`}>
        <HeroSection />
        <Testimonials />
      </main>
    </>
  );
};

export default SocialProofSection;
