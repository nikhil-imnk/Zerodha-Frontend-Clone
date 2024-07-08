import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center mt-5">People</h1>
      </div>
      <div
        className="row p-5 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media\nikhil.jpg"
            alt="Founder"
            style={{ width: "50%", borderRadius: "100%" }}
          />
          <h4 className="mt-5">Nikhil Kumar</h4>
          <h6>Founder</h6>
        </div>
        <div className="col-6 p-5">
          <p>
            Nikhil developed Zerodha Clone in 2024 as a full-stack web
            development project.
          </p>
          <p>He is an ECE Graduate from IIIT-D.</p>
          <p>Playing cricket is his zen.</p>
          <p>
            Connect on{" "}
            <a style={{ textDecoration: "none" }} href="#">
              Homepage
            </a>{" "}
            /{" "}
            <a style={{ textDecoration: "none" }} href="#">
              TradingQnA
            </a>{" "}
            /
            <a style={{ textDecoration: "none" }} href="#">
              &nbsp;Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
