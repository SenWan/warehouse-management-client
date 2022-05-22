import React from 'react';

const About = () => {
    return (
        <div className='container mx-5 row mt-5 d-flex justify-content-center align-items-center'>
            <div className='col-md-6 col-sm-12 col-12'>
                <h2>About Us</h2>
                <p className='inline'>We are leading company in this state since 1990 as fruits company. We have big members of groups. We have excelent customers reviews. We all are ready all time for serving. The customer satisfaction is main goal for this company. Customer are everything here. Now this company accross from the state to whole country. Our next goal is to serving to abroad.</p>
            </div>
            <div className='col-md-6 col-sm-12 col-12' style={{width:'50%'}}>
                <img src="pixel_map.png" alt="" />
            </div>
        </div>
    );
};

export default About;