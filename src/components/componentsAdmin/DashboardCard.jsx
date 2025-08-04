import { Link } from "react-router";

export default function DashboardCard({jumlah, namaCard, onClick, bgColor, iconCard, to}) {
  return (
    <>
      <div className={`${bgColor} text-white p-6 rounded-lg shadow-md flex flex-col justify-between h-40`}>
        <div>
          <p className="text-4xl font-bold mb-2">{jumlah}</p>
          <p className="text-sm">{namaCard}</p>
        </div>
        <div className="flex justify-between items-end">
         <Link to={to}>
           <a
            className="text-white text-xs font-semibold hover:underline"
            onClick={onClick}
          >
            More info <i className="fas fa-arrow-circle-right ml-1"></i>
          </a>
         </Link>
          <i className={`fas ${iconCard} text-opacity-50 text-6xl`}></i>
        </div>
      </div>
    </>
  );
}
