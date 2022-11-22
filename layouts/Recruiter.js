import React from "react";

// components

import CandidateNavbar from "components/Navbars/CandidateNavbar.js";
import RecruiterSidebar from "components/Sidebar/RecruiterSidebar.js";
import RecruiterHeaderStats from "components/Headers/RecruiterHeaderStats";
import FooterAdmin from "components/Footers/FooterAdmin.js";

export default function Admin({ children }) {
  return (
    <>
      <RecruiterSidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <CandidateNavbar />
        {/* Header */}
        <RecruiterHeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
