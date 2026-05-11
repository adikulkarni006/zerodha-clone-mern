import React from "react";

function RightSection({
  imageURL,
  productName,
  productDesription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 p-5">
          <h1>{productName}</h1>

          <p
            className="text-muted mt-3"
            style={{ lineHeight: "1.8" }}
          >
            {productDesription}
          </p>

          <div className="mt-4">
            <a
              href={learnMore}
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="col-md-6">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;