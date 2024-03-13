

// import React, { useState } from 'react';
// import './homeStyles.css';
// import { WebcamCapture } from '../Webcam/Webcam'; // Import WebcamCapture as named export

// const Home = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');

//     const submitForm = (e) => {
//         e.preventDefault();
//         alert("Form submitted");
//         setName('');
//         setEmail('');
//     };

//     return (
//         <div className="home-container">
//             <div className="container">
//                 <div className="text">
//                     <h1>Fill up this form!</h1>
//                     <form className="form" onSubmit={submitForm}>
//                         <WebcamCapture />
//                         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                         <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
//                         <button type="submit" id="login-button">Submit</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;

import React, { useState } from 'react';
import './homeStyles.css';
import { WebcamCapture } from '../Webcam/Webcam';

const Home = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        alert("Form submitted");
        setName('');
        setEmail('');
        setImage('');
    };

    const handleCapture = (imageSrc) => {
        setImage(imageSrc);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result);
        };
    };

    return (
        <div className="home-container">
            <div className="container">
                <div className="text">
                    <h1>Fill up this form!</h1>
                    <form className="form" onSubmit={submitForm}>
                        <WebcamCapture onCapture={handleCapture} />
                        <label htmlFor="upload-button" className="upload-label">
                            Upload Image
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            id="upload-button"
                            capture="environment"
                            className="upload-input"
                        />
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                        <button type="submit" id="login-button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;

