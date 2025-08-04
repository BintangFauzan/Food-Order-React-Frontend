import { useNavigate } from 'react-router';
import axios from 'axios';

export default function LogoutButton({ mobile }) {
    const navigate = useNavigate();

    const handleLogout = async () => {
        const token = localStorage.getItem('authToken');
        
        try {
            await axios.post('http://localhost:8000/api/logout', {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            
            localStorage.removeItem('authToken');
            localStorage.removeItem('userRole');
            localStorage.removeItem('userData');
            
            navigate('/', { replace: true });
        } catch (error) {
            console.error('Logout error:', error);
            localStorage.removeItem('authToken');
            localStorage.removeItem('userRole');
            localStorage.removeItem('userData');
            navigate('/', { replace: true });
        }
    };

    if (mobile) {
        return (
            <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
            >
                Logout
            </button>
        );
    }

    return (
        <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
            Logout
        </button>
    );
}