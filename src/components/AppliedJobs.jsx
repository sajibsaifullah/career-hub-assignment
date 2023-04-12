import React from "react";
import { Link } from "react-router-dom";
import Applied from "./Applied";
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const AppliedJobs = () => {
  const appliedJob = JSON.parse(localStorage.getItem("stored-job"));
  // console.log(appliedJob);

  return (
    <div>
      <h2 className="text-3xl text-center font-bold bg-slate-100 h-48 flex items-center justify-center">
        Applied Jobs
      </h2>

      <div className="pt-6">
        <div className="text-right lg:mr-72 mb-2">
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="btn background">
              F<span className="lowercase">ilter</span> &nbsp; B <span className="lowercase">Y</span> &nbsp; <ChevronDownIcon className="h-6 w-6 text-white" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>remote</a>
              </li>
              <li>
                <a>onsite</a>
              </li>
            </ul>
          </div>
        </div>
        {appliedJob?.map((job) => (
          <Applied key={job.id} job={job}></Applied>
        ))}
      </div>

      <div className="text-center">
        <Link to="/">
          <button className="background">Back To Home</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default AppliedJobs;
