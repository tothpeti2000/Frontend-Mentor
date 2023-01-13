import Head from "next/head";
import ProductCard from "../../components/product-preview-card/ProductCard";
import favicon from "../../public/favicon.png";

const ProductPreviewCard = () => {
  return (
    <>
      <Head>
        <title>Product Preview Card</title>
        <meta
          name="description"
          content="Frontend Mentor Product Preview Card Challenge"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon.src} />
      </Head>

      <main className="flex min-h-screen items-center justify-center bg-ppc-cream">
        <div className="w-5/6 md:w-2/3 lg:w-1/2 xl:w-5/12 2xl:w-1/3">
          <ProductCard />
        </div>
      </main>
    </>
  );
};

export default ProductPreviewCard;
