import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
import './Inventories.css'

const Inventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/fruit')
        .then(res => res.json())
        .then(data => setInventories(data));
    }, [])
    return (
        <div id='inventories' className='container'>
            <h2 className='inventories-title'>Inventories</h2>
            <div className='inventories-container'>
                {
                    inventories.map(inventory => <Inventory
                    key={inventory._id}
                    inventory={inventory}
                    ></Inventory>)
                }
            </div>
            
        </div>
    );
};

export default Inventories;