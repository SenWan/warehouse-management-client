import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const {inventoryId} = useParams();
    const navigate = useNavigate();
    const navigateAllInventory = name => {
        navigate('/inventory/:inventoryId/allinventory')
    }
    return (
        <div className='text-center'>
            <h2 className='mb-5 text-primary'>Inventory Details</h2>
            <h4>{inventoryId}</h4>
            <Button onClick={navigateAllInventory}>Manage Inventories</Button>
        </div>
    );
};

export default InventoryDetails;