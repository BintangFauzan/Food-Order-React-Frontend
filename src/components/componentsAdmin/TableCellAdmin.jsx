import { TableRow, TableCell } from "flowbite-react";
import { useContext, useState, useEffect } from "react";
import { FoodsContext } from "../../store/foods-context-api";
import ModalDialog from "../ModalDIalog";
import ButtonComponents from "../ButtonComponents";
import InputLabel from "../InputLabel";

export default function TableCellAdmin() {
  const { dataFoods, deleteDataMakanan, loading, editDataMakanan, notification, notificationMessage } = useContext(FoodsContext);
  const [editDataFood, setEditDataFood] = useState({
    category_id: '',
    name: '',
    description: '',
    price: '',
    image_url: null,
    is_available: 'true'
  });
  const [foodIdToDelete, setFoodIdToDelete] = useState(null);
  const [foodIdToEdit, setFoodIdToEdit] = useState(null);
  const BACKEND_URL = 'http://localhost:8000';
  const [openModalHapusData, setOpenModalHapusData] = useState(false);
  const [openModalEditData, setOpenModalEditData] = useState(false);

  // Sinkronkan data edit saat modal edit dibuka
  useEffect(() => {
    if (openModalEditData && foodIdToEdit) {
      const selectedFood = dataFoods.find(food => food.id === foodIdToEdit);
      if (selectedFood) {
        setEditDataFood({
          category_id: selectedFood.category_id,
          name: selectedFood.name,
          description: selectedFood.description,
          price: selectedFood.price,
          image_url: null, // file input tidak bisa diisi otomatis
          is_available: selectedFood.is_available ? 'true' : 'false'
        });
      }
    }
  }, [openModalEditData, foodIdToEdit, dataFoods]);

  const handleOpenModalEdit = (foodId) => {
    setOpenModalEditData(true);
    setFoodIdToEdit(foodId);
  }

  const handleCloseModalEdit = () => {
    setOpenModalEditData(false);
    setFoodIdToEdit(null);
  }

  function handleChangeEditData(inputIdentifier, value) {
    setEditDataFood((prevData) => {
      return {
        ...prevData,
        [inputIdentifier]: value
      }
    })
  }

  const handleEditData = async (event) => {
    event.preventDefault();
    const { category_id, name, description, price, image_url, is_available } = editDataFood;

    if (!category_id || !name || !description || !price || is_available === undefined) {
      alert("Semua field harus diisi.");
      return;
    }

    let isAvailableValue;
    if (is_available === 'true' || is_available === true || is_available === 1) {
      isAvailableValue = 1;
    } else if (is_available === 'false' || is_available === false || is_available === 0) {
      isAvailableValue = 0;
    } else {
      alert("Status ketersediaan tidak valid");
      return;
    }

    const formData = new FormData();
    formData.append('category_id', category_id);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    if (image_url) {
      formData.append('image_url', image_url);
    }
    formData.append('is_available', isAvailableValue);

    editDataMakanan(foodIdToEdit, formData, () => {
      setEditDataFood({
        category_id: '',
        name: '',
        description: '',
        price: '',
        image_url: null,
        is_available: 'true'
      });
      setOpenModalEditData(false);
      setFoodIdToEdit(null);
    });
  }

  const selectedFoodId = dataFoods.find(food => food.id === foodIdToEdit);

  const handleOpenModalHapus = (foodId) => {
    setOpenModalHapusData(true);
    setFoodIdToDelete(foodId);
  };
  return (
    <>
     {notification && (
        <div className={`fixed top-4 right-4 p-4 rounded-md z-50 ${
          notificationMessage.includes('berhasil') 
            ? 'bg-green-500 text-white' 
            : 'bg-red-500 text-white'
        }`}>
          {notificationMessage}
        </div>
      )}
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
       <form onSubmit={handleEditData}>
               <InputLabel onChange={(e) => handleChangeEditData('category_id', e.target.value)} input='Category ID' placeholder='Masukkan Category ID' />
               <InputLabel onChange={(e) => handleChangeEditData('name', e.target.value)} input='Name' placeholder='Nama makanan' />
               <InputLabel onChange={(e) => handleChangeEditData('description', e.target.value)} input='Description' placeholder='Deskripsi makanan' />
               <InputLabel onChange={(e) => handleChangeEditData('price', e.target.value)} input='Price' type='number' placeholder='Harga' />
               <InputLabel onChange={(e) => handleChangeEditData('image_url', e.target.files[0])} input='Image' type='file' accept="image/*" placeholder='Pilih gambar' />

               <label className="block text-gray-700 text-sm font-bold mb-2">
                Is Available
                <select 
                  onChange={(e) => handleChangeEditData('is_available', e.target.value)}
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
                    onClick={handleCloseModalEdit}
                    disabled={loading}
                  >
                    Batal
                  </ButtonComponents>
                  <ButtonComponents 
                    type="submit" 
                    className="ml-2" 
                    disabled={loading}
                  >
                    {loading ? 'Menyimpan...' : 'Simpan'}
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