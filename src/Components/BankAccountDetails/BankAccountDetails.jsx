import React from "react";
import "./BankAccountDetails.css";

const BankAccountDetails = () => {
  return (
    <>
      <div className=" main_card card d-sm-flex p-3 ">
        <div className="container">
          <h6>Bank Account Details</h6>
          <p>
            Account No :{" "}
            <span className="bank_details_span">30258100004861</span>
          </p>
          <p>
            Account Holder Name :{" "}
            <span className="bank_details_span">Govind Parmar</span>
          </p>
          <p>
            IFSC Code :{" "}
            <span className="bank_details_span">30258100004861</span>
          </p>
          <p>
            Bank Name : <span className="bank_details_span">Yes Bank</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default BankAccountDetails;
