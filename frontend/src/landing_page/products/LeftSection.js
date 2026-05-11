import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
          />
        </div>

        <div className="col-md-6 p-5">
          <h1>{productName}</h1>

          <p className="text-muted mt-3" style={{ lineHeight: "1.8" }}>
            {productDesription}
          </p>

          <div className="mt-4">
            <a
              href={tryDemo}
              style={{
                textDecoration: "none",
                marginRight: "40px",
              }}
              target="_blank"
              rel="noreferrer"
            >
              Try Demo
            </a>

            <a
              href={learnMore}
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
          </div>

          <div className="mt-4">
            <a
              href={googlePlay}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/media/images/googlePlayBadge.svg"
                alt="Google Play"
              />
            </a>

            <a
              href={appStore}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/media/images/appstoreBadge.svg"
                alt="App Store"
                style={{ marginLeft: "25px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;