import { Link } from "react-router";

export default function AvatarAdmin({children, to}) {
    return(
        <>
           <Link to={to}>
             <button className="text-xl font-semibold hover:text-indigo-600 focus:outline-none"
            >{children}</button>
           </Link>
        </>
    )
}