import { useNavigate } from 'react-router';
import axios from 'axios';

export default function LogoutButton() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        const token = localStorage.getItem('authToken');
        
        try {
            await axios.post('http://localhost:8000/api/logout', {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            
            // Hapus semua data dari localStorage
            localStorage.removeItem('authToken');
            localStorage.removeItem('userRole');
            localStorage.removeItem('userData');
            
            // Redirect ke halaman login
            navigate('/', { replace: true });
        } catch (error) {
            console.error('Logout error:', error);
            // Tetap hapus data lokal meskipun ada error
            localStorage.removeItem('authToken');
            localStorage.removeItem('userRole');
            localStorage.removeItem('userData');
            navigate('/', { replace: true });
        }
    };

    return (
        <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
            Logout
        </button>
    );
}