import React from "react";
import "./MainPage.css";
import { BiUser } from "react-icons/bi";
import { VscWarning } from "react-icons/vsc";
import { IconContext } from "react-icons";
const MainPage = () => {
  return (
    <div>
      <div className="row">
        <div className="col bg-danger text-center">
          <h1 className="text-light mt-5">EMERGENCY</h1>
          <div className="mt-2" id="blink">
            <IconContext.Provider value={{ color: "White", size: "120px" }}>
              <VscWarning />
            </IconContext.Provider>
          </div>
          <h1 className="text-light mt-5">AMBULANCE ON THE WAY</h1>
          <div class="container text-center mt-4">
            <div class="row">
              <div class="col">
                <h6 className=" text-light font-weight-bold">
                  Upcoming Circal
                </h6>
                <p className=" text-light">CH-5 , CH - Road</p>
                <hr />
                <h6 className=" text-light font-weight-bold">
                  Destination Name
                </h6>
                <p className=" text-light">City Hospital</p>
                <hr />
                <h6 className=" text-light font-weight-bold">
                  Emergency Root Length
                </h6>
                <p className=" text-light">8 KM</p>
                <hr />
                <h6 className=" text-light font-weight-bold">Time to Reach</h6>
                <p className=" text-light">approx 10min</p>
                <hr />
              </div>
              <div class="col">
                <h6 className=" text-light font-weight-bold">Driver Name</h6>
                <p className=" text-light">Amit</p>
                <hr />
                <h6 className=" text-light font-weight-bold">
                  Doctor on Vehical
                </h6>
                <p className=" text-light">Dr. Shah</p>
                <hr />
                <h6 className=" text-light font-weight-bold">Vehical Number</h6>
                <p className=" text-light">GJ-5 AB 123</p>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <div className="col" id="map">
          <button
            type="button"
            className="btn btn-dark btn-rounded btn-icon m-4"
            id="btn"
          >
            <BiUser />
          </button>
        </div>
      </div>
    </div> 
  );
};

export default MainPage;
