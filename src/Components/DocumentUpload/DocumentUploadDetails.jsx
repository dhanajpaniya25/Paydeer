import React from "react";
import "./DocumentUploadDetails.css";
import { Link } from "react-router-dom";

const DocumentUploadDetails = () => {
  return (
    <>
      <div
        className="card "
        style={{
          width: "56rem",
          height: "13rem",
          boxShadow: "0 0.25rem 0.25rem rgba(0,0,0,0.25)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h6
          style={{
            color: "#c99f19",
            fontWeight: "500",
            fontSize: "1.25rem",
            lineHeight: "1.87rem",
          }}
        >
          Document Upload Details
        </h6>
        <div className="container d-sm-flex d-flex justify-content-around m-2">
          <div className="document_card1">
            <div
              className="card d-sm-flex p-3 "
              style={{
                width: "7.68rem",
                height: "4.68rem",
                boxShadow: "0 0.25rem 0.25rem rgba(0,0,0,0.25)",
                flexDirection: "row",
                position: "relative",
              }}
            >
              <img
                src="https://source.unsplash.com/123x75/?document"
                alt=""
                style={{
                  width: "7.68rem",
                  height: "4.68rem",
                  position: "absolute",
                  overflow: "hidden",
                  bottom: "0.01rem",
                  right: "0.01rem",
                  borderRadius: "0.4rem",
                }}
              />
            </div>
            <br />
            <Link
              to={""}
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "400",
                fontSize: "0.75rem",
                lineHeight: "1.125rem",
              }}
              className="image_upload_text mx-2"
            >
              Upload Adhar Card
            </Link>
            <br />
            <Link
              to={""}
              style={{
                marginLeft: "1.5rem",
                fontWeight: "400",
                fontSize: "0.75rem",
                lineHeight: "1.125rem",
              }}
            >
              Download
            </Link>
          </div>
          <div className="document_card1">
            <div
              className="card d-sm-flex p-3 "
              style={{
                width: "7.68rem",
                height: "4.68rem",
                boxShadow: "0 0.25rem 0.25rem rgba(0,0,0,0.25)",
                flexDirection: "row",
              }}
            >
              <img
                src="https://source.unsplash.com/123x75/?document"
                alt=""
                style={{
                  width: "7.68rem",
                  height: "4.68rem",
                  position: "absolute",
                  overflow: "hidden",
                  bottom: "0.01rem",
                  right: "0.01rem",
                  borderRadius: "0.4rem",
                }}
              />
            </div>
            <br />
            <Link
              to={""}
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "400",
                fontSize: "0.75rem",
                lineHeight: "1.125rem",
              }}
              className="image_upload_text mx-2"
            >
              Upload Adhar Card
            </Link>
            <br />
            <Link
              to={""}
              style={{
                marginLeft: "1.5rem",
                fontWeight: "400",
                fontSize: "0.75rem",
                lineHeight: "1.125rem",
              }}
            >
              Download
            </Link>
          </div>
          <div className="document_card1">
            <div
              className="card d-sm-flex p-3 "
              style={{
                width: "7.68rem",
                height: "4.68rem",
                boxShadow: "0 0.25rem 0.25rem rgba(0,0,0,0.25)",
                flexDirection: "row",
              }}
            >
              <img
                src="https://source.unsplash.com/123x75/?document"
                alt=""
                style={{
                  width: "7.68rem",
                  height: "4.68rem",
                  position: "absolute",
                  overflow: "hidden",
                  bottom: "0.01rem",
                  right: "0.01rem",
                  borderRadius: "0.4rem",
                }}
              />
            </div>
            <br />
            <Link
              to={""}
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "400",
                fontSize: "0.75rem",
                lineHeight: "1.125rem",
              }}
              className="image_upload_text mx-2"
            >
              Upload Adhar Card
            </Link>
            <br />
            <Link
              to={""}
              style={{
                marginLeft: "1.5rem",
                fontWeight: "400",
                fontSize: "0.75rem",
                lineHeight: "1.125rem",
              }}
            >
              Download
            </Link>
          </div>
          <div className="document_card1">
            <div
              className="card d-sm-flex p-3 "
              style={{
                width: "7.68rem",
                height: "4.68rem",
                boxShadow: "0 0.25rem 0.25rem rgba(0,0,0,0.25)",
                flexDirection: "row",
              }}
            >
              <img
                src="https://source.unsplash.com/123x75/?document"
                alt=""
                style={{
                  width: "7.68rem",
                  height: "4.68rem",
                  position: "absolute",
                  overflow: "hidden",
                  bottom: "0.01rem",
                  right: "0.01rem",
                  borderRadius: "0.4rem",
                }}
              />
            </div>
            <br />
            <Link
              to={""}
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "400",
                fontSize: "0.75rem",
                lineHeight: "1.125rem",
              }}
              className="image_upload_text mx-2"
            >
              Upload Adhar Card
            </Link>
            <br />
            <Link
              to={""}
              style={{
                marginLeft: "1.5rem",
                fontWeight: "400",
                fontSize: "0.75rem",
                lineHeight: "1.125rem",
              }}
            >
              Download
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentUploadDetails;
