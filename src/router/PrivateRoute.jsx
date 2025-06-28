import axios from "axios";
import { useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router"

export default function PrivateRoute() {
    const [authStatus, setAuthStatus] = useState("loading");

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        const role = localStorage.getItem("userRole");

        if (!token || !role) {
            setAuthStatus("unauthenticated");
            return;
        }

        axios.get("http://localhost:8000/api/user/current", {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(() => setAuthStatus('authenticated'))
        .catch(() => {
            localStorage.removeItem('authToken');
            localStorage.removeItem('userRole');
            localStorage.removeItem('userData');
            setAuthStatus('unauthenticated');
        });
    }, []);

    if (authStatus === 'loading') return <div className="text-center p-10">....loading</div>
    if (authStatus === 'unauthenticated') return <Navigate to='/' replace/>

    // cek role untuk akses halaman
    const userRole = localStorage.getItem('userRole');
    const isAdminRoute = window.location.pathname.toLowerCase().startsWith('/admin');
    const isCustomerRoute = window.location.pathname.toLowerCase().startsWith('/customer');
    const isFoodsRoute = window.location.pathname.toLowerCase().startsWith('/foods');

    // Jika role admin, bisa akses halaman foods
    if (isFoodsRoute && userRole !== 'admin') {
        return <Navigate to='/admin' replace />;
    }

    if (isAdminRoute && userRole !== 'admin') {
        return <Navigate to='/customer' replace />;
    }

    if (isCustomerRoute && userRole !== 'customer') {
        return <Navigate to='/admin' replace />;
    }

    return <Outlet />
}