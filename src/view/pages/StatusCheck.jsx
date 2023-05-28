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
  const accessToken = "your_access_token";

  const fetchData = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          uthorization: `Bearer ${accessToken}`,
          accept: "text/plain",
        },
      });

      if (response.ok) {
        // const responseData = await response.text();
        // setStatusData(await response.text());
        // setStatusData(responseData);
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

  // const isValidStatus = (status) => {
  //   const expectedStatusValues = [
  //     "processing",
  //     "pending",
  //     "need-more-info",
  //     "completed",
  //   ];
  //   return expectedStatusValues.includes(status);
  // };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(statusData);
  }, [statusData]);

  return (
    <div>
      <div className="MainStatusBox">
        <h1 className="main-heading">Status Check</h1>
        <h2 className="sub-heading">
          The Current Status of your Grama Certificate will be displayed here
        </h2>
        <div className="status-check-container">
          <div className="progress-bar-labels">
            <div className="progress-bar-label processing">
              <img
                src={processingIcon}
                alt="Processing"
                className="processingIcon"
              />
            </div>

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
              {statusData && (
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
              )}

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
                  style={{
                    display: statusData === "pending" ? "flex" : "none",
                  }}
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
                  className={`${
                    statusData === "need-more-info" ? "check" : ""
                  }`}
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
    </div>
  );
}

export default StatusCheck;
