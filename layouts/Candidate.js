import React from "react";

// components

import CandidateNavbar from "components/Navbars/CandidateNavbar.js";
import CandidateSidebar from "components/Sidebar/CandidateSidebar.js";
import CandidateHeaderStats from "components/Headers/CandidateHeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

export default function Admin({ children }) {
  return (
    <>
      <CandidateSidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <CandidateNavbar />
        {/* Header */}
        <CandidateHeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
