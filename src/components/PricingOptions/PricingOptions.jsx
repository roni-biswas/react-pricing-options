import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";

const PricingOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);

  return (
    <div>
      <h1 className="text-3xl font-semibold">Get Our Membership</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {pricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing} />
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
