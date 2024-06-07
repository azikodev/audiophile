import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { formatPrice } from "../utils";
import { removeAll, removeProduct } from "../features/counter/counterSlice";
import { BsCheckLg } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";

function Checkout() {
  const { amount, products, price } = useSelector((state) => state.counter);
  const [input, setInput] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("e-money");
  const dispatch = useDispatch();
  const dollarAmount2 = formatPrice(price);
  const amount2 = Number(price / 100 + 0.05 + 1.079);

  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
  };

  const handleRemoveProduct = (productId) => {
    dispatch(removeProduct(productId));
  };

  const handleConfirmOrder = () => {
    dispatch(removeAll([]));
    setInput(false);
  };

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-[#F1F1F1] flex justify-end px-20 py-20 items-start pb-20 gap-10">
        <div className="bg-white p-10 rounded-lg flex-grow">
          <form className="container form_site gap-11" id="form_site">
            <h1 className="mb-10 mt-10 text-4xl font-bold text-[#333]">
              CHECKOUT
            </h1>
            <div className="form-wrapper mb-10">
              <h3 className="text-lg font-semibold mb-4">Billing Details</h3>
              <div className="flex flex-wrap gap-5">
                <div className="flex flex-col w-full md:w-1/2 gap-4">
                  <label className="font-semibold text-gray-700" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Alexei Ward"
                    required
                    className="border rounded-lg p-3 w-full"
                  />
                </div>
                <div className="flex flex-col w-full md:w-1/3 gap-4">
                  <label
                    className="font-semibold text-gray-700"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="alexei@gmail.com"
                    required
                    className="border rounded-lg p-3 w-full"
                  />
                </div>
                <div className="flex flex-col w-full md:w-1/2 gap-4">
                  <label
                    className="font-semibold text-gray-700"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+1 202-555-0136"
                    required
                    className="border rounded-lg p-3 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="form-wrapper mb-10">
              <h3 className="text-lg font-semibold mb-4">Shipping Info</h3>
              <div className="flex flex-wrap gap-5">
                <div className="flex flex-col w-full gap-4">
                  <label
                    className="font-semibold text-gray-700"
                    htmlFor="address"
                  >
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    placeholder="1137 Williams Avenue"
                    required
                    className="border rounded-lg p-3 w-full"
                  />
                </div>
                <div className="flex flex-col w-full md:w-1/2 gap-4">
                  <label className="font-semibold text-gray-700" htmlFor="zip">
                    ZIP Code
                  </label>
                  <input
                    id="zip"
                    type="text"
                    placeholder="10001"
                    maxLength={5}
                    required
                    className="border rounded-lg p-3 w-full"
                  />
                </div>
                <div className="flex flex-col w-full md:w-1/3 gap-4">
                  <label className="font-semibold text-gray-700" htmlFor="city">
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    placeholder="New York"
                    required
                    className="border rounded-lg p-3 w-full"
                  />
                </div>
                <div className="flex flex-col w-full md:w-1/2 gap-4">
                  <label
                    className="font-semibold text-gray-700"
                    htmlFor="country"
                  >
                    Country
                  </label>
                  <input
                    id="country"
                    type="text"
                    placeholder="United States"
                    required
                    className="border rounded-lg p-3 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="form-wrapper mb-10">
              <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
              <div className="flex flex-col w-full gap-5 mb-5">
                <div className="flex items-center gap-5">
                  <input
                    type="radio"
                    id="e-money"
                    name="payment-method"
                    checked={paymentMethod === "e-money"}
                    onChange={() => handlePaymentChange("e-money")}
                    className="mr-2"
                  />
                  <label
                    htmlFor="e-money"
                    className="flex-1 text-lg font-semibold text-gray-700"
                  >
                    e-Money
                  </label>
                </div>
                <div className="flex items-center gap-5">
                  <input
                    type="radio"
                    id="cash"
                    name="payment-method"
                    checked={paymentMethod === "cash"}
                    onChange={() => handlePaymentChange("cash")}
                    className="mr-2"
                  />
                  <label
                    htmlFor="cash"
                    className="flex-1 text-lg font-semibold text-gray-700"
                  >
                    Cash on Delivery
                  </label>
                </div>
              </div>
              {paymentMethod === "e-money" && (
                <div className="flex flex-wrap gap-5">
                  <div className="flex flex-col w-full md:w-1/2 gap-4">
                    <label
                      className="font-semibold text-gray-700"
                      htmlFor="e-money-number"
                    >
                      e-Money Number
                    </label>
                    <input
                      id="e-money-number"
                      type="text"
                      placeholder="238521993"
                      maxLength={9}
                      required
                      className="border rounded-lg p-3 w-full"
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-1/3 gap-4">
                    <label
                      className="font-semibold text-gray-700"
                      htmlFor="e-money-pin"
                    >
                      e-Money PIN
                    </label>
                    <input
                      id="e-money-pin"
                      type="password"
                      placeholder="6891"
                      maxLength={4}
                      required
                      className="border rounded-lg p-3 w-full"
                    />
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>

        {products.length === 0 ? (
          <div className="bg-white p-10 rounded-lg flex-grow">
            <h1 className="text-3xl text-center mb-6">No Products</h1>
            <Link to="/">
              <button className="btn text-white bg-orange-500 hover:bg-orange-300 py-3 px-6 rounded-lg">
                BACK TO HOME
              </button>
            </Link>
          </div>
        ) : (
          <div className="bg-white p-10 rounded-lg flex-grow">
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="py-4">Product</th>
                  <th className="py-4">Price</th>
                  <th className="py-4">Quantity</th>
                  <th className="py-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  const dollarAmount = formatPrice(product.price);
                  return (
                    <tr key={product.id} className="border-b">
                      <td className="py-4 flex items-center">
                        <img
                          src={product.categoryImage.desktop}
                          className="w-16 h-16 rounded-lg"
                          alt={product.slug}
                        />
                        <div className="ml-4">
                          <p className="font-semibold text-gray-900">
                            {product.slug}
                          </p>
                          <p className="text-gray-600">{dollarAmount}</p>
                        </div>
                      </td>
                      <td className="py-4">{dollarAmount}</td>
                      <td className="py-4">{product.amount}x</td>
                      <td
                        className="py-4 text-red-600 cursor-pointer"
                        onClick={() => handleRemoveProduct(product.id)}
                      >
                        <RiDeleteBin5Line />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="mt-6">
              <div className="flex justify-between text-lg font-semibold">
                <h4>TOTAL</h4>
                <h4>{dollarAmount2}</h4>
              </div>
              <div className="flex justify-between text-lg font-semibold mt-2">
                <h4>SHIPPING</h4>
                <h4>$50</h4>
              </div>
              <div className="flex justify-between text-lg font-semibold mt-2">
                <h4>VAT (INCLUDED)</h4>
                <h4>$1,079</h4>
              </div>
              <div className="flex justify-between text-2xl font-bold mt-4">
                <h4>GRAND TOTAL</h4>
                <h4 className="text-orange-600">${amount2}</h4>
              </div>
            </div>
            <div className="mt-8 flex justify-between">
              {input ? (
                <div className="modal-wrapper fixed inset-0 flex items-center justify-center z-50">
                  <div
                    className="modal-overlay absolute inset-0 bg-black opacity-50"
                    onClick={() => setInput(false)}
                  ></div>
                  <div className="modal-content bg-white rounded-lg shadow-lg max-w-lg mx-auto p-8 z-10">
                    <div className="text-center">
                      <div className="bg-orange-500 rounded-full w-20 h-20 mx-auto mb-5 flex items-center justify-center">
                        <BsCheckLg className="w-16 h-16 text-white" />
                      </div>
                      <h1 className="text-3xl font-semibold mb-4">
                        THANK YOU FOR YOUR ORDER
                      </h1>
                      <p className="mb-6">
                        You will receive an email confirmation shortly.
                      </p>
                      <div className="flex flex-col sm:flex-row justify-between mb-6">
                        <div className="bg-[#F1F1F1] rounded-lg p-4 flex-1">
                          <div className="flex items-center mb-4">
                            <img
                              src={products[0].categoryImage.desktop}
                              className="w-16 h-16 rounded-lg mr-4"
                              alt={products[0].slug}
                            />
                            <div>
                              <p className="font-semibold">
                                {products[0].slug}
                              </p>
                              <p className="text-gray-500">{dollarAmount2}</p>
                            </div>
                          </div>
                          <p className="text-gray-600">
                            {products.length > 1
                              ? `and ${products.length - 1} other item(s)`
                              : ""}
                          </p>
                        </div>
                        <div className="bg-black text-white rounded-lg p-4 flex-1 text-center">
                          <h3 className="text-lg font-semibold mb-2">
                            GRAND TOTAL
                          </h3>
                          <p className="text-2xl font-bold">{dollarAmount2}</p>
                        </div>
                      </div>
                      <button
                        onClick={handleConfirmOrder}
                        className="btn bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-400"
                      >
                        BACK TO HOME
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setInput(!input)}
                  className="btn bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-400"
                >
                  CONTINUE & PAY
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Checkout;
