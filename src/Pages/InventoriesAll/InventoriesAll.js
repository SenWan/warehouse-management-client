import React, { useEffect, useState } from 'react';
import InventoryAll from '../InventoryAll/InventoryAll';

const InventoriesAll = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/fruit')
        .then(res => res.json())
        .then(data => setInventories(data));
    }, [])
    return (
        <div id='inventories' className='container'>
            <h2 className='inventories-title'>Manage Inventory</h2>
            <div className='inventories-container'>
                {
                    inventories.map(inventoryall => <InventoryAll
                    key={inventoryall._id}
                    inventoryall={inventoryall}
                    ></InventoryAll>)
                }
            </div>
            
        </div>
    );
};

export default InventoriesAll;