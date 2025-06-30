import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const FoodsContext = createContext()

export default function FoodsContextProvider({children}){
    const [dataFoods, setDataFoods] = useState([])
    const [editBarangId, setEditBarangId] = useState(null)
    const [loading, setLoading] = useState(false)
    const [refreshData, setRefreshData] = useState(false)
    const [notification, setNotification] = useState(false)
    const [notificationMessage, setNotificationMessage] = useState('')


    useEffect(() => {
        const fetctData = async () => {
            setLoading(true)
            try{
                const response = await axios.get("http://localhost:8000/api/foods?page=1")
                const data = response.data.data.data
                setDataFoods(data)
            }catch (err) {
                console.log("Error fetching data", err.response ? err.response.data : err.message)
            }
            setLoading(false)
            setRefreshData(false)
        }
        fetctData()
    },[refreshData])

    const tambahDataMakanan = async (formData, onSuccess, onError) =>{
        setLoading(true)
        try{
            await axios.post("http://localhost:8000/api/foods", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Authorization": `Bearer ${localStorage.getItem("authToken")}`
                }
            })
            setNotification(true)
            setNotificationMessage("Berhasil menambah data makanan")
            setTimeout(() => setNotification(false), 3000)
            setRefreshData(true)
            if (onSuccess) onSuccess();
        }catch (err) {
            let errorMessage = "Terjadi kesalahan saat menambah data makanan";
            if (err.response){
               if(err.response.status === 422){
                const validationErrors = err.response.data.errors;
                errorMessage = Object.values(validationErrors).flat().join(', ');
            }else if(err.response.status === 403){
                errorMessage = "Akses ditolak. Anda tidak memiliki permission.";
            }else if (err.response.data && err.response.data.message) {
                errorMessage = err.response.data.message;
            }
        }else if (err.request) {
            errorMessage = "Tidak dapat terhubung ke server. Periksa koneksi internet Anda.";
        }
        setNotification(true)
        setNotificationMessage(errorMessage)
        if(onError) onError(errorMessage);
    }finally {
        setLoading(false)
    }
}

const deleteDataMakanan =  async (id, onSuccess, onError) => {
    setLoading(true)
    try{
         await axios.delete(`http://localhost:8000/api/foods/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("authToken")}`
            }
        })
        setNotification(true)
        setNotificationMessage("Berhasil menghapus data makanan")
        setTimeout(() => setNotification(false), 3000)
        setRefreshData(true)
        if (onSuccess) onSuccess();
    }catch (err) {
        let errorMessage = "Terjadi kesalahan saat menghapus data makanan";
        if (err.response){
            if(err.response.status === 403){
                errorMessage = "Akses ditolak. Anda tidak memiliki permission.";
            }else if (err.response.data && err.response.data.message) {
                errorMessage = err.response.data.message;
            }
        }else if (err.request) {
            errorMessage = "Tidak dapat terhubung ke server. Periksa koneksi internet Anda.";
        }
        setNotification(true)
        setNotificationMessage(errorMessage)
        if(onError) onError(errorMessage);
    }finally {
        setLoading(false)
    }
}

function handleEditBarang(id) {
    setEditBarangId(id);
}

const selectedDataFoodId = dataFoods.find(food => food.id === editBarangId);

    const contextValue = {
        dataFoods,
        setRefreshData,
        loading,
        notification,
        notificationMessage,
        tambahDataMakanan,
        handleEditBarang,
        editBarangId,
        selectedDataFoodId,
        deleteDataMakanan,
    }
    

    return(
        <FoodsContext.Provider value={contextValue}>
            {children}
        </FoodsContext.Provider>
    )
}