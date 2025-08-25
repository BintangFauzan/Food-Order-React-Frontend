import {
  Dropdown,
  DropdownItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import HeaderAdmin from "../components/componentsAdmin/HeaderAdmin";
import NotificationComponent from "../components/NotificationComponent";
import { useEffect, useState } from "react";
import axios from "axios";

export default function OrderanPageAdmin() {
  const [dataOrderan, setDataOrderan] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    isError: false,
  });
  const [refreshData, setRefreshData] = useState(false)
  useEffect(() => {
    const fecthData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:8000/api/orders", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        const data = response.data.data;
        setDataOrderan(data);
      } catch (err) {
        console.log(
          "Error yang terjadi",
          err.response ? err.response.data : err.message
        );
      } finally {
        setLoading(false);
        setRefreshData(false)
      }
    };
    fecthData();
  }, [refreshData]);
  console.log("data orderan", dataOrderan);

  const handleStatus = async (orderId, newStatus) => {
    setLoading(true);
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/orders/${orderId}/status`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      //Update state dengan data orderan baru
      setDataOrderan((prevOrderan)=>
      prevOrderan.map((order) => (order.id === orderId ? response.data.data : order))
      )
      setNotification({
        show: true,
        message: "Status pesanan berhasil diubah",
        isError: false,
      });
    } catch (err) {
      console.error(
        "Gagal mengubah status",
        err.response ? err.response.data : err.message
      );
      const errorMessage = err.response?.data?.message || "Gagal mengubah data";
      setNotification({ show: true, message: errorMessage, isError: true });
    } finally {
      setLoading(false);
      setTimeout(() => setNotification((prev) => ({...prev, show: false})), 3000)
      setRefreshData(true)
    }
  };
  return (
    <>
      <HeaderAdmin />
      {notification.show && (
        <NotificationComponent
          message={notification.message}
          isError={notification.isError}
        />
      )}
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-red-100 via-yellow-50 to-green-100">
        <div className="w-full max-w-5xl overflow-x-auto shadow-lg rounded-lg bg-white/90 p-6 border border-red-200">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeadCell className="text-center">No</TableHeadCell>
                <TableHeadCell className="text-center">
                  Nama Pemesan
                </TableHeadCell>
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
              {dataOrderan.map((orderan, index) => (
                <TableRow key={orderan.id}>
                  <TableCell className="text-center align-middle py-4 px-2 border-b border-gray-200">
                    {index + 1}
                  </TableCell>
                  <TableCell className="text-center align-middle py-4 px-2 border-b border-gray-200">
                    {orderan.user.name}
                  </TableCell>
                  <TableCell className="text-center align-middle py-4 px-2 border-b border-gray-200">
                    {new Date(orderan.order_date).toLocaleString("id-ID")}
                  </TableCell>
                  <TableCell className="text-center align-middle py-4 px-2 border-b border-gray-200">
                    {orderan.status}
                  </TableCell>
                  <TableCell className="text-center align-middle py-4 px-2 border-b border-gray-200">
                    {orderan.delivery_address}
                  </TableCell>
                  <TableCell className="text-center align-middle py-4 px-2 border-b border-gray-200">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(orderan.total_amount)}
                  </TableCell>
                  <TableCell className="align-middle py-4 px-2 border-b border-gray-200">
                    {orderan.items.map((item) => (
                      <div key={item.id}>
                        {item.food.name} (x{item.quantity})
                      </div>
                    ))}
                  </TableCell>
                  <TableCell className="align-middle py-4 px-2 border-b border-gray-200">
                    <Dropdown label="Ubah status" size="sm" disabled={loading}>
                      <DropdownItem
                        onClick={() => handleStatus(orderan.id, "pending")}
                      >
                        Pending
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => handleStatus(orderan.id, "processing")}
                      >
                        Processing
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => handleStatus(orderan.id, "completed")}
                      >
                        Completed
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => handleStatus(orderan.id, "cancelled")}
                      >
                        Cancelled
                      </DropdownItem>
                    </Dropdown>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
