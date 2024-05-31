// src/Modal.js

import './Modal.css';

const Modal = ({ show, handleClose, handleSubmit }) => {
    if (!show) return null;

    const onSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        handleSubmit({
            frontMessage: formData.get('input1'),
            backMessage: formData.get('input2')
        });
        handleClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Modal Title</h2>
                <form onSubmit={onSubmit}>
                    <div>
                        <label>
                            front text
                            <input type="text" name="input1" required />
                        </label>
                    </div>
                    <div>
                        <label>
                            back text
                            <input type="text" name="input2" required />
                        </label>
                    </div>
                    <div className="modal-actions">
                        <button type="submit">Submit</button>
                        <button type="button" onClick={handleClose}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
