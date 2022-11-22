import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardAssesments from "components/Cards/CardAssesments.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

// layout for page

import Candidate from "layouts/Candidate.js";

export default function Dashboard() {
  return (
    <>
      <div className="block">
        <div className="flex mt-4">
          <div className="w-full sm:w-12/12 mb-12 xl:mb-12 px-4">
            <CardAssesments />
          </div>
          {/* <div className="w-full xl:w-4/12 px-4">
            <CardSocialTraffic />
          </div> */}
        </div>
      </div>
    </>
  );
}

Dashboard.layout = Candidate;
