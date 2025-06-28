export default function RestaurantSubmenu(){
    return(
        <>
            <a href="#" className="text-white hover:text-gray-400 relative group py-2">
                HOME
                <span
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <a href="#" className="text-white hover:text-gray-400 relative group py-2">
                ABOUT
                <span
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <a href="#" className="text-white hover:text-gray-400 relative group py-2">
                MENU
                <span
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
        </>
    )
}