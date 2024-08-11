// src/components/ImageUpload.jsx

import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [imageData, setImageData] = useState(null);
  const [response, setResponse] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageData(reader.result.replace("data:image/jpeg;base64,", ""));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (imageData) {
      axios({
        method: "POST",
        url: "https://detect.roboflow.com/garbage-classification-3/2",
        params: {
          api_key: "Kx6zLN2PlXOLV62fcaVI"
        },
        data: imageData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then(function(response) {
        setResponse(response.data);
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error.message);
      });
    }
  };

  return (
    <div>
      <h1>Upload an Image for Detection</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={handleSubmit}>Submit</button>

      {response && (
        <div>
          <h2>Prediction Results:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;