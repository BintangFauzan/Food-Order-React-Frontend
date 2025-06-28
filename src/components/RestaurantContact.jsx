export default function RestaurantContact({openCheckout}) {
    return(
        <>
            <a href="#" className="text-white hover:text-gray-400 relative group py-2">
                CONTACT
                <span
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <a href="tel:088271186170"
               className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-full flex items-center">
                <i className="fas fa-phone-alt mr-2"></i> 1 (234) 567 89
            </a>
            <div className="lg:hidden">
                <button id="mobile-menu-button" className="text-white focus:outline-none">
                    <i className="fas fa-bars text-2xl"></i>
                </button>
            </div>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-full flex items-center" onClick={openCheckout}>Checkout</button>
        </>
    )
}