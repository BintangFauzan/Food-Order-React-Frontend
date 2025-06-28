import { TableRow, TableCell } from "flowbite-react";
import { useContext } from "react";
import { FoodsContext } from "../../store/foods-context-api";

export default function TableCellAdmin() {
  const { dataFoods, handleEditBarang } = useContext(FoodsContext);
  const BACKEND_URL = 'http://localhost:8000';
  return (
    <>
      {dataFoods.map((food, idx) => (
        <TableRow
          key={food.id}
          className={`transition-colors duration-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-yellow-100`}
        >
        <TableCell className="whitespace-nowrap font-semibold text-gray-900 text-center align-middle py-4 px-2 border-b border-gray-200">
            {idx + 1}
          </TableCell>
          <TableCell className="whitespace-nowrap font-semibold text-gray-900 text-center align-middle py-4 px-2 border-b border-gray-200">
            {food.category_id}
          </TableCell>
          <TableCell className="text-center align-middle py-4 px-2 border-b border-gray-200">{food.name}</TableCell>
          <TableCell className="text-center align-middle py-4 px-2 border-b border-gray-200">{food.description}</TableCell>
          <TableCell className="text-center align-middle py-4 px-2 border-b border-gray-200">Rp {food.price.toLocaleString('id-ID')}</TableCell>
          <TableCell className="text-center align-middle py-4 px-2 border-b border-gray-200">
            <div className="flex justify-center items-center">
              <img
                src={`${BACKEND_URL}${food.image_url}`}
                alt={food.name}
                className="w-24 h-16 object-cover rounded shadow border border-gray-200"
              />
            </div>
          </TableCell>
          <TableCell className={`text-center align-middle py-4 px-2 border-b border-gray-200 font-bold ${food.is_available ? 'text-green-600' : 'text-red-500'}`}>{food.is_available ? 'Available' : 'Unavailable'}</TableCell>
          <TableCell className="text-center align-middle py-4 px-2 border-b border-gray-200">
            <a href="#" className="font-medium text-blue-600 hover:underline transition-colors" onClick={() => handleEditBarang(food.id)}>Edit</a>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}