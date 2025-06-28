export default function AvatarAdmin({ }) {
    return (
        <>
             <div className="flex items-center space-x-2">
                            <img src="https://via.placeholder.com/32" alt="User Avatar"
                                 className="w-8 h-8 rounded-full border border-gray-300"/>
                            <span className="font-medium text-gray-800 hidden md:block">Alexander Pierce</span>
            </div>
        </>
    )
}