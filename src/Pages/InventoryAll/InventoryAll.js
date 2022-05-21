import React from 'react';

const InventoryAll = ({inventoryall}) => {
    const {name, img, description, quantity, price, supplier} = inventoryall;
    return (
        <div className='inventory'>
            <img className='w-100 img' src={img} alt="" />
            <div className='details'>
                <h4>Name: {name}</h4>
                <h6>Price: {price}</h6>
                <h6>Quantity: {quantity}</h6>
                <h6>Supplier: {supplier}</h6>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InventoryAll;