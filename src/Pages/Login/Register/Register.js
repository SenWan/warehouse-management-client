import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';

const Register = () => {
    const [
        createUserWithEmailAndPassWord,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

      const [updateProfile, updating] = useUpdateProfile(auth);
      const navigate = useNavigate();

      const handleRegister = async event => {
          event.preventDefault();
          const name = event.target.name.value;
          const email = event.target.email.value;
          const password = event.target.password.value;

          await createUserWithEmailAndPassWord(email, password);
          await updateProfile({displayName: name});
          navigate('/home');
      }

    return (
        <div className='container register-form' style={{height:'60vh'}}>
            <h2 className='text-center mt-3'>Please Register</h2>
            <form onSubmit={handleRegister}>
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