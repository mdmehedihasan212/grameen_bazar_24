import React, { useContext } from 'react';
import { ProductContext } from '../Home/Home';
import './SelectedOrder.css';
import { MdDeleteSweep } from 'react-icons/md';

const SelectedOrder = ({ selectItem }) => {
    const removeToBag = useContext(ProductContext)
    // console.log(removeToBag);
    console.log(selectItem);
    const { name } = selectItem;
    return (
        <div className="order-list">
            <p title={name}>
                {name.length > 15 ? name.slice(0, 15) + '...' : name}
            </p>
            <button className="button-delete" onClick={() => removeToBag(selectItem)}>
                <MdDeleteSweep className="delete-icon" />
            </button>
        </div>
    );
};

export default SelectedOrder;