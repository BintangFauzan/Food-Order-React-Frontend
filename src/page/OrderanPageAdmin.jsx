import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import HeaderAdmin from "../components/componentsAdmin/HeaderAdmin";
import { useEffect, useState } from "react";
import axios from "axios";

export default function OrderanPageAdmin() {
    const [dataOrderan, setDataOrderan] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
       const fecthData = async () => {
        setLoading(true)
        try{
            const response = await axios.get("http://localhost:8000/api/orders", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`
                }
            })
            const data = response.data.data
            setDataOrderan(data)
        }catch(err) {
            console.log("Error yang terjadi", err.response ? err.response.data : err.message)
        }finally {
            setLoading(false)
        }
       }
       fecthData()
    },[])
    console.log('data orderan', dataOrderan)
  return (
    <>
      <HeaderAdmin />
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-red-100 via-yellow-50 to-green-100">
      <div className="w-full max-w-5xl overflow-x-auto shadow-lg rounded-lg bg-white/90 p-6 border border-red-200">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell className="text-center">No</TableHeadCell>
            <TableHeadCell className="text-center">user Id</TableHeadCell>
            <TableHeadCell className="text-center">Tanggal</TableHeadCell>
            <TableHeadCell className="text-center">Status</TableHeadCell>
            <TableHeadCell className="text-center">Alamat</TableHeadCell>
            <TableHeadCell className="text-center">Total</TableHeadCell>
            <TableHeadCell className="text-center">Makanan</TableHeadCell>
            <TableHeadCell className="text-center">
              <span className="sr-only">Edit</span>
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
             <TableCell className="text-center align-middle py-4 px-2 border-b border-gray-200">1</TableCell>
             <TableCell className="text-center align-middle py-4 px-2 border-b border-gray-200">id</TableCell>
             <TableCell className="text-center align-middle py-4 px-2 border-b border-gray-200">Tanggal</TableCell>
             <TableCell className="text-center align-middle py-4 px-2 border-b border-gray-200">Status</TableCell>
             <TableCell className="text-center align-middle py-4 px-2 border-b border-gray-200">Alamat</TableCell>
             <TableCell className="text-center align-middle py-4 px-2 border-b border-gray-200">Total</TableCell>
             <TableCell className="text-center align-middle py-4 px-2 border-b border-gray-200">Makanan</TableCell>
        </TableBody>

      </Table>
      </div>

      </div>
    </>
  );
}
