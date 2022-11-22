import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-blueGray-800 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="Applied Jobs"
                  statTitle="24"
                  statArrow=""
                  statPercent=""
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-briefcase fa-solid"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="Ongoing Assessments"
                  statTitle="16"
                  statArrow=""
                  statPercent=""
                  statPercentColor="text-emerald-500"
                  statDescripiron=""
                  statIconName="fas fa-file fa-solid"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="Completed Assessments"
                  statTitle="10"
                  statArrow=""
                  statPercent=""
                  statPercentColor="text-orange-500"
                  statDescripiron=""
                  statIconName="fas fa-clipboard-check"
                  statIconColor="bg-emerald-500"
                />
              </div>
              {/* <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PERFORMANCE"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
