import React from 'react';
import './SelectedOrder.css';

const SelectedOrder = ({ selectItem, removeToBag }) => {
    console.log(selectItem);
    const { name } = selectItem;
    return (
        <div>
            <p title={name}>
                {name.length > 20 ? name.slice(0, 20) : name}
                <button onClick={() => removeToBag(selectItem)}>delete</button>
            </p>
        </div>
    );
};

export default SelectedOrder;