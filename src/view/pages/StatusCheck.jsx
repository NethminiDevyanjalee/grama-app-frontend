import React, { useState, useEffect } from "react";

import pendingIcon from "../../assets/images/pendingIcon.png";
import processingIcon from "../../assets/images/processingIcon.png";
import info from "../../assets/images/info.png";
import completedIcon from "../../assets/images/completedIcon.png";
import Swal from "sweetalert2";
import "../../css/StatusCheck.css";

function StatusCheck() {
  const [statusData, setStatusData] = useState();

  const apiUrl =
    "https://ebec18ec-b7dc-4ea3-8dcd-ae4ded23340a-dev.e1-us-east-azure.choreoapis.dev/gewp/grama-app/endpoint-9090-803/1.0.0/getStatus";
  const userId = "123v";
  const queryParams = `?userId=${encodeURIComponent(userId)}`;
  const url = apiUrl + queryParams;

  const fetchData = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "API-Key":
            "eyJraWQiOiJnYXRld2F5X2NlcnRpZmljYXRlX2FsaWFzIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJiYTljOGJmNS04NzI5LTQzNTAtOTk3Zi1iZjdiYmU5NzY4NWFAY2FyYm9uLnN1cGVyIiwiaXNzIjoiaHR0cHM6XC9cL3N0cy5jaG9yZW8uZGV2OjQ0M1wvb2F1dGgyXC90b2tlbiIsImtleXR5cGUiOiJQUk9EVUNUSU9OIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOm51bGwsIm5hbWUiOiJHcmFtYSBBcHAgLSBFbmRwb2ludCA5MDkwIDgwMyIsImNvbnRleHQiOiJcL2ViZWMxOGVjLWI3ZGMtNGVhMy04ZGNkLWFlNGRlZDIzMzQwYVwvZ2V3cFwvZ3JhbWEtYXBwXC9lbmRwb2ludC05MDkwLTgwM1wvMS4wLjAiLCJwdWJsaXNoZXIiOiJjaG9yZW9fcHJvZF9hcGltX2FkbWluIiwidmVyc2lvbiI6IjEuMC4wIiwic3Vic2NyaXB0aW9uVGllciI6bnVsbH1dLCJleHAiOjE2ODQzMTc0NjAsInRva2VuX3R5cGUiOiJJbnRlcm5hbEtleSIsImlhdCI6MTY4NDMxNjg2MCwianRpIjoiOWY1NDQ3MTEtNzEyNC00OTkyLWE2NDQtYmIwM2QwZWZiZjM3In0.m2uad4KteIviaIO5COlmRHQLs6boR8PhehJENpn2Sl7ziSKuF9qBBNwY8E5VNU5xHEJO3vKyH6w_jqOnfVm7ArX9WsLBlvLIeru52yUk06lsmum4QnuQ9M_yPsGbxfOoQq8d-9UMXV_xIfdNU6glz05c-ZaujjFN8_RwWLBnFnRWUxOkgIoPvwG8stnZa8gpD5CrPJG6ydxweVp2d64heJsZS0mEGgQXdwA8_ZyDJf02OL_N0Pin3LgujypN5hzr1OalUsbmwM0P045w3m0f5h87StGGxnB9S03dYdLV2ikf73_ZOeWGrSNLQsiBaArcjGEr6Rn2yDb7djhMbOWn4_nKb-qOP2SjRN8bRlkZl6YKslo2DAtXns36jsIqBN4O-ZSI2R5cHm5CY34qMN1mGfMklmbj80zOVj1toUpluTc5asjSzWO-l48mMg0cQDQP0hcrs23ml9TLO_CG5Glrd-WOWPHNKnioSmJhEIgW1vtSwiKdm-z9Y3IoEew_EHu52NJ_ZhFoq60znyyNrUzqEPueKYZ04KZLP2wrSUyiSH49o8xnKHHTfrVcalUsiH3W2P_bKoOOM1aTqJHcbmKcJBilG3YzCsQjvaYU1Uy3Q5kDuuEhGRAodPTOHj0I2tIAVLNHSRx3BRiSf-0TFxwseUTUZHSZcyFAjBcUVxirB1E",
          accept: "text/plain",
        },
      });

      if (response.ok) {
        // const responseData = await response.text();

        setStatusData(await response.text());

        // if (!responseData) {
        //   throw new Error("Empty response data");
        // }

        // // const parsedData = JSON.parse(responseData);
        // // Parse the response data

        // if (!isValidStatus(parsedData.status)) {
        //   throw new Error("Invalid response data");
        // }

        // setStatusData(parsedData.status);
      } else {
        throw new Error("Failure due to network error!");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      let errorMessage = "An error occurred while fetching the data.";

      if (error instanceof Error) {
        errorMessage = `Error: ${error.message}`;
      }

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    }
  };

  const isValidStatus = (status) => {
    const expectedStatusValues = [
      "processing",
      "pending",
      "need-more-info",
      "completed",
    ];
    return expectedStatusValues.includes(status);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("status" + statusData);
  }, [statusData]);

  return (
    <div>
      <h1 className="main-heading">Status Check</h1>
      <h2 className="sub-heading">
        The Current Status of your Grama Certificate will be displayed here
      </h2>
      <div className="status-check-container">
        <div className="progress-bar-labels">
          {statusData && (
            <div
              className={`progress-bar-label processing ${
                statusData === "processing" ? "active" : ""
              }`}
            >
              <img
                src={processingIcon}
                alt="Processing"
                className="processingIcon"
              />
            </div>
          )}
          <div className="progress-bar-label pending">
            <img src={pendingIcon} alt="Pending" className="pendingIcon" />
          </div>
          <div className="progress-bar-label need-more-info">
            <img
              src={info}
              alt="Need More Info"
              className="need-more-info Icon"
            />
          </div>
          <div className="progress-bar-label completed">
            <img
              src={completedIcon}
              alt="Completed"
              className="completedIcon"
            />
          </div>
        </div>

        <div className="progress-bar-container">
          <div className="progress-bar">
            <div
              className={`progress-bar-status processing ${
                statusData === "processing" ? "active" : ""
              }`}
            >
              <div
                className={`${statusData === "processing" ? "check" : ""}`}
                style={{
                  display: statusData === "processing" ? "flex" : "none",
                }}
              >
                ✓
              </div>
            </div>
            <div
              className={`progress-bar-status pending ${
                statusData === "pending" ? "active" : ""
              }`}
            >
              <div
                className={`${statusData === "pending" ? "check" : ""}`}
                style={{ display: statusData === "pending" ? "flex" : "none" }}
              >
                ✓
              </div>
            </div>
            <div
              className={`progress-bar-status need-more-info ${
                statusData === "need-more-info" ? "active" : ""
              }`}
            >
              <div
                className={`${statusData === "need-more-info" ? "check" : ""}`}
                style={{
                  display: statusData === "need-more-info" ? "flex" : "none",
                }}
              >
                !
              </div>
            </div>
            <div
              className={`progress-bar-status completed ${
                statusData === "completed" ? "active" : ""
              }`}
            >
              <div
                className={`${statusData === "completed" ? "check" : ""}`}
                style={{
                  display: statusData === "completed" ? "flex" : "none",
                }}
              >
                ✓
              </div>
            </div>
          </div>
        </div>
        <div className="status-icons-container">
          <div className="status-icon pending">
            <span className="sr-only">Processing</span>
          </div>
          <div className="status-icon processing">
            <span className="sr-only">Pending</span>
          </div>
          <div className="status-icon need-more-info">
            <span className="sr-only">Need More Info</span>
          </div>
          <div className="status-icon completed">
            <span className="sr-only">Completed</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatusCheck;
