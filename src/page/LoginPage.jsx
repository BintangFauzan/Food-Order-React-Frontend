import {Link, useNavigate} from "react-router";
import InputLabel from "../components/InputLabel.jsx";
import ButtonComponents from "../components/ButtonComponents.jsx";
import {useRef, useState} from "react";
import axios from "axios";
import NotificationComponent from "../components/NotificationComponent.jsx";
import ModalDialog from "../components/ModalDIalog.jsx";

export default function LoginPage() {
    const [notification, setNotification] = useState(false);
    const [loading, setLoading] = useState(false);
    const [notiticationMessage, setNotificationMessage] = useState('');
    const emailRef = useRef();
    const passwordRef = useRef(null);
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault(); // Mencegah refresh halaman jika di dalam form

        const enterEmail = emailRef.current ? emailRef.current.value : '';
        const enterPassword = passwordRef.current ? passwordRef.current.value : '';

        if (!enterEmail || !enterPassword) {
            setNotificationMessage("Email dan Password harus diisi.");
            setNotification(true);
            setTimeout(() => { setNotification(false); }, 3000);
            return;
        }

        setLoading(true); // Mulai loading

        try {
                const response = await axios.post("http://localhost:8000/api/login", {
                email: enterEmail, // Langsung gunakan nilai dari ref
                password: enterPassword, // Langsung gunakan nilai dari ref
            });

            const token = response.data.authorisation.token;
            const role = response.data.user.role;
            const dataUser = response.data.user

            localStorage.setItem('authToken', token);
            localStorage.setItem('userRole', role);
            localStorage.setItem('userData', JSON.stringify(dataUser)); // Simpan seluruh objek user

            if (role === "admin") {
                navigate("/admin");
            } else if (role === "customer") {
                navigate("/customer");
            } else {
                setNotificationMessage("Role pengguna tidak dikenal.");
                setNotification(true);
                setTimeout(() => setNotification(false), 3000);
                navigate("/");
            }

        } catch (err) {
            setNotification(true);
            const errorMessage = err.response && err.response.data && err.response.data.message
                ? err.response.data.message
                : "Terjadi kesalahan saat login. Silakan coba lagi.";
            setNotificationMessage(errorMessage);
            setTimeout(() => setNotification(false), 3000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <ModalDialog isModalOpen={loading}>.......loading</ModalDialog>
            {notification && <NotificationComponent message={notiticationMessage}/>}
            <div className="min-h-screen flex items-center justify-center bg-blue-200">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                    <div className="mb-6">
                        <InputLabel input={"Email"} id={'email'} type={'text'} placeholder={'Silahkan Isi Email'} classname={'fas fa-user mr-2'} ref={emailRef} />
                    </div>

                    <div className="mb-4">
                        <div className="relative">
                            <InputLabel input={'password'} id={'password'} type={'password'} placeholder={'Silahkan Isi Password'} classname={'fas fa-lock mr-2'} ref={passwordRef} />
                            {/*                <span*/}
                            {/*                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 cursor-pointer">*/}
                            {/*  <i className="fas fa-eye-slash"></i>*/}
                            {/*</span>*/}
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                        <ButtonComponents type={'button'} onClick={handleSubmit}>Login</ButtonComponents>
                    </div>
                </div>
            </div>
        </>
    )
}
