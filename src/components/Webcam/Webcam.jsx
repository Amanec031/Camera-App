
import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: 'user'
};

const WebcamCapture = () => {
    // const [image, setImage] = useState(null);
    const webcamRef = useRef(null);

    // const handleCapture = () => {
    //     const imageSrc = webcamRef.current.getScreenshot();
    //     // setImage(imageSrc);
    // };

    return (
        <div className="webcam-container">
            <div className="webcam-img">
                <Webcam
                    audio={false}
                    height={200}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={220}
                    videoConstraints={videoConstraints}
                />
            </div>
            <div>
                <button className="webcam-btn">Capture</button>
            </div>
        </div>
    );
};

export default WebcamCapture; // Export as default
