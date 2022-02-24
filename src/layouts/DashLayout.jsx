import React from "react";
import LeftBar from "../components/LeftBar/LeftBar";
import LineChart from "../components/LineChart/LineChart";
import "./Layout.css";

export default function DashLayout(props) {
  return (
    <div className="layer container-fluid">
      <div className="container-fluid p-0">
        <div className="row ">
          <div className="leftBarArea">
            <LeftBar activeOptionId={1} />
          </div>
          <div className="p-0 col rightArea container-fluid d-flex flex-column">
            <div className="infoTab shadow-sm"></div>
            <div className="chartArea shadow-sm p-2">
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
