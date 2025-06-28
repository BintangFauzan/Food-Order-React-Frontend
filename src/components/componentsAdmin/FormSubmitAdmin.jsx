import { useContext, useRef, useState } from "react"
import { FoodsContext } from "../../store/foods-context-api"
import InputLabel from "../InputLabel"
import ButtonComponents from "../ButtonComponents"

export default function FormSubmitAdmin({onCloseModal}) {
    const [tambahDataFood, setTambahDataFood] = useState({
        category_id: '',
        name: '',
        description: '',
        price: '',
        image_url: null,
        is_available: 'true'
    })
    const {tambahDataMakanan, loading, notification, notificationMessage} = useContext(FoodsContext)

    function handleChange(inputIdentifier, value) {
      setTambahDataFood((prevData) =>{
        return{
          ...prevData,
          [inputIdentifier]: value
        }
      })
    }

const handleSubmit = async (event) => {
    event.preventDefault();

     const { category_id, name, description, price, image_url, is_available } = tambahDataFood;

    // Validasi input
    if (!category_id || !name || !description || !price || !image_url || !is_available) {
      alert("Semua field harus diisi.");
      return;
    }

    // Validasi dan konversi is_available
    let isAvailableValue;
    if (is_available === 'true' || is_available === true || is_available === 1) {
      isAvailableValue = 1;
    } else if (is_available === 'false' || is_available === false || is_available === 0) {
      isAvailableValue = 0;
    } else {
      alert("Status ketersediaan tidak valid");
      return;
    }

    // Buat FormData untuk file upload
    const formData = new FormData();
    formData.append('category_id', category_id);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', parseInt(price));
    formData.append('image_url', image_url);
    formData.append('is_available', isAvailableValue); // Kirim sebagai 1 atau 0

    tambahDataMakanan(formData, () => {
     setTambahDataFood({
                category_id: '',
                name: '',
                description: '',
                price: '',
                image_url: null,
                is_available: 'true'
            });
      onCloseModal()
    })
    onCloseModal
  }
    return(
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
        <form onSubmit={handleSubmit}>
         <InputLabel onChange={(e) => handleChange('category_id', e.target.value)} input='Category ID' placeholder='Masukkan Category ID'/>
         <InputLabel onChange={(e) => handleChange('name', e.target.value)} input='Name' placeholder='Nama makanan'/>
         <InputLabel onChange={(e) => handleChange('description', e.target.value)} input='Description' placeholder='Deskripsi makanan'/>
         <InputLabel onChange={(e) => handleChange('price', e.target.value)} input='Price' type='number' placeholder='Harga'/>
         <InputLabel onChange={(e) => handleChange('image_url', e.target.files[0])} input='Image' type='file' accept="image/*" placeholder='Pilih gambar'/>

         <label className="block text-gray-700 text-sm font-bold mb-2">
          Is Available
          <select 
            onChange={(e) => handleChange('is_available', e.target.value)}
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
              onClick={onCloseModal}
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
        </>
    )
}