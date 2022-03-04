import React from "react";
import LeftBar from "../components/LeftBar/LeftBar";
import InfoTab from "../components/InfoTab/InfoTab";
import "./Layout.css";
import TruckNav from "../components/TruckNav/TruckNav";

export default function TruckPageLayout() {
  return (
    <div className="layer container-fluid">
      <div className="container-fluid p-0">
        <div className="row ">
          <div className="leftBarArea d-none d-xl-block p-0">
            <LeftBar activeOptionId={2} closeButton={false} />
          </div>

          <div className="p-0  col rightArea container-fluid d-flex flex-column">
            <div>
              <InfoTab />
            </div>
            {/* content area */}
            <TruckNav />
          </div>
        </div>
      </div>
    </div>
  );
}
