import React, { useState, useEffect } from "react";


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
          <br></br>
          <h3 className="text-center">Hostel Facilities</h3>
          <br></br>
        </section>
      </div>
      
      </div>
  );
};

export default Home;
