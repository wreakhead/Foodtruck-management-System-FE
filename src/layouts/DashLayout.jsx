import React from "react";
import Avatar from "../components/Avatar/Avatar";
import LeftBar from "../components/LeftBar/LeftBar";
import LineChart from "../components/LineChart/LineChart";
import NavBar from "../components/NavBar/NavBar";
import "./Layout.css";

export default function DashLayout(props) {
  return (
    <div className="layer container-fluid">
      <div className="container-fluid p-0">
        <div className="row ">
          <div className="leftBarArea d-none d-xl-block">
            <LeftBar activeOptionId={1} closeButton={false} />
          </div>

          <div className="p-0  col rightArea container-fluid d-flex flex-column">
            <div className=" infoTab shadow-sm d-flex align-items-center">
              <div className="container-fluid d-flex flex-row p-0 ">
                <div className="container-fluid d-flex p-0">
                  <NavBar />
                </div>
                <div className=" container-fluid d-flex justify-content-end">
                  <Avatar />
                </div>
              </div>
            </div>
            {/* content area */}
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
