import React from 'react'

export default function PopupModal({ children, title, id, closeRef }) {
  return (
    <div className="modal fade" id={id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">{title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={closeRef}></button>
          </div>
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </div>

    
  )
}

//import React, { useImperativeHandle, forwardRef } from 'react'

//export const PopupModal = forwardRef(({ children, title, id, closeRef }, ref) => {
//  //useImperativeHandle(ref, () => ({
//  //  closeRef: () => {
//  //    console.log("Closing")
//  //  }
//  //}))
//  return (
//    <div className="modal fade" id={id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//      <div className="modal-dialog modal-dialog-centered">
//        <div className="modal-content">
//          <div className="modal-header">
//            <h5 className="modal-title" id="staticBackdropLabel">{title}</h5>
//            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={closeRef}></button>
//          </div>
//          <div className="modal-body">
//            {children}
//          </div>
//        </div>
//      </div>
//    </div>
//  )
//})
