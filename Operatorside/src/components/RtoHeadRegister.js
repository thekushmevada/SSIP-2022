import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { Link } from "react-router-dom";
const RtoHeadRegister = () => {

  const [headname, setHeadName] = useState("");
  const [headno, setHeadNo] = useState("");
  const [officeaddress, setAddress] = useState("");
  const [rtooffice, setRTO] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [repeatpassword, setRepeatPassword] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    db.collection("RTO_Head")
      .add({
        headname:headname,
        headno:headno,
        officeaddress:officeaddress,
        rtooffice:rtooffice,
        email:email,
        password:password,
        repeatpassword:repeatpassword,
      })
      .then(() => {
        setLoader(false);
        alert("Message Submitted");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

      setHeadName("");
      setHeadNo("");
      setAddress("");
      setRTO("");
      setEmail("");
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
                      RTO Head Registration
                    </p>
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <div className="mx-1 mx-md-4 mt-4">
                        <div className="d-flex flex-row align-items-center mb-2">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example3c"
                              className="form-control"
                              value={headname}
                              onChange={(e) => setHeadName(e.target.value)}
                            />
                            <label className="form-label" for="form3Example3c">
                              Head Name
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example4c"
                              className="form-control"
                              value={headno}
                              onChange={(e) => setHeadNo(e.target.value)}
                            />
                            <label className="form-label" for="form3Example4c">
                              Head No.
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-2">
                          <div className="form-outline flex-fill mb-0">
                            <textarea
                              id="form3Example4cd"
                              className="form-control"
                              rows="5"
                              value={officeaddress}
                              onChange={(e) => setAddress(e.target.value)}
                            />
                            <label className="form-label" for="form3Example4cd">
                              Office Address
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
                              value={rtooffice}
                              onChange={(e) => setRTO(e.target.value)}
                            />
                            <label className="form-label" for="form3Example1c">
                              RTO Office Name
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-2">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <label className="form-label" for="form3Example1c">
                              Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example3c"
                              className="form-control"
                              value={password}
                              onChange={(e) => setpassword(e.target.value)}
                            />
                            <label className="form-label" for="form3Example3c">
                              Password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              value={repeatpassword}
                              onChange={(e) => setRepeatPassword(e.target.value)}
                            />
                            <label className="form-label" for="form3Example4c">
                              Repeat your password
                            </label>
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
        </div>
      </section>
    </form>
  );
};

export default RtoHeadRegister;
