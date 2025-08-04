import Sate from "../assets/Sate.jpg";
import { useContext, useState } from "react";
import { FoodsContext } from "../store/foods-context-api.jsx";
import ModalDialog from "./ModalDIalog.jsx";

export default function MenuRestaurant() {
  const { dataFoods, addToCart, dataCart } = useContext(FoodsContext);
  const [openModalCart, setOpenModalCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [idCartFood, setIdCartFood] = useState(null);
  console.log("data makanan: ", dataFoods);
  const BACKEND_URL = "http://localhost:8000";
  console.log('cart :',dataCart )

  function handleOpenModalCart(id) {
    setOpenModalCart(true);
    setIdCartFood(id);
    setQuantity(1); // Reset quantity setiap kali modal dibuka
  }
  const selectedFood = dataFoods.find((food) => food.id === idCartFood);

  function handleIncreaseQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }
  function handleDecreaseQuantity() {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  }
  const totalPrice = selectedFood ? selectedFood.price * quantity : 0;

  function handleSimpanDataCart() {
    if(selectedFood){
      addToCart(selectedFood, quantity)
      setOpenModalCart(false)
      setQuantity(1)
    }
  }

  return (
    <>
      <ModalDialog
        isModalOpen={openModalCart}
        onClose={() => setOpenModalCart(false)}
        key={selectedFood?.id}
      >
        <button
          onClick={() => setOpenModalCart(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-2xl font-bold rounded-full focus:outline-none"
          aria-label="Tutup"
          type="button"
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-extrabold mb-6 text-yellow-700 text-center tracking-wide drop-shadow">
            Keranjang Belanja
          </h2>
          <div className="flex flex-col md:flex-row gap-6 items-center w-full">
            <img
              src={`${BACKEND_URL}${selectedFood?.image_url}`}
              alt={selectedFood?.name}
              className="w-48 h-48 object-cover rounded-lg shadow-lg border-2 border-yellow-300"
            />
            <div className="flex-1 flex flex-col items-center md:items-start">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center md:text-left">
                {selectedFood?.name}
              </h3>
              <p className="text-gray-600 mb-4 text-center md:text-left">
                {selectedFood?.description}
              </p>
              <p className="text-yellow-700 text-xl font-bold mb-4 text-center md:text-left">
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(totalPrice)}
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                <button
                  onClick={handleDecreaseQuantity}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full text-xl transition disabled:opacity-50"
                >
                  −
                </button>
                <span className="text-2xl font-bold w-10 text-center">
                  {quantity}
                </span>
                <button
                  onClick={handleIncreaseQuantity}
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-full text-xl transition"
                >
                  +
                </button>
              </div>
              <button
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg shadow transition mt-2"
                onClick={handleSimpanDataCart} // Tambahkan handler jika ada aksi checkout
              >
                Masukan Ke Keranjang
              </button>
            </div>
          </div>
        </div>
      </ModalDialog>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Our Delicious Menu
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {dataFoods.map((foods) => (
          <div
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            key={foods.id}
          >
            <img
              src={`${BACKEND_URL}${foods.image_url}`}
              alt={foods.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {foods.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{foods.description}</p>
              <p
                className={
                  foods.is_available
                    ? "text-green-600 font-bold"
                    : "text-red-600 font-bold"
                }
              >
                {foods.is_available ? "Tersedia" : "Tidak Tersedia"}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-yellow-600">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(foods.price)}
                </span>
                <button
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-full text-sm"
                  onClick={() => handleOpenModalCart(foods.id)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
