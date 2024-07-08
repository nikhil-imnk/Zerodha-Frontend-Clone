import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

function Hero() {
  return (
    <div className="container" style={{ padding: "10% 0 0 10%" }}>
      <div className="row">
        <div className="col p-5">
          <img src="media\signup.png" alt="Signup" style={{ width: "90%" }} />
        </div>
        <div className="col p-5">
          <h1 className="fs-2">Signup now</h1>
          <h4 className="fs-5 text-muted">
            Or track your existing application.
          </h4>
          <TextField
            label="Mobile number"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+91 </InputAdornment>
              ),
            }}
          />
          <p className="text-muted" style={{ fontSize: "12px" }}>
            You will receive an OTP on your number
          </p>
          <button
            className=" btn btn-primary"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Continue
          </button>
          <br></br>
          <a href="" style={{ textDecoration: "none", fontSize: "12px" }}>
            Want to open an NRI account?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
