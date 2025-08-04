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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    function openModalCheckout() {
        setIsOpenCheckout(true);
    }
    function closeModalCheckout() {
        setIsOpenCheckout(false);
    }
    function toggleMobileMenu() {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <>
          <FoodsContextProvider>
            <CheckoutSidebar isOpen={isOpenCheckout} onClose={closeModalCheckout}/>
              <header className='bg-red-900 text-white'>
                  <div className='container mx-auto flex justify-between items-center py-2 px-4 text-xs border-b border-gray-700'>
                      <RestaurantInformation/>
                      <nav className='container mx-auto flex justify-between items-center py-4 px-4'>
                          <LogoRestaurant/>
                          
                          {/* Desktop Navigation */}
                          <div className="hidden lg:flex items-center space-x-8">
                              <RestaurantSubmenu/>
                              <RestaurantContact openCheckout={openModalCheckout}/>
                              <LogoutButton/>
                          </div>
                          
                          {/* Mobile Menu Button */}
                          <button 
                            onClick={toggleMobileMenu}
                            className="lg:hidden text-white focus:outline-none"
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                          </button>
                      </nav>
                  </div>
                  
                  {/* Mobile Menu Dropdown */}
                  {isMobileMenuOpen && (
                    <div className="lg:hidden bg-red-800 px-4 py-2">
                      <div className="flex flex-col space-y-4">
                        <div className="flex flex-col space-y-2">
                          <RestaurantSubmenu mobile />
                        </div>
                        <div className="flex flex-col space-y-2">
                          <RestaurantContact mobile openCheckout={openModalCheckout}/>
                        </div>
                        <div className="pb-2">
                          <LogoutButton mobile />
                        </div>
                      </div>
                    </div>
                  )}
              </header>
              <div className='container mx-auto px-4 py-8'>
                  <MenuRestaurant/>
              </div>
          </FoodsContextProvider>
        </>
    )
}