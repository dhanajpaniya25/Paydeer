import React from "react";
import "./AddressDetails.css";

const AddressDetails1 = () => {
  return (
    <>
      <div className="main_card card d-sm-flex ">
        <div className="address_card_left d-sm-flex">
          <div className="card-body">
            <div>
              <h6>Address Details 1</h6>
              <p>Permanent Address:</p>
              <p>
                H No:44 B1,C9 Gayatri Nagar
                <br />
                Hiran Magri Setor 5 Jaipur
              </p>
            </div>
          </div>
        </div>
        <div className="address_card_right  ">
          <p>
            <span className="span_left">District :</span>
            <span className="span_right">Jaipur</span>
          </p>
          <p>
            <span className="span_left">Block :</span>
            <span className="span_right">D Block</span>
          </p>
          <p>
            <span className="span_left">State :</span>
            <span className="span_right">Rajasthan</span>
          </p>
          <p>
            <span className="span_left">Pincode :</span>
            <span className="span_right">302020</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default AddressDetails1;
