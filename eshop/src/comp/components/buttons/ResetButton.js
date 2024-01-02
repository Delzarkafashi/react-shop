import React from 'react';
import './ResetButton.css'; // Importera din CSS

const ResetButton = ({ handleReset }) => {
    return (
        <div className="reset-button-container">
            <button onClick={handleReset}>Restet</button>
        </div>
    );
};

export default ResetButton;
