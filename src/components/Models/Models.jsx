import React, { useState, useEffect } from "react";
import Check from '../../assets/Check.png';

const Models = ({ modelPromise, cart, addToCart, removeFromCart, clearCart, cartOpen, setCartOpen }) => {
  const [models, setModels] = useState([]);
  const [view, setView] = useState("products");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    modelPromise.then((data) => setModels(data.apis));
  }, [modelPromise]);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-gray-50 py-10 px-6 min-h-[80vh]">

      {/* Alart */}
      {showToast && (
        <div className="fixed top-5 right-5 bg-green-400 text-white px-5 py-2 rounded-lg shadow-lg z-50">
         Payment Successful!
        </div>
      )}

      {/* Top section */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Premium Digital Tools</h2>
        <p className="text-gray-500 mt-2">
          Choose from our curated collection of premium digital products.
        </p>

        <div className="mt-5 flex justify-center gap-4">
          <button
            onClick={() => {
              setView("products");
              setCartOpen(false);
            }}
            className={`px-5 py-2 rounded-full font-medium ${
              !cartOpen
                ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setCartOpen(true)}
            className={`px-5 py-2 rounded-full font-medium ${
              cartOpen
                ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

      {/* Products */}
      {!cartOpen && view === "products" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {models.map(model => {
            const isInCart = cart.some(i => i.id === model.id);

            return (
              <div key={model.id} className="relative bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition">

                <span className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full font-medium ${
                  model.tagType === "best seller"
                    ? "bg-yellow-100 text-yellow-600"
                    : model.tagType === "popular"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-green-100 text-green-600"
                }`}>
                  {model.tag}
                </span>

                <div>
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                    <img src={model.icon} alt="" className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800">{model.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{model.description}</p>

                  <p className="mt-3 text-lg font-bold text-gray-900">
                    ${model.price}
                    <span className="text-sm text-gray-400 ml-1">/{model.period}</span>
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    {model.features.map((f,i) => (
                      <li key={i} className="flex items-center gap-2">
                        <img src={Check} alt="check" className="w-4 h-4" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => addToCart(model)}
                  disabled={isInCart}
                  className={`mt-6 w-full py-2 rounded-full text-white font-medium ${
                    isInCart
                      ? "bg-green-500 cursor-not-allowed"
                      : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90"
                  }`}
                >
                  {isInCart ? "Added to Cart!" : "Buy Now"}
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* Cart*/}
      {cartOpen && (
        <div className="max-w-6xl mx-auto min-h-[60vh]">

          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-3">
                <img src={item.icon} className="w-8 h-8" alt="" />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">${item.price}</p>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-6 font-semibold text-lg">
            <span>Total:</span>
            <span>${total}</span>
          </div>

          <button
            onClick={() => {
              if (cart.length === 0) return;

              setShowToast(true);
              clearCart();

              setTimeout(() => {
                setShowToast(false);
              }, 3000);
            }}
            className="mt-6 w-full py-3 rounded-full font-medium text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
            Proceed to Checkout </button>
        </div>
      )}
    </div>
  );
};

export default Models;