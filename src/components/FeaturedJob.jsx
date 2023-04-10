import React from "react";

const FeaturedJob = ({ featuredJob }) => {
  console.log(featuredJob);
  return (
    <div className="border rounded-md pl-8 py-4">
      <img src={featuredJob.company_logo} alt="" />
      <h3 className="text-xl font-bold">{featuredJob.company_name}</h3>
      <div className="flex gap-8">
        <p>{featuredJob.remote_or_onsite}</p>
        <p>{featuredJob.fulltime_or_parttime}</p>
      </div>
      <div className="flex gap-8">
        <p>{featuredJob.location}</p>
        <p>{featuredJob.salary}</p>
      </div>
      <button className="btn bg-purple-500">View Details</button>
    </div>
  );
};

export default FeaturedJob;
