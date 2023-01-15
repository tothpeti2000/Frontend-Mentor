import Head from "next/head";
import AccordionCard from "../../components/faq-accordion/AccordionCard";
import favicon from "../../public/favicon.png";

const FAQAccordion = () => {
  return (
    <>
      <Head>
        <title>FAQ Accordion Card</title>
        <meta
          name="description"
          content="Frontend Mentor FAQ Accordion Card Challenge"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon.src} />
      </Head>

      <main className="flex min-h-screen items-center justify-center">
        <div className="w-5/6 py-6 sm:w-2/3 md:w-1/2 lg:w-5/6 xl:w-3/4">
          <AccordionCard />
        </div>
      </main>
    </>
  );
};

export default FAQAccordion;
