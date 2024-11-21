import React, { useState } from 'react';
import './VehicleRegistration.css';

const VehicleRegistration = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    ownerName: '',
    ownerCategory: '',
    ownerAddress: '',
    ownerContact: '',
    ownerEmail: '',
    ownerAadhar: '',
    ownerPAN: '',
    vehicleType: '',
    registrationNumber: '',
    insuranceDetails: '',
    photo: null,
    idProof: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration process completed successfully!');
  };

  const handleStepClick = (stepIndex) => setCurrentStep(stepIndex);

  return (
    <div className="vehicle-registration-container">
      <h1 className="heading">Vehicle Registration Process</h1>

      <div className="form-container">
      {currentStep === 0 && (
          <form onSubmit={(e) => { e.preventDefault(); handleStepClick(1); }}>
            <h2>Owner Details</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="ownerName">Owner Name:</label>
                <input
                  type="text"
                  id="ownerName"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="ownerCategory">Owner Category:</label>
                <select
                  id="ownerCategory"
                  name="ownerCategory"
                  value={formData.ownerCategory}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Individual">Individual</option>
                  <option value="Business">Business</option>
                  <option value="Government">Government</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="ownerAddress">Owner Address:</label>
                <input
                  type="text"
                  id="ownerAddress"
                  name="ownerAddress"
                  value={formData.ownerAddress}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="ownerContact">Mobile Number:</label>
                <input
                  type="tel"
                  id="ownerContact"
                  name="ownerContact"
                  value={formData.ownerContact}
                  onChange={handleInputChange}
                  required
                  pattern="[0-9]{10}"
                />
                <small>Format: 1234567890</small>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="ownerEmail">Email ID:</label>
                <input
                  type="email"
                  id="ownerEmail"
                  name="ownerEmail"
                  value={formData.ownerEmail}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="ownerAadhar">Aadhar Number:</label>
                <input
                  type="text"
                  id="ownerAadhar"
                  name="ownerAadhar"
                  value={formData.ownerAadhar}
                  onChange={handleInputChange}
                  required
                  pattern="[0-9]{12}"
                />
                <small>Format: 1234 5678 9012</small>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="ownerPAN">PAN Number:</label>
                <input
                  type="text"
                  id="ownerPAN"
                  name="ownerPAN"
                  value={formData.ownerPAN}
                  onChange={handleInputChange}
                  required
                />
                <small>Format: ABCDE1234F</small>
              </div>
            </div>

            <button type="submit" className="btn btn-next">Next</button>
          </form>
        )}


{currentStep === 1 && (
          <form onSubmit={(e) => { e.preventDefault(); handleStepClick(2); }}>
            <h2>Vehicle Details</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="vehicleType">Vehicle Type:</label>
                <input
                  type="text"
                  id="vehicleType"
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="vehicleModel">Vehicle Model:</label>
                <input
                  type="text"
                  id="vehicleModel"
                  name="vehicleModel"
                  value={formData.vehicleModel}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="yearOfManufacture">Year of Manufacture:</label>
                <input
                  type="number"
                  id="yearOfManufacture"
                  name="yearOfManufacture"
                  value={formData.yearOfManufacture}
                  onChange={handleInputChange}
                  required
                  min="1900" // Adjust as necessary
                  max={new Date().getFullYear()} // Current year
                />
              </div>

              <div className="form-group">
                <label htmlFor="insuranceDetails">Insurance Details:</label>
                <input
                  type="text"
                  id="insuranceDetails"
                  name="insuranceDetails"
                  value={formData.insuranceDetails}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="vehicleIDNumber">Vehicle ID Number:</label>
                <input
                  type="text"
                  id="vehicleIDNumber"
                  name="vehicleIDNumber"
                  value={formData.vehicleIDNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="engineNumber">Engine Number:</label>
                <input
                  type="text"
                  id="engineNumber"
                  name="engineNumber"
                  value={formData.engineNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fuelType">Fuel Type:</label>
                <select
                  id="fuelType"
                  name="fuelType"
                  value={formData.fuelType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Fuel Type</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Electric">Electric</option>
                  <option value="CNG">CNG</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn btn-next">Next</button>
          </form>
        )}


        {currentStep === 2 && (
          <form onSubmit={handleSubmit}>
            <h2>Payment & Confirmation</h2>
            <div className="form-group">
              <label htmlFor="registrationNumber">Registration Number:</label>
              <input
                type="text"
                id="registrationNumber"
                name="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default VehicleRegistration;
