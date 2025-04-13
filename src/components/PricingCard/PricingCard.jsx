import React from "react";
import PricingFeature from "./PricingFeature";

const PricingCard = ({ pricing }) => {
  const { name, price, description, features } = pricing;
  return (
    <div className="flex flex-col border bg-amber-600 rounded-2xl p-4">
      {/* Card header */}
      <div>
        <h1 className="text-5xl">{name}</h1>
        <h4 className="text-3xl">{price}</h4>
      </div>
      {/* Card Body */}
      <div className="bg-amber-300 p-4 rounded-md mt-2 flex-1">
        <p>{description}</p>
        {features.map((feature, index) => (
          <PricingFeature key={index} feature={feature} />
        ))}
      </div>
      <button className="btn w-full mt-4 bg-orange-800 border-none text-xl">
        Subscribe
      </button>
    </div>
  );
};

export default PricingCard;
