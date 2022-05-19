import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container' style={{height:'60vh'}}>
        <h2 className='text-center mt-5'>Please Login</h2>
        <Form>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>
  
          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Button variant="info text-white w-50 mx-auto d-block mb-2" type="submit">
            Login
          </Button>
        </Form>
        <p>Are you new user? <Link to='/register'  style={{cursor:'pointer'}} className='text-primary text-decoration-none'> Please Register !</Link></p>
        <p>forget password? <span  style={{cursor:'pointer'}} className='text-primary'> Reset Password !</span></p>
      </div>
    );
};

export default Login;