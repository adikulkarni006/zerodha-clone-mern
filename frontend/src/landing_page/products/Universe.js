import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>

        <p className="text-muted mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-md-4 p-4 mt-5">
          <img
            src="/media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="mb-3"
          />

          <p className="text-muted">
            Thematic investment platform
          </p>
        </div>

        <div className="col-md-4 p-4 mt-5">
          <img
            src="/media/images/streakLogo.png"
            alt="Streak"
            className="mb-3"
          />

          <p className="text-muted">
            Algo & strategy platform
          </p>
        </div>

        <div className="col-md-4 p-4 mt-5">
          <img
            src="/media/images/sensibullLogo.svg"
            alt="Sensibull"
            className="mb-3"
          />

          <p className="text-muted">
            Options trading platform
          </p>
        </div>

        <div className="col-md-4 p-4 mt-5">
          <img
            src="/media/images/zerodhaFundhouse.png"
            alt="Zerodha Fund House"
            className="mb-3"
          />

          <p className="text-muted">
            Asset management platform
          </p>
        </div>

        <div className="col-md-4 p-4 mt-5">
          <img
            src="/media/images/goldenpiLogo.png"
            alt="GoldenPi"
            className="mb-3"
          />

          <p className="text-muted">
            Bonds investment platform
          </p>
        </div>

        <div className="col-md-4 p-4 mt-5">
          <img
            src="/media/images/dittoLogo.png"
            alt="Ditto"
            className="mb-3"
          />

          <p className="text-muted">
            Insurance advisory platform
          </p>
        </div>

        <Link to="/signup" className="mt-5">
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Signup Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Universe;