import React, { useState } from 'react';
import "./App.css"


function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const handleAddition = () => {
        setResult(parseFloat(num1) + parseFloat(num2));
    };

    const handleSubtraction = () => {
        setResult(parseFloat(num1) - parseFloat(num2));
    };

    const handleMultiplication = () => {
        setResult(parseFloat(num1) * parseFloat(num2));
    };

    const handleDivision = () => {
        if (parseFloat(num2) === 0) {
            setResult('Cannot divide by zero');
        } else {
            setResult(parseFloat(num1) / parseFloat(num2));
        }
    };

    return (
        <div className="calculator-container"> {/* Apply container class */}
            <h2>Calculator</h2>
            <div className="input-container"> {/* Apply input container class */}
                <input type="number" value={num1} onChange={e => setNum1(e.target.value)} />
                <input type="number" value={num2} onChange={e => setNum2(e.target.value)} />
            </div>
            <div className="button-container"> {/* Apply button container class */}
                <button onClick={handleAddition}>+</button>
                <button onClick={handleSubtraction}>-</button>
                <button onClick={handleMultiplication}>*</button>
                <button onClick={handleDivision}>/</button>
            </div>
            <div>
                Result: <span>{result}</span>
            </div>
        </div>
    );
}

export default Calculator;
