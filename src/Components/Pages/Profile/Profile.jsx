import React from "react";
import "./Profile.css";
import AddressDetails1 from "../../AdressDetails/AddressDetails1";
import AddressDetails2 from "../../AdressDetails/AddressDetails2";
import BankAccountDetails from "../../BankAccountDetails/BankAccountDetails";
import DocumentUploadDetails from "../../DocumentUpload/DocumentUploadDetails";

const Profile = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="address1">
          <AddressDetails1 />
        </div>
        <div className="address2">
          <AddressDetails2 />
        </div>
        <div className="bankdetails">
          <BankAccountDetails />
        </div>
        <div className="documentupload">
          <DocumentUploadDetails />
        </div>
      </div>
    </>
  );
};

export default Profile;
