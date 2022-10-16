import React from "react";
import "./HomePageContent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegUser } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
const HomePageContent = () => {
  return (
    <>
      {/* search bar contant  */}
      <div className="text-center" id="header">
        <div className="container mt-4">
          <div className="row">
            <div className="col">
              <button type="button" class="btn btn-dark btn-rounded btn-icon">
                <HiMenuAlt2 />
              </button>
            </div>
            <div className="col-8 d-flex">
              <div class="input-group rounded justify-content-center">
                <a href="https://product-details-1.web.app/" target="_blank">
                  <button
                    type="button"
                    class="btn btn-dark btn-rounded btn-icon"
                  >
                    Navigate
                  </button>
                </a>
              </div>
            </div>
            <div className="col">
              <button type="button" class="btn btn-dark btn-rounded btn-icon">
                <FaRegUser />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* // HomePageContent */}
      <div id="HomePageContent" className="mt-5 container">
        {/* 1 st card  */}

        <div className="card bg-danger" id="card-1">
          <div className="card-body">
            <h1 className="card-title text-light">EMERGENCY</h1>
            <div className="mt-5">
              <h6 className=" text-light font-weight-bold">Vehical Number</h6>
              <p className=" text-light">GJ-5 AB 123</p>
              <h6 className=" text-light font-weight-bold">Driver Name</h6>
              <p className=" text-light">Amit</p>
              <h6 className=" text-light font-weight-bold">
                Doctor on Vehical
              </h6>
              <p className=" text-light">Dr. Shah</p>
              <h6 className=" text-light font-weight-bold">Hospital Name</h6>
              <p className=" text-light">City Hospital</p>
              <h6 className=" text-light font-weight-bold">Distance</h6>
              <p className=" text-light">9 KM</p>
              <h6 className=" text-light font-weight-bold">Time to Reach</h6>
              <p className=" text-light">approx 10min</p>
            </div>
            <a href="/" className="btn btn-success">
              Go somewhere
            </a>
          </div>
        </div>

        {/* 2nd card */}
        <div className="card bg-light" id="card-1">
          <div className="card-body">
            <h4 className="card-title ">LDRP ITR</h4>
            <p className=" ">KH-5 road , sector-15 ,gandhinagar</p>
            <div className="mt-3">
              <h6 className=" ">At ch-1 circal</h6>
              <h6 className=" text-primary font-weight-bold">
                Pass by akash nasta house
              </h6>
              <hr />
              <h6 className=" ">At ch-1 circal</h6>
              <h6 className=" text-primary font-weight-bold">
                Pass by akash nasta house
              </h6>
              <hr />
              <h6 className=" ">At ch-1 circal</h6>
              <h6 className=" text-primary font-weight-bold">
                Pass by akash nasta house
              </h6>
              <hr />
              <h6 className=" ">At ch-1 circal</h6>
              <h6 className=" text-primary font-weight-bold">
                Pass by akash nasta house
              </h6>
              <hr />
              <h6 className=" ">At ch-1 circal</h6>
              <h6 className=" text-primary font-weight-bold">
                Pass by akash nasta house
              </h6>
              <hr />
              <h4 className="card-title ">City Hospital</h4>
              <p className=" ">G-2 GH road , sector-12 ,gandhinagar</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageContent;
