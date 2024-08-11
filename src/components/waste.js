import React, { useRef, useState } from 'react';
import Webcam from "react-webcam";
import Navbar from './Navbar.jsx';
import { Container } from '@mui/material';

export default function Waste() {
    const webcamRef = useRef(null);
    const [image, setImage] = useState(null);
    const [location, setLocation] = useState({ latitude: null, longitude: null, address: null });

    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc);

        // Capture geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });

                // Reverse Geocoding to get address
                const response = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
                );
                const data = await response.json();
                setLocation(prev => ({ ...prev, address: data.display_name }));
            }, (error) => {
                console.error("Geolocation error: ", error);
            });
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    };

    return (
        <div>
            <Navbar />
            <Container>
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width="100%"
                    height="500px"
                />
                <button onClick={capture} style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                    Capture photo with location
                </button>
                {image && (
                    <div>
                        <img src={image} style={{ width: "300px", height: "300px" }} alt="Captured" />
                    </div>
                )}
                {location.latitude && location.longitude && (
                    <div>
                        <p><strong>Latitude:</strong> {location.latitude}</p>
                        <p><strong>Longitude:</strong> {location.longitude}</p>
                        {location.address && <p><strong>Address:</strong> {location.address}</p>}
                    </div>
                )}
            </Container>
        </div>
       );
}