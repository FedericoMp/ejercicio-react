import React, {useState} from 'react'
import './index.css'

const ModalBtn = ({buttonText, buttonClassName, modalTitle, modalMsg}) => {

    const [modal, setModal] = useState(false)

    const handleClick = () => setModal(!modal)
    const handleClose = () => setModal(!modal)

    return (
        <>
            <button 
                className={`btn ${buttonClassName}`} 
                onClick={() => handleClick()}>
                    {buttonText}</button>
            {/* Modal */}
            {modalTitle || modalMsg ?
                <div className={`modal${modal ? ' show-modal' : ''}`}>
                    <div className="modal-content">
                        <span className="close" onClick={() => handleClose()}>&times;</span>
                        {modalTitle ? <h3>{modalTitle}</h3> : null}
                        {modalMsg ? <p>{modalMsg}</p> : null}
                    </div>
                </div> : null}
        </>
    )
}

export default ModalBtn