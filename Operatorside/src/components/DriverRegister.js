import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
// import { db } from "../firebase";
import { db } from "../firebase";
const DriverRegister = () => {
  const [drivername, setName] = useState("");
  const [drivermobile, setDriverMobile] = useState("");
  const [hospitalname, setHospital] = useState("");
  const [vehicleregister, setVehicle] = useState("");
  const [password, setpassword] = useState("");
  const [repeatpassword, setRepeatPassword] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    db.collection("users")
      .add({
        drivername: drivername,
        drivermobile: drivermobile,
        hospitalname: hospitalname,
        vehicleregister: vehicleregister,
        password: password,
        repeatpassword: repeatpassword,
      })
      .then(() => {
        setLoader(false);
        alert("Message Submitted");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setDriverMobile("");
    setHospital("");
    setVehicle("");
    setpassword("");
    setRepeatPassword("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-2">
                  <div className="row justify-content-center">
                    <p className="text-center h1 fw-bold mb-2 mx-1 mx-md-2 mt-4">
                      Vehicle Registration
                    </p>
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <div className="mx-1 mx-md-4 mt-4">
                        <div className="d-flex flex-row align-items-center mb-2">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              value={drivername}
                              onChange={(e) => setName(e.target.value)}
                            />
                            <label className="form-label" for="form3Example1c">
                              Driver Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example3c"
                              className="form-control"
                              value={drivermobile}
                              onChange={(e) => setDriverMobile(e.target.value)}
                            />
                            <label className="form-label" for="form3Example3c">
                              Driver Mobile No.
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example4c"
                              className="form-control"
                            />
                            <label className="form-label" for="form3Example4c">
                              Doctor Name
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example4cd"
                              className="form-control"
                            />
                            <label className="form-label" for="form3Example4cd">
                              Doctor Mobile No.
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <div className="mx-1 mx-md-4 mt-4">
                        <div className="d-flex flex-row align-items-center mb-2">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              value={hospitalname}
                              onChange={(e) => setHospital(e.target.value)}
                            />
                            <label className="form-label" for="form3Example1c">
                              Hospital Name
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example3c"
                              className="form-control"
                              value={vehicleregister}
                              onChange={(e) => setVehicle(e.target.value)}
                            />
                            <label className="form-label" for="form3Example3c">
                              Vehical Registration No.
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              value={password}
                              onChange={(e) => setpassword(e.target.value)}
                            />
                            <label className="form-label" for="form3Example4c">
                              Password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              value={repeatpassword}
                              onChange={(e) =>
                                setRepeatPassword(e.target.value)
                              }
                            />
                            <label className="form-label" for="form3Example4cd">
                              Repeat your password
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-check d-flex justify-content-center mb-3">
                  <label for="form2Example3">
                    Already have Account ? <Link to="/">Log In</Link>
                  </label>
                </div>
                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

export default DriverRegister;
