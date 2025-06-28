export default function CheckoutSidebar({ isOpen, onClose }) {
    // Sidebar selalu dirender, tapi posisi diatur dengan transform agar transisi smooth
    return (
        <>
            <div
                className={`fixed top-0 right-0 w-full md:w-96 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-semibold">Your Cart (<span id="cart-item-count">2</span>)</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>

                <div className="p-4 flex-grow overflow-y-auto">
                    {/* Item di dalam Keranjang */}
                    <div className="mb-4">
                        {/* Contoh Item 1 */}
                        <div className="flex items-center justify-between py-2 border-b last:border-b-0">
                            <div className="flex items-center">
                                <span className="text-green-600 mr-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                </span>
                                <div>
                                    <p className="font-medium">Herb Creamy Pesto</p>
                                    <p className="text-gray-500 text-sm">In Meals</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm hover:bg-gray-300">-</button>
                                <span className="font-medium">1</span>
                                <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm hover:bg-gray-300">+</button>
                            </div>
                            <p className="font-medium">$110.00</p>
                        </div>

                        {/* Contoh Item 2 (ulang div ini untuk setiap item) */}
                        <div className="flex items-center justify-between py-2 border-b last:border-b-0">
                            <div className="flex items-center">
                                <span className="text-green-600 mr-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                </span>
                                <div>
                                    <p className="font-medium">Herb Creamy Pesto</p>
                                    <p className="text-gray-500 text-sm">In Meals</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm hover:bg-gray-300">-</button>
                                <span className="font-medium">1</span>
                                <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm hover:bg-gray-300">+</button>
                            </div>
                            <p className="font-medium">$110.00</p>
                        </div>

                        {/* Tambahkan lebih banyak item di sini sesuai kebutuhan */}
                        <div className="flex items-center justify-between py-2 border-b last:border-b-0">
                            <div className="flex items-center">
                                <span className="text-green-600 mr-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                </span>
                                <div>
                                    <p className="font-medium">Herb Creamy Pesto</p>
                                    <p className="text-gray-500 text-sm">In Meals</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm hover:bg-gray-300">-</button>
                                <span className="font-medium">1</span>
                                <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm hover:bg-gray-300">+</button>
                            </div>
                            <p className="font-medium">$110.00</p>
                        </div>

                        <div className="flex items-center justify-between py-2 border-b last:border-b-0">
                            <div className="flex items-center">
                                <span className="text-green-600 mr-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                </span>
                                <div>
                                    <p className="font-medium">Herb Creamy Pesto</p>
                                    <p className="text-gray-500 text-sm">In Meals</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm hover:bg-gray-300">-</button>
                                <span className="font-medium">1</span>
                                <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm hover:bg-gray-300">+</button>
                            </div>
                            <p className="font-medium">$110.00</p>
                        </div>
                         <div className="flex items-center justify-between py-2 border-b last:border-b-0">
                            <div className="flex items-center">
                                <span className="text-green-600 mr-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                </span>
                                <div>
                                    <p className="font-medium">Herb Creamy Pesto</p>
                                    <p className="text-gray-500 text-sm">In Meals</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm hover:bg-gray-300">-</button>
                                <span className="font-medium">1</span>
                                <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm hover:bg-gray-300">+</button>
                            </div>
                            <p className="font-medium">$110.00</p>
                        </div>
                         <div className="flex items-center justify-between py-2 border-b last:border-b-0">
                            <div className="flex items-center">
                                <span className="text-green-600 mr-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                </span>
                                <div>
                                    <p className="font-medium">Herb Creamy Pesto</p>
                                    <p className="text-gray-500 text-sm">In Meals</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm hover:bg-gray-300">-</button>
                                <span className="font-medium">1</span>
                                <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm hover:bg-gray-300">+</button>
                            </div>
                            <p className="font-medium">$110.00</p>
                        </div>
                         <div className="flex items-center justify-between py-2 border-b last:border-b-0">
                            <div className="flex items-center">
                                <span className="text-green-600 mr-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                </span>
                                <div>
                                    <p className="font-medium">Herb Creamy Pesto</p>
                                    <p className="text-gray-500 text-sm">In Meals</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm hover:bg-gray-300">-</button>
                                <span className="font-medium">1</span>
                                <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm hover:bg-gray-300">+</button>
                            </div>
                            <p className="font-medium">$110.00</p>
                        </div>
                    </div>
                </div>

                {/* Bagian Footer (Subtotal dan Checkout Button) */}
                <div className="p-4 border-t">
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-gray-700">Subtotal</p>
                        <p className="font-semibold text-gray-900">$89.00</p>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-lg font-bold">Subtotal</p>
                        <p className="text-lg font-bold text-gray-900">$89.00</p>
                    </div>
                    <button className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition duration-300">Checkout</button>
                </div>
            </div>
        </>
    );
}