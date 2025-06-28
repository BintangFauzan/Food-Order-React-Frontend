import HeaderAdmin from '../components/componentsAdmin/HeaderAdmin';

export default function AdminPage() {
    return (
        <div className='flex-screen'>
            <aside className="w-16 bg-white shadow-md flex flex-col items-center py-4 space-y-6">
                <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
                    <i className="fas fa-bars text-xl"></i>
                </button>
            </aside>
            <div className='flex-1 flex flex-col overflow-hidden'>
                <HeaderAdmin/>
                <main className='flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6'>
                    <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>

                    <nav className="text-sm text-gray-500 mb-6">
                        Home / <span className="text-gray-700 font-semibold">Dashboard</span>
                    </nav>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div
                            className="bg-blue-500 text-white p-6 rounded-lg shadow-md flex flex-col justify-between h-40">
                            <div>
                                <p className="text-4xl font-bold mb-2">150</p>
                                <p className="text-sm">New Orders</p>
                            </div>
                            <div className="flex justify-between items-end">
                                <a href="#" className="text-white text-xs font-semibold hover:underline">More info <i
                                    className="fas fa-arrow-circle-right ml-1"></i></a>
                                <i className="fas fa-shopping-cart text-opacity-50 text-6xl"></i>
                            </div>
                        </div>
                        <div
                            className="bg-green-500 text-white p-6 rounded-lg shadow-md flex flex-col justify-between h-40">
                            <div>
                                <p className="text-4xl font-bold mb-2">53%</p>
                                <p className="text-sm">Bounce Rate</p>
                            </div>
                            <div className="flex justify-between items-end">
                                <a href="#" className="text-white text-xs font-semibold hover:underline">More info <i
                                    className="fas fa-arrow-circle-right ml-1"></i></a>
                                <i className="fas fa-chart-bar text-opacity-50 text-6xl"></i>
                            </div>
                        </div>
                        <div
                            className="bg-yellow-500 text-white p-6 rounded-lg shadow-md flex flex-col justify-between h-40">
                            <div>
                                <p className="text-4xl font-bold mb-2">44</p>
                                <p className="text-sm">User Registrations</p>
                            </div>
                            <div className="flex justify-between items-end">
                                <a href="#" className="text-white text-xs font-semibold hover:underline">More info <i
                                    className="fas fa-arrow-circle-right ml-1"></i></a>
                                <i className="fas fa-user-plus text-opacity-50 text-6xl"></i>
                            </div>
                        </div>
                        <div
                            className="bg-red-500 text-white p-6 rounded-lg shadow-md flex flex-col justify-between h-40">
                            <div>
                                <p className="text-4xl font-bold mb-2">65</p>
                                <p className="text-sm">Unique Visitors</p>
                            </div>
                            <div className="flex justify-between items-end">
                                <a href="#" className="text-white text-xs font-semibold hover:underline">More info <i
                                    className="fas fa-arrow-circle-right ml-1"></i></a>
                                <i className="fas fa-chart-pie text-opacity-50 text-6xl"></i>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Grafik atau Tabel Data</h2>
                        <p className="text-gray-700">Area ini bisa diisi dengan grafik, tabel, atau komponen dashboard
                            lainnya.</p>
                    </div>
                </main>
            </div>
        </div>
    )
}
