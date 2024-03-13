import React, { useState, useRef } from 'react';

const App = () => {
  const [isCameraOn, setIsCameraOn] = useState(false);
  const videoRef = useRef(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      videoRef.current.srcObject = stream;
      setIsCameraOn(true);
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setIsCameraOn(false);
    }
  };

  const takePhoto = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const photoURL = canvas.toDataURL('image/png');
    // Here, you can save the photoURL or do whatever you want with it.
  };

  return (
    <div>
      {isCameraOn ? (
        <div>
          <video ref={videoRef} autoPlay playsInline />
          <button onClick={takePhoto}>Take Photo</button>
          <button onClick={stopCamera}>Stop Camera</button>
        </div>
      ) : (
        <button onClick={startCamera}>Start Camera</button>
      )}
    </div>
  );
};

export default App;
