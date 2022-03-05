import React, { useState } from 'react';
import Webcam from "react-webcam";
import {Button} from '@material-ui/core';
 
const WebcamComponent = () => <Webcam />;
 
const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user"
};
 
export const WebcamCapture = () => {
 
    const [image,setImage]=useState('');
    const webcamRef = React.useRef(null);
 
     
    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)
        });
 
 
    return (
        <div className="webcam-container">
            <div className="webcam-img">
                     
                {image == '' ? <Webcam
                    audio={false}
                    height={210}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={210}
                    videoConstraints={videoConstraints}
                /> : <img src={image} />}
            </div>
            <div className="ImageCam">
                 
                {image != '' ?
                    <Button variant="contained"  color="secondary" size="small" onClick={(e) => {
                        e.preventDefault();
                        setImage('')
                    }}
                        className="webcam-btn">
                        Retake Image</Button> :
                    <Button variant="contained" color="secondary" size="small" onClick={(e) => {
                        e.preventDefault();
                        capture();
                    }}
                        className="webcam-btn">Capture</Button>
                }
            </div>
        </div>
    );
};

export default WebcamComponent;