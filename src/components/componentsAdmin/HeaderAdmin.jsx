import LogoutButton from "../LogoutButton"
import AvatarAdmin from "./AvatarAdmin"
import IconNotificationAdmin from "./IconNotificationAdmin"
import MenuAdmin from "./MenuAdmin"

export default function HeaderAdmin() {
    return(
        <header className='bg-white shadow-sm p-4 flex justify-between items-center z-10'>
                    <div className="flex items-center space-x-4">
                        <button className="lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none">
                            <i className="fas fa-bars text-xl"></i>
                        </button>
                        <MenuAdmin to='/admin'>Home</MenuAdmin>
                        <MenuAdmin to='/foods'>Foods</MenuAdmin>
                        <LogoutButton/>
                    </div>
                    <div className='flex items-center space-x-6'>
                       <IconNotificationAdmin/>
                       <AvatarAdmin/>
                    </div>
                </header>

    )
}