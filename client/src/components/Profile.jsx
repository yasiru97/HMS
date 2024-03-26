import React, { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  const [userDetailsData, setUserDetailsData] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await UserService.getCurrentUserDetailsById(currentUser.id);
        setUserDetailsData(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  let usertype = "";
  if (currentUser.roles[0] === "ROLE_USER") {
    usertype = "Student";
  } else if (currentUser.roles[0] === "ROLE_MODERATOR") {
    usertype = "Staff";
  } else if (currentUser.roles[0] === "ROLE_ADMIN") {
    usertype = "Admin";
  }

  return (
    <div className="container-fluid">
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container">
          <h3 className="text-center pt-5">Profile</h3>

          <div className="row">
          {userDetailsData && (
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: 150 }}
                  />
                 
                  <h5 className="my-3">{userDetailsData.firstname}&nbsp;{userDetailsData.lastname}</h5>
                  <p className="text-muted mb-1">{usertype}</p> 
                </div>
              </div>
            </div>)}
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <h5>General Info</h5><br></br>
                  {userDetailsData && (
                    <div>
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Full Name</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{userDetailsData.firstname}&nbsp;{userDetailsData.lastname}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Email</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{userDetailsData.email}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Phone</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{userDetailsData.phone}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
      </section>
    </div>
  );
};

export default Profile;
