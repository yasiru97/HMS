import React, { useState, useEffect } from "react";
import image1 from '../images/footer.jpg';

import UserService from "../services/user.service";
import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    // <div className="container">
    //   <header className="jumbotron">
    //     <h3>content</h3>
    //   </header>
    // </div>
   <div>
    <div className='home-page'>
    <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
      <div className='container d-flex flex-column align-items-center'>
        <h2>Welcome to</h2>
        <h1 className='text-center fw-semibold'>Hostel Management System</h1>
        <p>Sabaragamuwa University of Sri Lanka</p>
        <div className='d-flex flex-column flex-sm-row align-items-center'>
          <Link to="/components">
            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Login</button>
          </Link>
          <Link to="/contact">
            <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
          </Link>
        </div>
      </div>
      </header>
      </div>
      <div>
        <section>
          <h>Hostel Facilities</h>
        </section>
      </div>
      <section>
      <footer>
        <div className='container-fluid p-0 overflow-hidden d-flex flex-column align-items-center' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), 
        rgba(0, 0, 0, 0.8)), url(${image1})`, backgroundSize: 'cover', width: '100vw', height: '300px' }}>

          <div className='row py-5'>
            <div className='col-md-6 col-sm-12 text-white'>
              {/* <img
              src={logo}
              height="30"
              className="d-inline-block align-top bg-white"
            /> */}
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
              <p style={{ color: 'white', paddingLeft: '10px', fontSize: '10px', textTransform: 'lowercase' }}><i class="fa-regular fa-envelope"></i>&nbsp; &nbsp; &nbsp;gt@gangaramaya.com</p>
              <p style={{ color: 'white', paddingLeft: '10px', fontSize: '10px' }}><i class="fa-solid fa-location-pin"></i>&nbsp; &nbsp; &nbsp;Gangaramaya, <br></br>61, Sri Jinarathana Rd,<br></br>Colombo 2, Sri Lanka</p>
              <p style={{ color: 'white', paddingLeft: '10px', fontSize: '10px' }}><i class="fa-solid fa-phone"></i>&nbsp; &nbsp; &nbsp;(+94) 11 2435169<br></br>
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

export default Home;
