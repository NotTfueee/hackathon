// src/components/RoboflowComponent.jsx

/* global roboflow */
import React, { useEffect, useState } from 'react';

const RoboflowComponent = () => {
    const [model, setModel] = useState(null);
    const [predictions, setPredictions] = useState([]);

    useEffect(() => {
        roboflow.auth({
            publishable_key: 'rf_Uww9NKieFXW6pmOIPaJgMI4S3Ph2'
        }).load({
            model: 'garbage-classification-3',
            version: 2
        }).then(function (loadedModel) {
            setModel(loadedModel);
            console.log("Model Loaded Successfully");
        });
    }, []);

    const handleDetect = () => {
        const img = document.getElementById("image-to-predict");
        if (model) {
            model.detect(img).then(function (predictions) {
                setPredictions(predictions);
                console.log("Predictions:", predictions);
            });
        }
    };

    return (
        <div>
            <h1>Object Detection with Roboflow.js</h1>
            <img id="image-to-predict" src="path_to_your_image.jpg" alt="Image for Prediction" />
            <button onClick={handleDetect}>Detect Objects</button>

            {predictions.length > 0 && (
                <div>
                    <h2>Predictions:</h2>
                    <ul>
                        {predictions.map((prediction, index) => (
                            <li key={index}>
                                {prediction.class} - {Math.round(prediction.confidence * 100)}%
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default RoboflowComponent;