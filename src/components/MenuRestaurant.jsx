import Sate from "../assets/Sate.jpg";
import {useContext} from "react";
import {FoodsContext} from "../store/foods-context-api.jsx";

export default function MenuRestaurant(){
    const {dataFoods} = useContext(FoodsContext)
    console.log('data makanan: ', dataFoods)
    const BACKEND_URL = 'http://localhost:8000';
    return(
        <>
            <h2 className='text-3xl font-bold text-center text-gray-800 mb-10'>Our Delicious Menu</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {dataFoods.map((foods) => (
                    <div className='bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105' key={foods.id}>
                        <img
                            src={`${BACKEND_URL}${foods.image_url}`}
                            alt={foods.name}
                            className='w-full h-48 object-cover'
                        />
                        <div className='p-4'>
                            <h3 className='text-xl font-semibold text-gray-900 mb-2'>{foods.name}</h3>
                            <p className='text-gray-600 text-sm mb-4'>
                                {foods.description}
                            </p>
                            <div className='flex justify-between items-center'>
                                <span className='text-lg font-bold text-yellow-600'>Rp 25.000</span>
                                <button className='bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-full text-sm'>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}