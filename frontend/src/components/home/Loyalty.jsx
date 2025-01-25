import React from "react";
import { CheckCircle } from "lucide-react";

const Loyalty = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="w-1/2">
            <h2 className="text-2xl font-bold mb-4">Loyalty Program</h2>
            <p className="text-gray-600 mb-6">
              Join our loyalty program and earn points with every purchase.
              Redeem your points for discounts and exclusive offers.
            </p>
            <button className="bg-waxo-primary hover:bg-waxo-primary/80 text-white px-6 py-3 rounded">
              <CheckCircle size={18} className="inline-block mr-2" />
              Join Now
            </button>
          </div>
          <div className="w-1/2">
            <img
              src="/loyalty-image.png"
              alt="Loyalty Program"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loyalty;
