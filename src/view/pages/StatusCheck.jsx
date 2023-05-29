import React, { useState, useEffect } from "react";
import "./StatusCheck.css";

import pendingIcon from "../../assets/images/pendingIcon.png";
import processingIcon from "../../assets/images/processingIcon.png";
import info from "../../assets/images/info.png";
import completedIcon from "../../assets/images/completedIcon.png";
import Swal from "sweetalert2";
import { getStatus } from "../../api/get-status";
import { useAuthContext } from "@asgardeo/auth-react";

function StatusCheck() {
  const { getAccessToken } = useAuthContext();
  const [statusData, setStatusData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = await getAccessToken();
        const userID = "A123456789";
        const response = await getStatus(accessToken, userID);
        if (response.ok) {
          const responseData = await response.text();
          setStatusData(responseData);
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

    fetchData();
  }, [getAccessToken]);

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
                alt="Not Applied"
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
              <div
                className={`progress-bar-status not-applied ${
                  statusData === "not applied" ? "active" : ""
                }`}
              >
                <div
                  className={`${statusData === "not applied" ? "check" : ""}`}
                  style={{
                    display: statusData === "not applied" ? "flex" : "none",
                  }}
                >
                  X
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
                className={`progress-bar-status rejected ${
                  statusData === "rejected" ? "active" : ""
                }`}
              >
                <div
                  className={`${statusData === "rejected" ? "check" : ""}`}
                  style={{
                    display: statusData === "rejected" ? "flex" : "none",
                  }}
                >
                  X
                </div>
              </div>

              <div
                className={`progress-bar-status approved ${
                  statusData === "approved" ? "active" : ""
                }`}
              >
                <div
                  className={`${statusData === "approved" ? "check" : ""}`}
                  style={{
                    display: statusData === "approved" ? "flex" : "none",
                  }}
                >
                  ✓
                </div>
              </div>
            </div>
          </div>
          <div className="status-icons-container">
            <div className="status-icon pending">
              <span className="sr-only">Not Applied</span>
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
