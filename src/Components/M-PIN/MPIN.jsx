import React from "react";
import "./MPIN.css";

const MPIN = () => {
  return (
    <>
      <div className="card MPIN_Card">
        <div>
          <h5>Change M-PIN</h5>
        </div>
        <hr style={{ width: "100%" }} />
        <p className="MPIN_text">
          Your M-PIN is not created, you must first create your M-PIN <br />
          Click on this button to send OTP on Your <br />
          Register Mobile Number
        </p>
        <button className="MPIN_button">Send OTP</button>
      </div>
    </>
  );
};

export default MPIN;
