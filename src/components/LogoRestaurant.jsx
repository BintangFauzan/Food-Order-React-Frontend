import LogoRestaurant from "../assets/Logo Restoran.png";

export default function LogoRestauran (){
    return(
        <a href="#" className="flex items-center text-xl font-bold text-white uppercase tracking-widest">
            <img src={LogoRestaurant} alt="Restaurant Logo" className="h-10 w-10 mr-2"/>
            Restaurant
            <span className="text-xs ml-1 block">Template</span>
        </a>
    )
}