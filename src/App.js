// import React, { useRef } from 'react';


// function Camera() {
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);

//   const startCamera = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
//       videoRef.current.srcObject = stream;
//     } catch (err) {
//       console.error('Error accessing camera:', err);
//     }
//   };

//   const takePhoto = () => {
//     const video = videoRef.current;
//     const canvas = canvasRef.current;

//     const context = canvas.getContext('2d');
//     context.drawImage(video, 0, 0, canvas.width, canvas.height);

//     // Convert the canvas image to a data URL
//     const photo = canvas.toDataURL('image/jpeg');

//     // Create a link element to download the photo
//     const link = document.createElement('a');
//     link.href = photo;
//     link.download = 'photo.jpeg';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div>
//       <button onClick={startCamera}>Start Camera</button>
//       <button onClick={takePhoto}>Take Photo</button>
//       <video ref={videoRef} autoPlay style={{ width: '100%', maxWidth: '500px', maxHeight: '500px' }} />
//       <canvas ref={canvasRef} style={{ display: 'none' }} width={640} height={480} />
//     </div>
//   );
// }

// export default Camera;

import './App.css';
import Home from './components/Home/Home'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
