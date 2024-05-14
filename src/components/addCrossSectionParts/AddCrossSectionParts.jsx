import './AddCrossSectionParts.css'

import { useState } from "react";

export default function AddCrossSectionParts() {
    const [inputs, setInputs] = useState([{ type: "", pavementWidth: "", typePavement: "", designVelocity: 0, intensities: 0}]);
    const handleAddInput = () => {
        setInputs([...inputs, { type: "", pavementWidth: "", typePavement: "", designVelocity: 0, intensities: 0}]);
    };

    const handleChange = (event, index) => {
        let { name, value } = event.target;
        let onChangeValue = [...inputs];
        onChangeValue[index][name] = value;
        setInputs(onChangeValue);
    };

    const handleDeleteInput = (index) => {
        const newArray = [...inputs];
        newArray.splice(index, 1);
        setInputs(newArray);
    };


    return (
        <div className="csp-params-input-container">
            {inputs.map((csp, index) => (
                <div className="csp-params-inputs" key={index}>
                    <input
                        name="type"
                        type="text"
                        value={csp.type}
                        onChange={(event) => handleChange(event, index)}
                    />
                    <input
                        name="pavementWidth"
                        type="number"
                        step="0.05"
                        value={csp.pavementWidth}
                        onChange={(event) => handleChange(event, index)}
                    />
                    {inputs.length > 1 && (
                        <button onClick={() => handleDeleteInput(index)}>-</button>
                    )}
                    {index === inputs.length - 1 && (
                        <button onClick={() => handleAddInput()}>+</button>
                    )}
                </div>
            ))}

            {/*<div className="body"> {JSON.stringify(inputs)} </div>*/}
        </div>
    );
}


