import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "rgb(250, 250, 250)",
        fontSize: "14px",
      }}
    >
      <div className="container border-top mt-5">
        <div className="row mt-5 gy-5">
          <div className="col-md-3">
            <img
              src="/media/images/logo.svg"
              alt="logo"
              style={{ width: "60%" }}
            />

            <p className="text-muted mt-3">
              &copy; 2010 - 2026, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>

{/* <div className="d-flex gap-3 mt-3 fs-4 text-muted"> */}
<div className="d-flex flex-wrap gap-3 mt-3 fs-4 text-muted">
  <i className="fab fa-twitter"></i>
  <i className="fab fa-facebook"></i>
  <i className="fab fa-instagram"></i>
  <i className="fab fa-linkedin"></i>
  <i className="fas fa-home"></i>
</div>
          </div>

          <div className="col-md-3">
            <p className="fw-bold">Account</p>

            <a href="/" className="text-decoration-none d-block mb-2">
              Open demat account
            </a>

            <a href="/" className="text-decoration-none d-block mb-2">
              Minor demat account
            </a>

            <a href="/" className="text-decoration-none d-block mb-2">
              NRI demat account
            </a>

            <a href="/" className="text-decoration-none d-block mb-2">
              Commodity
            </a>

            <a href="/" className="text-decoration-none d-block mb-2">
              Fund transfer
            </a>

            <a href="/" className="text-decoration-none d-block mb-2">
              MTF
            </a>
          </div>

          <div className="col-md-3">
            <p className="fw-bold">Support</p>

            <a href="/" className="text-decoration-none d-block mb-2">
              Contact us
            </a>

            <a href="/" className="text-decoration-none d-block mb-2">
              Support portal
            </a>

            <a href="/" className="text-decoration-none d-block mb-2">
              Downloads
            </a>

            <a href="/" className="text-decoration-none d-block mb-2">
              Z-Connect blog
            </a>

            <a href="/" className="text-decoration-none d-block mb-2">
              Bulletin
            </a>

            <a href="/" className="text-decoration-none d-block mb-2">
              Circular
            </a>
          </div>

          <div className="col-md-3">
            <p className="fw-bold">Company</p>

            <a href="/" className="text-decoration-none d-block mb-2">
              About
            </a>

            <a href="/" className="text-decoration-none d-block mb-2">
              Products
            </a>

            <a href="/" className="text-decoration-none d-block mb-2">
              Pricing
            </a>

            <a href="/" className="text-decoration-none d-block mb-2">
              Careers
            </a>

            <a href="/" className="text-decoration-none d-block mb-2">
              Zerodha.tech
            </a>

            <a href="/" className="text-decoration-none d-block mb-2">
              Press & media
            </a>

            <a href="/" className="text-decoration-none d-block mb-2">
              Zerodha Cares (CSR)
            </a>
          </div>
        </div>

        <div
          className="mt-5 text-muted"
          style={{
            fontSize: "12px",
            lineHeight: "1.8",
          }}
        >
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered
            Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
            Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
            560078, Karnataka, India.
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers and receive
            information directly from Exchange on your mobile/email.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;