import React, { useEffect, useRef, useState } from "react";
import "./AddFoodTruck.css";
import { useNavigate } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import { addNewTruck, getStates } from "../../api";

export default function AddFoodTruck() {
  const navigate = useNavigate();
  const truckNo = useRef();
  const password = useRef();
  const address = useRef();
  const city = useRef();
  const state = useRef();
  const zip = useRef();
  const [active, setActiveVal] = useState(false);
  const [options, setOptions] = useState([]);

  const setActive = () => {
    setActiveVal(!active);
  };

  const formsubmitted = async (e) => {
    e.preventDefault();
    const truck = {
      truckNo: truckNo.current.value,
      password: password.current.value,
      disabled: active,
      address: address.current.value,
      city: city.current.value,
      state: state.current.value,
      zip: zip.current.value,
    };
    await addNewTruck(truck);
  };

  useEffect(() => {
    getStates().then((res) => {
      setOptions(res.data);
    });
  }, []);

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
          />
        </div>
        <div className="col-md-6">
          <input
            ref={password}
            required
            type="password"
            className=" AddTruckInput"
            placeholder="password"
          />
        </div>
        <div className="col-12">
          <input
            ref={address}
            type="text"
            className=" AddTruckInput"
            id="inputAddress"
            placeholder="Truck Address"
          />
        </div>

        <div className="col-md-6">
          <input
            ref={city}
            type="text"
            className=" AddTruckInput"
            id="inputCity"
            placeholder="City"
          />
        </div>
        <div className="col-md-4">
          <select
            ref={state}
            id="inputState"
            className="form-select AddTruckInput"
            placeholder="state"
          >
            <option>state</option>
            {options?.map((option) => {
              return <option key={option.key}>{option.value}</option>;
            })}
          </select>
        </div>
        <div className="col-md-2">
          <input
            ref={zip}
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
              onClick={setActive}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
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
