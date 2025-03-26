import React, { useState } from 'react';
import Nav from '../Components/Navbar';
import Footer from './Footer';
import './Report.css';
import { useNavigate } from 'react-router-dom';

const Report = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [issueType, setIssueType] = useState('');
  const [issueTitle, setIssueTitle] = useState('');
  const [issueDescription, setIssueDescription] = useState('');
  const [issueLocation, setIssueLocation] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const errors = {};

    if (!name.trim()) errors.name = 'Field is required';
    if (!address.trim()) errors.address = 'Field is required';
    if (!mobile.trim()) errors.mobile = 'Field is required';
    if (!issueType.trim()) errors.issueType = 'Field is required';
    if (!issueTitle.trim()) errors.issueTitle = 'Field is required';
    if (!issueDescription.trim()) errors.issueDescription = 'Field is required';
    if (!issueLocation.trim()) errors.issueLocation = 'Field is required';

    setValidationErrors(errors);

    if (Object.keys(errors).length > 0) return;

    try {
      const res = await fetch('http://localhost:5017/api/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          reporterName: name,
          address,
          mobile,
          issueType,
          issueTitle,
          issueDescription,
          issueLocation,
          imageUrl: ''
        })
      });

      const data = await res.json();
      if (res.status === 201) {
        navigate('/thankyou');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert('Error submitting report.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Nav />
      <div className='main'>
        <div className='one'>
          <h1 style={{ color: 'rgb(0,52,105)' }}>Report an Issue</h1>
          <hr />

          <label>Name of the Reporter:</label>
          <input type='text' placeholder='Type your name here' onChange={(e) => setName(e.target.value)} />
          {validationErrors.name && <span className="error" style={{ color: "red" }}>{validationErrors.name}</span>}

          <label>Address of the Reporter:</label>
          <input type='text' placeholder='Enter your address' onChange={(e) => setAddress(e.target.value)} />
          {validationErrors.address && <span className="error" style={{ color: "red" }}>{validationErrors.address}</span>}

          <label>Mobile Number of the Reporter:</label>
          <input type='text' placeholder='Enter your mobile number' onChange={(e) => setMobile(e.target.value)} />
          {validationErrors.mobile && <span className="error" style={{ color: "red" }}>{validationErrors.mobile}</span>}

          <label>Type of Issue:</label>
          <select style={{ width: "80vh" }} onChange={(e) => setIssueType(e.target.value)} value={issueType}>
            <option value=''>-- Select Issue Type --</option>
            <option value='pothole'>Pothole</option>
            <option value='streetlight'>Broken Streetlight</option>
            <option value='graffiti'>Graffiti</option>
            <option value='trash'>Illegal Dumping</option>
            <option value='sidewalk'>Damaged Sidewalk</option>
            <option value='other'>Other</option>
          </select>
          {validationErrors.issueType && <span className="error" style={{ color: "red" }}>{validationErrors.issueType}</span>}

          <label>Title of the Issue:</label>
          <input type='text' placeholder='Brief description of the issue' onChange={(e) => setIssueTitle(e.target.value)} />
          {validationErrors.issueTitle && <span className="error" style={{ color: "red" }}>{validationErrors.issueTitle}</span>}

          <label>Description of the Issue:</label>
          <textarea placeholder='Enter the description of the issue' onChange={(e) => setIssueDescription(e.target.value)} />
          {validationErrors.issueDescription && <span className="error" style={{ color: "red" }}>{validationErrors.issueDescription}</span>}

          <label>Issue Location:</label>
          <input type='text' placeholder='Enter the location of issue spotted' onChange={(e) => setIssueLocation(e.target.value)} />
          {validationErrors.issueLocation && <span className="error" style={{ color: "red" }}>{validationErrors.issueLocation}</span>}

          <label>Upload images of the reported issues:</label>
          <input type='file' />

          <button style={{ marginBottom: '30px' }} type='submit' onClick={handleSubmit}>Submit Report</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Report;
