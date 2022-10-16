import React from "react";
import { Link } from "react-router-dom";

const LoginRto = () => {
  return (
    <div class="d-flex justify-content-center align-items-center vh-100">
      <div class="border border-2 py-4 px-5 rounded">
        <form>
          <h2 className="mt-2 mb-5">Rto Login Form</h2>
          <div class="form-outline mb-2">
            <input type="email" id="form2Example1" class="form-control" required/>
            <label class="form-label" for="form2Example1">
              Email address
            </label>
          </div>
          <div class="form-outline mb-4">
            <input type="password" id="form2Example2" class="form-control" required/>
            <label class="form-label" for="form2Example2">
              Password
            </label>
          </div>

          <div class="row mb-4">
            <div class="col d-flex justify-content-center">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example31"
                  checked
                />
                <label class="form-check-label" for="form2Example31">
                  Remember me
                </label>
              </div>
            </div>

            <div class="col">
              <a href="#!">Forgot password?</a>
            </div>
          </div>
          <Link to="/main">
            <button type="button" class="btn btn-primary btn-block">
              Log In
            </button>
          </Link>
          <p className="mt-2">Don't have any account than create it</p>
          <p>
            {" "}
            <Link to="/driverregister"> Driver Account</Link> or{" "}
            <Link to="/rtoheadregister">Admin Account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginRto;
