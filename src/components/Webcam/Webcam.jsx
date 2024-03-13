

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


import React, { useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user"
};

const WebcamCapture = ({ onCapture }) => {
    const [image, setImage] = useState('');
    const webcamRef = useRef(null);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc);
        onCapture(imageSrc);
    }, [webcamRef, onCapture]);

    return (
        <div className="webcam-container">
            <div className="webcam-img">
                {image === '' ? (
                    <Webcam
                        audio={false}
                        height={200}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width={220}
                        videoConstraints={videoConstraints}
                    />
                ) : (
                    <img src={image} alt="Captured" />
                )}
            </div>
            <div>
                {image !== '' ? (
                    <button onClick={(e) => {
                        e.preventDefault();
                        setImage('');
                    }} className="webcam-btn">Retake Image</button>
                ) : (
                    <button onClick={(e) => {
                        e.preventDefault();
                        capture();
                    }} className="webcam-btn">Capture</button>
                )}
            </div>
        </div>
    );
};

export { WebcamCapture };

