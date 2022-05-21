import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const {inventoryId} = useParams();
    return (
        <div className='text-center'>
            <h2 className='mb-5 text-primary'>Inventory Details</h2>
            <h4>{inventoryId}</h4>
        </div>
    );
};

export default InventoryDetails;