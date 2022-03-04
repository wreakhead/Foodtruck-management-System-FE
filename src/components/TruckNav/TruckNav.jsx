import React from "react";
import AddFoodTruck from "../AddFoodTruck/AddFoodTruck";
import "./TruckNav.css";

export default function TruckNav() {
  return (
    <>
      <div className=" p-2 container-fluid">
        <div className="row">
          <div className="col contentArea shadow-sm">
            <div className="d-flex ">
              <div className="alltrucks m-2 rounded border p-3 truckNavLink">
                List
              </div>
              <div className="addtruck m-2 rounded border p-3 truckNavLink">
                Add
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="moreDetails shadow-sm  p-2">
        <AddFoodTruck />{" "}
      </div>
    </>
  );
}
