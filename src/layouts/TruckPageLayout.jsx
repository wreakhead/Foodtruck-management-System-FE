import React from "react";
import LeftBar from "../components/LeftBar/LeftBar";
import AddFoodTruck from "../components/AddFoodTruck/AddFoodTruck"
import "./Layout.css";

export default function TruckPageLayout() {
  return (
    <div className="layer container-fluid">
      <div className="container-fluid p-0">
        <div className="row ">
          <div className="leftBarArea">
            <LeftBar activeOptionId={2}/>
          </div>
          <div className="p-0 col rightArea container-fluid d-flex flex-column">
            <div className="infoTab shadow-sm"></div>
            <div className="chartArea shadow-sm p-2">
              <AddFoodTruck />
            </div>
            <div className="moreDetails border border-success  p-2">
              truckarea2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
