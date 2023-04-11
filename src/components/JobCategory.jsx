import React, { useEffect, useState } from 'react';
import JobList from './JobList';

const JobCategory = () => {
    const [jobLists, setJobLists] = useState([]);

    useEffect(() =>{
        fetch('jobCategory.json')
        .then(res => res.json())
        .then(data => setJobLists(data))
    },[])
    return (
        <div className='container mx-auto px-3'>
            <h1 className='text-3xl text-center font-bold mb-2'>Job Category List</h1>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    jobLists.map((jobList, i) => <JobList key={i} jobList={jobList}></JobList>)
                }
            </div>
        </div>
    );
};

export default JobCategory;