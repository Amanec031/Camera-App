import React, { useRef, useState } from 'react';


const WebcamCapture = ({ onImageCaptured }) => {
    // const [image, se}tImage] = useState(null);
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    // const handleCapture = () => {
    //     const imageSrc = webcamRef.current.getScreenshot();
    //     // setImage(imageSrc);
    // };

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
            webcamRef.current.srcObject = stream;
        } catch (err) {
            console.error('Error accessing camera:', err);
        }
    };

    const takePhoto = () => {
        const video = webcamRef.current;
        const canvas = canvasRef.current;

        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Convert the canvas image to a data URL
        const photo = canvas.toDataURL('image/jpeg');

        if (onImageCaptured) {
            onImageCaptured(photo);
        }
    };


    return (
        <div className="webcam-container">
            <div>
                <button onClick={startCamera}>Start Camera</button>
                <button onClick={takePhoto}>Take Photo</button>
                <video ref={webcamRef} autoPlay style={{ width: '100%', maxWidth: '500px', maxHeight: '500px' }} />
                <canvas ref={canvasRef} style={{ display: 'none' }} width={640} height={480} />
            </div>
        </div>
    );
};

export default WebcamCapture; // Export as default
