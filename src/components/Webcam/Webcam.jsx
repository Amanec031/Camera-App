

// import React, { useState, useCallback } from 'react';
// import Webcam from 'react-webcam';

// const videoConstraints = {
//     width: 220,
//     height: 200,
//     facingMode: "user"
// };

// export const WebcamCapture = () => { // Export WebcamCapture as named export
//     const [image, setImage] = useState('');
//     const webcamRef = React.useRef(null);

//     const capture = useCallback(() => {
//         const imageSrc = webcamRef.current.getScreenshot();
//         setImage(imageSrc);
//     }, [webcamRef]);

//     return (
//         <div className="webcam-container">
//             <div className="webcam-img">
//                 {image === '' ? (
//                     <Webcam
//                         audio={false}
//                         height={200}
//                         ref={webcamRef}
//                         screenshotFormat="image/jpeg"
//                         width={220}
//                         videoConstraints={videoConstraints}
//                     />
//                 ) : (
//                     <img src={image} alt="Captured" />
//                 )}
//             </div>
//             <div>
//                 {image !== '' ? (
//                     <button onClick={(e) => {
//                         e.preventDefault();
//                         setImage('');
//                     }} className="webcam-btn">Retake Image</button>
//                 ) : (
//                     <button onClick={(e) => {
//                         e.preventDefault();
//                         capture();
//                     }} className="webcam-btn">Capture</button>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default WebcamCapture; // Also export WebcamCapture as default export


// import React, { useState, useRef, useCallback } from 'react';
// import Webcam from 'react-webcam';

// const videoConstraints = {
//     width: 220,
//     height: 200,
//     facingMode: "user"
// };

// const WebcamCapture = ({ onCapture }) => {
//     const [image, setImage] = useState('');
//     const webcamRef = useRef(null);

//     const capture = useCallback(() => {
//         const imageSrc = webcamRef.current.getScreenshot();
//         setImage(imageSrc);
//         onCapture(imageSrc);
//     }, [webcamRef,onCapture]);

//     return (
//         <div className="webcam-container">
//             <div className="webcam-img">
//                 {image === '' ? (
//                     <Webcam
//                         audio={false}
//                         height={200}
//                         ref={webcamRef}
//                         screenshotFormat="image/jpeg"
//                         width={220}
//                         videoConstraints={videoConstraints}
//                     />
//                 ) : (
//                     <img src={image} alt="Captured" />
//                 )}
//             </div>
//             <div>
//                 {image !== '' ? (
//                     <button onClick={(e) => {
//                         e.preventDefault();
//                         setImage('');
//                     }} className="webcam-btn">Retake Image</button>
//                 ) : (
//                     <button onClick={(e) => {
//                         e.preventDefault();
//                         capture();
//                     }} className="webcam-btn">Capture</button>
//                 )}
//             </div>
//         </div>
//     );
// };

// export { WebcamCapture };

import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: 'user'
};

export const WebcamCapture = () => {
    const [image, setImage] = useState(null);
    const webcamRef = useRef(null);

    const handleCapture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc);
    };

    const handleImageUpload = () => {
        if (image) {
            const formData = new FormData();
            const fileName = 'webcam_capture.jpeg';
            formData.append('file', dataURLtoFile(image, fileName));

            fetch('https://trickuweb.com/upload/profile_pic', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(result => {
                    console.log(result);
                    // Handle the uploaded image URL here
                })
                .catch(error => {
                    console.error('Error uploading image:', error);
                });
        } else {
            console.log('No image captured.');
        }
    };

    const handleClick = () => {
        handleCapture();
    };

    const dataURLtoFile = (dataUrl, filename) => {
        const arr = dataUrl.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    };

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
                <button onClick={handleClick} className="webcam-btn">Capture</button>
                <button onClick={handleImageUpload} className="webcam-btn">Upload</button>
            </div>
        </div>
    );
};

export default WebcamCapture;
