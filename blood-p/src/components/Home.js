import React from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './home.css';
import logo from './icon-droplet.png';
import handHeart from './icon-hand-heart.png';
import cal from './icon-eight-weeks.png';
function Home() {
  return (
    <>
      <div className="home">
        <div className="secContainer container">
          <div className="homeText">
            <h1 className="title">
              Donate Blood and Save Life
            </h1>
            <Button variant="danger" className='btn'>Donate Blood</Button>{' '}
          </div>

        </div>

      </div>
      <div>
        <div className="homecard-grid">
          <div className="locationDiv">
            <Form.Label htmlFor="Blood Group">Blood Group</Form.Label>
            <Form.Select className="select" defaultValue="Select..." placeholder='BloodGroup'>
              <option>Select---</option>
              <option>A-</option>
              <option>A+</option>
              <option value="">B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option value="">AB-</option>
              <option>O+</option>
              <option>O-</option>
            </Form.Select>
          </div>

          <div className="distDiv">
            <Form.Label htmlFor="pincode">Pin Code</Form.Label>
            <input className="input" type="text" placeholder='PinCode' />
          </div>

          <div>
            <Button variant="danger" className='btn' id='bm' > Search </Button>{' '}
          </div>

        </div>
      </div>
      <div className="three-card">
        <div className="card" style={{ backgroundColor: '#cc4b00' }}>
          <div className="card-head">
            <img id="img" src={logo} alt="Logo" />
            <h2>Register for Blood Donation</h2>
          </div>
          <div className="p-btn">
            <p style={{ color: 'white' }}>Register yourself to find the nearest blood donation center or blood drive near you.</p>
            <Link to={"/Register"}>
              <Button variant="danger" className='btn' id='bm-card' style={{ color: '#cc4b00' }}> Donate</Button>
            </Link>
          </div>
        </div>

        <div className="card" style={{ backgroundColor: '#ffa300' }}>
          <div className="card-head">
            <img id="img" src={handHeart} alt="Logo" />
            <h2>Learn about donating blood</h2>
          </div>
          <div className="p-btn">
            <p style={{ color: 'white' }}>Learn about every step in our simple blood donation process and what to expect.</p>
            <Button variant="danger" className='btn' id='bm-card' style={{ color: '#ffa300' }} > Search </Button>{' '}
          </div>
        </div>

        <div className="card" style={{ backgroundColor: '#722282' }}>
          <div className="card-head">
            <img id="img" src={cal} alt="Logo" />
            <h2>Are you eligible for donation ?</h2>
          </div>
          <div className="p-btn">
            <p style={{ color: 'white' }}>Donating blood is safe and easy to do. Find out the general eligibility criteria.</p>
            <Button variant="danger" className='btn' id='bm-card' style={{ color: '#722282' }}> Search </Button>{' '}
          </div>
        </div >

      </div >
    </>
  );
}

export default Home;