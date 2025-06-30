import { TableRow, TableCell } from "flowbite-react";
import { useContext, useState } from "react";
import { FoodsContext } from "../../store/foods-context-api";
import ModalDialog from "../ModalDIalog";
import ButtonComponents from "../ButtonComponents";
import InputLabel from "../InputLabel";
import { data } from "react-router";

export default function TableCellAdmin() {
  const { dataFoods, deleteDataMakanan } = useContext(FoodsContext);
  const [foodIdToDelete, setFoodIdToDelete] = useState(null);
  const [foodIdToEdit, setFoodIdToEdit] = useState(null);
  const BACKEND_URL = 'http://localhost:8000';
  const [openModalHapusData, setOpenModalHapusData] = useState(false);
  const [openModalEditData, setOpenModalEditData] = useState(false);

  const handleOpenModalEdit = (foodId) => {
    setOpenModalEditData(true);
    setFoodIdToEdit(foodId);
  }

  const selectedFoodId = dataFoods.find(food => food.id === foodIdToEdit);

  const handleOpenModalHapus = (foodId) => {
    setOpenModalHapusData(true);
    setFoodIdToDelete(foodId);
  };
  return (
    <>
    <ModalDialog isModalOpen={openModalHapusData} onClose={() => setOpenModalHapusData(false)}>
      <div className="justify-center items-center p-5 m-5">
      <h2>Are you sure you want to delete this food item?</h2>
      <div className="items-center flex justify-center space-x-4 mt-4">
        <ButtonComponents onClick={() => {
          deleteDataMakanan(foodIdToDelete);
          setOpenModalHapusData(false);
        }}>Yes, Delete</ButtonComponents>
        <ButtonComponents onClick={() => {
          setOpenModalHapusData(false);
          setFoodIdToDelete(null);
        }}>Cancel</ButtonComponents>
      </div>
      </div>
    </ModalDialog>
    <ModalDialog isModalOpen={openModalEditData}>
       <form onSubmit={() => {}}>
               <InputLabel onChange={() => {}} input='Category ID' placeholder='Masukkan Category ID' value={selectedFoodId?.category_id} />
               <InputLabel onChange={() => {}} input='Name' placeholder='Nama makanan' value={selectedFoodId?.name} />
               <InputLabel onChange={() => {}} input='Description' placeholder='Deskripsi makanan' value={selectedFoodId?.description} />
               <InputLabel onChange={() => {}} input='Price' type='number' placeholder='Harga' value={selectedFoodId?.price} />
               <InputLabel onChange={() => {}} input='Image' type='file' accept="image/*" placeholder='Pilih gambar' />

               <label className="block text-gray-700 text-sm font-bold mb-2">
                Is Available
                <select 
                  onChange={() => {}}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  name="isAvailable"
                  defaultValue="true"
                >
                  <option value="true">Available</option>
                  <option value="false">Not Available</option>
                </select>
               </label>
               
                <div className="flex justify-end mt-4">
                  <ButtonComponents 
                    type="button" 
                    // onClick={onCloseModal}
                    // disabled={loading}
                  >
                    Batal
                  </ButtonComponents>
                  <ButtonComponents 
                    type="submit" 
                    className="ml-2" 
                    // disabled={loading}
                  >
                    {/* {loading ? 'Menyimpan...' : 'Simpan'} */}
                  </ButtonComponents>
                </div>
             </form>
    </ModalDialog>
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
           <TableCell className="text-center align-middle py-4 px-2 border-b border-gray-200">
            <a href="#" className="font-medium text-blue-600 hover:underline transition-colors" onClick={() => handleOpenModalEdit(food.id)}>Edit</a>
          </TableCell>
            <a href="#" className="font-medium text-blue-600 hover:underline transition-colors" onClick={() => handleOpenModalHapus(food.id)}>Delete</a>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}