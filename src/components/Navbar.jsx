//hooks

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

//images
import Logo from "../../public/assets/home/desktop/audiophile.png";
import Shop from "../../public/assets/home/desktop/Combined-Shape.png";

//counter
import {
  changeAmount,
  removeAll,
  removeProduct,
} from "../features/counter/counterSlice";


import { formatPrice } from "../utils";

function Navbar() {
  const { amount, products, price } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [shop, setShop] = useState(false);
  const dollarAmount2 = formatPrice(price);

  const closeModal = () => {
    setShop(false);
    document.body.style.overflow = "auto"; 
  };

  const handleEsc = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (event.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <header className="bg-[#141414]">
      <nav className="border-b-[1px] border-slate-500 pt-8 pb-9 flex items-center justify-between h-7 w-[1110px] mx-auto">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="links flex gap-8">
          <Link to="/" className="hover:text-[#d87D4A] link">
            HOME
          </Link>
          <Link to="/headphones" className="hover:text-[#d87D4A] link">
            HEADPHONES
          </Link>
          <Link to="/speakers" className="hover:text-[#d87D4A] link">
            SPEAKERS
          </Link>
          <Link to="/earphones" className="hover:text-[#d87D4A] link">
            EARPHONES
          </Link>
        </div>
        {shop && (
          <div className="modal-overlay" onClick={handleClickOutside}>
            <div className="modal-wrapper bg-white rounded-lg shadow-lg p-6 w-11/12 sm:w-2/3 lg:w-1/2">
              {amount === 0 ? (
                <div className="modal-content text-center text-slate-400">
                  <p className="text-2xl">No products in cart</p>
                </div>
              ) : (
                <div className="modal-content">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold">
                      Cart ({products.length})
                    </h4>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => dispatch(removeAll([]))}
                    >
                      Remove all
                    </button>
                  </div>
                  <div className="overflow-x-auto shadow-md sm:rounded-lg mb-4">
                    <table className="w-full text-sm text-left text-gray-500">
                      <tbody>
                        {products.map((product) => {
                          const dollarAmount = formatPrice(product.price);
                          return (
                            <tr
                              key={product.id}
                              className="border-b hover:bg-gray-100"
                            >
                              <td className="p-4">
                                <img
                                  src={product.categoryImage.desktop}
                                  className="w-16 rounded-lg"
                                  alt="Product"
                                />
                              </td>
                              <td className="px-6 py-4">
                                <p className="font-semibold">{product.slug}</p>
                                <p className="text-gray-500">{dollarAmount}</p>
                              </td>
                              <td className="px-4 py-2">
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={() =>
                                      dispatch(
                                        changeAmount({
                                          id: product.id,
                                          type: "decrease",
                                        })
                                      )
                                    }
                                    disabled={product.amount <= 1}
                                    className="p-2 border rounded-full bg-gray-200"
                                  >
                                    -
                                  </button>
                                  <div className="text-lg font-bold">
                                    {product.amount}
                                  </div>
                                  <button
                                    onClick={() =>
                                      dispatch(
                                        changeAmount({
                                          id: product.id,
                                          type: "increase",
                                        })
                                      )
                                    }
                                    className="p-2 border rounded-full bg-gray-200"
                                  >
                                    +
                                  </button>
                                </div>
                              </td>
                              <td className="px-4 py-2">
                                <button
                                  onClick={() =>
                                    dispatch(removeProduct(product.id))
                                  }
                                  className="text-red-500 hover:text-red-700"
                                >
                                  Remove
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold">Total</h4>
                    <h4 className="text-lg font-bold">{dollarAmount2}</h4>
                  </div>
                  <Link to="/checkout">
                    <button
                      onClick={closeModal}
                      className="btn bg-orange-500 text-white hover:bg-orange-300 w-full py-2 rounded-lg text-lg"
                    >
                      Checkout
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
        <button
          type="button"
          className="relative inline-flex items-center text-sm font-medium text-white rounded-lg"
          onClick={() => {
            setShop(!shop);
            document.body.style.overflow = shop ? "auto" : "hidden"; 
          }}
        >
          <img className="w-6 h-6" src={Shop} alt="Shop" />
          {amount > 0 && (
            <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              {amount}
            </div>
          )}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
