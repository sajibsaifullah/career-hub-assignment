import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Job from './Job';

const JobDetail = () => {
    const dynamic = useParams();
    // console.log(dynamic.jobId)

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('/featuredJobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <h2 className='text-3xl text-center font-bold bg-slate-100 h-48 flex items-center justify-center'>Job details</h2>
            <div>
                {
                    // jobs.map(job => <p>{job.id==dynamic.jobId ? job.company_name : ''}</p>)
                    jobs.map(job => <Job 
                        key={job.id} 
                        job={job} 
                        dynamic={dynamic}
                    ></Job>)
                }
            </div>

        </div>
    );
};

export default JobDetail;