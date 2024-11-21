import React, { useState } from 'react';
import './VehiclePermit.css';

const VehiclePermit = () => {
  const [formData, setFormData] = useState({
    applicantName: '',
    vehicleMake: '',  // Vehicle make (e.g., Toyota, Ford)
    vehicleModel: '',  // Vehicle model (e.g., Camry, F-150)
    yearOfManufacture: '', // Year of manufacture
    vehicleVIN: '', // Vehicle Identification Number (VIN)
    licensePlate: '', // License plate number (if applicable)
    vehicleColor: '', // Color of the vehicle
    ownerName: '', // Owner's name
    phoneNumber: '', // Phone number
    email: '', // Email address
    address: '', // Address
    city: '', // City
    state: '', // State
    idProof: null, // ID proof
    insurance: null, // Insurance document
    odometerReading: '', // Odometer reading (if applicable)
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Vehicle Permit Application submitted successfully!');
    // Here you can also send formData to a server or perform other actions.
  };

  return (
    <div className="vehicle-permit-container">
      <h1 className="heading">Vehicle Permit Application</h1>
      <p className="paragraph">
        Applying for a vehicle permit is essential for legal and safe driving on the roads. 
        This application process is straightforward and requires you to provide the necessary 
        details about your vehicle and upload the required documents. Once submitted, 
        you will receive information about the next steps. Start your journey towards 
        compliant driving by applying for your vehicle permit today!
      </p>

      <p className="instructions">
        Instructions for Application Submission:<br />
        Follow these steps to complete your vehicle permit application:<br />
        1. Fill in the application details.<br />
        2. Upload required documents (ID proof, insurance, etc.).<br />
        3. Pay the applicable fees.<br />
        4. Verify the payment status.<br />
        5. Print the receipt.<br />
        <strong>NOTE:</strong> Ensure all information is accurate to avoid delays.
      </p>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {/* Personal Information */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="applicantName">Applicant Name:</label>
              <input
                type="text"
                id="applicantName"
                name="applicantName"
                value={formData.applicantName}
                onChange={handleInputChange}
                required
                minLength="2"
              />
            </div>
          </div>

          {/* Vehicle Information */}
          <div className="form-row">
           
           

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
                min="1900"
                max={new Date().getFullYear()} // Prevent future dates
              />
            </div>

            <div className="form-group">
              <label htmlFor="vehicleVIN">Vehicle Identification Number (VIN):</label>
              <input
                type="text"
                id="vehicleVIN"
                name="vehicleVIN"
                value={formData.vehicleVIN}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

         

          {/* Ownership Information */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="ownerName">Owner's Name:</label>
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
              <label htmlFor="odometerReading">Odometer Reading:</label>
              <input
                type="number"
                id="odometerReading"
                name="odometerReading"
                value={formData.odometerReading}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                pattern="[0-9]{10}"
              />
              <small>Format: 1234567890</small>
            </div>

            <div className="form-group">
            <label htmlFor="state">State:</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          {/* Address Information */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
           

          
          </div>

          {/* Document Uploads */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="idProof">Upload ID Proof:</label>
              <input
                type="file"
                id="idProof"
                name="idProof"
                onChange={handleFileChange}
                required
                accept="image/*,application/pdf"
              />
            </div>

            <div className="form-group">
              <label htmlFor="insurance">Upload Insurance Document:</label>
              <input
                type="file"
                id="insurance"
                name="insurance"
                onChange={handleFileChange}
                required
                accept="image/*,application/pdf"
              />
            </div>
          </div>
          
          {/* Submit Button */}
          <button type='submit' className="btn btn-gradient btn-glow">APPLY</button>
        </form>
      </div>
    </div>
  );
}

export default VehiclePermit;
