import LogoRestaurant from "../components/LogoRestaurant.jsx";
import RestaurantInformation from "../components/RestaurantInformation.jsx";
import RestaurantSubmenu from "../components/RestaurantSubmenu.jsx";
import RestaurantContact from "../components/RestaurantContact.jsx";
import LogoutButton from "../components/LogoutButton.jsx";
import FoodsContextProvider from "../store/foods-context-api.jsx";
import MenuRestaurant from "../components/MenuRestaurant.jsx";
import CheckoutSidebar from "../components/CheckoutSidebar.jsx";
import {useState} from "react";

export default function Customer () {
    const [isOpenCheckout, setIsOpenCheckout] = useState(false);

    function openModalCheckout() {
        setIsOpenCheckout(true);
    }
    function closeModalCheckout() {
        setIsOpenCheckout(false)
    }
    return (
        <>
          <FoodsContextProvider>
            {/* Sidebar checkout tetap di atas konten utama, bisa diakses dari mana saja */}
            <CheckoutSidebar isOpen={isOpenCheckout} onClose={closeModalCheckout}/>
              <header className='bg-red-900 text-white'>
              {/* <button onClick={openModalCheckout}>Checkout</button> */}
                  <div className='container mx-auto flex justify-between items-center py-2 px-4 text-xs border-b border-gray-700'>
                      <RestaurantInformation/>
                      <nav className='container mx-auto flex justify-between items-center py-4 px-4'>
                          <LogoRestaurant/>
                          <div className="hidden lg:flex items-center space-x-8">
                              <RestaurantSubmenu/>
                              {/* Button/tombol checkout bisa diakses dari submenu atau komponen lain */}
                              <RestaurantContact openCheckout={openModalCheckout}/>
                              <LogoutButton/>
                          </div>
                      </nav>
                  </div>
              </header>
              <div className='container mx-auto px-4 py-8'>
                  <MenuRestaurant/>
              </div>
          </FoodsContextProvider>
        </>
    )
}