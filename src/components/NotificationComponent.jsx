export default function NotificationComponent({ message, isError = false }) {
    const bgColor = isError ? 'bg-red-500' : 'bg-green-500';

    return (
        <div className={`fixed top-4 right-4 p-4 rounded-md z-50 text-white ${bgColor}`}>
            {message}
        </div>
    );
}