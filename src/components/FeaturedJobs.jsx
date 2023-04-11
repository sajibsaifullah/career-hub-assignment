import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import FeaturedJob from "./FeaturedJob";

const FeaturedJobs = () => {
  const featuredJobs = useLoaderData();
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };
  return (
    <div className="container mx-auto px-3">
      <h1 className="text-3xl text-center font-bold mt-12">Featured Jobs</h1>
      <p className="text-center mt-2">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid md:grid-cols-2 gap-5 mt-5">
        {featuredJobs.slice(0, showAll ? 6 : 4).map((featuredJob) => (
          <FeaturedJob
            key={featuredJob.id}
            featuredJob={featuredJob}
          ></FeaturedJob>
        ))}
      </div>
      <div className="text-center mt-4">
        {
            !showAll && <button onClick={handleShowAll} className="btn background">See All Jobs</button>
        }
      </div>
    </div>
  );
};

export default FeaturedJobs;
