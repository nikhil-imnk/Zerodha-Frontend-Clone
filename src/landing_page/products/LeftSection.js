import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  GooglePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try demo <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              Learn more <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={GooglePlay} style={{ textDecoration: "none" }}>
              <img src="media\googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img
                style={{ marginLeft: "50px", textDecoration: "none" }}
                src="media\appstoreBadge.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
