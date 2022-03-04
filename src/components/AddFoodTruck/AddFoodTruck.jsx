import React, { useRef } from "react";
import "./AddFoodTruck.css";
import { useNavigate } from "react-router-dom";
import { RegisterAdmin } from "../../api";
import CustomButton from "../CustomButton/CustomButton";

export default function AddFoodTruck() {
  const navigate = useNavigate();
  const truckNo = useRef();
  const password = useRef();
  const location = useRef();

  const formsubmitted = async (e) => {
    e.preventDefault();
    const user = {};
    try {
      await RegisterAdmin(user, navigate);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="AddTruckPage">
      <form className="row g-3 AddTruckBox" onSubmit={formsubmitted}>
        <h4 className="addTruckTitle"> New Truck</h4>
        <div className="col-md-6">
          <input
            ref={truckNo}
            required
            type="text"
            className=" AddTruckInput"
            placeholder="Truck no"
            id="inputEmail4"
          />
        </div>
        <div className="col-md-6">
          <input
            ref={password}
            required
            type="password"
            className=" AddTruckInput"
            placeholder="password"
            id="inputPassword4"
          />
        </div>
        <div className="col-12">
          <input
            type="text"
            className=" AddTruckInput"
            id="inputAddress"
            placeholder="Truck Address"
          />
        </div>

        <div className="col-md-6">
          <input
            type="text"
            className=" AddTruckInput"
            id="inputCity"
            placeholder="City"
          />
        </div>
        <div className="col-md-4">
          <select
            id="inputState"
            className="form-select AddTruckInput"
            placeholder="state"
          >
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-2">
          <input
            type="text"
            className=" AddTruckInput"
            id="inputZip"
            placeholder="zip"
          />
        </div>
        <div className="col-12">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" for="flexSwitchCheckDefault">
              Active
            </label>
          </div>
        </div>
        <div className="col-12">
          <div className="addButton">
            <CustomButton pending={false} text="Add" />
          </div>
        </div>
      </form>
    </div>
  );
}
