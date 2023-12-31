import React from "react";
import { useNavigate } from "react-router-dom";
import { MapPinIcon } from "@heroicons/react/24/solid";

const FeaturedJob = ({ featuredJob }) => {
  const navigate = useNavigate();

  return (
    <div className="border rounded-md pl-8 md:py-4 py-12">
      <img className="w-[30%] h-[30%]" src={featuredJob.company_logo} alt="logo" />
      <h3 className="text-xl font-bold my-3">{featuredJob.company_name}</h3>
      <div className="flex gap-8">
        <p className="border rounded-sm px-2 text-blue-500">
          {featuredJob.remote_or_onsite}
        </p>
        <p className="border rounded-sm px-2 text-blue-500">
          {featuredJob.fulltime_or_parttime}
        </p>
      </div>
      <div className="flex gap-8 my-2">
        <div className="flex items-center gap-1">
          <MapPinIcon className="h-4 w-4 text-gray-500" />
          <p>{featuredJob.location}</p>
        </div>
        <p>{featuredJob.salary}</p>
      </div>
      <button onClick={() => navigate(`jobDetail/${featuredJob.id}`)} className="btn bg-purple-500">View Details</button>
    </div>
  );
};

export default FeaturedJob;
