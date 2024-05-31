import { useState } from 'react'
import './Card.css'
import { data } from '../../public/data';
import Modal from './Modal';

function Card() {
    const [datas, setData] = useState(data);
    const [openModal, setOpenModal] = useState(false);
    const onClose = () => {
        setOpenModal(false);
    }

    const onSubmit = (data) => {
        const newData = [...datas, data];
        setData(newData);
    }
    return (
        <>

            {datas.map((d, index) => (<div className="card" key={index}>
                <div className="card-inner">
                    <div className="card-front">
                        {d.frontMessage}
                    </div>
                    <div className="card-back">
                        {d.backMessage}
                    </div>
                </div>
            </div>))}
            <div className='card'>
                <div className="card-inner-add">
                    <div className="card-add" onClick={() => setOpenModal(true)}>
                        add a Card
                    </div>
                </div>
            </div>
            <Modal show={openModal} handleClose={onClose} handleSubmit={onSubmit} />
        </>

    )
}

export default Card