import { useState, useEffect } from "react";

import cameraIcon from "../../assets/images/cameraIcon.png";
import saveIcon from "../../assets/images/saveIcon.png";
import cancelIcon from "../../assets/images/cancelIcon.png";
import infoIcon2 from "../../assets/images/infoIcon2.png";
import envelope from "../../assets/images/envelope_light.png";
import phone from "../../assets/images/phone.png";
import Swal from "sweetalert2";
import { useAuthContext } from "@asgardeo/auth-react";

import "./UserProfileDetails.css";

function UserProfileDetails() {
  const { isAuthenticated, signOut, getBasicUserInfo } = useAuthContext();

  const [basicUserInfo, setBasicUserInfo] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        if (isAuthenticated) {
          const userInfo = await getBasicUserInfo();
          console.log(userInfo);
          setBasicUserInfo(userInfo);
          setFirstName(userInfo?.givenName || "");
          setLastName(userInfo?.familyName || "");
          setEmail(userInfo?.email || "");
          setMobileNumber(userInfo?.phoneNumber || "");
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, [isAuthenticated, getBasicUserInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !mobileNumber || !email) {
      Swal.fire({
        title: "Error",
        text: "Please fill out all fields.",
        icon: "error",
      });
      return;
    }

    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobileNumber)) {
      Swal.fire({
        title: "Error",
        text: "Please enter a valid phone number.",
        icon: "error",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        title: "Error",
        text: "Please enter a valid email address.",
        icon: "error",
      });
      return;
    }

    if (firstName.indexOf(" ") !== -1 || lastName.indexOf(" ") !== -1) {
      Swal.fire({
        title: "Error",
        text: "Please enter only one word for first and last name.",
        icon: "error",
      });
      return;
    }

    Swal.fire({
      title: "Success",
      text: "Your profile details updated successfully",
      icon: "success",
    });
  };

  const handleProfilePictureChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setProfilePicture(event.target.files[0]);
    }
  };

  const handleCancel = () => {
    setFirstName(basicUserInfo?.givenName || "");
    setLastName(basicUserInfo?.familyName || "");
    setEmail(basicUserInfo?.email || "");
    setMobileNumber(basicUserInfo?.phoneNumber || "");
    setProfilePicture(null);
  };

  return (
    <div>
      <div className="MainProfileContainer">
        <h1 className="MainHeading">User Profile Details</h1>
        <div className="SubHeading">
          <h2>Customize Your Profile</h2>
          <button className="LogoutButton" onClick={() => signOut()}>
            Logout
          </button>
        </div>
        <div className="ContainerOne">
          <div className="FormInputContainer">
            <div className="FirstNameContainer">
              <label className="FirstNameLabel">
                First Name:
                <input
                  type="text"
                  className="FirstNameInput"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </label>
            </div>
            <div className="LastNameContainer">
              <label className="LastNameLabel">
                Last Name:
                <input
                  type="text"
                  className="LastNameInput"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                />
              </label>
            </div>
            <div className="EmailContainer">
              <label className="EmailLabel">
                Email:
                <input
                  type="email"
                  className="EmailInput"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </label>
            </div>
            <div className="MobileNumberContainer">
              <label className="MobileNumberLabel">
                Mobile Number:
                <input
                  type="tel"
                  className="MobileNumberInput"
                  value={mobileNumber}
                  onChange={(event) => setMobileNumber(event.target.value)}
                />
              </label>
            </div>
            <div className="ButtonContainer">
              <button
                type="submit"
                className="SaveButton"
                onClick={handleSubmit}
                style={{ marginRight: "10px" }}
              >
                Save{" "}
                <img
                  src={saveIcon}
                  alt="Pending"
                  style={{ paddingLeft: "5px" }}
                />
              </button>
              <button
                type="button"
                className="CancelButton"
                onClick={handleCancel}
              >
                Cancel{" "}
                <img
                  src={cancelIcon}
                  alt="Pending"
                  style={{ paddingLeft: "5px" }}
                />
              </button>
            </div>
          </div>

          <div className="RightSideContainer">
            <div className="ProPicContainer">
              <img
                className="ProfilePic"
                alt=""
                src={profilePicture ? URL.createObjectURL(profilePicture) : ""}
                style={{
                  maxWidth: "100%",
                  maxHeight: "200px",
                  objectFit: "cover",
                }}
              />
            </div>
            <label className="ProPicFileTypeContainer">
              <input
                type="file"
                accept=".jpg,.png"
                onChange={handleProfilePictureChange}
                style={{ display: "none" }}
              />
              <img
                src={cameraIcon}
                alt="file upload icon"
                className="cameraIcon"
                onClick={() => {
                  document
                    .querySelector(".ProPicFileTypeContainer input")
                    .click();
                }}
              />
              <div className="infoText">
                <img
                  src={infoIcon2}
                  alt="Need More Info"
                  className="infoIcon"
                />
                JPG/PNG images accepted.
              </div>
            </label>

            <div className="ProfileDetailsContainer">
              <div className="DisplayFullName">{`${firstName} ${lastName}`}</div>
              <div className="DisplayEmailAddress">
                <img
                  src={envelope}
                  alt="Emai;"
                  className="emailIcon"
                />{" "}
                {email}
              </div>
              <div className="DisplayMobileNumber">
                <img src={phone} alt="Pending" />
                {mobileNumber}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfileDetails;
