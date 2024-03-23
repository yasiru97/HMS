import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import image1 from './images/footer.jpg';

import AuthService from "./services/auth.service";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";


import EventBus from "./common/EventBus";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-md navbar-light bg-light py-0">
        <Link to={"/home"} className="navbar-brand">
          <img src="https://www.sab.ac.lk/sites/default/files/susl-logo-new.png" width="100%" height="80" className="d-inline-block align-top" alt="logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Contact
              </Link>
            </li>
           
            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}
            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}
            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </ul>

          {currentUser ? (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {/* {currentUser.username} */}Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/login"} className="nav-link" onClick={logOut}>
                  Sign Out
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Sign In
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li> */}
            </ul>
          )}
        </div>
      </nav>

      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/user" component={BoardUser} />
        <Route path="/mod" component={BoardModerator} />
        <Route path="/admin" component={BoardAdmin} />
      </Switch>

      <section>
        <footer>
          <div className='container-fluid p-0 overflow-hidden d-flex flex-column align-items-center' style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), 
        rgba(0, 0, 0, 0.8)), url(${image1})`, backgroundSize: 'cover', width: '100%', height: '300px'
          }}>

            <div className='row py-5'>
              <div className='col-md-6 col-sm-12 text-white'>
          
                <br></br><br></br>
                <p style={{ fontSize: '11px', paddingRight: '4cm', paddingLeft: '1cm' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
                  dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
                  praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                  Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
              </div>
              <div className='col-md-3 col-sm-12'>
                <h4 className='text-warning'>Quick Links</h4>
                <ul>
                  <li style={{ color: 'white', paddingLeft: '20px', listStyleType: 'square' }}>Donation</li><br></br>
                  <li style={{ color: 'white', paddingLeft: '20px', listStyleType: 'square' }}>Eco Tourism Reservation</li><br></br>
                  <li style={{ color: 'white', paddingLeft: '20px', listStyleType: 'square' }}>Live TV</li><br></br>
                  <li style={{ color: 'white', paddingLeft: '20px', listStyleType: 'square' }}>Contact Us</li><br></br>
                </ul>
              </div>
              <div className='col-md-3 col-sm-12'>
                <h4 className='text-warning'>Contact Us</h4>
                <p style={{ color: 'white', paddingLeft: '10px', fontSize: '10px', textTransform: 'lowercase' }}><i className="fa-regular fa-envelope"></i>&nbsp; &nbsp; &nbsp;gt@gangaramaya.com</p>
                <p style={{ color: 'white', paddingLeft: '10px', fontSize: '10px' }}><i className="fa-solid fa-location-pin"></i>&nbsp; &nbsp; &nbsp;Gangaramaya, <br></br>61, Sri Jinarathana Rd,<br></br>Colombo 2, Sri Lanka</p>
                <p style={{ color: 'white', paddingLeft: '10px', fontSize: '10px' }}><i className="fa-solid fa-phone"></i>&nbsp; &nbsp; &nbsp;(+94) 11 2435169<br></br>
                  (+94) 11 232 7084<br></br>
                  (+94) 11 2459622</p>
              </div>
            </div>
          </div>
        </footer>
      </section>


    </div>
  );
};

export default App;
