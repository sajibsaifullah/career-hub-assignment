import React from 'react';

const JobList = ({jobList}) => {
    return (
        <div className='border rounded-md pl-12 py-8 mt-4 bg-slate-100'>
            <img className="w-[30%] h-[40%] my-3" src={jobList.category_logo} alt="logo" />
            <h4 className='text-xl font-bold'>{jobList.category_name}</h4>
            <p>{jobList.jobs_available} Jobs Available</p>
            
        </div>
    );
};

export default JobList;