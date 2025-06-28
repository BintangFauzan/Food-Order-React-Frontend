import { useEffect } from "react"
import { useRef } from "react"

export default function ModalDialog({isModalOpen,children}) {
    const modalOpen = useRef(null)
    let openModal = isModalOpen

    useEffect(() => {
        if(openModal){
            modalOpen.current.showModal()
        }else{
            modalOpen.current.close()
        }
    })
    return(
        <dialog ref={modalOpen} className=' fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[30rem] bg-[#d5c7bc] rounded-xl shadow-xl z-50 overflow-auto p-6'>
        {children}
        </dialog>
    )
}