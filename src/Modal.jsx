import React from 'react'
import "./modal.css"
export const Modal = ({children, closeModal}) => {
    return (
    <div className='modal-backdrop'>
        <div className="modal" style={{border: "4px solid red", borderColor: 'red'}}>
           {children}
           <button onClick={closeModal} className="modal-btn" style={{textTransform: "capitalize"}}>close</button>
        </div>
    </div>
  )
}

export default Modal



