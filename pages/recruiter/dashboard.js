import React from "react";

// components

import CardRecruiterJobsChart1 from "components/Cards/CardRecruiterJobsChart1.js";
import CardRecruiterJobsChart2 from "components/Cards/CardRecruiterJobsChart2.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardRecruiterJobs from "components/Cards/CardRecruiterJobs";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

// layout for page

import Recruiter from "layouts/Recruiter";

export default function Dashboard() {
  return (
    <>
      <div className="block">
        <div className="flex mt-4">
          <div className="w-full sm:w-12/12 mb-12 xl:mb-12 px-4">
            <CardRecruiterJobs />
          </div>
        </div>
        <div className="flex mt-4">
        <div className=" md:w-8/12 sm:w-12/12 mb-12 xl:mb-12 px-4">
            <CardRecruiterJobsChart1 />
          </div>
        <div className=" md:w-4/12 sm:w-12/12 mb-12 xl:mb-12 px-4">
            <CardRecruiterJobsChart2 />
          </div>
        </div>
      </div>
    </>
  );
}

Dashboard.layout = Recruiter;
