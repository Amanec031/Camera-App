import React, { useState, useRef } from 'react';

const App = () => {
  const videoRef = useRef(null);
  const [photoData, setPhotoData] = useState(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const takePhoto = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0);

    const dataUrl = canvas.toDataURL('image/jpeg');
    setPhotoData(dataUrl);
  };

  return (
    <div>
      <button onClick={startCamera}>Start Camera</button>
      <button onClick={takePhoto}>Take Photo</button>
      <br />
      <video ref={videoRef} autoPlay />
      {photoData && <img src={photoData} alt="Captured" />}
    </div>
  );
};

export default App;
