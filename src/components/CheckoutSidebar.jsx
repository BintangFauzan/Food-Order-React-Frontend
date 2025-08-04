import { useContext } from "react";
import { FoodsContext } from "../store/foods-context-api";

export default function CheckoutSidebar({ isOpen, onClose }) {
  const {
    dataCart,
    handleCheckout,
    addToCart,
    decreaseCartQty,
    removeFromCart,
    notification,
    notificationMessage,
  } = useContext(FoodsContext);

  const totalItems = dataCart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = dataCart.reduce((sum, item) => sum + item.totalPrice, 0);

  const formattedTotalPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(totalPrice);

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <div
        className={`fixed top-0 right-0 w-full md:w-96 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">
            Your Cart (<span id="cart-item-count">{totalItems}</span>)
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <div className="p-4 flex-grow overflow-y-auto h-[calc(100vh-150px)]">
          {notification && (
        <div className={`fixed top-4 right-4 p-4 rounded-md z-50 ${
          notificationMessage.includes('berhasil') 
            ? 'bg-green-500 text-white' 
            : 'bg-red-500 text-white'
        }`}>
          {notificationMessage}
        </div>
      )}
          {dataCart.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            dataCart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between py-3 border-b last:border-b-0"
              >
                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-600 text-sm">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(item.price)}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => decreaseCartQty(item.id)}
                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="font-medium w-5 text-center">{item.quantity}</span>
                  <button
                    onClick={() => addToCart(item, 1)}
                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <p className="font-medium w-24 text-right">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(item.totalPrice)}
                </p>
                <button onClick={() => removeFromCart(item.id)} className="ml-2 text-red-500 hover:text-red-700">&times;</button>
              </div>
            ))
          )}
        </div>

        {/* Bagian Footer (Subtotal dan Checkout Button) */}
        {dataCart.length > 0 && (
          <div className="p-4 border-t absolute bottom-0 w-full bg-white">
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-bold">Total</p>
              <p className="text-lg font-bold text-gray-900">
                {formattedTotalPrice}
              </p>
            </div>
            <button onClick={handleCheckout} className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
