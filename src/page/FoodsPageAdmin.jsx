import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import FoodsContextProvider, { FoodsContext } from "../store/foods-context-api";
import TableCellAdmin from "../components/componentsAdmin/TableCellAdmin";
import ButtonComponents from "../components/ButtonComponents"
import ModalDialog from "../components/ModalDIalog"
import { useRef, useState, useContext } from "react";
import InputLabel from "../components/InputLabel";
import HeaderAdmin from "../components/componentsAdmin/HeaderAdmin";
import FormSubmitAdmin from "../components/componentsAdmin/FormSubmitAdmin";

export default function FoodsPageAdmin() {
  const [openModalAddData, setOpenModalAddData] = useState(false)
  function handleOpenModal(){
    setOpenModalAddData(true)
  }
  function handleCloseModalForm(){
    setOpenModalAddData(false)
  }

  return(
    <FoodsContextProvider>
    <HeaderAdmin/>
      <ModalDialog isModalOpen={openModalAddData}>
       <FormSubmitAdmin onCloseModal={handleCloseModalForm}/>
      </ModalDialog>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-red-100 via-yellow-50 to-green-100">
        <div className="w-full max-w-5xl overflow-x-auto shadow-lg rounded-lg bg-white/90 p-6 border border-red-200">
         <ButtonComponents onClick={handleOpenModal}>Tambah Data</ButtonComponents>
          <Table>
            <TableHead>
              <TableRow>
              <TableHeadCell className="text-center">No</TableHeadCell>
                <TableHeadCell className="text-center">Category Id</TableHeadCell>
                <TableHeadCell className="text-center">Name</TableHeadCell>
                <TableHeadCell className="text-center">Description</TableHeadCell>
                <TableHeadCell className="text-center">Price</TableHeadCell>
                <TableHeadCell className="text-center">Image</TableHeadCell>
                <TableHeadCell className="text-center">Is Available</TableHeadCell>
                <TableHeadCell className="text-center">
                  <span className="sr-only">Edit</span>
                </TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody className="divide-y">
              <TableCellAdmin />
            </TableBody>
          </Table>
        </div>
      </div>
    </FoodsContextProvider>
  )
}