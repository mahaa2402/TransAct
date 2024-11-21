import React from 'react';
import './VehicleService.css';
import { useNavigate } from 'react-router-dom';

function Service() {
  const navigate = useNavigate();

  const LicenseDetails = () => {
    navigate('/VehicleRegistration');
  };

  const DriverLicenseDetails = () => {
    navigate('/VehicleInspectionServices');
  };

  const AppointmentDetails = () => {
    navigate('/VehiclePermit');
  };

  const DuplicateLicenseDetails = () => {
    navigate('/Duplicatelicense');
  };

  return (
    <div className="main">
      <h1 className="title2">Vehicle Related Services</h1>

      <div className="service-container">
        <div className="service-box">
          <img
            src="https://www.shutterstock.com/image-vector/driver-license-icon-vector-isolated-260nw-1782325556.jpg"
            alt="Learners License"
          />
          <h1>Vehicle Registration</h1>
          <p>License Registration on your Fingerprints.</p>
          <button className="btn btn-gradient btn-glow" onClick={LicenseDetails}>
            More
          </button>
        </div>

        <div className="service-box">
          <img
            src="data:image/png;base64,iVBOR..."
            alt="Driving License"
          />
          <h1>Vehicle Inspection</h1>
          <p>One click for all vehicle-related registrations.</p>
          <button className="btn btn-gradient btn-glow" onClick={DriverLicenseDetails}>
            More
          </button>
        </div>

        <div className="service-box">
          <img
            src="https://www.example.com/appointment-icon.jpg"
            alt="Appointments"
          />
          <h1>Vehicle Permit</h1>
          <p>Make Vehicle Permits at ease</p>
          <button className="btn btn-gradient btn-glow" onClick={AppointmentDetails}>
            More
          </button>
        </div>

        <div className="service-box">
          <img
            src="https://www.example.com/duplicate-license-icon.jpg"
            alt="Duplicate License"
          />
          <h1>Duplicate License</h1>
          <p>Get a duplicate license with ease.</p>
          <button className="btn btn-gradient btn-glow" onClick={DuplicateLicenseDetails}>
            More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Service;
