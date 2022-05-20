import React from 'react';

const Inventory = ({inventory}) => {
    const {name, img, description, quantity, price, supplier} = inventory;
    return (
        <div className='inventory'>
            <img className='w-100' src={img} alt="" />
            <h4>{name}</h4>
            <p>{price}</p>
            <p>{quantity}</p>
            <p>{supplier}</p>
            <p><small>{description}</small></p>
        </div>
    );
};

export default Inventory;