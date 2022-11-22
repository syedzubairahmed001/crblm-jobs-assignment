import React from "react";

// components

import CardJobs from "components/Cards/CardsJob";
import CardProfile from "components/Cards/CardProfile.js";

// layout for page

import Jobs from "layouts/Jobs";

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardJobs />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}

Settings.layout = Jobs;
