import React, { useState } from 'react';
import './homeStyles.css';
import WebcamCapture from '../Webcam/Webcam'; // Changed import statement

const Home = () => {
    const [complaint, setComplaint] = useState('');
    const [section, setSection] = useState('');
    const [capturedImage, setCapturedImage] = useState(null);

    const submitForm = (e) => {
        e.preventDefault();
        // alert("Form submitted");
        const formData = new FormData();
        
        // Append complaint and section to the FormData
        formData.append('complaint', complaint);
        formData.append('section', section);
        
        // Append captured image to the FormData
        if (capturedImage) {
            formData.append('photo', capturedImage);
        }
        
        // Example: Sending the form data using fetch
        fetch('your-api-endpoint', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle response from server
            console.log('Form submitted successfully:', data);
        })
        .catch(error => {
            console.error('Error submitting form:', error);
        });
    };

    // const handleSectionChange = (e) => {
    //     setSection(e.target.value);
    // };

    return (
        <div className="home-container">
            <div className="container">
                <div className="text">
                    <h1>Fill up this form!</h1>
                    <form className="form" onSubmit={submitForm}>
                        <WebcamCapture onImageCaptured={setCapturedImage}/> 
                        <div className="complaint-section">
                            <textarea
                                placeholder="Write your complaint..."
                                value={complaint}
                                onChange={(e) => setComplaint(e.target.value)}
                            />
                        </div>
                        <div className="dropdown-section">
                            <select value={section} onChange={(E) => setSection(E.target.value)}>
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
