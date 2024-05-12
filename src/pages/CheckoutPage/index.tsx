import OrderSummary from "components/OrderSummary";
import PaymentCard from "components/PaymentCard";
import AuthContext from "context/authContext";
import React, { useContext } from "react";

const CheckoutPage = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <section className="lg:py-10 py-6">
        <div className="container">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
            <div className="lg:col-span-2 col-span-1">
              <div className="mb-8">
                <h4 className="text-lg font-medium text-default-800 mb-6">
                  Billing Information
                </h4>
                <div className="grid lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-2">
                    <label
                      htmlFor="userName"
                      className="block text-sm text-default-700 mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="userName"
                      className="block w-full bg-transparent dark:bg-default-50 rounded-full py-2.5 px-4 border border-default-200"
                      type="text"
                      placeholder="Name"
                      value={user?.memberNick}
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <label
                      htmlFor="userName"
                      className="block text-sm text-default-700 mb-2"
                    >
                      Phone Number{" "}
                    </label>
                    <input
                      id="userName"
                      className="block w-full bg-transparent dark:bg-default-50 rounded-full py-2.5 px-4 border border-default-200"
                      type="text"
                      placeholder="+1  123-XXX-7890"
                      value={user?.memberPhone}
                    />
                  </div>

                  <div className="lg:col-span-4">
                    <label
                      htmlFor="userName"
                      className="block text-sm text-default-700 mb-2"
                    >
                      Address{" "}
                    </label>
                    <input
                      id="userName"
                      className="block w-full bg-transparent dark:bg-default-50 rounded-full py-2.5 px-4 border border-default-200"
                      type="text"
                      placeholder="Enter your address"
                      value={user?.memberAdress}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <PaymentCard />
              </div>
            </div>
            <div className="mb-5">
              <OrderSummary />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckoutPage;
