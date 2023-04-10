import React from "react";
import Banner from "./Banner";
import FeaturedJobs from "./FeaturedJobs";
import JobCategory from "./JobCategory";

const Home = () => {
  return (
    <div>
      {/* banner section */}
      <Banner />
      {/* job category section */}
      <JobCategory />
      {/* featured job section */}
      <FeaturedJobs />
    </div>
  );
};

export default Home;
