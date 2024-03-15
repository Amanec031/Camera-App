import React, { useState } from 'react';
import './homeStyles.css';
import WebcamCapture from '../Webcam/Webcam'; // Changed import statement

const Home = () => {
    const [complaint, setComplaint] = useState('');
    const [section, setSection] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        // alert("Form submitted");
        setComplaint('');
        setSection('');
    };

    const handleSectionChange = (e) => {
        setSection(e.target.value);
    };

    return (
        <div className="home-container">
            <div className="container">
                <div className="text">
                    <h1>Fill up this form!</h1>
                    <form className="form" onSubmit={submitForm}>
                        <WebcamCapture /> {/* Changed component name */}
                        <div className="complaint-section">
                            <textarea
                                placeholder="Write your complaint..."
                                value={complaint}
                                onChange={(e) => setComplaint(e.target.value)}
                            />
                        </div>
                        <div className="dropdown-section">
                            <select value={section} onChange={handleSectionChange}>
                                <option value="">Select Section</option>
                                <option value="Sanitation and Toiletry">Sanitation and Toiletry</option>
                                <option value="Health and Medical">Health and Medical</option>
                                <option value="Fire">Fire</option>
                            </select>
                        </div>
                        <button type="submit" id="login-button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;
