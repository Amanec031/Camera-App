import React, { useRef } from 'react';

function Camera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      videoRef.current.srcObject = stream;
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  const takePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert the canvas image to a data URL
    const photo = canvas.toDataURL('image/jpeg');

    // You can now use this photo data URL as needed, such as uploading it to a server
    console.log('Photo taken:', photo);
  };

  return (
    <div>
      <button onClick={startCamera}>Start Camera</button>
      <button onClick={takePhoto}>Take Photo</button>
      <video ref={videoRef} autoPlay style={{ width: '100%', maxWidth: '500px', maxHeight: '500px' }} />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
}

export default Camera;
