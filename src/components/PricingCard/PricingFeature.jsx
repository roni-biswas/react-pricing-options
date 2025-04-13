import { CircleCheckBig } from "lucide-react";
import React from "react";

const PricingFeature = ({ feature }) => {
  return (
    <p className="flex gap-4 mt-5 text-amber-600">
      <CircleCheckBig />
      {feature}
    </p>
  );
};

export default PricingFeature;
