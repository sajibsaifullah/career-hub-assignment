import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedJob from './FeaturedJob';

const FeaturedJobs = () => {

    const featuredJobs = useLoaderData()
    // console.log(featuredJobs[0]);
    return (
        <div className='container mx-auto'>
            <h1 className='text-3xl text-center font-bold mt-12'>Featured Jobs</h1>
            <p className='text-center mt-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-2 gap-5 mt-5'>
                {
                    featuredJobs.map(featuredJob => <FeaturedJob 
                        key={featuredJob.id}
                        featuredJob={featuredJob}
                    ></FeaturedJob>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;