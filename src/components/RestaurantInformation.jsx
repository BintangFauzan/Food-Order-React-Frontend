export default function RestaurantInformation(){
    return(
        <div className='flex items-center space-x-4'>
                       <span className='text-gray-400'>
                           <i className='fas fa-map-marker-alt mr-1'/> Jalan A.Yani Pekanbaru, Indonesia
                       </span>
            <span className='text-gray-400'>
                           <i className='fas fa-clock mr-1'/> Mon -  Sat: 9.00 PM - 10.00 PM
                       </span>
            <div className='flex space-x-3'>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
    )
}