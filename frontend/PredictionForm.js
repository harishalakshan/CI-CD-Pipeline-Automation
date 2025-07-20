import React, { useState } from 'react';

function PredictionForm() {
  const [features, setFeatures] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ features: features.split(',').map(Number) })
    });
    const data = await response.json();
    setPrediction(data.prediction);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={features} onChange={e => setFeatures(e.target.value)} placeholder="Enter features" />
      <button type="submit">Predict</button>
      {prediction && <p>Prediction: {prediction}</p>}
    </form>
  );
}

export default PredictionForm;
