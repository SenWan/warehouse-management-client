import React from 'react';
import { useNavigate } from 'react-router-dom';

const InventoryAll = ({inventoryall}) => {
    const {name, img, description, quantity, price, supplier} = inventoryall;
    const navigate = useNavigate();
    const navigateInventoryDetails = (name) => {
        navigate(`/inventory/${name}`)
    }
    return (
        <div className='inventory'>
            <img className='w-100 img' src={img} alt="" />
            <div className='details'>
                <h4>Name: {name}</h4>
                <h6>Price: {price}</h6>
                <h6>Quantity: {quantity}</h6>
                <h6>Supplier: {supplier}</h6>
                <p>{description}</p>
                <button className='btn btn-primary w-100' onClick={()=> navigateInventoryDetails(`Name: ${name} Quantity: ${quantity}`)}>Update</button>
            </div>
        </div>
    );
};

export default InventoryAll;