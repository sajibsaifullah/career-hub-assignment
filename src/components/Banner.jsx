import React from 'react';
// import '../assets/Images/profileImg.png';
import profileImg from '../assets/Images/profileImg.png';


const Banner = () => {
    return (
        <div className='grid lg:grid-cols-2 container mx-auto my-8'>
            <div className='mt-16 ml-8'>
                <h1 className='text-5xl font-bold'>One Step <br /> Closer To Your <br /> <span className='text-purple-400'>Dream Job</span></h1>
                <p className='my-8'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn background'>Get Started</button>
            </div>
            <div className='w-[75%] lg:ml-36'>
                <img src={profileImg} alt="" />
            </div>

        </div>
    );
};

export default Banner;