import { features } from ".";
import FeatureCard from "./FeatureCard";

const ManageSection = () => {
  return (
    <section className="flex flex-col items-center md:flex-row md:items-start md:px-16 lg:px-20 xl:px-32">
      <div className="mb-12 px-6 text-center sm:px-10 md:flex-1 md:px-0 md:text-left">
        <h2 className="mb-4 text-2xl font-black leading-10 text-mlp-darkBlue md:mb-6 md:w-5/6 md:text-4xl lg:w-4/5">
          What&apos;s different about Manage?
        </h2>

        <p className="leading-7 text-mlp-darkGrayishBlue md:w-2/3 lg:w-1/2 lg:text-sm lg:leading-6">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>

      <div className="md:flex-1">
        {features.map((f) => (
          <div key={f.id} className="mb-12 last:mb-0">
            <FeatureCard {...f} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ManageSection;
