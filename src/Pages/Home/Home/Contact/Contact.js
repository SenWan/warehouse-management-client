import React from 'react';

const Contact = () => {
    return (
        <form id='contact' className='container mt-5 border rounded p-3 bg-info text-white'>
            <h2 className='text-center text-white'>Connect With Us</h2>
        <div class="mb-3">
          <label for="name" class="form-label">Your Name</label>
          <input type="name" class="form-control" id="exampleInputEmail1"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    );
};

export default Contact;