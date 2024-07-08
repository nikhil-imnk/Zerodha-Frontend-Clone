import React from "react";

function Authorize() {
  return (
    <div
      className="container text-center text-muted"
      style={{ fontSize: "12px", marginBottom: "10%" }}
    >
      <p>
        I authorise Zerodha to contact me even if my number is registered on
        DND. I authorise Zerodha to fetch my KYC information from the C-KYC
        registry with my PAN.
      </p>
      <p>
        Please visit&nbsp;
        <a href="" style={{ textDecoration: "none" }}>
          this article
        </a>
        &nbsp;to know more.
      </p>
      <p>
        If you are looking to open a HUF, Corporate, Partnership, or NRI
        account, you have to use the&nbsp;
        <a href="" style={{ textDecoration: "none" }}>
          offline forms.
        </a>
        &nbsp;For help,{" "}
        <a href="" style={{ textDecoration: "none" }}>
          click here.
        </a>
      </p>
    </div>
  );
}

export default Authorize;
