import React from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";

const Applied = ({ job }) => {
  return (
    <div className="lg:mx-72 pl-4 mb-4 border rounded-xl ">
      <div className="lg:flex justify-stretch items-center lg:gap-24 py-4">
        <img className="w-[20%] h-[20%]" src={job.company_logo} alt="logo" />
        <div>
          <h3 className="text-xl font-bold my-3">{job.job_title}</h3>
          <div className="flex gap-8">
            <p className="border rounded-sm px-2 text-blue-500">
              {job.remote_or_onsite}
            </p>
            <p className="border rounded-sm px-2 text-blue-500">
              {job.fulltime_or_parttime}
            </p>
          </div>
          <div className="flex gap-8 my-2">
            <div className="flex items-center gap-1">
              <MapPinIcon className="h-4 w-4 text-gray-500" />
              <p>{job.location}</p>
            </div>
            <p>{job.salary}</p>
          </div>
        </div>
        <button className="btn bg-purple-500">View Details</button>
      </div>
    </div>
  );
};

export default Applied;
