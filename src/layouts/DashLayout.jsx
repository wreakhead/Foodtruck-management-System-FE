import React from "react";
import InfoTab from "../components/InfoTab/InfoTab";
import LeftBar from "../components/LeftBar/LeftBar";
import LineChart from "../components/LineChart/LineChart";
import "./Layout.css";

export default function DashLayout() {
  
  return (
    <div className="layer container-fluid">
      <div className="container-fluid p-0">
        <div className="row ">
          <div className="leftBarArea d-none d-xl-block p-0">
            <LeftBar activeOptionId={1} closeButton={false} />
          </div>

          <div className="p-0  col rightArea container-fluid d-flex flex-column">
            <div>
              <InfoTab />
            </div>
            {/* content area */}
            <div className="contentArea shadow-sm p-2">
              <LineChart />
            </div>
            <div className="moreDetails border border-success  p-2">
              moreDetails
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
