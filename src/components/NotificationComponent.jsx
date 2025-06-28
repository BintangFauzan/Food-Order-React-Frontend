export default function NotificationComponent({message}) {
    return (
        <>
            <aside className='notification'>
                <p>{message}</p>
            </aside>
        </>
    )
}
