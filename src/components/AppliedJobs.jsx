import React from "react";
// import { useLoaderData } from "react-router-dom";
import Applied from "./Applied";

const AppliedJobs = () => {
  // const appliedJobs = useLoaderData();
  // console.log(appliedJobs);

  const appliedJob = JSON.parse(localStorage.getItem('stored-job'));
  console.log(appliedJob);

  return (
    <div>
       <h2 className='text-3xl text-center font-bold bg-slate-100 h-48 flex items-center justify-center'>Applied Jobs</h2>

      <div className="pt-6">
        {
          appliedJob.map(job => <Applied key={job.id} job={job}></Applied>)
        }
      </div>
    </div>
  );
};

export default AppliedJobs;
