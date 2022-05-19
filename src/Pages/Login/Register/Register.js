import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className='container register-form' style={{height:'60vh'}}>
            <h2 className='text-center mt-3'>Please Register</h2>
            <form>
                <input type="text" name="name" id="" placeholder='Your Name' required />
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input className='w-50 mx-auto btn my btn-info text-white mt-2' type="submit" value="Register" />
            </form>
            <p className='text-center'>Already have an account? <Link to='/login'  style={{cursor:'pointer'}} className='text-primary text-decoration-none'> Please Login !</Link></p>
        </div>
    );
};

export default Register;