import React from "react";
import { CreditCard, Mobile, Cash } from "lucide-react";

const PaymentMethods = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Accepted Payment Methods</h2>
        <div className="flex justify-around">
          <div className="flex items-center">
            <CreditCard size={32} className="text-waxo-primary mr-4" />
            <span className="text-gray-600">Credit/Debit Card</span>
          </div>
          <div className="flex items-center">
            <Mobile size={32} className="text-waxo-primary mr-4" />
            <span className="text-gray-600">Mobile Money</span>
          </div>
          <div className="flex items-center">
            <Cash size={32} className="text-waxo-primary mr-4" />
            <span className="text-gray-600">Cash on Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
