import DashboardCard from '../components/componentsAdmin/DashboardCard';
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
                     <DashboardCard namaCard={'Orderan masuk'} bgColor={'bg-blue-500'} jumlah={120} iconCard={'fa-shopping-cart'} to={"/orderan-masuk"}/>
                       <DashboardCard namaCard={'Bouce Rate'} bgColor={'bg-green-500'} jumlah={'12 %'} iconCard={' fa-chart-bar '}/>
                        <DashboardCard namaCard={'User Resgitration'} bgColor={'bg-yellow-500'} jumlah={20} iconCard={'fa-user-plus'}/>
                        <DashboardCard namaCard={'Unique Visitor'} bgColor={'bg-red-500'} jumlah={5} iconCard={'fa-chart-pie'}/>
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
