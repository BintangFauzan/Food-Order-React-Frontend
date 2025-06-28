export default function IconNotificationAdmin(){
    return(
        <>
            <div className="relative">
                            <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
                                <i className="fas fa-envelope text-lg"></i>
                            </button>
                            <span
                                className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">15</span>
             </div>
        </>
    )
}